import React from "react";
import { Link } from "react-router";
import { Check } from "lucide-react";

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: readonly string[];
  ctaText: string;
  ctaLink: string;
  isPopular?: boolean;
}

export interface PricingSectionProps {
  className?: string;
}

const PRICING_PLANS: readonly PricingPlan[] = [
  {
    name: "FREE",
    price: "$0",
    period: "/forever",
    description: "Great for individuals and casual use.",
    features: [
      "Unlimited link shortening",
      "Basic click counter",
      "HTTPS security",
      "QR code (basic)",
      "Cross-device support",
    ],
    ctaText: "Get Started Free",
    ctaLink: "/register",
    isPopular: false,
  },
  {
    name: "PRO",
    price: "$9",
    period: "/per month",
    description: "For creators, marketers, and power users.",
    features: [
      "Everything in Free",
      "Custom short links",
      "Advanced analytics",
      "UTM builder",
      "QR code (custom)",
      "Browser extension",
      "Priority support",
    ],
    ctaText: "Start 14-Day Trial",
    ctaLink: "/register",
    isPopular: true,
  },
  {
    name: "BUSINESS",
    price: "$29",
    period: "/per month",
    description: "For teams and growing companies.",
    features: [
      "Everything in Pro",
      "Team dashboard",
      "Developer API",
      "Bulk link creation",
      "White-label domain",
      "App integrations",
      "Dedicated support",
    ],
    ctaText: "Subscribe Now",
    ctaLink: "/register",
    isPopular: false,
  },
];

export const PricingSection: React.FC<PricingSectionProps> = ({ className = "" }) => {
  return (
    <section className={`py-20 px-6 bg-white ${className}`.trim()}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] mb-3 tracking-tight">
            Simple, transparent pricing.
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            No hidden fees. Start free, scale when you&apos;re ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan: PricingPlan) => {
            if (plan.isPopular) {
              return (
                <div
                  key={plan.name}
                  className="bg-[#5b21f3] text-white rounded-2xl p-8 flex flex-col justify-between shadow-xl shadow-purple-500/20 md:-translate-y-2 transition-transform"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/80 mb-3">
                      {plan.name}
                    </p>

                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-4xl font-extrabold text-white">
                        {plan.price}
                      </span>
                      <span className="text-sm text-white/70">
                        {plan.period}
                      </span>
                    </div>

                    <p className="text-sm text-white/80 mb-6">
                      {plan.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature: string) => (
                        <li key={feature} className="flex items-center gap-3 text-sm">
                          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={plan.ctaLink}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-white text-[#5b21f3] text-sm font-bold hover:bg-purple-50 transition-colors shadow-xs"
                  >
                    <span>{plan.ctaText}</span>
                    <span className="text-base leading-none">→</span>
                  </Link>
                </div>
              );
            }

            return (
              <div
                key={plan.name}
                className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                    {plan.name}
                  </p>

                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-extrabold text-[#1a1a1a]">
                      {plan.price}
                    </span>
                    <span className="text-sm text-gray-400">
                      {plan.period}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mb-6">
                    {plan.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature: string) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-[#1a1a1a]">
                        <div className="w-5 h-5 rounded-full bg-[#5b21f3]/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-[#5b21f3]" strokeWidth={3} />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={plan.ctaLink}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-[#5b21f3] text-white text-sm font-bold hover:opacity-90 transition-opacity shadow-xs"
                >
                  <span>{plan.ctaText}</span>
                  <span className="text-base leading-none">→</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

