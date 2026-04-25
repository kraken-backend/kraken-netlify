import "./style.css";

type ProfileResponse = {
  name: string;
  title: string;
  location: string;
  summary: string;
  contact: {
    email: string;
    mobile: string;
    linkedin: string;
    github: string;
    youtube: string;
  };
  highlights: string[];
  projects: Array<{
    name: string;
    period: string;
    description: string;
    url?: string;
  }>;
  skills: string[];
};

const apiBase = (import.meta.env.VITE_API_URL as string | undefined)?.trim() || "http://localhost:8080";

async function loadProfile() {
  const app = document.querySelector<HTMLDivElement>("#app");
  if (!app) return;

  app.innerHTML = `<main class="page"><p class="loading">Loading portfolio...</p></main>`;

  try {
    const response = await fetch(`${apiBase}/api/profile`);
    if (!response.ok) throw new Error("Failed to load profile");
    const data = (await response.json()) as ProfileResponse;
    app.innerHTML = renderPortfolio(data);
  } catch (_error) {
    app.innerHTML = `<main class="page"><p class="loading">Gagal load data dari backend. Jalankan backend di port 8080 atau set VITE_API_URL.</p></main>`;
  }
}

function renderPortfolio(data: ProfileResponse) {
  return `
    <main class="page">
      <section class="hero">
        <img src="/Kraken Logo.png" alt="Kraken Team Logo" class="brand-logo" />
        <p class="tag">Kraken Team • Portfolio 2026</p>
        <h1>${data.name}</h1>
        <h2>${data.title}</h2>
        <p class="location">${data.location}</p>
        <p class="summary">${data.summary}</p>
        <div class="links">
          <a href="${data.contact.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="${data.contact.github}" target="_blank" rel="noreferrer">GitHub</a>
          <a href="${data.contact.youtube}" target="_blank" rel="noreferrer">YouTube</a>
          <a href="mailto:${data.contact.email}">Email</a>
        </div>
      </section>

      <section class="card media-grid">
        <article class="media-card">
          <img src="/Findigi Banner.png" alt="FinDIGI Platform Banner" />
          <div class="media-text">
            <h3>FinDIGI Platform</h3>
            <p>Production hybrid Web2/Web3 fintech platform with AI-driven developer experience.</p>
          </div>
        </article>
        <article class="media-card">
          <img src="/FindigiThumbnail.png" alt="FinDIGI Thumbnail" />
          <div class="media-text">
            <h3>AI + Blockchain Focus</h3>
            <p>Portfolio direction aligned to AI Agent engineering and multi-chain infrastructure.</p>
          </div>
        </article>
      </section>

      <section class="card">
        <h3>Key Highlights</h3>
        <ul>
          ${data.highlights.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="card">
        <h3>Featured Projects</h3>
        <div class="projects">
          ${data.projects
            .map(
              (project) => `
            <article class="project">
              <h4>${project.name}</h4>
              <p class="period">${project.period}</p>
              <p>${project.description}</p>
              ${project.url ? `<a href="${project.url}" target="_blank" rel="noreferrer">Open project</a>` : ""}
            </article>
          `
            )
            .join("")}
        </div>
      </section>

      <section class="card">
        <h3>Core Skills</h3>
        <div class="skills">
          ${data.skills.map((skill) => `<span>${skill}</span>`).join("")}
        </div>
        <div class="tech-logos">
          <img src="/Cardano.png" alt="Cardano" />
          <img src="/XRLP.png" alt="XRPL" />
          <img src="/solidity ether.png" alt="Solidity and Ethereum" />
          <img src="/web3-2.png" alt="Web3" />
        </div>
      </section>

      <footer class="footer">
        <p>Mobile: ${data.contact.mobile}</p>
        <p>Built for Kraken Team profile refresh.</p>
      </footer>
    </main>
  `;
}

void loadProfile();
