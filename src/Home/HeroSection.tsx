import React from "react";
import { Link } from "react-router";
import { TrendingUp, Lock, ArrowRight } from "lucide-react";

export interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className = "" }) => {
  return (
    <section className={`hero-gradient pt-28 pb-20 px-6 ${className}`.trim()}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 bg-[#5b21f3]/[0.08] border border-[#5b21f3]/20">
            <TrendingUp className="w-3.5 h-3.5 text-[#5b21f3]" strokeWidth={2.5} />
            <span className="text-[0.8rem] font-semibold text-[#5b21f3]">
              Trusted by thousands of users
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-black text-[#1a1a1a] leading-[1.1] mb-5 tracking-tight">
            Shorten Your URL
            <br />
            <span className="text-[#5b21f3]">in seconds</span>
          </h1>

          <p className="text-[1.1rem] text-gray-500 leading-relaxed max-w-[520px] mx-auto mb-9">
            Create short, memorable links that you can share anywhere. Track every click with powerful analytics.
          </p>
        </div>

        <div className="hero-card-shadow max-w-[720px] mx-auto bg-white rounded-2xl p-8 md:p-12 text-center border border-gray-200">
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#5b21f3]/10 flex items-center justify-center">
            <Lock className="w-7 h-7 text-[#5b21f3]" />
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
              className="inline-flex items-center justify-center gap-2 bg-[#5b21f3] text-white rounded-xl px-7 py-3 text-[0.95rem] font-bold hover:opacity-90 transition-opacity"
            >
              <Lock className="w-4 h-4 text-white" />
              <span>Login to Make URL</span>
            </Link>

            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#5b21f3] border-2 border-[#5b21f3] rounded-xl px-7 py-3 text-[0.95rem] font-bold hover:bg-purple-50 transition-colors"
            >
              <span>Sign Up Free</span>
              <ArrowRight className="w-4 h-4 text-[#5b21f3]" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
