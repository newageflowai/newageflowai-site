// src/pages/Faq.tsx
// NewAge Flow AI — FAQ / Help Center
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { TIERS } from "../tiers";

const BRAND = "NewAge Flow AI";
const TAGLINE = "Support · Discord Access · Whop";

// ─── Primitives ────────────────────────────────────────────────────────────

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow">
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--color-pos)] shadow-[0_0_10px_var(--color-pos)]" />
      {children}
    </span>
  );
}

function PrimaryButton({
  href,
  external = false,
  children,
  full = false,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={
        "group inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg text-[13.5px] font-medium tracking-[-0.01em] text-[color:var(--color-accent-ink)] bg-[color:var(--color-accent)] transition-all duration-200 hover:-translate-y-px active:translate-y-0 " +
        (full ? "w-full" : "")
      }
      style={{
        boxShadow:
          "0 0 0 1px var(--color-accent-line), 0 1px 0 rgba(255,255,255,.4) inset, 0 0 24px var(--color-accent-glow)",
      }}
    >
      {children}
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>
        <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

function GhostButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg text-[13.5px] font-medium tracking-[-0.01em] text-[color:var(--color-ink-1)] bg-[color:var(--color-surface-1)] border border-[color:var(--color-line)] transition-all duration-200 hover:bg-[color:var(--color-surface-2)] hover:border-[color:var(--color-ink-4)]"
    >
      {children}
    </a>
  );
}

// ─── FAQ row ───────────────────────────────────────────────────────────────

type FaqItem = {
  q: string;
  a: React.ReactNode;
  tags?: string[];
};

function FaqPill({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-mono tracking-[0.02em]"
      style={
        accent
          ? { background: "var(--color-accent-soft)", color: "var(--color-accent)", border: "1px solid var(--color-accent-line)" }
          : { background: "var(--color-surface-2)", color: "var(--color-ink-2)", border: "1px solid var(--color-line)" }
      }
    >
      {children}
    </span>
  );
}

