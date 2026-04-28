import React from "react";

const TIER_LINKS = {
  early: "https://whop.com/newageflowai/test-f7-6691/", // update if needed
};

export default function Faq() {
  return (
    <div className="min-h-screen bg-[#060913] text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-3xl font-bold mb-6">FAQ</h1>

        {/* FAQ ITEMS */}
        <div className="space-y-6">

          <div>
            <h2 className="text-xl font-semibold">Is this financial advice?</h2>
            <p className="text-gray-400 mt-2">
              No. NewAge Flow AI provides educational market analysis only.
              You are responsible for your own trades and risk management.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">What markets do you cover?</h2>
            <p className="text-gray-400 mt-2">
              Primarily futures markets such as ES and NQ, using order flow and AI-driven context.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">How are signals delivered?</h2>
            <p className="text-gray-400 mt-2">
              Signals are posted in Discord with a structured format:
              bias, entry, stop, and targets, along with concise reasoning.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Where do I join?</h2>
            <p className="text-gray-400 mt-2">
              You can join using the Early Access membership below:
            </p>

            <a
              href={TIER_LINKS.early}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-5 py-2 bg-white text-black rounded-lg font-semibold hover:opacity-90"
            >
              Join Early Access
            </a>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Can I cancel anytime?</h2>
            <p className="text-gray-400 mt-2">
              Yes. Membership is monthly and you can cancel at any time through Whop.
            </p>
          </div>

        </div>

        {/* CTA SECTION */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          
          <a
            href={TIER_LINKS.early}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black rounded-xl font-bold text-lg hover:opacity-90"
          >
            Join Early Access
          </a>

          <p className="text-gray-500 text-sm mt-4">
            ⚠️ Educational analysis only. Not financial advice.
          </p>
        </div>

      </div>
    </div>
  );
}
