import React from "react";

export interface StatItem {
  value: string;
  label: string;
}

export interface StatsSectionProps {
  className?: string;
}

const STATS: readonly StatItem[] = [
  { value: "100K+", label: "Links Created" },
  { value: "1M+", label: "Total Clicks" },
  { value: "180+", label: "Countries" },
  { value: "99.9%", label: "Uptime" },
];

export const StatsSection: React.FC<StatsSectionProps> = ({ className = "" }) => {
  return (
    <section className={`bg-[#5b21f3] py-12 px-6 ${className}`.trim()}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map(({ value, label }: StatItem) => (
          <div key={label} className="text-center">
            <p className="text-3xl sm:text-4xl md:text-[2.4rem] font-black text-white leading-none tracking-tight">
              {value}
            </p>
            <p className="text-xs sm:text-[0.85rem] text-white/80 mt-1.5 font-medium">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