function FaqRow({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "var(--color-surface-1)",
        border: "1px solid var(--color-line)",
      }}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 text-left px-5 py-4"
        aria-expanded={isOpen}
      >
        <div className="flex-1">
          <div className="text-[14.5px] font-medium tracking-[-0.005em] text-[color:var(--color-ink-1)]">
            {item.q}
          </div>
          {item.tags?.length ? (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {item.tags.map((t) => (
                <FaqPill key={t}>{t}</FaqPill>
              ))}
            </div>
          ) : null}
        </div>

        <span
          className="mt-0.5 flex w-7 h-7 shrink-0 items-center justify-center rounded-md text-[14px] font-mono transition-colors"
          style={{
            background: "var(--color-surface-3)",
            border: "1px solid var(--color-line)",
            color: "var(--color-ink-1)",
          }}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen ? (
        <div
          className="px-5 pb-5 pt-1 space-y-3 text-[13.5px] leading-[1.65] text-[color:var(--color-ink-2)] border-t"
          style={{ borderColor: "var(--color-line)" }}
        >
          <div className="pt-4">{item.a}</div>
        </div>
      ) : null}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function Faq() {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items: FaqItem[] = useMemo(
    () => [
      {
        q: "How do I get Discord access after purchasing a tier?",
        tags: ["Access", "Discord", "Whop"],
        a: (
          <>
            <p>
              After you purchase on Whop, you must complete the{" "}
              <strong className="text-[color:var(--color-ink-1)] font-medium">Discord Claim Access</strong>{" "}
              step to receive your server role.
            </p>
            <ol className="list-decimal space-y-1.5 pl-5 marker:text-[color:var(--color-ink-3)]">
              <li>Log in to Whop using the same account you used to purchase.</li>
              <li>Open your product page and click the <strong className="text-[color:var(--color-ink-1)] font-medium">Discord</strong> app.</li>
              <li>Click <strong className="text-[color:var(--color-ink-1)] font-medium">Claim Access</strong>.</li>
              <li>Approve the Discord authorization.</li>
            </ol>
            <p className="text-[12px] text-[color:var(--color-ink-4)]">
              Still having trouble? Email <a className="text-[color:var(--color-accent)] hover:underline" href="mailto:support@newageflowai.com">support@newageflowai.com</a>.
            </p>
          </>
        ),
      },
      {
        q: "I purchased but I still can't see the channels. What do I do?",
        tags: ["Troubleshooting"],
        a: (
          <>
            <p>Try these in order:</p>
            <ol className="list-decimal space-y-1.5 pl-5 marker:text-[color:var(--color-ink-3)]">
              <li>Go back to Whop → Discord app → click <strong className="text-[color:var(--color-ink-1)] font-medium">Claim Access</strong> again.</li>
              <li>Leave and re-join the Discord server, then re-claim access.</li>
              <li>Close Discord completely and reopen (or log out/in).</li>
              <li>Make sure your tier is active (not expired / failed payment).</li>
            </ol>
            <p className="text-[12px] text-[color:var(--color-ink-4)]">
              Still having trouble? Email <a className="text-[color:var(--color-accent)] hover:underline" href="mailto:support@newageflowai.com">support@newageflowai.com</a>.
            </p>
          </>
        ),
      },
      {
        q: "Why do I only see a preview message or no role assignment?",
        tags: ["Roles", "Testing"],
        a: (
          <>
            <p>This usually happens for one of these reasons:</p>
            <ul className="list-disc space-y-1.5 pl-5 marker:text-[color:var(--color-ink-3)]">
              <li>You haven't completed the <strong className="text-[color:var(--color-ink-1)] font-medium">Claim Access</strong> step.</li>
              <li>You are logged into a different Discord account than the one you want access on.</li>
            </ul>
            <p className="text-[12px] text-[color:var(--color-ink-4)]">
              Still having trouble? Email <a className="text-[color:var(--color-accent)] hover:underline" href="mailto:support@newageflowai.com">support@newageflowai.com</a>.
            </p>
          </>
        ),
      },
      {
        q: "Do I need to link Discord to Whop first?",
        tags: ["Setup"],
        a: (
          <>
            <p>
              Yes. Linking happens automatically when you click{" "}
              <strong className="text-[color:var(--color-ink-1)] font-medium">Claim Access</strong>.
              Without linking, Whop can't assign your Discord role.
            </p>
            <p className="text-[12px] text-[color:var(--color-ink-4)]">
              Still having trouble? Email <a className="text-[color:var(--color-accent)] hover:underline" href="mailto:support@newageflowai.com">support@newageflowai.com</a>.
            </p>
          </>
        ),
      },
      {
        q: "Where do I join? (Tier links)",
        tags: ["Tiers"],
        a: (
          <>
            <p>Choose your tier below:</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {TIERS.map((t) => (
                <a
                  key={t.id}
                  href={t.url ?? "#"}
                  target={t.url ? "_blank" : undefined}
                  rel={t.url ? "noreferrer" : undefined}
                  aria-disabled={t.status === "coming_soon"}
                  className={
                    "rounded-xl px-4 py-3 text-center text-[13px] font-medium tracking-[-0.01em] transition-all duration-200 " +
                    (t.status === "coming_soon"
                      ? "opacity-60 cursor-not-allowed"
                      : "hover:-translate-y-px")
                  }
                  style={
                    t.highlight
                      ? {
                          background: "var(--color-accent)",
                          color: "var(--color-accent-ink)",
                          boxShadow: "0 0 24px var(--color-accent-glow)",
                        }
                      : {
                          background: "var(--color-surface-2)",
                          color: "var(--color-ink-1)",
                          border: "1px solid var(--color-line)",
                        }
                  }
                >
                  {t.name}
                </a>
              ))}
            </div>
            <p className="mt-4 text-[12px] text-[color:var(--color-ink-4)]">
              After purchase, Whop will prompt you to claim Discord access and assign the correct role.
            </p>
          </>
        ),
      },
      {
        q: "How do I upgrade or downgrade tiers?",
        tags: ["Billing"],
        a: (
          <>
            <p>
              Manage your subscription inside Whop. After changing tiers, go to the product's
              Discord app and click <strong className="text-[color:var(--color-ink-1)] font-medium">Claim Access</strong>{" "}
              again so your role updates.
            </p>
            <p className="text-[12px] text-[color:var(--color-ink-4)]">
              Still having trouble? Email <a className="text-[color:var(--color-accent)] hover:underline" href="mailto:support@newageflowai.com">support@newageflowai.com</a>.
            </p>
          </>
        ),
      },
      {
        q: "Is this financial advice? Are results guaranteed?",
        tags: ["Disclaimer"],
        a: (
          <p>
            No. {BRAND} is for educational purposes only. Trading involves risk and results are
            not guaranteed. You are responsible for your own decisions and risk management.
          </p>
        ),
      },
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((it) => {
      const inQ = it.q.toLowerCase().includes(q);
      const inTags = (it.tags ?? []).join(" ").toLowerCase().includes(q);
      return inQ || inTags;
    });
  }, [items, query]);

  return (
    <div className="min-h-screen relative" style={{ background: "var(--color-canvas)" }}>
      <header
        className="sticky top-0 z-50 backdrop-blur-md"
        style={{
          background: "rgba(7,9,15,.72)",
          borderBottom: "1px solid var(--color-line)",
        }}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3.5 sm:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img src="/newage-flow-ai-logo.png" alt="NewAge Flow AI logo" className="h-9 w-auto object-contain" />
            <div className="hidden sm:block leading-tight">
              <div className="text-[13px] font-medium tracking-[-0.01em] text-[color:var(--color-ink-1)]">{BRAND}</div>
              <div className="text-[10.5px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)]">{TAGLINE}</div>
            </div>
          </Link>

          <nav className="flex items-center gap-4 sm:gap-6">
            <Link to="/" className="text-[13px] text-[color:var(--color-ink-2)] hover:text-[color:var(--color-ink-1)] transition-colors">
              Home
            </Link>
            <a href="#tiers" className="hidden sm:inline text-[13px] text-[color:var(--color-ink-2)] hover:text-[color:var(--color-ink-1)] transition-colors">
              Tiers
            </a>
            <PrimaryButton href={TIERS[0].url ?? "#"} external>Join</PrimaryButton>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[1000px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Eyebrow>Help Center</Eyebrow>
          </div>
          <h1 className="h-display text-[clamp(36px,4.6vw,56px)] text-[color:var(--color-ink-1)]">
            Frequently asked questions.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.65] text-[color:var(--color-ink-2)]">
            Quick answers for Discord access, Whop tier setup, and troubleshooting.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto max-w-2xl mb-10">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[color:var(--color-ink-3)]"
              width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden
            >
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
              <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search FAQ… (claim access, roles, preview, upgrade)"
              className="w-full h-12 pl-11 pr-4 rounded-xl text-[14px] text-[color:var(--color-ink-1)] placeholder:text-[color:var(--color-ink-4)] outline-none transition-colors"
              style={{
                background: "var(--color-surface-1)",
                border: "1px solid var(--color-line)",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-ink-4)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-line)")}
            />
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-[11.5px] font-mono tracking-[0.02em] text-[color:var(--color-ink-4)]">
            <span>Try:</span>
            {["claim", "preview", "roles", "upgrade"].map((t) => (
              <button
                key={t}
                onClick={() => setQuery(t)}
                className="px-2 py-0.5 rounded-md transition-colors hover:text-[color:var(--color-ink-1)]"
                style={{
                  background: "var(--color-surface-2)",
                  border: "1px solid var(--color-line)",
                  color: "var(--color-ink-2)",
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          {filtered.length === 0 ? (
            <div
              className="rounded-2xl p-10 text-center text-[13.5px] text-[color:var(--color-ink-3)]"
              style={{
                background: "var(--color-surface-1)",
                border: "1px solid var(--color-line)",
              }}
            >
              No matches for "{query}". Try a different keyword.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <FaqRow
                  key={`${item.q}-${idx}`}
                  item={item}
                  isOpen={isOpen}
                  onToggle={() => setOpenIndex(isOpen ? null : idx)}
                />
              );
            })
          )}
        </div>

        {/* Tier CTA — terminal-style block */}
        <section
          id="tiers"
          className="mt-16 rounded-2xl p-7 sm:p-9 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, var(--color-surface-2) 0%, var(--color-surface-1) 100%)",
            border: "1px solid var(--color-line)",
          }}
        >
          <div
            aria-hidden
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(200,255,59,.08) 0%, transparent 70%)",
            }}
          />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1">
              <div className="text-[10.5px] font-mono tracking-[0.08em] uppercase text-[color:var(--color-ink-3)] mb-1.5">
                Ready to start
              </div>
              <div className="text-[18px] font-medium tracking-[-0.01em] text-[color:var(--color-ink-1)] mb-1.5">
                Pick a tier and claim Discord access.
              </div>
              <p className="text-[13px] text-[color:var(--color-ink-2)]">
                Purchase on Whop, then complete the Claim Access flow to join the server.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <GhostButton href={TIERS.find((t) => t.id === "free")?.url ?? "#"}>
                Start Free
              </GhostButton>
              <PrimaryButton href={TIERS.find((t) => t.id === "early")?.url ?? "#"} external>
                Join Early Access
              </PrimaryButton>
            </div>
          </div>
        </section>

        <p className="mt-10 text-center text-[11.5px] leading-[1.55] text-[color:var(--color-ink-4)]">
          Trading involves risk. This FAQ is for guidance only and does not constitute financial advice.
        </p>
      </main>
    </div>
  );
}
