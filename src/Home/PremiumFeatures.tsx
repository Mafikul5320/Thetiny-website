import React, { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import AnimatedNumber from "../components/AnimatedNumber";

export interface AnalyticsMetric {
  shortUrl: string;
  clicks: number;
  barWidthClass: string;
  delayClass: string;
}

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

const ANALYTICS_DATA: readonly AnalyticsMetric[] = [
  {
    shortUrl: "shorturl.bd/ig8Kp2",
    clicks: 1247,
    barWidthClass: "w-[95%]",
    delayClass: "delay-100",
  },
  {
    shortUrl: "shorturl.bd/yt3Nm8",
    clicks: 589,
    barWidthClass: "w-[65%]",
    delayClass: "delay-200",
  },
  {
    shortUrl: "shorturl.bd/lk7Rv1",
    clicks: 312,
    barWidthClass: "w-[40%]",
    delayClass: "delay-300",
  },
  {
    shortUrl: "shorturl.bd/jb2Wx9",
    clicks: 198,
    barWidthClass: "w-[25%]",
    delayClass: "delay-[400ms]",
  },
];

export const PremiumFeatures: React.FC<PremiumFeaturesProps> = ({
  className = "",
}) => {
  const dashboardRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const target = dashboardRef.current;
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
      { threshold: 0.05 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

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
              <li
                key={feature}
                className="group flex items-center gap-3 transition-transform duration-200 hover:translate-x-1"
              >
                <div className="w-5 h-5 rounded-full bg-[#5b21f3]/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#5b21f3] group-hover:scale-110">
                  <Check
                    className="w-3 h-3 text-[#5b21f3] transition-colors duration-300 group-hover:text-white"
                    strokeWidth={3}
                  />
                </div>
                <span className="text-sm sm:text-[0.95rem] font-medium text-[#1a1a1a]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          ref={dashboardRef}
          className="group relative overflow-hidden bg-[#5b21f3] rounded-2xl md:rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-purple-500/20 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(91,33,243,0.35)]"
        >
          <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/10 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 w-44 h-44 rounded-full bg-purple-300/15 blur-3xl opacity-50 group-hover:opacity-90 transition-opacity duration-500" />

          <div className="relative z-10">
            <h3 className="text-base sm:text-lg font-bold text-white mb-6">
              Link Analytics Dashboard
            </h3>

            <div className="space-y-5">
              {ANALYTICS_DATA.map(
                ({
                  shortUrl,
                  clicks,
                  barWidthClass,
                  delayClass,
                }: AnalyticsMetric) => (
                  <div
                    key={shortUrl}
                    className="group/row space-y-1.5 rounded-xl p-2 -mx-2 transition-colors duration-200 hover:bg-white/[0.08]"
                  >
                    <div className="flex items-center justify-between font-mono text-xs sm:text-sm">
                      <span className="text-white/90 truncate mr-2">
                        {shortUrl}
                      </span>
                      <span className="font-bold text-white shrink-0">
                        <AnimatedNumber
                          end={clicks}
                          duration={2}
                          separator=","
                        />
                      </span>
                    </div>

                    <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                      <div
                        className={`relative overflow-hidden h-full ${barWidthClass} bg-white/80 rounded-full origin-left transition-transform duration-1000 ease-out ${delayClass} ${
                          isVisible ? "scale-x-100" : "scale-x-0"
                        }`}
                      >
                        <span className="animate-shimmer absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;
