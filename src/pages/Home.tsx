// src/App.tsx
import React from "react";

const BRAND = {
  name: "NewAge Flow AI",
  taglineTop: "Institutional Order Flow.",
  taglineMid: "AI Precision.",
  taglineBottom: "Real-Time Execution.",
  primaryCta: "Join the Private Discord",
  secondaryCta: "View Strategy Overview",
};

// ✅ “Join Discord” now routes to tiers section on your site
const LINKS = {
  discord: "#tiers",
  overview: "#benefits",
  tiers: "#tiers",
};

// ✅ Your tier links (Whop)
const TIER_LINKS = {
  early: "https://whop.com/newageflowai/early-access-55/",
  standard: "https://whop.com/newageflowai/standard-25/",
  pro: "https://whop.com/newageflowai/pro-0b-9291/",
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
      {children}
    </span>
  );
}

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,.08),0_18px_60px_rgba(0,0,0,.65)] backdrop-blur">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/20">
          {icon}
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-white/75">{children}</p>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <div className="mb-3 flex justify-center">
          <Badge>{eyebrow}</Badge>
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function GlowBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute top-48 -left-28 h-[460px] w-[460px] rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.08]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,.75)_100%)]" />
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/25 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <img
            src="/newage-flow-ai-logo.png"
            alt="NewAge Flow AI logo"
            className="h-10 w-auto max-w-[180px] object-contain"
          />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-white">{BRAND.name}</div>
            <div className="text-xs text-white/60">Order Flow • AI • Futures</div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 sm:flex">
          <a className="text-sm text-white/70 hover:text-white" href="#benefits">
            What you get
          </a>
          <a className="text-sm text-white/70 hover:text-white" href="#for">
            Who it’s for
          </a>
          <a className="text-sm text-white/70 hover:text-white" href="#tiers">
            Discord tiers
          </a>
          <a className="text-sm text-white/70 hover:text-white" href="/faq">
             FAQ
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={LINKS.discord}
            className="inline-flex rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
          >
            {BRAND.primaryCta}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">

          <div className="flex justify-center">
            <Badge>ES & NQ Futures • Private Discord • Order Flow</Badge>
          </div>

          {/* 🔥 HEADLINE */}
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl leading-tight">
            Stop guessing entries.
            <br />
            <span className="text-white/80">
              Trade with structured, AI-assisted execution.
            </span>
          </h1>

          {/* 🔥 SUBTEXT */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
            Get real trade plans with <strong>entry, stop, and targets</strong>—plus the context behind them.
            Built for ES & NQ traders who want precision, not noise.
          </p>

          {/* 🔥 CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#tiers"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-semibold text-black hover:bg-white/90 sm:w-auto"
            >
              🔓 Join Early Access
            </a>
          </div>

          {/* 🔥 URGENCY */}
          <p className="mt-3 text-xs text-white/60">
            ⚠️ Early access is limited to maintain signal quality
          </p>

          {/* 🔥 MICRO PROOF */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-white/55">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Entry / Re-entry / Stop
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              T1–T3 targets
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Live execution context
            </span>
          </div>
        </div>

        {/* 🔥 VISUAL PROOF CARD */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">

            <div className="text-xs text-white/60 mb-4">
              Example Trade Plan
            </div>

            <div className="grid gap-3 text-sm">
              <div className="flex justify-between bg-white/5 p-3 rounded-xl">
                <span className="text-white/60">Bias</span>
                <span className="text-white font-semibold">SHORT</span>
              </div>

              <div className="flex justify-between bg-white/5 p-3 rounded-xl">
                <span className="text-white/60">Entry</span>
                <span className="text-white font-semibold">6459.00</span>
              </div>

              <div className="flex justify-between bg-white/5 p-3 rounded-xl">
                <span className="text-white/60">Stop</span>
                <span className="text-white font-semibold">6463.00</span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/5 p-3 rounded-xl text-center">
                  <div className="text-xs text-white/60">T1</div>
                  <div className="text-white font-semibold">6455.00</div>
                </div>
                <div className="bg-white/5 p-3 rounded-xl text-center">
                  <div className="text-xs text-white/60">T2</div>
                  <div className="text-white font-semibold">6450.00</div>
                </div>
                <div className="bg-white/5 p-3 rounded-xl text-center">
                  <div className="text-xs text-white/60">T3</div>
                  <div className="text-white font-semibold">6445.00</div>
                </div>
              </div>
            </div>

            <div className="mt-4 text-xs text-white/60 text-center">
              Not signals. Structured execution.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
function InsideDiscord() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionTitle
        eyebrow="Inside the Discord"
        title="See the structure before you trade"
        subtitle="Members get clean trade plans, context, and updates designed for execution — not noise."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,.08),0_18px_60px_rgba(0,0,0,.65)] backdrop-blur">
          <div className="text-xs font-semibold text-white/50"># trade-levels</div>
          <div className="mt-4 rounded-2xl bg-black/25 p-4">
            <div className="text-sm font-semibold text-white">ES Short Setup</div>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Bias: Short<br />
              Entry: 6459.00<br />
              Stop: 6463.00<br />
              Targets: 6455 / 6450 / 6445
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,.08),0_18px_60px_rgba(0,0,0,.65)] backdrop-blur">
          <div className="text-xs font-semibold text-white/50"># market-context</div>
          <div className="mt-4 rounded-2xl bg-black/25 p-4">
            <div className="text-sm font-semibold text-white">Liquidity Rejection</div>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Price rejected upper liquidity zone. Watching for continuation below support
              with absorption confirmation.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,.08),0_18px_60px_rgba(0,0,0,.65)] backdrop-blur">
          <div className="text-xs font-semibold text-white/50"># live-updates</div>
          <div className="mt-4 rounded-2xl bg-black/25 p-4">
            <div className="text-sm font-semibold text-white">Trade Management</div>
            <p className="mt-2 text-sm leading-6 text-white/70">
              T1 reached. Reduce risk. Stop can move toward entry depending on execution
              model and market response.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href="#tiers"
          className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-black hover:bg-white/90"
        >
          🔓 Join Early Access
        </a>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="benefits" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionTitle
        eyebrow="What you get"
        title="Everything you need to execute with structure"
        subtitle="No clutter. No hype. Clear trade plans with real-time context."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <Card icon={<span className="text-white">📈</span>} title="AI Trade Levels">
          Actionable trade plans: entry, re-entry, stop, and multiple targets (T1–T3).
          Designed for clean execution and risk-defined decision-making.
        </Card>

        <Card icon={<span className="text-white">🔥</span>} title="Order Flow Intelligence">
          AI-assisted analysis based on liquidity, absorption, imbalances, and momentum—focused
          on where price is likely to react, not lag.
        </Card>

        <Card icon={<span className="text-white">🧠</span>} title="Live Discord Trade Context">
          You get the “why,” not just the “what.” Bias, reasoning, and updates as the market shifts—
          so you can adapt, not guess.
        </Card>

        <Card icon={<span className="text-white">⚙️</span>} title="Built for Professional Platforms">
          Designed to complement NinjaTrader and Bookmap-style workflows—built by traders,
          for traders who take execution seriously.
        </Card>
      </div>
    </section>
  );
}

