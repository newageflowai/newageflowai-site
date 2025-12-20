import React from "react";

// Self-contained App.tsx (no extra dependencies)
// This version removes: react-helmet-async, framer-motion, shadcn/ui, lucide-react.
// It will build on a fresh Vite + React + TS project with zero additional installs.

const LOGO_SRC = "/newage-flow-ai-logo.png";

const DISCORD_INVITE_URL = "https://discord.gg/YOUR_INVITE";
const WHOP_URL = "https://whop.com/YOUR_PAGE";

const features = [
  {
    title: "AI Trade Signals",
    desc: "Bias, entry, stop, and T1–T3 targets—delivered in a clean format for fast execution.",
  },
  {
    title: "Order-Flow Context",
    desc: "Concise reasoning: liquidity, delta shifts, VWAP behavior, and structure.",
  },
  {
    title: "Fast Alerts",
    desc: "Discord ping roles for high-confidence setups during your chosen session windows.",
  },
  {
    title: "Trade Recaps",
    desc: "Quick debriefs so members learn the playbook—not just the entry.",
  },
  {
    title: "Risk-First",
    desc: "Stops and invalidation are part of every idea. No hype—just structured plans.",
  },
];

const plans = [
  {
    name: "Early Access",
    price: "$49",
    cadence: "/month",
    badge: "Limited",
    bullets: ["Access to #ai-trade-signals", "Concise reasoning", "Trade recaps", "Community chat"],
    featured: false,
  },
  {
    name: "Standard",
    price: "$79",
    cadence: "/month",
    badge: "Most Popular",
    bullets: [
      "Everything in Early Access",
      "Priority alert pings",
      "Expanded analysis posts",
      "Weekly review thread",
    ],
    featured: true,
  },
  {
    name: "Pro",
    price: "$99",
    cadence: "/month",
    badge: "Best Value",
    bullets: ["Everything in Standard", "More examples + recaps", "Group Q&A sessions"],
    featured: false,
  },
] as const;

const faqs = [
  {
    q: "Is this financial advice?",
    a: "No. NewAge Flow AI is educational market analysis. You are responsible for your own trades.",
  },
  {
    q: "What markets do you cover?",
    a: "Designed for futures traders (e.g., ES/NQ).",
  },
  {
    q: "How are signals delivered?",
    a: "Signals are posted in Discord using a consistent template (bias, entry, stop, targets).",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes—monthly subscription. Cancel through your payment provider.",
  },
];

const screenshotCards = [
  {
    title: "Discord Signal Template",
    desc: "Clean format: bias, entry, stop, and T1–T3 targets.",
    src: "/screens/signal-template.png",
  },
  {
    title: "Order-Flow Context",
    desc: "Concise reasoning: liquidity, delta shifts, VWAP behavior.",
    src: "/screens/orderflow-context.png",
  },
  {
    title: "Bookmap-Style Visuals",
    desc: "Heatmap + absorption zones when available.",
    src: "/screens/bookmap-visual.png",
  },
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>;
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cx("card", className)}>{children}</div>;
}

