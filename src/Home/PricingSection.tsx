import React from "react";
import { Link } from "react-router";
import { ArrowRight, Check } from "lucide-react";

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
            const isPopular = Boolean(plan.isPopular);

            return (
              <div
                key={plan.name}
                className={`group relative overflow-hidden rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ease-out ${
                  isPopular
                    ? "bg-[#5b21f3] text-white shadow-xl shadow-purple-500/20 md:-translate-y-2 hover:-translate-y-2 md:hover:-translate-y-4 hover:shadow-[0_24px_55px_rgba(91,33,243,0.4)]"
                    : "bg-white border border-gray-200 shadow-xs hover:-translate-y-2 hover:border-[#5b21f3]/40 hover:shadow-[0_20px_50px_rgba(91,33,243,0.12)]"
                }`}
              >
                {isPopular ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                ) : (
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5b21f3] to-[#8b5cf6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                )}

                <div className="relative z-10">
                  <p
                    className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                      isPopular ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    {plan.name}
                  </p>

                  <div className="flex items-baseline gap-1 mb-2 transition-transform duration-300 origin-left group-hover:scale-[1.03]">
                    <span
                      className={`text-4xl font-extrabold ${
                        isPopular ? "text-white" : "text-[#1a1a1a]"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm ${
                        isPopular ? "text-white/70" : "text-gray-400"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>

                  <p
                    className={`text-sm mb-6 ${
                      isPopular ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature: string) => (
                      <li
                        key={feature}
                        className={`flex items-center gap-3 text-sm transition-transform duration-200 hover:translate-x-1 ${
                          isPopular ? "text-white" : "text-[#1a1a1a]"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                            isPopular ? "bg-white/20" : "bg-[#5b21f3]/10"
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 ${
                              isPopular ? "text-white" : "text-[#5b21f3]"
                            }`}
                            strokeWidth={3}
                          />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={plan.ctaLink}
                  className={`group/btn relative z-10 w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] ${
                    isPopular
                      ? "bg-white text-[#5b21f3] hover:bg-purple-50"
                      : "bg-[#5b21f3] text-white hover:bg-[#4c1bd9]"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    strokeWidth={2.5}
                  />
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
