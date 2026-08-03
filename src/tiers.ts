// src/tiers.ts
// Single source of truth for Whop tier links, prices, and copy.
// Both Home.tsx and Faq.tsx import from here so they can never drift.
//
// When you change a URL or price, change it here and both pages update.

export type Tier = {
  id: "free" | "early" | "standard" | "pro";
  name: string;
  price: string;       // display price, e.g. "$49" or "Free"
  cadence: string;     // display cadence, e.g. "/ month" or "" (free)
  blurb: string;       // one-line description
  features: string[];  // 3–5 bullets
  url: string | null;  // null = coming soon
  status: "active" | "coming_soon";
  highlight?: boolean; // marks the recommended tier visually
};

export const TIERS: Tier[] = [
  {
    id: "free",
    name: "Free",
    price: "Free",
    cadence: "",
    blurb: "Public Discord access — chat, questions, community.",
    features: [
      "Public Discord server",
      "Community chat access",
      "Read-only market context",
    ],
    url: "https://whop.com/checkout/plan_pU0SrLRBZmq1t",
    status: "active",
  },
  {
    id: "early",
    name: "Early Access",
    price: "$49",
    cadence: "/ month",
    blurb: "AI-assisted trade levels and live context for ES futures.",
    features: [
      "AI trade levels · entry / stop / targets",
      "ES futures focus (S&P 500)",
      "Live Discord trade context",
      "Order flow notes",
      "Community access",
    ],
    url: "https://whop.com/newageflowai/early-access-55/",
    status: "active",
    highlight: true,
  },
  {
    id: "standard",
    name: "Standard",
    price: "$79",
    cadence: "/ month",
    blurb: "Everything in Early Access plus NQ coverage.",
    features: [
      "Everything in Early Access",
      "NQ futures (Nasdaq 100) signals",
      "Deeper trade breakdowns",
      "Custom execution models",
      "Priority Discord access",
    ],
    url: "https://whop.com/newageflowai/standard-25/",
    status: "coming_soon",
  },
  {
    id: "pro",
    name: "Pro",
    price: "$99",
    cadence: "/ month",
    blurb: "Full access — direct desk support and bespoke setups.",
    features: [
      "Everything in Standard",
      "Direct line to the desk",
      "Bespoke execution setups",
      "ES + NQ multi-timeframe analysis",
      "Beta access to new tools",
    ],
    url: "https://whop.com/newageflowai/pro-0b-9291/",
    status: "coming_soon",
  },
];

export function getTier(id: Tier["id"]): Tier {
  const t = TIERS.find((x) => x.id === id);
  if (!t) throw new Error(`Unknown tier: ${id}`);
  return t;
}
