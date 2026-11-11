import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import {
  ArrowLeft,
  Clock,
  Globe,
  Home,
  Link2Off,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface NotFoundProps {
  className?: string;
}

interface RecoveryTip {
  icon: LucideIcon;
  title: string;
  description: string;
}

const RECOVERY_TIPS: readonly RecoveryTip[] = [
  {
    icon: Globe,
    title: "Check the URL",
    description: "Short links are case-sensitive. Verify every character.",
  },
  {
    icon: Clock,
    title: "Link Expired",
    description: "The owner may have set an expiration date or click limit.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Browsing",
    description: "Links flagged by security scans are automatically disabled.",
  },
];

export const NotFound: React.FC<NotFoundProps> = ({ className = "" }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <section
      className={`hero-gradient relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center justify-center py-16 px-6 ${className}`.trim()}
    >
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#5b21f3]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#8b5cf6]/10 blur-3xl pointer-events-none" />

      <div className="hero-card-shadow relative z-10 max-w-2xl w-full bg-white/95 backdrop-blur-sm rounded-3xl border border-gray-200/80 p-8 sm:p-12 md:p-14 text-center">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 bg-[#5b21f3]/[0.08] border border-[#5b21f3]/20">
          <Link2Off className="w-3.5 h-3.5 text-[#5b21f3]" strokeWidth={2.5} />
          <span className="text-xs font-semibold tracking-wide text-[#5b21f3]">
            404 · Page or Short Link Not Found
          </span>
        </div>

        <p className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter leading-none select-none bg-gradient-to-br from-[#1a1a1a] via-[#5b21f3] to-[#8b5cf6] bg-clip-text text-transparent mb-4">
          404
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a1a1a] tracking-tight mb-3">
          This link went missing
        </h1>

        <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto leading-relaxed mb-6">
          The page or shortened URL you requested could not be found. It may have been moved, expired, or mistyped.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-600 font-mono max-w-full mb-8">
          <span className="w-2 h-2 rounded-full bg-[#5b21f3] shrink-0" />
          <span className="truncate">thetiny.site{pathname}</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#5b21f3] text-white rounded-xl px-7 py-3.5 text-sm font-bold hover:opacity-90 transition-opacity shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#1a1a1a] border border-gray-200 rounded-xl px-7 py-3.5 text-sm font-bold hover:border-[#5b21f3]/40 hover:text-[#5b21f3] hover:bg-purple-50/40 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {RECOVERY_TIPS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl bg-[#f8f9fc] border border-gray-100 p-4"
            >
              <div className="w-8 h-8 rounded-lg bg-[#5b21f3]/10 flex items-center justify-center mb-2.5">
                <Icon className="w-4 h-4 text-[#5b21f3]" />
              </div>
              <p className="text-xs font-bold text-[#1a1a1a] mb-1">{title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotFound;