function Button({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      className={cx("btn", variant === "secondary" && "btnSecondary")}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

// Minimal “test cases” / invariants (no test runner required)
function assertConfig() {
  if (!DISCORD_INVITE_URL.startsWith("http")) throw new Error("DISCORD_INVITE_URL must be a valid URL");
  if (!WHOP_URL.startsWith("http")) throw new Error("WHOP_URL must be a valid URL");
  if (!LOGO_SRC.startsWith("/")) throw new Error("LOGO_SRC must be a public absolute path like '/logo.png'");
}

export default function App() {
  React.useEffect(() => {
    // run once
    assertConfig();
    // SEO without helmet
    document.title = "NewAge Flow AI — AI Order Flow Signals";
    const metaDescName = "description";
    const desc =
      "NewAge Flow AI delivers educational AI-driven order flow trade ideas to Discord: bias, entry, stop, and targets with concise reasoning.";
    let meta = document.querySelector(`meta[name='${metaDescName}']`) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = metaDescName;
      document.head.appendChild(meta);
    }
    meta.content = desc;
  }, []);

  return (
    <div className="page">
      <style>{css}</style>

      <header className="nav">
        <div className="container navInner">
          <div className="brand">
            <img className="logo" src={LOGO_SRC} alt="NewAge Flow AI" onError={(e) => ((e.currentTarget.style.display = "none"))} />
            <div>
              <div className="brandName">NewAge Flow AI</div>
              <div className="brandSub">AI Order Flow Intelligence</div>
            </div>
          </div>

          <nav className="links">
            <a href="#features">Features</a>
            <a href="#visuals">Visuals</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="navCtas">
            <Button variant="secondary" href={DISCORD_INVITE_URL}>Join Discord</Button>
            <Button href={WHOP_URL}>Get Access</Button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container heroGrid">
            <div>
              <div className="pillRow">
                <Pill>Next-Gen Signals</Pill>
                <Pill>Order Flow + AI</Pill>
                <Pill>Risk-First</Pill>
              </div>

              <h1 className="h1">
                Next-Generation <span className="muted">AI Order Flow</span> Intelligence
              </h1>
              <p className="lead">
                Clean, actionable trade ideas posted to Discord: bias, entry, invalidation, and targets—paired with concise order-flow context.
              </p>

              <div className="ctaRow">
                <Button href={WHOP_URL}>Start Membership</Button>
                <Button variant="secondary" href={DISCORD_INVITE_URL}>Preview Discord</Button>
              </div>

              <p className="fineprint">⚠️ Educational analysis only. Not financial advice. Trading futures involves substantial risk.</p>
            </div>

            <Card className="signalCard">
              <div className="signalTop">
                <div className="signalTitle">📈 NEWAGE FLOW AI SIGNAL — ES</div>
                <div className="signalTag">NY Session</div>
              </div>
              <div className="signalGrid">
                <div>
                  <div className="label">Bias</div>
                  <div className="value">LONG</div>
                </div>
                <div>
                  <div className="label">Entry</div>
                  <div className="value">6848.25</div>
                </div>
                <div>
                  <div className="label">Stop</div>
                  <div className="value">6842.50</div>
                </div>
                <div>
                  <div className="label">Targets</div>
                  <div className="value">T1 6853 • T2 6856.5 • T3 6861.75</div>
                </div>
              </div>
              <div className="divider" />
              <div>
                <div className="label">🧠 AI Reasoning</div>
                <ul className="list">
                  <li>Liquidity absorption near 6845</li>
                  <li>Delta shift bullish + VWAP reclaim</li>
                  <li>Structure supports continuation</li>
                </ul>
              </div>
              <div className="signalFoot">⚠️ Educational purposes only</div>
            </Card>
          </div>
        </section>

        <section id="visuals" className="section">
          <div className="container">
            <h2 className="h2">See it in action</h2>
            <p className="sub">Add screenshots to <code>/public/screens</code> with the filenames below.</p>

            <div className="grid3">
              {screenshotCards.map((s) => (
                <Card key={s.title}>
                  <div className="thumb">
                    <img src={s.src} alt={s.title} onError={(e) => ((e.currentTarget.style.opacity = "0"))} />
                    <div className="thumbOverlay">
                      <div className="thumbTitle">{s.title}</div>
                      <div className="thumbDesc">{s.desc}</div>
                      <div className="thumbHint">{s.src}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="container">
            <h2 className="h2">What you get</h2>
            <p className="sub">Built for futures traders who want structured ideas with clear invalidation—not hype.</p>

            <div className="grid3">
              {features.map((f) => (
                <Card key={f.title}>
                  <div className="cardTitle">{f.title}</div>
                  <div className="cardDesc">{f.desc}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section">
          <div className="container">
            <h2 className="h2">Pricing</h2>
            <p className="sub">Simple monthly memberships. Cancel anytime.</p>

            <div className="grid3">
              {plans.map((p) => (
                <Card key={p.name} className={cx(p.featured && "featured")}
                >
                  <div className="planTop">
                    <div className="planName">{p.name}</div>
                    <div className={cx("badge", p.featured && "badgeHot")}>{p.badge}</div>
                  </div>
                  <div className="planPrice">
                    <span className="price">{p.price}</span>
                    <span className="cadence">{p.cadence}</span>
                  </div>
                  <ul className="list">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="planCta">
                    <Button href={WHOP_URL}>{p.featured ? "Start Standard" : "Get Access"}</Button>
                  </div>
                </Card>
              ))}
            </div>

            <p className="fineprint">⚠️ No guarantees. Results vary by trader, risk, and execution. Educational analysis only.</p>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container">
            <h2 className="h2">FAQ</h2>
            <div className="grid2">
              {faqs.map((f) => (
                <Card key={f.q}>
                  <div className="cardTitle">{f.q}</div>
                  <div className="cardDesc">{f.a}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <div className="brandSub">
            <strong>NewAge Flow AI</strong> — Educational market analysis
          </div>
          <div className="navCtas">
            <Button variant="secondary" href={DISCORD_INVITE_URL}>Join Discord</Button>
            <Button href={WHOP_URL}>Get Access</Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

const css = `
:root{--bg:#060913;--panel:rgba(255,255,255,.06);--panel2:#0B1024;--line:rgba(255,255,255,.12);--text:rgba(255,255,255,.92);--muted:rgba(255,255,255,.68);--muted2:rgba(255,255,255,.55)}
*{box-sizing:border-box}
html,body{height:100%}
body{margin:0;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,"Apple Color Emoji","Segoe UI Emoji";background:var(--bg);color:var(--text)}
a{color:inherit;text-decoration:none;opacity:.9}
a:hover{opacity:1}
code{background:rgba(255,255,255,.08);padding:.1rem .35rem;border-radius:.45rem;border:1px solid var(--line)}
.container{max-width:1100px;margin:0 auto;padding:0 16px}
.nav{position:sticky;top:0;z-index:10;background:rgba(6,9,19,.75);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.navInner{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 0}
.brand{display:flex;align-items:center;gap:12px}
.logo{height:40px;width:40px;border-radius:14px;background:rgba(255,255,255,.05);padding:6px;object-fit:contain;border:1px solid var(--line)}
.brandName{font-weight:700;font-size:14px;letter-spacing:.3px}
.brandSub{font-size:12px;color:var(--muted2)}
.links{display:none;gap:16px;font-size:13px;color:var(--muted)}
.navCtas{display:flex;gap:10px;align-items:center}
.btn{display:inline-flex;align-items:center;justify-content:center;height:38px;padding:0 14px;border-radius:14px;background:white;color:#0b1024;font-weight:700;font-size:13px;border:1px solid rgba(255,255,255,.1)}
.btn:hover{filter:brightness(.95)}
.btnSecondary{background:transparent;color:var(--text);border:1px solid var(--line)}
.hero{padding:54px 0 26px}
.heroGrid{display:grid;grid-template-columns:1fr;gap:18px;align-items:start}
.pillRow{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px}
.pill{display:inline-flex;align-items:center;border:1px solid var(--line);background:rgba(255,255,255,.05);padding:6px 10px;border-radius:999px;font-size:12px;color:var(--muted)}
.h1{font-size:38px;line-height:1.1;margin:0 0 12px;font-weight:800}
.muted{color:rgba(255,255,255,.78)}
.lead{margin:0 0 16px;color:var(--muted);font-size:16px;line-height:1.5}
.ctaRow{display:flex;flex-wrap:wrap;gap:10px;margin:12px 0 10px}
.fineprint{font-size:12px;color:var(--muted2);margin:10px 0 0;line-height:1.45}
.card{border:1px solid var(--line);background:var(--panel);border-radius:18px;padding:16px}
.signalCard{background:rgba(255,255,255,.06)}
.signalTop{display:flex;justify-content:space-between;gap:12px;align-items:center;margin-bottom:10px}
.signalTitle{font-weight:800}
.signalTag{font-size:12px;color:var(--muted2)}
.signalGrid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.label{font-size:12px;color:var(--muted2)}
.value{font-weight:800}
.divider{height:1px;background:var(--line);margin:12px 0}
.list{margin:8px 0 0;padding-left:18px;color:var(--muted)}
.signalFoot{margin-top:10px;font-size:12px;color:var(--muted2)}
.section{padding:34px 0}
.h2{margin:0 0 8px;font-size:24px;font-weight:800}
.sub{margin:0 0 14px;color:var(--muted);line-height:1.45}
.grid3{display:grid;grid-template-columns:1fr;gap:12px}
.grid2{display:grid;grid-template-columns:1fr;gap:12px}
.cardTitle{font-weight:800;margin-bottom:6px}
.cardDesc{color:var(--muted);line-height:1.45}
.thumb{position:relative;border-radius:14px;overflow:hidden;background:var(--panel2);border:1px solid var(--line);height:190px}
.thumb img{width:100%;height:100%;object-fit:cover;display:block}
.thumbOverlay{position:absolute;inset:0;padding:14px;display:flex;flex-direction:column;justify-content:flex-end;gap:6px;background:linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,.05))}
.thumbTitle{font-weight:800}
.thumbDesc{color:rgba(255,255,255,.8);font-size:13px}
.thumbHint{color:rgba(255,255,255,.6);font-size:12px}
.featured{outline:2px solid rgba(255,255,255,.18)}
.planTop{display:flex;justify-content:space-between;gap:10px;align-items:center;margin-bottom:10px}
.planName{font-weight:800}
.badge{font-size:12px;border:1px solid var(--line);padding:4px 10px;border-radius:999px;color:var(--muted)}
.badgeHot{background:rgba(255,255,255,.12);color:rgba(255,255,255,.9)}
.planPrice{display:flex;align-items:baseline;gap:6px;margin-bottom:8px}
.price{font-size:30px;font-weight:900}
.cadence{color:var(--muted2)}
.planCta{margin-top:14px}
.footer{border-top:1px solid var(--line);padding:18px 0}
.footerInner{display:flex;flex-direction:column;gap:12px;align-items:flex-start;justify-content:space-between}

@media (min-width: 860px){
  .links{display:flex}
  .heroGrid{grid-template-columns:1.05fr .95fr;gap:18px}
  .grid3{grid-template-columns:repeat(3,1fr)}
  .grid2{grid-template-columns:repeat(2,1fr)}
  .footerInner{flex-direction:row;align-items:center}
}
`;
