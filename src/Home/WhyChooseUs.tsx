import React, { useEffect, useRef, useState } from "react";
import {
  Zap,
  BarChart3,
  Globe,
  QrCode,
  Lock,
  Clock,
  type LucideIcon,
} from "lucide-react";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface WhyChooseUsProps {
  className?: string;
}

const FEATURES: readonly FeatureItem[] = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Shorten URLs instantly with our optimized infrastructure",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description: "Track clicks, referrers, locations, and devices",
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Fast redirects from anywhere in the world",
  },
  {
    icon: QrCode,
    title: "QR Codes",
    description: "Generate QR codes for any shortened link",
  },
  {
    icon: Lock,
    title: "Secure",
    description: "All links are encrypted and malware scanned",
  },
  {
    icon: Clock,
    title: "Expiration Control",
    description: "Set expiry dates or click limits",
  },
];

const STAGGER_DELAYS = [
  "delay-0",
  "delay-75",
  "delay-150",
  "delay-200",
  "delay-300",
  "delay-[350ms]",
] as const;

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ className = "" }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const target = sectionRef.current;
    if (!target || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-20 px-6 bg-[#f9fafb] ${className}`.trim()}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">


          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] tracking-tight mb-3">
            Why Choose Our Platform?
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Everything you need to manage and track your links
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature: FeatureItem, index: number) => {
            const Icon = feature.icon;
            const staggerClass = STAGGER_DELAYS[index] ?? "delay-0";

            return (
              <div
                key={feature.title}
                className={`h-full transition-all duration-500 ease-out ${staggerClass} ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <div className="group relative overflow-hidden h-full p-7 rounded-2xl bg-white border border-gray-200/90 shadow-xs transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#5b21f3]/40 hover:shadow-[0_20px_50px_rgba(91,33,243,0.12)]">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5b21f3] to-[#8b5cf6] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                  <div className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#5b21f3]/[0.07] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#5b21f3]/[0.08] border border-[#5b21f3]/15 flex items-center justify-center mb-5 transition-all duration-300 ease-out group-hover:bg-[#5b21f3] group-hover:border-[#5b21f3] group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-md group-hover:shadow-purple-500/25">
                      <Icon
                        className="w-6 h-6 text-[#5b21f3] transition-colors duration-300 group-hover:text-white"
                        strokeWidth={2}
                      />
                    </div>

                    <h3 className="font-bold text-lg text-[#1a1a1a] mb-2 transition-colors duration-300 group-hover:text-[#5b21f3]">
                      {feature.title}
                    </h3>

                    <p className="text-sm text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
