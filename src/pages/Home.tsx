import React from "react";

const TIER_LINKS = {
  early: "https://whop.com/newageflowai/test-f7-6691/", // update if needed
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#060913] text-white">

      {/* HERO */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          NewAge Flow AI
        </h1>

        <p className="mt-4 text-lg text-gray-400">
          AI-powered order flow trade ideas delivered in real-time.
          Structured. Clear. Risk-focused.
        </p>

        <div className="mt-8">
          <a
            href={TIER_LINKS.early}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black rounded-xl font-bold text-lg hover:opacity-90"
          >
            Join Early Access
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          ⚠️ Educational analysis only. Not financial advice.
        </p>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-16 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="font-semibold text-lg">AI Trade Signals</h3>
          <p className="text-gray-400 mt-2 text-sm">
            Bias, entry, stop, and targets delivered in a clear format.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="font-semibold text-lg">Order Flow Context</h3>
          <p className="text-gray-400 mt-2 text-sm">
            Liquidity, delta shifts, and structure explained simply.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="font-semibold text-lg">Discord Delivery</h3>
          <p className="text-gray-400 mt-2 text-sm">
            Real-time alerts directly inside your Discord server.
          </p>
        </div>

      </section>

      {/* EARLY ACCESS PRICING */}
      <section className="px-6 py-16 text-center max-w-3xl mx-auto">

        <h2 className="text-3xl font-bold mb-6">Early Access</h2>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">

          <div className="text-4xl font-bold">$49</div>
          <div className="text-gray-400 mb-6">/month</div>

          <ul className="text-gray-300 space-y-2 mb-6">
            <li>✔ AI trade signals (ES/NQ)</li>
            <li>✔ Entry, stop, and targets</li>
            <li>✔ Order flow reasoning</li>
            <li>✔ Daily recaps</li>
            <li>✔ Community access</li>
          </ul>

          <a
            href={TIER_LINKS.early}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white text-black rounded-xl font-bold hover:opacity-90"
          >
            Join Early Access
          </a>

          <p className="text-xs text-gray-500 mt-4">
            Limited spots during early rollout
          </p>
        </div>

      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 text-center max-w-3xl mx-auto">

        <h2 className="text-3xl font-bold">
          Start trading with structured AI insights
        </h2>

        <div className="mt-6">
          <a
            href={TIER_LINKS.early}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-black rounded-xl font-bold text-lg hover:opacity-90"
          >
            Join Early Access
          </a>
        </div>

      </section>

    </div>
  );
}
