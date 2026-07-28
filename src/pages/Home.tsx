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
            className="h-9 w-auto object-contain"
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

        <PrimaryButton href="#tiers">{BRAND.primaryCta}</PrimaryButton>
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
                <div className="flex items-baseline justify-between mb-5">
                  <div>
                    <div className="text-[10.5px] font-mono tracking-[0.1em] uppercase text-[color:var(--color-ink-3)] mb-1">
                      Setup
                    </div>
                    <div className="text-[15px] font-medium tracking-[-0.01em] text-[color:var(--color-ink-1)]">
                      ES Short — Liquidity Rejection
                    </div>
                  </div>
                  <div
                    className="px-2.5 py-1 rounded-md text-[10.5px] font-mono tracking-[0.08em] uppercase"
                    style={{
                      background: "rgba(248,113,113,.10)",
                      color: "var(--color-neg)",
                      border: "1px solid rgba(248,113,113,.22)",
                    }}
                  >
                    Short
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-xl overflow-hidden" style={{ background: "var(--color-line)" }}>
                  <div className="bg-[color:var(--color-surface-2)] p-4">
                    <div className="text-[10px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)] mb-1.5">Entry</div>
                    <div className="text-[18px] tabular font-medium tracking-[-0.01em] text-[color:var(--color-ink-1)]">
                      6459.00
                    </div>
                  </div>
                  <div className="bg-[color:var(--color-surface-2)] p-4">
                    <div className="text-[10px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)] mb-1.5">Stop</div>
                    <div className="text-[18px] tabular font-medium tracking-[-0.01em] text-[color:var(--color-neg)]">
                      6463.00
                    </div>
                  </div>
                  <div className="bg-[color:var(--color-surface-2)] p-4">
                    <div className="text-[10px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)] mb-1.5">Invalidation</div>
                    <div className="text-[13px] tabular text-[color:var(--color-ink-2)] leading-tight">
                      Close &gt; 6465.25
                    </div>
                  </div>
                  <div className="bg-[color:var(--color-surface-2)] p-4">
                    <div className="text-[10px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)] mb-1.5">R:R</div>
                    <div className="text-[18px] tabular font-medium tracking-[-0.01em] text-[color:var(--color-accent)]">
                      1:2.4
                    </div>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-px rounded-xl overflow-hidden" style={{ background: "var(--color-line)" }}>
                  <div className="bg-[color:var(--color-surface-1)] p-3.5 text-center">
                    <div className="text-[10px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)] mb-1">T1</div>
                    <div className="text-[15px] tabular font-medium text-[color:var(--color-ink-1)]">6455.00</div>
                  </div>
                  <div className="bg-[color:var(--color-surface-1)] p-3.5 text-center">
                    <div className="text-[10px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)] mb-1">T2</div>
                    <div className="text-[15px] tabular font-medium text-[color:var(--color-ink-1)]">6450.00</div>
                  </div>
                  <div className="bg-[color:var(--color-surface-1)] p-3.5 text-center">
                    <div className="text-[10px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)] mb-1">T3</div>
                    <div className="text-[15px] tabular font-medium text-[color:var(--color-ink-1)]">6445.00</div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t flex items-center justify-between" style={{ borderColor: "var(--color-line)" }}>
                  <span className="text-[11px] font-mono text-[color:var(--color-ink-4)]">
                    context · absorption at 6459 / rejection wick 6464.50
                  </span>
                  <span className="text-[11px] font-mono text-[color:var(--color-ink-3)]">
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
  pills,
  className = "",
}: {
  channel: string;
  title: string;
  body: React.ReactNode;
  pills?: React.ReactNode;
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

        {pills && <div className="mt-4 flex flex-wrap gap-1.5">{pills}</div>}
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
        <DiscordChannel
          channel="# trade-levels"
          title="ES Short Setup"
          body={
            <>
              Bias: <strong className="text-[color:var(--color-ink-1)] font-medium">Short</strong>
              <br />
              Entry 6459.00 · Stop 6463.00
              <br />
              Targets 6455 / 6450 / 6445
            </>
          }
          pills={
            <>
              <DiscordPill accent>SHORT</DiscordPill>
              <DiscordPill>R:R 1:2.4</DiscordPill>
              <DiscordPill>Invalidation 6465.25</DiscordPill>
            </>
          }
        />
        <DiscordChannel
          channel="# market-context"
          title="Liquidity Rejection"
          body={
            <>
              Price rejected the upper liquidity zone. Watching for continuation
              below support with absorption confirmation.
            </>
          }
          pills={
            <>
              <DiscordPill>absorption</DiscordPill>
              <DiscordPill>imbalance</DiscordPill>
            </>
          }
        />
        <DiscordChannel
          channel="# live-updates"
          title="Trade Management"
          body={
            <>
              T1 reached. Reduce risk. Stop can move toward entry depending on
              execution model and market response.
            </>
          }
          pills={
            <>
              <DiscordPill accent>T1 HIT</DiscordPill>
              <DiscordPill>manage risk</DiscordPill>
            </>
          }
        />
      </div>

      <div className="mt-12 text-center">
        <PrimaryButton href="#tiers">Join Early Access</PrimaryButton>
      </div>
    </section>
  );
}

