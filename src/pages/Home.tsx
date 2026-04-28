import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const BRAND = "NewAge Flow AI";

const TIER_LINKS = {
  early: "https://whop.com/newageflowai/test-f7-6691/",
  standard: "https://whop.com/newageflowai/standard-25/",
  pro: "https://whop.com/newageflowai/pro-0b-9291/",
};

type FaqItem = {
  q: string;
  a: React.ReactNode;
  tags?: string[];
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
      {children}
    </span>
  );
}

function GlowBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute top-48 -left-28 h-[460px] w-[460px] rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,.75)_100%)]" />
    </div>
  );
}

function FaqRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,.08),0_18px_60px_rgba(0,0,0,.65)] backdrop-blur">
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <div>
          <div className="text-base font-semibold text-white">{item.q}</div>
          {item.tags?.length ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-white/80">
          {isOpen ? "−" : "+"}
        </div>
      </button>

      {isOpen ? (
        <div className="mt-4 space-y-3 text-sm leading-6 text-white/75">
          {item.a}
        </div>
      ) : null}
    </div>
  );
}

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
              After you purchase on Whop, you must complete the <strong>Discord Claim Access</strong>{" "}
              step to receive your server role.
            </p>
            <ol className="list-decimal space-y-2 pl-5">
              <li>Log in to Whop using the same account you used to purchase.</li>
              <li>Open your product page and click the <strong>Discord</strong> app.</li>
              <li>Click <strong>Claim Access</strong>.</li>
              <li>Approve the Discord authorization.</li>
            </ol>
            <p className="text-white/60">
              If still having trouble with Discord account roles contact support@newageflowai.com
            </p>
          </>
        ),
      },
      {
        q: "I purchased but I still can’t see the channels. What do I do?",
        tags: ["Troubleshooting"],
        a: (
          <>
            <p>Try these in order:</p>
            <ol className="list-decimal space-y-2 pl-5">
              <li>Go back to Whop → Discord app → click <strong>Claim Access</strong> again.</li>
              <li>Leave and re-join the Discord server, then re-claim access.</li>
              <li>Close Discord completely and reopen (or log out/in).</li>
              <li>Make sure your tier is active (not expired / failed payment).</li>
            </ol>
	    <p className="text-white/60">
              If still having trouble with Discord channels contact support@newageflowai.com
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
            <ul className="list-disc space-y-2 pl-5">
              <li>You haven’t completed the <strong>Claim Access</strong> step.</li>
              <li>You are logged into a different Discord account than the one you want access on.</li>
            </ul>
            <p className="text-white/60">
              If still having trouble with Discord roles contact support@newageflowai.com
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
              Yes. Linking happens automatically when you click <strong>Claim Access</strong>.
              Without linking, Whop can’t assign your Discord role.
            </p>
            <p className="text-white/60">
              If still having trouble with Discord link to Whop contact support@newageflowai.com
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
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <a
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
                href={TIER_LINKS.early}
                target="_blank"
                rel="noreferrer"
              >
                Early Access
              </a>
              <a
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
                href={TIER_LINKS.standard}
                target="_blank"
                rel="noreferrer"
              >
                Standard
              </a>
              <a
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
                href={TIER_LINKS.pro}
                target="_blank"
                rel="noreferrer"
              >
                Pro
              </a>
            </div>
            <p className="mt-3 text-white/60">
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
              Manage your subscription inside Whop. After changing tiers, go to the product’s Discord app and
              click <strong>Claim Access</strong> again so your role updates.
            </p>
       <p className="text-white/60">
              If still having trouble with your subscription contact support@newageflowai.com
            </p>
          </>
        ),
      },
      {
        q: "Is this financial advice? Are results guaranteed?",
        tags: ["Disclaimer"],
        a: (
          <>
            <p>
              No. {BRAND} is for educational purposes only. Trading involves risk and results are not guaranteed.
              You are responsible for your own decisions and risk management.
            </p>
          </>
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
    <div className="relative min-h-screen text-white">
      <GlowBg />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/25 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <img
              src="/newage-flow-ai-logo.png"
              alt="NewAge Flow AI logo"
              className="h-10 w-auto max-w-[180px] object-contain"
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-white">{BRAND}</div>
              <div className="text-xs text-white/60">Support • FAQ</div>
            </div>
          </div>

          <nav className="flex items-center gap-4 text-sm">
            <Link className="text-white/70 hover:text-white" to="/">
              Home
            </Link>
            <a className="text-white/70 hover:text-white" href="#tiers">
              Tiers
            </a>
          </nav>
        </div>
      </header>

      <main className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="text-center">
          <div className="flex justify-center">
            <Badge>Help Center</Badge>
          </div>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
            Quick answers for Discord access, Whop tier setup, and troubleshooting.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search FAQ… (claim access, roles, preview, upgrade)"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20"
          />
          <div className="mt-2 text-xs text-white/50">
            Try: <span className="text-white/70">claim</span>,{" "}
            <span className="text-white/70">preview</span>,{" "}
            <span className="text-white/70">roles</span>,{" "}
            <span className="text-white/70">upgrade</span>.
          </div>
        </div>

        <div className="mt-10 grid gap-4">
          {filtered.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <FaqRow
                key={`${item.q}-${idx}`}
                item={item}
                isOpen={isOpen}
                onToggle={() => setOpenIndex(isOpen ? null : idx)}
              />
            );
          })}
        </div>

        <section
          id="tiers"
          className="mx-auto mt-12 max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,.08),0_18px_60px_rgba(0,0,0,.65)] backdrop-blur sm:p-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <div className="text-sm font-semibold text-white">Join a Tier</div>
              <div className="mt-1 text-sm text-white/70">
                Purchase the tier on Whop, then claim Discord access.
              </div>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={TIER_LINKS.early}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
              >
                Early Access
              </a>
              <a
                href={TIER_LINKS.standard}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Standard
              </a>
              <a
                href={TIER_LINKS.pro}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Pro
              </a>
            </div>
          </div>
        </section>

        <p className="mt-10 text-center text-xs leading-5 text-white/45">
          Trading involves risk. This FAQ is for guidance only and does not constitute financial advice.
        </p>
      </main>
    </div>
  );
}
