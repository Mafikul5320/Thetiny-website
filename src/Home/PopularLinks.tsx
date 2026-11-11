import React, { useState } from "react";
import {
  Check,
  Copy,
  ExternalLink,
  MousePointerClick,
  QrCode,
  X,
} from "lucide-react";
import AnimatedNumber from "../components/AnimatedNumber";

export interface PopularLinkItem {
  id: string | number;
  short_url: string;
  original_url: string;
  clicks: number;
}

export interface PopularLinksProps {
  className?: string;
  links?: readonly PopularLinkItem[];
}

const DEFAULT_POPULAR_LINKS: readonly PopularLinkItem[] = [
  {
    id: 1,
    short_url: "https://thetiny.site/ARLSeN",
    original_url:
      "https://api.whatsapp.com/send?phone=8801880811048&text=i+want+to+be+a+...",
    clicks: 420,
  },
  {
    id: 2,
    short_url: "https://thetiny.site/BArxcj",
    original_url: "https://lcona45945.softr.app",
    clicks: 269,
  },
  {
    id: 3,
    short_url: "https://thetiny.site/kLrnXd",
    original_url:
      "https://supportersframe.com/blog/supportersframecom-introduces-qr-code...",
    clicks: 85,
  },
  {
    id: 4,
    short_url: "https://thetiny.site/qQNTp0",
    original_url:
      "https://docs.google.com/forms/d/e/1FAIpQLSf3aBfGp4uunkBsQVL_zLWcwkWh...",
    clicks: 64,
  },
  {
    id: 5,
    short_url: "https://thetiny.site/k4dIpS",
    original_url: "https://solverfirm.com/",
    clicks: 33,
  },
];

export const PopularLinks: React.FC<PopularLinksProps> = ({
  className = "",
  links = DEFAULT_POPULAR_LINKS,
}) => {
  const [copiedId, setCopiedId] = useState<string | number | null>(null);
  const [activeQrLink, setActiveQrLink] = useState<PopularLinkItem | null>(
    null
  );

  const handleCopy = (item: PopularLinkItem): void => {
    navigator.clipboard.writeText(item.short_url);
    setCopiedId(item.id);
    setTimeout(() => {
      setCopiedId((current) => (current === item.id ? null : current));
    }, 2000);
  };

  return (
    <section className={`py-20 px-6 bg-white ${className}`.trim()}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] mb-3 tracking-tight">
            Most Popular Links
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Check out the most clicked links on our platform
          </p>
        </div>

        <div className="flex flex-col gap-3.5">
          {links.map((item: PopularLinkItem) => {
            const isCopied = copiedId === item.id;

            return (
              <div
                key={item.id}
                className="group relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/90 shadow-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#5b21f3]/40 hover:shadow-[0_14px_35px_rgba(91,33,243,0.1)]"
              >
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#5b21f3] to-[#8b5cf6] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out" />

                <div className="flex-1 min-w-0">
                  <a
                    href={item.short_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm sm:text-[0.95rem] font-bold text-[#5b21f3] hover:underline break-all inline-flex items-center gap-1.5"
                  >
                    <span>{item.short_url}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
                  </a>
                  <p
                    className="text-xs text-gray-400 truncate mt-1"
                    title={item.original_url}
                  >
                    {item.original_url}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 shrink-0 self-start sm:self-center">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f8f9fc] border border-gray-200/80 transition-colors duration-200 group-hover:border-[#5b21f3]/20 group-hover:bg-[#5b21f3]/[0.05]">
                    <MousePointerClick className="w-3.5 h-3.5 text-[#5b21f3]" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-700">
                      <AnimatedNumber
                        end={item.clicks}
                        duration={1.8}
                        separator=","
                      />{" "}
                      clicks
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(item)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 inline-flex items-center gap-1.5 cursor-pointer active:scale-95 ${
                      isCopied
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-[#5b21f3] text-white hover:bg-[#4c1bd9] shadow-xs hover:shadow-md hover:shadow-purple-500/20"
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveQrLink(item)}
                    className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 inline-flex items-center gap-1.5 cursor-pointer bg-gray-100 text-[#1a1a1a] hover:bg-[#5b21f3]/10 hover:text-[#5b21f3] active:scale-95"
                    title="Generate QR Code"
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>QR</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {activeQrLink && (
        <div
          onClick={() => setActiveQrLink(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-sm w-full p-7 text-center relative shadow-2xl border border-gray-100"
          >
            <button
              type="button"
              onClick={() => setActiveQrLink(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-[#5b21f3]/10 text-[#5b21f3] flex items-center justify-center mx-auto mb-4">
              <QrCode className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-extrabold text-[#1a1a1a] mb-1">
              QR Code
            </h3>
            <p className="font-mono text-xs text-[#5b21f3] break-all mb-5">
              {activeQrLink.short_url}
            </p>

            <div className="bg-white p-3.5 rounded-2xl border border-gray-200/80 inline-block shadow-xs mb-4">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(activeQrLink.short_url)}`}
                alt="QR Code"
                className="w-44 h-44 object-contain mx-auto"
              />
            </div>

            <p
              className="text-xs text-gray-400 mb-5 truncate px-2"
              title={activeQrLink.original_url}
            >
              {activeQrLink.original_url}
            </p>

            <button
              type="button"
              onClick={() => setActiveQrLink(null)}
              className="w-full py-2.5 rounded-xl bg-[#5b21f3] text-white text-sm font-bold hover:bg-[#4c1bd9] transition-colors cursor-pointer shadow-xs"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PopularLinks;
