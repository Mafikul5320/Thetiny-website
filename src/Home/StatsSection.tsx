import React from "react";
import AnimatedNumber from "../components/AnimatedNumber";

export interface StatItem {
  end: number;
  suffix?: string;
  decimals?: number;
  label: string;
  formattingFn?: (value: number) => string;
}

export interface StatsSectionProps {
  className?: string;
}

const formatClicks = (value: number): string =>
  value >= 1000 ? "1M+" : `${value}K+`;

const STATS: readonly StatItem[] = [
  { end: 100, suffix: "K+", label: "Links Created" },
  { end: 1000, formattingFn: formatClicks, label: "Total Clicks" },
  { end: 180, suffix: "+", label: "Countries" },
  { end: 99.9, suffix: "%", decimals: 1, label: "Uptime" },
];

export const StatsSection: React.FC<StatsSectionProps> = ({
  className = "",
}) => {
  return (
    <section
      className={`relative overflow-hidden py-10 md:py-12 ${className}`.trim()}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-r from-[#f4f5fe] to-[#eef0ff]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-white" />

      <div className="relative overflow-hidden bg-gradient-to-r from-[#4f1be0] via-[#5b21f3] to-[#6d28d9] py-12 px-6 -skew-y-2 shadow-[0_18px_45px_rgba(91,33,243,0.28)] border-y border-white/15">
        <div className="pointer-events-none absolute -top-16 -left-16 w-56 h-56 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-purple-300/20 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto skew-y-2 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(
            ({
              end,
              suffix = "",
              decimals = 0,
              formattingFn,
              label,
            }: StatItem) => (
              <div
                key={label}
                className="group text-center transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-3xl sm:text-4xl md:text-[2.4rem] font-black text-white leading-none tracking-tight transition-transform duration-300 group-hover:scale-105">
                  <AnimatedNumber
                    end={end}
                    duration={2.5}
                    decimals={decimals}
                    suffix={suffix}
                    formattingFn={formattingFn}
                  />
                </p>
                <p className="text-xs sm:text-[0.85rem] text-white/80 mt-1.5 font-medium transition-colors duration-300 group-hover:text-white">
                  {label}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
