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
    discord: string;
  };
  highlights: string[];
  projects: Array<{
    name: string;
    period: string;
    description: string;
    url?: string;
  }>;
  skills: string[];
  communities: string[];
};

const apiBase = (import.meta.env.VITE_API_URL as string | undefined)?.trim();

const fallbackProfile: ProfileResponse = {
  name: "Hendri Rahmat Hendrianto",
  title: "Full-Stack Developer (Backend) | AI Agent & Blockchain Engineer",
  location: "Bogor, West Java, Indonesia",
  summary:
    "10+ years specialized in blockchain protocol engineering, AI infrastructure, and fintech. Founder of PT Antareja Nusantara Resources, building KVP Protocol (Krakenum Chain), FinDIGI, and KrakenWorld Online.",
  contact: {
    email: "rahmathst99@gmail.com",
    mobile: "082167711689",
    linkedin: "https://linkedin.com/in/hendri-rahmat-hendrianto-6897b22a",
    github: "https://github.com/kraken-backend",
    youtube: "https://youtube.com/@hendrirh",
    discord: "hendrirh"
  },
  highlights: [
    "Built Layer-1 KVP Protocol with Go then migrated to Rust, deterministic state machine and protocol-level tokenomics.",
    "Developed FinDIGI hybrid Web2/Web3 platform with 133 REST endpoints and integrated FinChat AI assistant.",
    "Published multi-chain SDK supporting 8+ networks and 50+ APIs for real-world integrations.",
    "Delivered smart contract and payment systems handling high-volume transactions and automated reconciliation."
  ],
  projects: [
    {
      name: "KVP Protocol (Krakenum Chain)",
      period: "2015 - Present",
      description:
        "Self-built Layer-1 blockchain with fixed supply economics, leader/follower nodes, P2P synchronization, and CLI toolchain.",
      url: "https://github.com/kraken-backend/kvp-blockchain"
    },
    {
      name: "FinDIGI + FinChat",
      period: "2026 - Present",
      description:
        "Hybrid Web2/Web3 fintech product with AI assistant, maker-checker flow, cross-chain transfers, and full OpenAPI modules.",
      url: "https://findigi.vercel.app"
    },
    {
      name: "anantla_sdk",
      period: "2025 - Present",
      description:
        "Production NPM SDK for multi-chain wallet and payment integration with TypeScript support.",
      url: "https://www.npmjs.com/package/anantla_sdk"
    },
    {
      name: "KrakenWorld Online",
      period: "Blueprint Stage",
      description:
        "Fully on-chain 3D MMORPG concept with governance, in-game DEX economy, and KVP settlement bridge."
    }
  ],
  skills: [
    "Rust",
    "Go (Golang)",
    "Node.js",
    "TypeScript",
    "Solidity",
    "Groq API",
    "Llama LLM",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS",
    "Ethers.js",
    "WebSockets",
    "gRPC"
  ],
  communities: [
    "Solana Developers Community",
    "Polygon Official Community",
    "Solana Official Community",
    "Ethereum Official Community",
    "Pi Network Community"
  ]
};

async function loadProfile() {
  const app = document.querySelector<HTMLDivElement>("#app");
  if (!app) return;

  app.innerHTML = `<main class="page"><p class="loading">Loading portfolio...</p></main>`;

  if (!apiBase) {
    app.innerHTML = renderPortfolio(fallbackProfile);
    return;
  }

  try {
    const response = await fetch(`${apiBase}/api/profile`);
    if (!response.ok) throw new Error("Failed to load profile");
    const data = (await response.json()) as ProfileResponse;
    app.innerHTML = renderPortfolio(data);
  } catch (_error) {
    app.innerHTML = renderPortfolio(fallbackProfile);
  }
}

function renderPortfolio(data: ProfileResponse) {
  return `
    <main class="page">
      <section class="hero">
        <img src="/1728869118367.jpeg" alt="Hendri profile photo" class="profile-photo" />
        <button id="theme-toggle" class="theme-toggle" type="button" aria-label="Toggle light and dark mode">Light Mode</button>
        <div class="brand-row">
          <img src="/Kraken Logo.png" alt="Kraken Team Logo" class="brand-logo" />
          <p class="tag">Kraken Team • Portfolio 2026</p>
        </div>
        <h1>${data.name}</h1>
        <h2>${data.title}</h2>
        <p class="location">${data.location}</p>
        <p class="summary">${data.summary}</p>
        <div class="links">
          <a href="${data.contact.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="${data.contact.github}" target="_blank" rel="noreferrer">GitHub</a>
          <a href="${data.contact.youtube}" target="_blank" rel="noreferrer">YouTube</a>
          <a href="https://discord.com/" target="_blank" rel="noreferrer">Discord: ${data.contact.discord}</a>
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

      <section class="card">
        <h3>Developer Communities</h3>
        <ul>
          ${data.communities.map((community) => `<li>${community}</li>`).join("")}
        </ul>
      </section>

      <footer class="footer">
        <p>Mobile: ${data.contact.mobile}</p>
        <p>Built for Kraken Team profile refresh.</p>
      </footer>
    </main>
  `;
}

function applyTheme(theme: "dark" | "light") {
  document.body.classList.toggle("theme-light", theme === "light");
}

function setupThemeToggle() {
  const saved = localStorage.getItem("portfolio-theme");
  const initialTheme: "dark" | "light" = saved === "light" ? "light" : "dark";
  applyTheme(initialTheme);

  const button = document.querySelector<HTMLButtonElement>("#theme-toggle");
  if (!button) return;

  const setButtonLabel = () => {
    button.textContent = document.body.classList.contains("theme-light") ? "Dark Mode" : "Light Mode";
  };
  setButtonLabel();

  button.addEventListener("click", () => {
    const nextTheme: "dark" | "light" = document.body.classList.contains("theme-light") ? "dark" : "light";
    applyTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    setButtonLabel();
  });
}

void loadProfile().then(() => {
  setupThemeToggle();
});