function WhoFor() {
  return (
    <section id="for" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionTitle
            eyebrow="Who this is for"
            title="Made for serious futures traders"
            subtitle="If you trade ES/NQ and care about structure, risk, and execution—this is built for you."
          />
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,.08),0_18px_60px_rgba(0,0,0,.65)] backdrop-blur sm:p-8">
          <div className="grid gap-3 text-sm text-white/75">
            <div className="flex items-start gap-3">
              <span className="mt-0.5">✔</span>
              <span>ES & NQ futures traders</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5">✔</span>
              <span>Order flow & liquidity-based execution</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5">✔</span>
              <span>NinjaTrader & Bookmap users</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5">✔</span>
              <span>Traders who prefer precision over noise</span>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="#tiers"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
            >
              🔓 Choose a Discord Tier
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionTitle
        eyebrow="Why NewAge Flow AI"
        title="Execution-first. Institutional mindset."
        subtitle="Most groups sell noise. We focus on structure, clarity, and repeatable execution."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,.08),0_18px_60px_rgba(0,0,0,.65)] backdrop-blur">
          <h3 className="text-base font-semibold text-white">No flashy promises</h3>
          <p className="mt-2 text-sm leading-6 text-white/75">
            We don’t sell hype or impossible win rates. We deliver risk-defined trade plans
            designed for disciplined execution.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,.08),0_18px_60px_rgba(0,0,0,.65)] backdrop-blur">
          <h3 className="text-base font-semibold text-white">AI-assisted structure</h3>
          <p className="mt-2 text-sm leading-6 text-white/75">
            AI enhances context and structure—focused on liquidity and behavior—so your decisions
            are cleaner, faster, and more consistent.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,.08),0_18px_60px_rgba(0,0,0,.65)] backdrop-blur">
          <h3 className="text-base font-semibold text-white">Continuous refinement</h3>
          <p className="mt-2 text-sm leading-6 text-white/75">
            We iterate and improve. Signals are not “set and forget”—they evolve as our execution
            model improves.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,.08),0_18px_60px_rgba(0,0,0,.65)] backdrop-blur">
          <h3 className="text-base font-semibold text-white">Clarity over clutter</h3>
          <p className="mt-2 text-sm leading-6 text-white/75">
            The goal is simple: fewer decisions, better decisions. You get clean levels and context
            without indicator overload.
          </p>
        </div>
      </div>
    </section>
  );
}

function Tiers() {
  return (
    <section id="tiers" className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 sm:pb-28">
      <SectionTitle
        eyebrow="Discord access"
        title="Early Access"
        subtitle="Limited access to the NewAge Flow AI Discord. Get in early and start trading with structured execution."
      />

      <div className="mt-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_0_1px_rgba(255,255,255,.08),0_18px_60px_rgba(0,0,0,.65)] backdrop-blur">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold text-white">Early Access</div>
            <Badge>Limited</Badge>
          </div>

          <p className="mt-4 text-sm leading-6 text-white/70">
            Get early access to the NewAge Flow AI Discord and trade with structured,
            AI-assisted order flow analysis.
          </p>

          <ul className="mt-6 space-y-2 text-sm text-white/75">
            <li>• Private Discord access</li>
            <li>• AI trade levels (entry / stop / targets)</li>
            <li>• Live trade context & updates</li>
            <li>• Community access</li>
          </ul>

          <a
            href={TIER_LINKS.early}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-black hover:bg-white/90"
          >
            🔓 Join Early Access
          </a>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-5 text-white/50">
        After purchase, Whop will guide you to claim your Discord access.
        Use a non-admin Discord account when testing access.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-sm text-white/70">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a className="text-white/60 hover:text-white" href="#benefits">
              What you get
            </a>
            <a className="text-white/60 hover:text-white" href="#tiers">
              Discord tiers
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs leading-5 text-white/45">
          Trading involves risk. This site is for educational purposes and does not constitute financial advice.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen text-white">
      <GlowBg />
      <Navbar />
      <main className="relative">
        <Hero />
        <InsideDiscord />
        <Benefits />
        <WhoFor />
        <WhyUs />
        <Tiers />
      </main>
      <Footer />
    </div>
  );
}
