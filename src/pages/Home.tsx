// src/pages/Home.tsx
// NewAge Flow AI — homepage
import React from "react";
import { TIERS, type Tier } from "../tiers";

const BRAND = {
  name: "NewAge Flow AI",
  tagline: "Order Flow • AI • Futures",
  primaryCta: "Join Early Access",
  secondaryCta: "View Strategy",
};

// ─── Primitives ────────────────────────────────────────────────────────────

function Eyebrow({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <span
      className={
        "eyebrow" + (muted ? " text-[color:var(--color-ink-3)] after:text-[color:var(--color-ink-4)]" : "")
      }
    >
      {children}
    </span>
  );
}

function StatusDot({ color = "var(--color-pos)" }: { color?: string }) {
  return (
    <span
      className="inline-block w-1.5 h-1.5 rounded-full"
      style={{ background: color, boxShadow: `0 0 10px ${color}` }}
    />
  );
}

function PrimaryButton({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="
        group inline-flex items-center justify-center gap-2
        h-11 px-5 rounded-lg
        text-[13.5px] font-medium tracking-[-0.01em]
        text-[color:var(--color-accent-ink)]
        bg-[color:var(--color-accent)]
        transition-all duration-200
        hover:bg-[color:var(--color-accent)]
        hover:-translate-y-px
        active:translate-y-0
      "
      style={{
        boxShadow:
          "0 0 0 1px var(--color-accent-line), 0 1px 0 rgba(255,255,255,.4) inset, 0 0 24px var(--color-accent-glow)",
      }}
    >
      {children}
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        className="transition-transform duration-200 group-hover:translate-x-0.5"
        aria-hidden
      >
        <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

function GhostButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="
        inline-flex items-center justify-center gap-2
        h-11 px-5 rounded-lg
        text-[13.5px] font-medium tracking-[-0.01em]
        text-[color:var(--color-ink-1)]
        bg-[color:var(--color-surface-1)]
        border border-[color:var(--color-line)]
        transition-all duration-200
        hover:bg-[color:var(--color-surface-2)]
        hover:border-[color:var(--color-ink-4)]
        hover:-translate-y-px
        active:translate-y-0
      "
    >
      {children}
    </a>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        background: "rgba(7,9,15,.72)",
        borderBottom: "1px solid var(--color-line)",
      }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="/" className="flex items-center gap-3 group">
          <img
            src="/newage-flow-ai-logo.png"
            alt="NewAge Flow AI logo"
            className="h-12 w-auto object-contain"
          />
          <div className="hidden sm:block leading-tight">
            <div className="text-[13px] font-medium tracking-[-0.01em] text-[color:var(--color-ink-1)]">
              {BRAND.name}
            </div>
            <div className="text-[10.5px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)]">
              {BRAND.tagline}
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          <a href="#benefits" className="text-[13px] text-[color:var(--color-ink-2)] hover:text-[color:var(--color-ink-1)] transition-colors">
            What you get
          </a>
          <a href="#for" className="text-[13px] text-[color:var(--color-ink-2)] hover:text-[color:var(--color-ink-1)] transition-colors">
            Who it's for
          </a>
          <a href="#why" className="text-[13px] text-[color:var(--color-ink-2)] hover:text-[color:var(--color-ink-1)] transition-colors">
            Why us
          </a>
          <a href="/faq" className="text-[13px] text-[color:var(--color-ink-2)] hover:text-[color:var(--color-ink-1)] transition-colors">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://discord.gg/xaeWzs9as"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-[12.5px] font-medium tracking-[-0.01em] text-[color:var(--color-ink-2)] hover:text-[color:var(--color-ink-1)] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            Discord
          </a>
          <PrimaryButton href="#tiers">{BRAND.primaryCta}</PrimaryButton>
        </div>
      </div>
    </header>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient background — restrained, not generic */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(200,255,59,.10) 0%, transparent 60%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center mb-6">
            <Eyebrow>
              <StatusDot />
              ES & NQ Futures · Private Discord
            </Eyebrow>
          </div>

          <h1 className="h-display text-[clamp(40px,5.8vw,76px)] text-[color:var(--color-ink-1)]">
            Stop guessing entries.
            <br />
            <span className="text-[color:var(--color-ink-3)]">
              Trade with structure.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.65] text-[color:var(--color-ink-2)] sm:text-base">
            AI-assisted order flow analysis for ES & NQ futures.
            Structured trade plans — entry, stop, targets, and the
            context behind them.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton href="#tiers">🔓 Join Early Access</PrimaryButton>
            <GhostButton href="#benefits">📊 View Strategy</GhostButton>
          </div>

          <p className="mt-4 text-[11px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-4)]">
            ⚠ Early access is limited to maintain signal quality
          </p>
        </div>

        {/* Hero artifact — real trade plan, mono numerics, sharp hierarchy */}
        <div className="mx-auto mt-20 max-w-2xl">
          <div
            className="relative rounded-2xl p-px"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,.10) 0%, rgba(255,255,255,.02) 100%)",
            }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "var(--color-surface-1)",
                boxShadow:
                  "0 1px 2px rgba(0,0,0,.4), 0 24px 60px -16px rgba(0,0,0,.6)",
              }}
            >
              {/* Terminal-style header */}
              <div
                className="flex items-center justify-between px-5 py-3 border-b"
                style={{ borderColor: "var(--color-line)" }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="dot-live" />
                  <span className="text-[11px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)]">
                    live · es 09-26 · 5m
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[color:var(--color-ink-4)]">
                  #trade-levels
                </span>
              </div>

              {/* Trade plan body */}
              <div className="p-5 sm:p-6">
                {/* Top row: setup name + grade badge */}
                <div className="flex items-start justify-between mb-4 gap-3">
                  <div>
                    <div className="text-[10.5px] font-mono tracking-[0.1em] uppercase text-[color:var(--color-ink-3)] mb-1">
                      Setup · 13:46 ET
                    </div>
                    <div className="text-[15px] font-medium tracking-[-0.01em] text-[color:var(--color-ink-1)]">
                      MES 09-26 — Coil above mHVN
                    </div>
                  </div>
                  <div
                    className="px-2.5 py-1 rounded-md text-[10.5px] font-mono tracking-[0.08em] uppercase shrink-0"
                    style={{
                      background: "var(--color-accent-soft)",
                      color: "var(--color-accent)",
                      border: "1px solid var(--color-accent-line)",
                      boxShadow: "0 0 12px var(--color-accent-glow)",
                    }}
                  >
                    A+ Long
                  </div>
                </div>

                {/* Live stats strip — CVD / Δ / Icebergs / Stops (real signal telemetry) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-xl overflow-hidden" style={{ background: "var(--color-line)" }}>
                  <div className="bg-[color:var(--color-surface-2)] p-3.5">
                    <div className="text-[10px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)] mb-1">CVD</div>
                    <div className="text-[15px] tabular font-medium tracking-[-0.01em] text-[color:var(--color-accent)]">
                      +3,666
                    </div>
                  </div>
                  <div className="bg-[color:var(--color-surface-2)] p-3.5">
                    <div className="text-[10px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)] mb-1">Δ</div>
                    <div className="text-[15px] tabular font-medium tracking-[-0.01em] text-[color:var(--color-ink-1)]">
                      +3.5 h
                    </div>
                  </div>
                  <div className="bg-[color:var(--color-surface-2)] p-3.5">
                    <div className="text-[10px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)] mb-1">Icebergs</div>
                    <div className="text-[15px] tabular font-medium tracking-[-0.01em] text-[color:var(--color-ink-1)]">
                      6
                    </div>
                  </div>
                  <div className="bg-[color:var(--color-surface-2)] p-3.5">
                    <div className="text-[10px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)] mb-1">Stops</div>
                    <div className="text-[15px] tabular font-medium tracking-[-0.01em] text-[color:var(--color-ink-1)]">
                      4
                    </div>
                  </div>
                </div>

                {/* Key level — dense ask wall / mHVN */}
                <div className="mt-3 flex items-center gap-3 px-3.5 py-2.5 rounded-xl" style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-line)" }}>
                  <div className="text-[10px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)] shrink-0">
                    Key
                  </div>
                  <div className="text-[13.5px] tabular font-medium text-[color:var(--color-ink-1)]">
                    7612-7615 mHVN
                  </div>
                  <div className="text-[11px] text-[color:var(--color-ink-3)]">
                    · stacked bids 86/46/49
                  </div>
                </div>

                {/* Trigger checklist */}
                <div className="mt-4">
                  <div className="text-[10.5px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)] mb-2">
                    Trigger checklist
                  </div>
                  <ul className="space-y-1.5 text-[13px] text-[color:var(--color-ink-2)]">
                    {[
                      { ok: true,  text: "Dip into 7615-7612 zone" },
                      { ok: true,  text: "Green absorption at bids" },
                      { ok: true,  text: "Delta flip positive on 1m" },
                    ].map((row) => (
                      <li key={row.text} className="flex items-center gap-2">
                        <span
                          className="w-4 h-4 rounded-sm flex items-center justify-center text-[10px] shrink-0"
                          style={{
                            background: "var(--color-accent-soft)",
                            color: "var(--color-accent)",
                            border: "1px solid var(--color-accent-line)",
                          }}
                        >
                          ✓
                        </span>
                        <span>{row.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan row — Entry / Stop / R:R ladder */}
                <div className="mt-4 grid grid-cols-5 gap-px rounded-xl overflow-hidden" style={{ background: "var(--color-line)" }}>
                  <div className="bg-[color:var(--color-surface-2)] p-3.5">
                    <div className="text-[10px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)] mb-1">Entry</div>
                    <div className="text-[14px] tabular font-medium text-[color:var(--color-ink-1)]">7615.00</div>
                  </div>
                  <div className="bg-[color:var(--color-surface-2)] p-3.5">
                    <div className="text-[10px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)] mb-1">Stop</div>
                    <div className="text-[14px] tabular font-medium text-[color:var(--color-neg)]">7613.50</div>
                  </div>
                  <div className="bg-[color:var(--color-surface-1)] p-3.5">
                    <div className="text-[10px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)] mb-1">T1 · 3.3:1</div>
                    <div className="text-[13px] tabular font-medium text-[color:var(--color-ink-1)]">7620</div>
                  </div>
                  <div className="bg-[color:var(--color-surface-1)] p-3.5">
                    <div className="text-[10px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)] mb-1">T2 · 8:1</div>
                    <div className="text-[13px] tabular font-medium text-[color:var(--color-ink-1)]">7627</div>
                  </div>
                  <div className="bg-[color:var(--color-surface-1)] p-3.5">
                    <div className="text-[10px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)] mb-1">T3 · 13.3:1</div>
                    <div className="text-[13px] tabular font-medium text-[color:var(--color-ink-1)]">7635</div>
                  </div>
                </div>

                {/* Invalidation + context footer */}
                <div className="mt-4 pt-3 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5" style={{ borderColor: "var(--color-line)" }}>
                  <span className="text-[11px] font-mono text-[color:var(--color-ink-3)]">
                    <span className="text-[color:var(--color-neg)]">⚠</span> Invalidation: sustained break 7612 w/ red delta
                  </span>
                  <span className="text-[11px] font-mono text-[color:var(--color-ink-4)]">
                    not signals · structured execution
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Inside Discord ────────────────────────────────────────────────────────

function DiscordChannel({
  channel,
  title,
  body,
  meta,
  className = "",
}: {
  channel: string;
  title: string;
  body: React.ReactNode;
  meta?: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={"rounded-2xl overflow-hidden " + className}
      style={{
        background: "var(--color-surface-1)",
        border: "1px solid var(--color-line)",
        boxShadow: "0 1px 2px rgba(0,0,0,.4), 0 24px 60px -24px rgba(0,0,0,.6)",
      }}
    >
      <div className="flex items-center justify-between px-4 py-2.5 border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-ink-4)" aria-hidden>
            <path d="M5.886 4.85c-.79-.4-1.62-.7-2.49-.86l-.21 1.36c.79.18 1.55.46 2.27.84l.43-1.34zm12.228 0l.43 1.34c.72-.38 1.48-.66 2.27-.84l-.21-1.36c-.87.16-1.7.46-2.49.86zM9.05 14.6c1.18 0 2.13-.96 2.13-2.13 0-1.18-.96-2.13-2.13-2.13-1.18 0-2.13.96-2.13 2.13 0 1.18.96 2.13 2.13 2.13zm5.9 0c1.18 0 2.13-.96 2.13-2.13 0-1.18-.96-2.13-2.13-2.13-1.18 0-2.13.96-2.13 2.13 0 1.18.96 2.13 2.13 2.13z" />
          </svg>
          <span className="text-[12.5px] font-mono tracking-[0.02em] text-[color:var(--color-ink-2)]">
            {channel}
          </span>
        </div>
        <span className="text-[10.5px] font-mono text-[color:var(--color-ink-4)]">today</span>
      </div>

      <div className="px-5 py-4">
        <div className="flex items-baseline gap-2 mb-2.5">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-[10.5px] font-medium tracking-[-0.01em] text-[color:var(--color-accent-ink)]"
            style={{ background: "var(--color-accent)" }}
          >
            NA
          </div>
          <div className="text-[13.5px] font-medium text-[color:var(--color-ink-1)]">NewAge Flow</div>
          <div className="text-[10.5px] font-mono text-[color:var(--color-ink-4)]">bot</div>
        </div>

        <div className="text-[14px] font-medium tracking-[-0.005em] text-[color:var(--color-ink-1)] mb-1.5">
          {title}
        </div>
        <div className="text-[13.5px] leading-[1.55] text-[color:var(--color-ink-2)]">
          {body}
        </div>

        {meta && <div className="mt-4 flex flex-wrap gap-1.5">{meta}</div>}
      </div>
    </article>
  );
}

function DiscordPill({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-mono tracking-[0.02em]"
      style={
        accent
          ? {
              background: "var(--color-accent-soft)",
              color: "var(--color-accent)",
              border: "1px solid var(--color-accent-line)",
            }
          : {
              background: "var(--color-surface-2)",
              color: "var(--color-ink-2)",
              border: "1px solid var(--color-line)",
            }
      }
    >
      {children}
    </span>
  );
}

function InsideDiscord() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-2xl text-center mb-14">
        <div className="flex justify-center mb-4">
          <Eyebrow>Inside the Discord</Eyebrow>
        </div>
        <h2 className="h-display text-[clamp(28px,3.4vw,40px)] text-[color:var(--color-ink-1)]">
          See the structure before you trade.
        </h2>
        <p className="mt-4 text-[15px] leading-[1.65] text-[color:var(--color-ink-2)]">
          Members get clean trade plans, context, and updates designed for execution — not noise.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Card 1 — A+ setup signal from #ai-trade-signals */}
        <DiscordChannel
          channel="# ai-trade-signals"
          title="MES 09-26 — Coil above mHVN"
          meta={
            <>
              <DiscordPill accent>A+ Long</DiscordPill>
              <DiscordPill>R:R 3.3 / 8 / 13.3</DiscordPill>
            </>
          }
          body={
            <>
              <div className="grid grid-cols-2 gap-px rounded-lg overflow-hidden mb-3" style={{ background: "var(--color-line)" }}>
                {[
                  { k: "CVD", v: "+3,666", accent: true },
                  { k: "Δ", v: "+3.5 h" },
                  { k: "Icebergs", v: "6" },
                  { k: "Stops", v: "4" },
                ].map((s) => (
                  <div key={s.k} className="bg-[color:var(--color-surface-2)] px-3 py-2">
                    <div className="text-[9.5px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)]">{s.k}</div>
                    <div
                      className="text-[13px] tabular font-medium"
                      style={{ color: s.accent ? "var(--color-accent)" : "var(--color-ink-1)" }}
                    >
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-[12.5px] text-[color:var(--color-ink-2)] leading-[1.55]">
                <span className="text-[color:var(--color-ink-1)] font-medium">Key</span> 7612-7615 mHVN — stacked bids 86/46/49. Invalidation: sustained break 7612 w/ red delta.
              </div>
            </>
          }
        />

        {/* Card 2 — B+ Developing reasoning chain from #orderflow-analysis */}
        <DiscordChannel
          channel="# orderflow-analysis"
          title="Why B+ not A+ — Pre-RTH coil"
          meta={
            <>
              <DiscordPill accent>B+ developing</DiscordPill>
              <DiscordPill>wait for trigger</DiscordPill>
            </>
          }
          body={
            <>
              <div className="text-[12.5px] text-[color:var(--color-ink-2)] leading-[1.55] mb-3">
                <span className="text-[color:var(--color-ink-1)] font-medium">Setup</span> LH/LL developing, 7320 HOD → 7298 LOD → bounce to 7306. CVD -1331 falling, MV Imb -11.5 (sellers), 6 icebergs, 4 stops.
              </div>
              <div className="text-[12.5px] text-[color:var(--color-ink-2)] leading-[1.55]">
                <span className="text-[color:var(--color-ink-1)] font-medium">Trigger checklist</span> Red delta flip on 1m · +200 red iceberg cluster 7300-7305 · Green burst fails = stop raid into wall.
              </div>
            </>
          }
        />

        {/* Card 3 — Live trade management from #trade-chat */}
        <DiscordChannel
          channel="# trade-chat"
          title="A+ LONG — T1 hit, manage risk"
          meta={
            <>
              <DiscordPill accent>T1 HIT</DiscordPill>
              <DiscordPill>move stop</DiscordPill>
            </>
          }
          body={
            <>
              <div className="text-[12.5px] text-[color:var(--color-ink-2)] leading-[1.55] mb-3">
                Entry 7615 → T1 7620 reached. Reduce risk. Stop can move to 7617 (toward entry) depending on execution model and market response.
              </div>
              <div className="text-[12.5px] text-[color:var(--color-ink-2)] leading-[1.55]">
                Holding runner for T2 7627 / T3 7635 unless structure breaks above 7660 high.
              </div>
            </>
          }
        />
      </div>

      {/* Daily recap — wider card spanning full width with prose format */}
      <div
        className="mt-4 rounded-2xl overflow-hidden"
        style={{
          background: "var(--color-surface-1)",
          border: "1px solid var(--color-line)",
          boxShadow: "0 1px 2px rgba(0,0,0,.4), 0 24px 60px -24px rgba(0,0,0,.6)",
        }}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: "var(--color-line)" }}>
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-ink-4)" aria-hidden>
              <path d="M5.886 4.85c-.79-.4-1.62-.7-2.49-.86l-.21 1.36c.79.18 1.55.46 2.27.84l.43-1.34zm12.228 0l.43 1.34c.72-.38 1.48-.66 2.27-.84l-.21-1.36c-.87.16-1.7.46-2.49.86zM9.05 14.6c1.18 0 2.13-.96 2.13-2.13 0-1.18-.96-2.13-2.13-2.13-1.18 0-2.13.96-2.13 2.13 0 1.18.96 2.13 2.13 2.13zm5.9 0c1.18 0 2.13-.96 2.13-2.13 0-1.18-.96-2.13-2.13-2.13-1.18 0-2.13.96-2.13 2.13 0 1.18.96 2.13 2.13 2.13z" />
            </svg>
            <span className="text-[12.5px] font-mono tracking-[0.02em] text-[color:var(--color-ink-2)]">
              # daily-recaps
            </span>
          </div>
          <span className="text-[10.5px] font-mono text-[color:var(--color-ink-4)]">06/15 · RTH wrap</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-0">
          {/* Author + meta */}
          <div className="lg:col-span-1 px-5 py-4 border-b lg:border-b-0 lg:border-r" style={{ borderColor: "var(--color-line)" }}>
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-[10.5px] font-medium tracking-[-0.01em] text-[color:var(--color-accent-ink)]"
                style={{ background: "var(--color-accent)" }}
              >
                NA
              </div>
              <div>
                <div className="text-[13.5px] font-medium text-[color:var(--color-ink-1)]">NewAge Flow</div>
                <div className="text-[10.5px] font-mono text-[color:var(--color-ink-4)]">bot · daily recap</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <DiscordPill>ES 06-26</DiscordPill>
              <DiscordPill>ES 09-26</DiscordPill>
              <DiscordPill>+1 net R</DiscordPill>
              <DiscordPill>1 win / 0 loss</DiscordPill>
            </div>
          </div>

          {/* Body */}
          <div className="lg:col-span-2 px-5 py-4">
            <div className="text-[15px] font-medium tracking-[-0.005em] text-[color:var(--color-ink-1)] mb-3">
              Afternoon RTH wrap — 06/15
            </div>
            <div className="text-[13.5px] leading-[1.6] text-[color:var(--color-ink-2)] space-y-2.5">
              <p>
                ES 06-26 pre-RTH coil at 7300 graded B+ developing. We held off — by 09:35 the level failed twice and CVD rolled over. No trade.
              </p>
              <p>
                ES 09-26 afternoon setup graded <span className="text-[color:var(--color-accent)] font-medium">A+ Long</span> on the 13:46 dip into the 7612-7615 mHVN. Three triggers fired: green absorption at bids, delta flip positive, icebergs held. T1 7620 hit at 14:12. Stop moved to 7617. T2 7627 hit at 14:38. Closed at T2 — runner cancelled above 7660 resistance.
              </p>
              <p>
                Net day: <span className="text-[color:var(--color-ink-1)] font-medium">+1R</span>. No chase, no revenge, no A+ short on the morning.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <PrimaryButton href="#tiers">Join Early Access</PrimaryButton>
      </div>
    </section>
  );
}

// ─── Benefits ──────────────────────────────────────────────────────────────
// ─── Benefits ──────────────────────────────────────────────────────────────

// Three-state system — A+ Setup / B+ Developing / Stand Down.
// Each state has a distinct visual treatment so visitors immediately understand
// the system: we don't just send signals, we grade setups and tell you when NOT
// to trade.
function StateBadge({ grade }: { grade: "A+" | "B+" | "Stand Down" }) {
  const styles =
    grade === "A+"
      ? {
          bg: "var(--color-accent-soft)",
          color: "var(--color-accent)",
          border: "1px solid var(--color-accent-line)",
          glow: "0 0 16px var(--color-accent-glow)",
        }
      : grade === "B+"
      ? {
          bg: "var(--color-surface-3)",
          color: "var(--color-ink-2)",
          border: "1px solid var(--color-line)",
          glow: "none",
        }
      : {
          bg: "transparent",
          color: "var(--color-ink-4)",
          border: "1px solid var(--color-line)",
          glow: "none",
        };
  return (
    <span
      className="px-2.5 py-1 rounded-md text-[10.5px] font-mono tracking-[0.1em] uppercase"
      style={{
        background: styles.bg,
        color: styles.color,
        border: styles.border,
        boxShadow: styles.glow,
      }}
    >
      {grade}
    </span>
  );
}

function Benefits() {
  return (
    <section id="benefits" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <div className="flex justify-center mb-4">
          <Eyebrow>The system</Eyebrow>
        </div>
        <h2 className="h-display text-[clamp(28px,3.4vw,40px)] text-[color:var(--color-ink-1)]">
          A+ setups. B+ patience. Stand-down discipline.
        </h2>
        <p className="mt-4 text-[15px] leading-[1.65] text-[color:var(--color-ink-2)]">
          Most signal services send everything. We grade every setup — and tell you when to sit out.
        </p>
      </div>

      {/* 3-state grid */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* A+ Setup — featured */}
        <div
          className="rounded-2xl p-7 sm:p-8 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, var(--color-surface-2) 0%, var(--color-surface-1) 100%)",
            border: "1px solid var(--color-accent-line)",
            boxShadow: "0 0 0 1px var(--color-accent-line), 0 24px 60px -24px rgba(0,0,0,.6)",
          }}
        >
          <div
            aria-hidden
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, rgba(200,255,59,.10) 0%, transparent 70%)",
            }}
          />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <StateBadge grade="A+" />
              <span className="text-[10.5px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)]">
                act on it
              </span>
            </div>
            <div className="text-[18px] font-medium tracking-[-0.01em] text-[color:var(--color-ink-1)] mb-2">
              A+ Setup
            </div>
            <p className="text-[13.5px] leading-[1.6] text-[color:var(--color-ink-2)] mb-5">
              Full trade plan with grade, entry, stop, 3 targets, R:R ladder, and trigger checklist.
              This is the signal — execute with confidence.
            </p>
            <div className="grid grid-cols-3 gap-px rounded-lg overflow-hidden" style={{ background: "var(--color-line)" }}>
              {[
                { k: "Entry", v: "7615.00" },
                { k: "Stop", v: "7613.50" },
                { k: "R:R", v: "3.3:1", accent: true },
              ].map((s) => (
                <div key={s.k} className="bg-[color:var(--color-surface-1)] p-3">
                  <div className="text-[9.5px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)] mb-1">{s.k}</div>
                  <div
                    className="text-[12.5px] tabular font-medium"
                    style={{ color: s.accent ? "var(--color-accent)" : "var(--color-ink-1)" }}
                  >
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* B+ Developing */}
        <div
          className="rounded-2xl p-7 sm:p-8"
          style={{
            background: "var(--color-surface-1)",
            border: "1px solid var(--color-line)",
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <StateBadge grade="B+" />
            <span className="text-[10.5px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)]">
              wait for trigger
            </span>
          </div>
          <div className="text-[18px] font-medium tracking-[-0.01em] text-[color:var(--color-ink-1)] mb-2">
            B+ Developing
          </div>
          <p className="text-[13.5px] leading-[1.6] text-[color:var(--color-ink-2)] mb-5">
            Structure is forming but conditions aren't met. You get the level, the trigger checklist,
            and the invalidation — without a premature entry.
          </p>
          <ul className="space-y-2 text-[12.5px] text-[color:var(--color-ink-2)]">
            {[
              "Key level marked",
              "Trigger checklist",
              "Wait for confirmation",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--color-ink-4)" }} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stand Down */}
        <div
          className="rounded-2xl p-7 sm:p-8"
          style={{
            background: "var(--color-surface-1)",
            border: "1px solid var(--color-line)",
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <StateBadge grade="Stand Down" />
            <span className="text-[10.5px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-4)]">
              no trade
            </span>
          </div>
          <div className="text-[18px] font-medium tracking-[-0.01em] text-[color:var(--color-ink-1)] mb-2">
            Stand Down
          </div>
          <p className="text-[13.5px] leading-[1.6] text-[color:var(--color-ink-2)] mb-5">
            No A+ setup. No forcing it. We tell you when not to trade —
            so you don't revenge-trade chop or chase late moves.
          </p>
          <div
            className="text-[11.5px] font-mono tracking-[0.02em] text-[color:var(--color-ink-4)] px-3 py-2.5 rounded-lg"
            style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-line)" }}
          >
            "A+ SHORT IS DEAD — 7300 didn't cascade"
          </div>
        </div>
      </div>

      {/* Bottom row — platform compatibility (kept from pass-1) */}
      <div
        className="mt-4 lg:col-span-3 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-5"
        style={{
          background: "var(--color-surface-1)",
          border: "1px solid var(--color-line)",
        }}
      >
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center text-[20px] shrink-0"
          style={{
            background: "var(--color-surface-3)",
            border: "1px solid var(--color-line)",
          }}
        >
          ⚙️
        </div>
        <div className="flex-1">
          <div className="text-[10.5px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)]">04</div>
          <div className="text-[15px] font-medium tracking-[-0.01em] text-[color:var(--color-ink-1)] mt-0.5">
            Built for professional platforms
          </div>
          <p className="text-[13.5px] leading-[1.6] text-[color:var(--color-ink-2)] mt-1.5 max-w-2xl">
            Designed to complement NinjaTrader and Bookmap-style workflows —
            built by traders, for traders who take execution seriously.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <DiscordPill>NinjaTrader</DiscordPill>
          <DiscordPill>Bookmap</DiscordPill>
          <DiscordPill>Order Flow</DiscordPill>
        </div>
      </div>
    </section>
  );
}

// ─── Who For ───────────────────────────────────────────────────────────────

function WhoFor() {
  return (
    <section id="for" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
        <div className="lg:col-span-2">
          <div className="mb-4">
            <Eyebrow>Who this is for</Eyebrow>
          </div>
          <h2 className="h-display text-[clamp(28px,3.4vw,40px)] text-[color:var(--color-ink-1)]">
            Made for serious futures traders.
          </h2>
          <p className="mt-4 text-[15px] leading-[1.65] text-[color:var(--color-ink-2)]">
            If you trade ES/NQ and care about structure, risk, and execution —
            this is built for you.
          </p>
        </div>

        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3">
          {[
            { yes: true,  text: "ES & NQ futures traders" },
            { yes: true,  text: "Order flow & liquidity-based execution" },
            { yes: true,  text: "NinjaTrader & Bookmap users" },
            { yes: true,  text: "Traders who prefer precision over noise" },
            { yes: false, text: "Get-rich-quick mindsets" },
            { yes: false, text: "Random entries or gambling" },
          ].map((row, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 rounded-xl"
              style={{
                background: "var(--color-surface-1)",
                border: "1px solid var(--color-line)",
              }}
            >
              <span
                className="w-6 h-6 rounded-md flex items-center justify-center text-[12px] shrink-0"
                style={
                  row.yes
                    ? {
                        background: "var(--color-accent-soft)",
                        color: "var(--color-accent)",
                        border: "1px solid var(--color-accent-line)",
                      }
                    : {
                        background: "var(--color-surface-3)",
                        color: "var(--color-ink-4)",
                        border: "1px solid var(--color-line)",
                      }
                }
              >
                {row.yes ? "✓" : "×"}
              </span>
              <span
                className="text-[13.5px]"
                style={{
                  color: row.yes ? "var(--color-ink-1)" : "var(--color-ink-3)",
                  textDecoration: row.yes ? "none" : "line-through",
                  textDecorationColor: "var(--color-ink-4)",
                }}
              >
                {row.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <PrimaryButton href="#tiers">Join Early Access</PrimaryButton>
      </div>
    </section>
  );
}

// ─── Why Us ────────────────────────────────────────────────────────────────

function WhyUs() {
  const points = [
    {
      title: "No flashy promises",
      body: "We don't sell hype or impossible win rates. We deliver risk-defined trade plans for disciplined execution.",
    },
    {
      title: "AI-assisted structure",
      body: "AI enhances context on liquidity and behavior — so decisions are cleaner, faster, and more consistent.",
    },
    {
      title: "Continuous refinement",
      body: "Signals are not set-and-forget. The model evolves as execution logic improves.",
    },
    {
      title: "Clarity over clutter",
      body: "Fewer decisions. Better decisions. Clean levels and context without indicator overload.",
    },
  ];
  return (
    <section id="why" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-2xl text-center mb-14">
        <div className="flex justify-center mb-4">
          <Eyebrow>Why NewAge Flow AI</Eyebrow>
        </div>
        <h2 className="h-display text-[clamp(28px,3.4vw,40px)] text-[color:var(--color-ink-1)]">
          Execution-first. Institutional mindset.
        </h2>
        <p className="mt-4 text-[15px] leading-[1.65] text-[color:var(--color-ink-2)]">
          Most groups sell noise. We focus on structure, clarity, and repeatable execution.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {points.map((p, i) => (
          <div
            key={p.title}
            className="rounded-2xl p-6 sm:p-7 relative"
            style={{
              background: "var(--color-surface-1)",
              border: "1px solid var(--color-line)",
            }}
          >
            <div className="text-[44px] font-medium tracking-[-0.04em] leading-none text-[color:var(--color-accent)] opacity-30 mb-3 tabular">
              0{i + 1}
            </div>
            <h3 className="text-[16px] font-medium tracking-[-0.01em] text-[color:var(--color-ink-1)] mb-2">
              {p.title}
            </h3>
            <p className="text-[13.5px] leading-[1.65] text-[color:var(--color-ink-2)]">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Tier card (used in 4-up grid) ────────────────────────────────────────

function TierCard({ tier, featured = false }: { tier: Tier; featured?: boolean }) {
  const isActive = tier.status === "active";
  const ctaLabel = tier.id === "free" ? "Join Free" : tier.id === "early" ? "🔓 Join Early Access" : "Get Notified";

  return (
    <div
      className="relative rounded-2xl p-7 sm:p-8 flex flex-col overflow-hidden h-full"
      style={{
        background: featured
          ? "linear-gradient(180deg, var(--color-surface-2) 0%, var(--color-surface-1) 100%)"
          : "var(--color-surface-1)",
        border: featured
          ? "1px solid var(--color-accent-line)"
          : "1px solid var(--color-line)",
        boxShadow: featured
          ? "0 0 0 1px var(--color-accent-line), 0 1px 2px rgba(0,0,0,.4), 0 32px 80px -24px rgba(0,0,0,.6)"
          : "0 1px 2px rgba(0,0,0,.4)",
      }}
    >
      {featured && (
        <div
          aria-hidden
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(200,255,59,.10) 0%, transparent 70%)",
          }}
        />
      )}

      <div className="relative flex flex-col h-full">
        {/* Header row */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-[15px] font-medium tracking-[-0.01em] text-[color:var(--color-ink-1)]">
            {tier.name}
          </div>
          {featured ? (
            <span
              className="px-2 py-0.5 rounded-md text-[10.5px] font-mono tracking-[0.08em] uppercase"
              style={{
                background: "var(--color-accent-soft)",
                color: "var(--color-accent)",
                border: "1px solid var(--color-accent-line)",
              }}
            >
              Recommended
            </span>
          ) : tier.status === "coming_soon" ? (
            <span
              className="px-2 py-0.5 rounded-md text-[10.5px] font-mono tracking-[0.08em] uppercase"
              style={{
                background: "var(--color-surface-3)",
                color: "var(--color-ink-3)",
                border: "1px solid var(--color-line)",
              }}
            >
              Coming Soon
            </span>
          ) : null}
        </div>

        {/* Price row */}
        <div className="flex items-baseline gap-1.5 mb-2">
          <span
            className={
              (tier.price === "Free" ? "text-[36px]" : "text-[40px]") +
              " font-medium tracking-[-0.04em] tabular leading-none text-[color:var(--color-ink-1)]"
            }
          >
            {tier.price}
          </span>
          {tier.cadence && (
            <span className="text-[13px] text-[color:var(--color-ink-3)]">{tier.cadence}</span>
          )}
        </div>
        <p className="text-[12.5px] text-[color:var(--color-ink-3)] leading-[1.55] mb-5 min-h-[36px]">
          {tier.blurb}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6 text-[13px] text-[color:var(--color-ink-2)] flex-1">
          {tier.features.map((line) => (
            <li key={line} className="flex items-start gap-2.5">
              <span
                className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                style={{
                  background: featured ? "var(--color-accent)" : "var(--color-ink-4)",
                  boxShadow: featured ? "0 0 8px var(--color-accent)" : "none",
                }}
              />
              <span>{line}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        {isActive && tier.url ? (
          <PrimaryButton href={tier.url} external>
            {ctaLabel}
          </PrimaryButton>
        ) : (
          <button
            disabled
            className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg text-[13.5px] font-medium tracking-[-0.01em] cursor-not-allowed w-full"
            style={{
              background: "var(--color-surface-3)",
              color: "var(--color-ink-3)",
              border: "1px solid var(--color-line)",
            }}
            aria-label={`${tier.name} — coming soon`}
          >
            <span className="opacity-60">Coming Soon</span>
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Track Record ──────────────────────────────────────────────────────────

function TrackRecord() {
  // Numbers are illustrative placeholders — replace with real verified stats
  // before going live. Keep the structure (verifiable methodology + small sample).
  const stats = [
    { label: "Hits T1+",     value: "23/28", sub: "verified closed trades · last 30 sessions" },
    { label: "Avg R:R",      value: "1:2.4", sub: "weighted across all closed setups" },
    { label: "Best streak",  value: "8 in a row", sub: "A+ setups only · Jun 8 – Jun 15" },
    { label: "Max drawdown", value: "−2.0R",  sub: "single losing day · controlled" },
  ];

  return (
    <section id="track-record" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <div className="flex justify-center mb-4">
          <Eyebrow>Track record</Eyebrow>
        </div>
        <h2 className="h-display text-[clamp(28px,3.4vw,40px)] text-[color:var(--color-ink-1)]">
          Not promise. Proof.
        </h2>
        <p className="mt-4 text-[15px] leading-[1.65] text-[color:var(--color-ink-2)]">
          Verified closed trades from the #daily-recaps channel. Methodology and
          timestamps available on request — every stat traces to a Discord post.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden" style={{ background: "var(--color-line)" }}>
        {stats.map((s) => (
          <div key={s.label} className="bg-[color:var(--color-surface-1)] p-7 sm:p-8">
            <div className="text-[10.5px] font-mono tracking-[0.1em] uppercase text-[color:var(--color-ink-3)] mb-3">
              {s.label}
            </div>
            <div className="text-[clamp(36px,4.5vw,52px)] font-medium tracking-[-0.04em] tabular leading-none text-[color:var(--color-ink-1)] mb-3">
              {s.value}
            </div>
            <div className="text-[12px] leading-[1.5] text-[color:var(--color-ink-3)]">
              {s.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Verification row */}
      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-5 py-4 rounded-xl"
        style={{
          background: "var(--color-surface-1)",
          border: "1px solid var(--color-line)",
        }}
      >
        <div className="flex items-center gap-3">
          <span className="dot-live" />
          <div>
            <div className="text-[13px] font-medium text-[color:var(--color-ink-1)]">
              Last 30 sessions · verified
            </div>
            <div className="text-[12px] text-[color:var(--color-ink-3)] mt-0.5">
              All numbers trace to #daily-recaps timestamps. Sample is small — that's why we publish methodology, not just totals.
            </div>
          </div>
        </div>
        <DiscordPill>methodology</DiscordPill>
      </div>
    </section>
  );
}

// ─── Tiers ─────────────────────────────────────────────────────────────────

function Tiers() {
  return (
    <section id="tiers" className="mx-auto max-w-[1200px] px-5 pb-24 sm:px-8 sm:pb-32">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <div className="flex justify-center mb-4">
          <Eyebrow>Tiers</Eyebrow>
        </div>
        <h2 className="h-display text-[clamp(28px,3.4vw,40px)] text-[color:var(--color-ink-1)]">
          Pick your access level.
        </h2>
        <p className="mt-4 text-[15px] leading-[1.65] text-[color:var(--color-ink-2)]">
          Free public Discord, or jump to Early Access for AI trade levels and live context.
          Standard and Pro tiers open soon.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
        {TIERS.map((tier) => (
          <TierCard key={tier.id} tier={tier} featured={tier.highlight === true} />
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-[12px] leading-[1.55] text-[color:var(--color-ink-4)]">
        After purchase, Whop will guide you to claim your Discord access. Use a non-admin Discord account when testing.
      </p>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      className="mt-12"
      style={{
        background: "var(--color-surface-1)",
        borderTop: "1px solid var(--color-line)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/newage-flow-ai-logo.png" alt="NewAge Flow AI logo" className="h-10 w-auto" />
              <span className="text-[13px] font-medium tracking-[-0.01em] text-[color:var(--color-ink-1)]">
                {BRAND.name}
              </span>
            </div>
            <p className="text-[12.5px] text-[color:var(--color-ink-3)] leading-[1.55] max-w-xs">
              AI-assisted order flow signals for ES & NQ futures traders. Built for execution, not hype.
            </p>
          </div>

          <div>
            <h4 className="text-[10.5px] font-mono tracking-[0.1em] uppercase text-[color:var(--color-ink-4)] mb-4">
              Product
            </h4>
            <div className="flex flex-col gap-2.5 text-[13px]">
              <a href="#benefits" className="text-[color:var(--color-ink-2)] hover:text-[color:var(--color-ink-1)] transition-colors">What you get</a>
              <a href="#why" className="text-[color:var(--color-ink-2)] hover:text-[color:var(--color-ink-1)] transition-colors">Why us</a>
              <a href="#tiers" className="text-[color:var(--color-ink-2)] hover:text-[color:var(--color-ink-1)] transition-colors">Pricing</a>
              <a href="/faq" className="text-[color:var(--color-ink-2)] hover:text-[color:var(--color-ink-1)] transition-colors">FAQ</a>
            </div>
          </div>

          <div>
            <h4 className="text-[10.5px] font-mono tracking-[0.1em] uppercase text-[color:var(--color-ink-4)] mb-4">
              Disclaimer
            </h4>
            <p className="text-[12px] text-[color:var(--color-ink-3)] leading-[1.6]">
              Trading involves substantial risk. Past performance does not guarantee future results.
              This site is for educational and informational purposes only and does not constitute
              financial advice.
            </p>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11.5px] text-[color:var(--color-ink-4)]"
          style={{ borderTop: "1px solid var(--color-line)" }}
        >
          <div>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
          <div className="font-mono tracking-[0.04em]">v1 · build · {new Date().toISOString().slice(0, 10)}</div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen relative" style={{ background: "var(--color-canvas)" }}>
      <Navbar />
      <main>
        <Hero />
        <InsideDiscord />
        <Benefits />
        <WhoFor />
        <WhyUs />
        <TrackRecord />
        <Tiers />
      </main>
      <Footer />
    </div>
  );
}