// ─── Benefits ──────────────────────────────────────────────────────────────

function Benefits() {
  return (
    <section id="benefits" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-2xl text-center mb-14">
        <div className="flex justify-center mb-4">
          <Eyebrow>What you get</Eyebrow>
        </div>
        <h2 className="h-display text-[clamp(28px,3.4vw,40px)] text-[color:var(--color-ink-1)]">
          Everything you need to execute with structure.
        </h2>
        <p className="mt-4 text-[15px] leading-[1.65] text-[color:var(--color-ink-2)]">
          No clutter. No hype. Clear trade plans with real-time context.
        </p>
      </div>

      {/* Asymmetric layout — break the identical-card-stamp pattern */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Featured card spans 2 cols */}
        <div
          className="lg:col-span-2 rounded-2xl p-7 sm:p-9 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, var(--color-surface-2) 0%, var(--color-surface-1) 100%)",
            border: "1px solid var(--color-line)",
          }}
        >
          <div
            aria-hidden
            className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(200,255,59,.08) 0%, transparent 70%)",
            }}
          />
          <div className="relative">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-[18px]"
                style={{
                  background: "var(--color-accent-soft)",
                  border: "1px solid var(--color-accent-line)",
                }}
              >
                📈
              </div>
              <div>
                <div className="text-[10.5px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)]">
                  01
                </div>
                <div className="text-[16px] font-medium tracking-[-0.01em] text-[color:var(--color-ink-1)]">
                  AI Trade Levels
                </div>
              </div>
            </div>
            <p className="text-[14.5px] leading-[1.65] text-[color:var(--color-ink-2)] max-w-xl">
              Actionable trade plans with <strong className="text-[color:var(--color-ink-1)] font-medium">entry, re-entry, stop, and three targets</strong>.
              Designed for clean execution and risk-defined decision-making — not
              indicator clutter.
            </p>

            {/* Mini artifact preview */}
            <div className="mt-6 grid grid-cols-4 gap-px rounded-lg overflow-hidden" style={{ background: "var(--color-line)" }}>
              {["Entry", "Stop", "T1", "T2"].map((k) => (
                <div key={k} className="bg-[color:var(--color-surface-1)] p-3">
                  <div className="text-[9.5px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-4)] mb-0.5">{k}</div>
                  <div className="text-[13px] tabular font-medium text-[color:var(--color-ink-1)]">6459.00</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — two stacked cards with different visuals */}
        <div className="grid gap-4">
          <div
            className="rounded-2xl p-6"
            style={{
              background: "var(--color-surface-1)",
              border: "1px solid var(--color-line)",
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-[16px]"
                style={{
                  background: "var(--color-surface-3)",
                  border: "1px solid var(--color-line)",
                }}
              >
                🔥
              </div>
              <div>
                <div className="text-[10.5px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)]">02</div>
                <div className="text-[15px] font-medium tracking-[-0.01em] text-[color:var(--color-ink-1)]">
                  Order Flow Intel
                </div>
              </div>
            </div>
            <p className="text-[13.5px] leading-[1.6] text-[color:var(--color-ink-2)]">
              AI-assisted analysis on liquidity, absorption, imbalances, and
              momentum — focused on where price is likely to react.
            </p>
          </div>

          <div
            className="rounded-2xl p-6"
            style={{
              background: "var(--color-surface-1)",
              border: "1px solid var(--color-line)",
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-[16px]"
                style={{
                  background: "var(--color-surface-3)",
                  border: "1px solid var(--color-line)",
                }}
              >
                🧠
              </div>
              <div>
                <div className="text-[10.5px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)]">03</div>
                <div className="text-[15px] font-medium tracking-[-0.01em] text-[color:var(--color-ink-1)]">
                  Live Context
                </div>
              </div>
            </div>
            <p className="text-[13.5px] leading-[1.6] text-[color:var(--color-ink-2)]">
              You get the why, not just the what. Bias, reasoning, and updates as
              the market shifts — so you can adapt.
            </p>
          </div>
        </div>

        {/* Full-width card spanning 3 cols */}
        <div
          className="lg:col-span-3 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-5"
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
              Built for Professional Platforms
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
              <img src="/newage-flow-ai-logo.png" alt="NewAge Flow AI logo" className="h-7 w-auto" />
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
        <Tiers />
      </main>
      <Footer />
    </div>
  );
}
