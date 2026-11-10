import React from "react";
import { Check } from "lucide-react";

export interface PremiumFeaturesProps {
  className?: string;
}

const FEATURES: readonly string[] = [
  "Custom branded short links",
  "UTM parameter builder",
  "Powerful analytics dashboard",
  "QR Code generator (PNG/SVG)",
  "REST API with full documentation",
];

const ANALYTICS_DATA = [
  { shortUrl: "shorturl.bd/ig8Kp2", clicks: "1,247", progress: 95 },
  { shortUrl: "shorturl.bd/yt3Nm8", clicks: "589", progress: 65 },
  { shortUrl: "shorturl.bd/lk7Rv1", clicks: "312", progress: 40 },
  { shortUrl: "shorturl.bd/jb2Wx9", clicks: "198", progress: 25 },
];

export const PremiumFeatures: React.FC<PremiumFeaturesProps> = ({ className = "" }) => {
  return (
    <section className={`py-20 px-6 bg-[#f8f9fc] ${className}`.trim()}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#5b21f3] mb-3">
            Premium
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] leading-tight mb-5 tracking-tight">
            Unlock powerful tools for serious growth.
          </h2>

          <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-7 max-w-lg">
            Go beyond basic shortening with a full suite of marketing and developer tools — custom branded links, UTM builders, deep analytics, QR codes, and a REST API for your apps.
          </p>

          <ul className="space-y-3.5">
            {FEATURES.map((feature: string) => (
              <li key={feature} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#5b21f3]/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#5b21f3]" strokeWidth={3} />
                </div>
                <span className="text-sm sm:text-[0.95rem] font-medium text-[#1a1a1a]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#5b21f3] rounded-2xl md:rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-purple-500/15">
          <h3 className="text-base sm:text-lg font-bold text-white mb-6">
            Link Analytics Dashboard
          </h3>

          <div className="space-y-5">
            {ANALYTICS_DATA.map(({ shortUrl, clicks, progress }) => (
              <div key={shortUrl} className="space-y-1.5">
                <div className="flex items-center justify-between font-mono text-xs sm:text-sm">
                  <span className="text-white/90 truncate mr-2">{shortUrl}</span>
                  <span className="font-bold text-white shrink-0">{clicks}</span>
                </div>
                <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white/80 rounded-full transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;

