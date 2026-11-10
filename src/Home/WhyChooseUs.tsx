import React from "react";
import { Zap, BarChart3, Globe, QrCode, Lock, Clock, type LucideIcon } from "lucide-react";

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

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ className = "" }) => {
  return (
    <section className={`py-20 px-6 bg-[#f9fafb] ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] mb-3">
            Why Choose Our Platform?
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Everything you need to manage and track your links
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs hover:shadow-md transition-shadow"
              >
                <Icon className="w-8 h-8 text-[#5b21f3]" strokeWidth={2} />
                <h3 className="font-bold text-lg text-[#1a1a1a] mt-4 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

