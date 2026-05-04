// Path: frontend/src/main.ts

import "./style.css";

// ============================================================
// TYPES
// ============================================================

type ProfileResponse = {
  name: string;
  title: string;
  location: string;
  summary: string;
  contact: {
    email: string;
    mobile: string;
    whatsapp: string;
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
    note?: string;
    askEmail?: boolean;
    youtubePreview?: string;
    attachmentUrl?: string;
    attachmentLabel?: string;
  }>;
  aboutMe: string;
  techSupport: Array<{
    category: string;
    skills: string[];
  }>;
  metrics: Array<{
    label: string;
    value: string;
  }>;
  communities: string[];
};

// ============================================================
// I18N — Bilingual strings (ID / EN)
// ============================================================

const i18n = {
  id: {
    langToggle: "English",
    loading: "Memuat portfolio...",
    location: "Bogor, Jawa Barat, Indonesia",
    tagline: "Kraken Team • Portfolio 2026",
    exploreExpertise: "Jelajahi Keahlian",
    blockchainEngineer: "Profil Blockchain Engineer",
    web3Developer: "Profil Web3 Developer",
    fintechEngineer: "Profil Fintech Engineer",
    latestInsight: "Tulisan Terbaru",
    aboutMe: "Tentang Saya",
    keyHighlights: "Highlight Utama",
    featuredProjects: "Proyek Unggulan",
    techSupport: "Dukungan Teknologi",
    devCommunities: "Komunitas Developer",
    openProject: "Buka proyek",
    askPersonally: "Tanya langsung",
    youtubePreview: "Lihat preview YouTube",
    downloadCv: "Unduh CV Saya (PDF)",
    downloadPaper: "Unduh Paper (PDF)",
    cvNote: "Versi lengkap tersedia setelah diskusi",
    blogKdec: "K-DEC: Teori Ekonomi Deterministik yang Saya Ciptakan untuk KVP Blockchain",
    blogKvp: "Bagaimana Saya Membangun KVP Protocol: Perjalanan Arsitektur Layer-1 (2015-2026)",
    blogFindigi: "Mengapa Saya Membangun Findigi dan KVP: Melampaui On-Ramp, Off-Ramp, dan Ketergantungan EVM",
  },
  en: {
    langToggle: "Bahasa Indonesia",
    loading: "Loading portfolio...",
    location: "Bogor, West Java, Indonesia",
    tagline: "Kraken Team • Portfolio 2026",
    exploreExpertise: "Explore Expertise",
    blockchainEngineer: "Blockchain Engineer Profile",
    web3Developer: "Web3 Developer Profile",
    fintechEngineer: "Fintech Engineer Profile",
    latestInsight: "Latest Insight",
    aboutMe: "About Me",
    keyHighlights: "Key Highlights",
    featuredProjects: "Featured Projects",
    techSupport: "Tech Support",
    devCommunities: "Developer Communities",
    openProject: "Open project",
    askPersonally: "Ask personally",
    youtubePreview: "Watch YouTube preview",
    downloadCv: "Download My CV (PDF)",
    downloadPaper: "Download Paper (PDF)",
    cvNote: "Full version available after discussion",
    blogKdec: "K-DEC: Deterministic Economic Theory I Created for KVP Blockchain",
    blogKvp: "How I Built KVP Protocol: Layer-1 Architecture Journey (2015-2026)",
    blogFindigi: "Why I Built Findigi and KVP: Beyond On-Ramp, Off-Ramp, and EVM Dependency",
  },
};

type Lang = "id" | "en";
let currentLang: Lang = "id";

// ============================================================
// FALLBACK PROFILE DATA
// ============================================================

