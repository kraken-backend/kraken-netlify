const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const profile = {
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
    youtube: "https://youtube.com/@hendrirh"
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
  ]
};

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/api/profile", (_req, res) => {
  res.json(profile);
});

app.listen(port, () => {
  console.log(`Portfolio API running at http://localhost:${port}`);
});
