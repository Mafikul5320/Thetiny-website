import React from "react";
import { Link } from "react-router";
import { TrendingUp, Lock, ArrowRight } from "lucide-react";

export interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className = "" }) => {
  return (
    <section
      className={`hero-gradient relative overflow-hidden pt-16 pb-20 px-6 ${className}`.trim()}
    >
      <div className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-[#5b21f3]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-[#8b5cf6]/[0.07] blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 bg-[#5b21f3]/[0.08] border border-[#5b21f3]/20 backdrop-blur-xs shadow-2xs transition-all duration-300 hover:bg-[#5b21f3]/[0.12] hover:border-[#5b21f3]/35">
            <TrendingUp
              className="w-3.5 h-3.5 text-[#5b21f3]"
              strokeWidth={2.5}
            />
            <span className="text-[0.8rem] font-semibold text-[#5b21f3]">
              Trusted by thousands of users
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-black text-[#1a1a1a] leading-[1.1] mb-5 tracking-tight">
            Shorten Your URL
            <br />
            <span className="bg-gradient-to-r from-[#5b21f3] via-[#6d28d9] to-[#8b5cf6] bg-clip-text text-transparent">
              in seconds
            </span>
          </h1>

          <p className="text-[1.1rem] text-gray-500 leading-relaxed max-w-[520px] mx-auto mb-9">
            Create short, memorable links that you can share anywhere. Track every click with powerful analytics.
          </p>
        </div>

        <div className="max-w-[720px] mx-auto animate-fade-up-delay">
          <div className="group relative overflow-hidden hero-card-shadow bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center border border-gray-200/80 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#5b21f3]/35 hover:shadow-[0_20px_60px_rgba(91,33,243,0.16)]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5b21f3] to-[#8b5cf6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#5b21f3]/10 border border-[#5b21f3]/15 flex items-center justify-center transition-all duration-300 group-hover:bg-[#5b21f3] group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-purple-500/25">
              <Lock className="w-7 h-7 text-[#5b21f3] transition-colors duration-300 group-hover:text-white" />
            </div>

            <h3 className="text-[1.4rem] font-extrabold text-[#1a1a1a] mb-2.5">
              Login to make your URL short
            </h3>

            <p className="text-[0.95rem] text-gray-500 leading-relaxed max-w-[440px] mx-auto mb-6">
              Sign in or create a free account to start shortening links, generating QR codes, and tracking every click in real time.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 bg-[#5b21f3] text-white rounded-xl px-7 py-3 text-[0.95rem] font-bold shadow-md shadow-purple-500/20 hover:bg-[#4c1bd9] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30 active:scale-[0.98] transition-all duration-200"
              >
                <Lock className="w-4 h-4 text-white" />
                <span>Login to Make URL</span>
              </Link>

              <Link
                to="/register"
                className="group/btn inline-flex items-center justify-center gap-2 bg-white text-[#5b21f3] border-2 border-[#5b21f3] rounded-xl px-7 py-3 text-[0.95rem] font-bold hover:bg-[#5b21f3]/[0.06] hover:-translate-y-0.5 hover:shadow-sm active:scale-[0.98] transition-all duration-200"
              >
                <span>Sign Up Free</span>
                <ArrowRight
                  className="w-4 h-4 text-[#5b21f3] transition-transform duration-200 group-hover/btn:translate-x-1"
                  strokeWidth={2.5}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