const fallbackProfile: ProfileResponse = {
  name: "Hendri Rahmat Hendrianto",
  title: "Full-Stack Developer (Backend) | AI Agent & Blockchain Engineer",
  location: "Bogor, West Java, Indonesia",
  summary:
    "10+ years specialized in blockchain protocol engineering, AI infrastructure, and fintech. Founder of PT Antareja Nusantara Resources, building KVP Protocol (Krakenum Chain), FinDIGI, KrakenWorld Online, and Pevi AI Assistant.",
  aboutMe:
    "Full-Stack Developer and AI Engineer with 10+ years of specialized experience building production-grade systems across blockchain protocol engineering, AI infrastructure, and fintech. Founder of PT Antareja Nusantara Resources building KVP Protocol (Krakenum Chain) — a Layer-1 blockchain originally in Go and migrated to Rust — with deep experience in arbitrage bots, DEX integration, and multi-chain payment infrastructure. Across 20+ years in technical leadership, I currently lead FinDIGI, KrakenWorld Online, KVP Protocol Phase 2, and Pevi — my own private AI assistant built to support my engineering workflow without dependency on any external AI platform.",
  contact: {
    email: "rahmathst99@gmail.com",
    mobile: "082167711689",
    whatsapp: "6282167711689",
    linkedin: "https://linkedin.com/in/hendri-rahmat-hendrianto-6897b22a",
    github: "https://github.com/kraken-backend",
    youtube: "https://youtube.com/@hendrirh",
    discord: "hendrirh",
  },
  highlights: [
    "Built Layer-1 KVP Protocol (Krakenum Chain) with Go then migrated to Rust — deterministic state machine and protocol-level tokenomics.",
    "Published K-DEC (Krakenum Deterministic Economic Continuum) — an independent research paper on deterministic economic theory for blockchain.",
    "Developed FinDIGI hybrid Web2/Web3 platform with 133 REST endpoints and integrated FinChat AI assistant.",
    "Built Pevi — a private AI assistant (Next.js + OpenRouter) to support personal engineering workflow, fully independent from external AI platforms.",
    "Published multi-chain SDK supporting 8+ networks and 50+ APIs for real-world integrations.",
    "Delivered smart contract and payment systems handling high-volume transactions and automated reconciliation.",
  ],
  projects: [
    {
      name: "KVP Protocol (Krakenum Chain)",
      period: "2015 - Present",
      description:
        "Self-built Layer-1 blockchain with fixed supply economics (1B KVC), POSA consensus, leader/follower nodes, P2P synchronization, and CLI toolchain. All monetary rules enforced at protocol level — no EVM smart contracts.",
      url: "https://github.com/kraken-backend/kvp-blockchain",
      note: "Public repository represents deprecated architecture (2015-2024). Current KVP architecture from 2024 onward is private for IP and security protection.",
      askEmail: true,
    },
    {
      name: "K-DEC — Krakenum Deterministic Economic Continuum",
      period: "2026",
      description:
        "Independent research paper formalizing the relationship between ledger finality and economic finality in blockchain systems. Covers deterministic finality, policy commitment traceability, validator participation, economic gap diagnostics, and operational observability across 122 pages.",
      url: "/k-dec-theory.html",
      attachmentUrl: "/attachments/K-DEC_Paper_260425.pdf",
      attachmentLabel: "Download Paper (PDF)",
    },
    {
      name: "FinDIGI + FinChat",
      period: "2026 - Present",
      description:
        "Hybrid Web2/Web3 fintech product with AI assistant (FinChat), maker-checker flow, cross-chain transfers, FinVault custodial/non-custodial wallets, and full OpenAPI modules across 133 endpoints.",
      url: "https://findigi.vercel.app",
    },
    {
      name: "Pevi — Private AI Assistant",
      period: "2026 - Present",
      description:
        "Self-built personal AI assistant (Next.js + OpenRouter API) with RAG document intelligence, vision support, artifact panel, file generation (DOCX/XLSX/PPTX), and multi-model fallback strategy. Built to support personal engineering workflow without dependency on any external AI platform.",
      youtubePreview: "https://youtu.be/MAm8IYvQPJY?si=xXJAeQ5DdYEn4MHC",
      note: "Currently private/local. Available for demo on request.",
      askEmail: true,
    },
    {
      name: "anantla_sdk",
      period: "2025 - Dec 2025",
      description:
        "Production NPM SDK for multi-chain wallet and payment integration with TypeScript support across 8+ blockchain networks.",
      url: "https://www.npmjs.com/package/anantla_sdk",
    },
    {
      name: "KrakenWorld Online",
      period: "Blueprint Stage",
      description:
        "Fully on-chain 3D MMORPG concept with on-chain governance, in-game DEX economy, 3 civilization tokens (VEL/ELX/KRT), and KVP Protocol settlement bridge.",
    },
  ],
  techSupport: [
    {
      category: "Fintech & Product",
      skills: ["Fintech Web3+Web2", "Payment Gateway Integration", "Maker-Checker Workflow", "USDC Settlement"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "TypeScript", "JavaScript", "Rust", "Go (Golang)", "Python", "REST API", "WebSockets", "gRPC"],
    },
    {
      category: "Frontend",
      skills: ["React", "NextJS", "Tailwind CSS", "Vercel", "UI/UX Integration"],
    },
    {
      category: "Blockchain",
      skills: ["Solidity", "Hardhat", "Ethers.js", "Ethereum", "Polygon", "Neon", "XRPL", "Cardano", "Multi-chain Integration"],
    },
    {
      category: "Database",
      skills: ["PostgreSQL", "Redis", "NeonDB", "RocksDB", "MongoDB", "SQLite"],
    },
    {
      category: "Infra & DevOps",
      skills: ["Docker", "AWS", "Railway", "GitHub Actions", "CI/CD", "Monitoring"],
    },
    {
      category: "AI & Agent",
      skills: ["Groq API", "OpenRouter API", "Llama LLM", "AI Agent Development", "Prompt Engineering", "Intent Routing", "RAG"],
    },
  ],
  metrics: [
    { label: "Specialized Experience", value: "10+ Years" },
    { label: "Total Leadership Experience", value: "20+ Years" },
    { label: "REST API Endpoints Delivered", value: "133" },
    { label: "Payment Transactions Processed", value: "50,000+" },
  ],
  communities: [
    "Solana Developers Community",
    "Polygon Official Community",
    "Solana Official Community",
    "Ethereum Official Community",
    "Pi Network Community",
  ],
};

// ============================================================
// API
// ============================================================

const apiBase = (import.meta.env.VITE_API_URL as string | undefined)?.trim();

async function loadProfile() {
  const app = document.querySelector<HTMLDivElement>("#app");
  if (!app) return;

  app.innerHTML = `<main class="page"><p class="loading">${i18n[currentLang].loading}</p></main>`;

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

// ============================================================
// RENDER
// ============================================================

function renderPortfolio(data: ProfileResponse): string {
  const t = i18n[currentLang];

  return `
    <main class="page">
      <section class="hero">
        <div class="controls-row">
          <button id="lang-toggle" class="ctrl-btn" type="button" aria-label="Toggle language">${t.langToggle}</button>
          <button id="theme-toggle" class="ctrl-btn" type="button" aria-label="Toggle light and dark mode">Light Mode</button>
        </div>
        <div class="hero-top">
          <img src="/1728869118367.jpeg" alt="Hendri profile photo" class="profile-photo" />
          <div class="brand-row">
            <img src="/Kraken Logo.png" alt="Kraken Team Logo" class="brand-logo" />
            <p class="tag">${t.tagline}</p>
          </div>
        </div>
        <h1>${data.name}</h1>
        <h2>${data.title}</h2>
        <p class="location">${t.location}</p>
        <p class="summary">${currentLang === "id"
          ? "10+ tahun spesialisasi di blockchain protocol engineering, AI infrastructure, dan fintech. Founder PT Antareja Nusantara Resources — membangun KVP Protocol (Krakenum Chain), FinDIGI, KrakenWorld Online, dan Pevi AI Assistant."
          : data.summary}</p>
        <div class="links">
          <a href="${data.contact.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="${data.contact.github}" target="_blank" rel="noreferrer">GitHub</a>
          <a href="${data.contact.youtube}" target="_blank" rel="noreferrer">YouTube</a>
          <a href="https://discord.com/" target="_blank" rel="noreferrer">Discord: ${data.contact.discord}</a>
          <a href="mailto:${data.contact.email}">Email</a>
          <a href="https://wa.me/${data.contact.whatsapp}" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
        <div class="cv-attachment">
          <a href="/attachments/Hendri_Rahmat_CV_Updated200426-IT01.pdf" target="_blank" rel="noreferrer" class="cv-link">
            📄 ${t.downloadCv}
          </a>
          <p class="cv-note">${t.cvNote}</p>
        </div>
        <div class="metrics">
          ${data.metrics
            .map(
              (metric) => `
            <div class="metric-item">
              <p class="metric-value">${metric.value}</p>
              <p class="metric-label">${metric.label}</p>
            </div>
          `
            )
            .join("")}
        </div>
      </section>

      <section class="card media-grid">
        <article class="media-card">
          <img src="/Findigi Banner.png" alt="FinDIGI Platform Banner" />
          <div class="media-text">
            <h3>FinDIGI Platform</h3>
            <p>${currentLang === "id"
              ? "Platform fintech hybrid Web2/Web3 production dengan pengalaman developer berbasis AI."
              : "Production hybrid Web2/Web3 fintech platform with AI-driven developer experience."}</p>
          </div>
        </article>
        <article class="media-card">
          <img src="/FindigiThumbnail.png" alt="FinDIGI Thumbnail" />
          <div class="media-text">
            <h3>${currentLang === "id" ? "Fokus AI + Blockchain" : "AI + Blockchain Focus"}</h3>
            <p>${currentLang === "id"
              ? "Arah portfolio selaras dengan AI Agent engineering dan infrastruktur multi-chain."
              : "Portfolio direction aligned to AI Agent engineering and multi-chain infrastructure."}</p>
          </div>
        </article>
      </section>

      <section class="card">
        <h3>${t.exploreExpertise}</h3>
        <div class="seo-links">
          <a href="/blockchain-engineer.html">${t.blockchainEngineer}</a>
          <a href="/web3-developer.html">${t.web3Developer}</a>
          <a href="/fintech-engineer.html">${t.fintechEngineer}</a>
        </div>
      </section>

      <section class="card">
        <h3>${t.latestInsight}</h3>
        <div class="seo-links">
          <a href="/k-dec-theory.html">${t.blogKdec}</a>
          <a href="/kvp-layer1-architecture-journey.html">${t.blogKvp}</a>
          <a href="/why-i-built-findigi-kvp.html">${t.blogFindigi}</a>
          <a href="/pevi-ai-assistant.html">${currentLang === "id" ? "Pevi: AI Assistant Pribadi yang Saya Bangun Sendiri" : "Pevi: The Private AI Assistant I Built for Myself"}</a>
        </div>
      </section>

      <section class="card">
        <h3>${t.aboutMe}</h3>
        <p class="about-me">${currentLang === "id"
          ? "Full-Stack Developer dan AI Engineer dengan 10+ tahun pengalaman spesialisasi membangun sistem production-grade di bidang blockchain protocol engineering, AI infrastructure, dan fintech. Founder PT Antareja Nusantara Resources yang membangun KVP Protocol (Krakenum Chain) — Layer-1 blockchain yang awalnya dibangun di Go dan dimigrasi ke Rust — dengan pengalaman mendalam di arbitrage bot, DEX integration, dan multi-chain payment infrastructure. Selama 20+ tahun di technical leadership, saya saat ini memimpin FinDIGI, KrakenWorld Online, KVP Protocol Phase 2, dan Pevi — AI assistant pribadi yang saya bangun sendiri untuk mendukung workflow engineering tanpa ketergantungan pada platform AI eksternal manapun."
          : data.aboutMe}</p>
      </section>

      <section class="card">
        <h3>${t.keyHighlights}</h3>
        <ul>
          ${(currentLang === "id"
            ? [
                "Membangun Layer-1 KVP Protocol (Krakenum Chain) dengan Go lalu migrasi ke Rust — deterministic state machine dan tokenomics di level protokol.",
                "Menerbitkan K-DEC (Krakenum Deterministic Economic Continuum) — research paper independen tentang teori ekonomi deterministik untuk blockchain.",
                "Mengembangkan platform hybrid FinDIGI Web2/Web3 dengan 133 REST endpoint dan AI assistant FinChat terintegrasi.",
                "Membangun Pevi — AI assistant pribadi (Next.js + OpenRouter) untuk mendukung workflow engineering, sepenuhnya independen dari platform AI eksternal.",
                "Menerbitkan multi-chain SDK yang mendukung 8+ jaringan dan 50+ API untuk integrasi dunia nyata.",
                "Menyerahkan sistem smart contract dan payment yang menangani transaksi volume tinggi dan rekonsiliasi otomatis.",
              ]
            : data.highlights
          ).map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="card">
        <h3>${t.featuredProjects}</h3>
        <div class="projects">
          ${data.projects
            .map(
              (project) => `
            <article class="project">
              <h4>${project.name}</h4>
              <p class="period">${project.period}</p>
              <p>${project.description}</p>
              ${project.note ? `<p class="project-note">${project.note}</p>` : ""}
              ${project.url ? `<a href="${project.url}" target="_blank" rel="noreferrer">${t.openProject}</a>` : ""}
              ${project.attachmentUrl ? `<a href="${project.attachmentUrl}" target="_blank" rel="noreferrer" class="attachment-link">📄 ${t.downloadPaper}</a>` : ""}
              ${project.youtubePreview ? `<a href="${project.youtubePreview}" target="_blank" rel="noreferrer" class="yt-link">▶ ${t.youtubePreview}</a>` : ""}
              ${project.askEmail ? `<a href="mailto:${data.contact.email}?subject=${encodeURIComponent(project.name + " Inquiry")}" class="ask-link">${t.askPersonally}</a>` : ""}
            </article>
          `
            )
            .join("")}
        </div>
      </section>

      <section class="card">
        <h3>${t.techSupport}</h3>
        <div class="skill-groups">
          ${data.techSupport
            .map(
              (group) => `
            <details class="skill-group">
              <summary>${group.category}</summary>
              <div class="skills">
                ${group.skills.map((skill) => `<span>${skill}</span>`).join("")}
              </div>
            </details>
          `
            )
            .join("")}
        </div>
        <div class="tech-logos">
          <img src="/Cardano.png" alt="Cardano" />
          <img src="/XRLP.png" alt="XRPL" />
          <img src="/solidity ether.png" alt="Solidity and Ethereum" />
          <img src="/web3-2.png" alt="Web3" />
        </div>
      </section>

      <section class="card">
        <h3>${t.devCommunities}</h3>
        <ul>
          ${data.communities.map((community) => `<li>${community}</li>`).join("")}
        </ul>
      </section>
    </main>
  `;
}

// ============================================================
// THEME TOGGLE
// ============================================================

/**
 * Apply theme to body
 */
function applyTheme(theme: "dark" | "light") {
  document.body.classList.toggle("theme-light", theme === "light");
}

/**
 * Setup dark/light theme toggle button
 */
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

// ============================================================
// LANGUAGE TOGGLE
// ============================================================

/**
 * Setup bilingual language toggle button (ID / EN)
 */
function setupLangToggle() {
  const saved = localStorage.getItem("portfolio-lang");
  currentLang = saved === "en" ? "en" : "id";

  const button = document.querySelector<HTMLButtonElement>("#lang-toggle");
  if (!button) return;

  button.textContent = i18n[currentLang].langToggle;

  button.addEventListener("click", async () => {
    currentLang = currentLang === "id" ? "en" : "id";
    localStorage.setItem("portfolio-lang", currentLang);
    await loadProfile();
    setupThemeToggle();
    setupLangToggle();
  });
}

// ============================================================
// INIT
// ============================================================

void loadProfile().then(() => {
  setupThemeToggle();
  setupLangToggle();
});
