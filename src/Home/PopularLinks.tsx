import React, { useState } from "react";
import { MousePointerClick, Copy, Check, QrCode, X } from "lucide-react";

export interface PopularLinkItem {
  id: string | number;
  short_url: string;
  original_url: string;
  clicks: number;
}

export interface PopularLinksProps {
  className?: string;
  links?: PopularLinkItem[];
}

const DEFAULT_POPULAR_LINKS: readonly PopularLinkItem[] = [
  {
    id: 1,
    short_url: "https://thetiny.site/ARLSeN",
    original_url: "https://api.whatsapp.com/send?phone=8801880811048&text=i+want+to+be+a+...",
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
    original_url: "https://supportersframe.com/blog/supportersframecom-introduces-qr-code...",
    clicks: 85,
  },
  {
    id: 4,
    short_url: "https://thetiny.site/qQNTp0",
    original_url: "https://docs.google.com/forms/d/e/1FAIpQLSf3aBfGp4uunkBsQVL_zLWcwkWh...",
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
  const [activeQrLink, setActiveQrLink] = useState<PopularLinkItem | null>(null);

  const handleCopy = (item: PopularLinkItem): void => {
    navigator.clipboard.writeText(item.short_url);
    setCopiedId(item.id);
    setTimeout(() => {
      setCopiedId((current) => (current === item.id ? null : current));
    }, 2000);
  };

  return (
    <section className={`py-16 px-6 bg-white ${className}`.trim()}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-extrabold text-[#1a1a1a] mb-3 tracking-tight">
            Most Popular Links
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Check out the most clicked links on our platform
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {links.map((item: PopularLinkItem) => {
            const isCopied = copiedId === item.id;

            return (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-[#f9fafb] border border-[#e5e7eb] hover:shadow-md transition-shadow"
              >
                <div className="flex-1 min-w-0">
                  <a
                    href={item.short_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm font-semibold text-[#5b21f3] hover:underline break-all inline-block"
                  >
                    {item.short_url}
                  </a>
                  <p
                    className="text-xs text-gray-400 truncate mt-1"
                    title={item.original_url}
                  >
                    {item.original_url}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-start sm:self-center">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-gray-100 shadow-xs">
                    <MousePointerClick className="w-3.5 h-3.5 text-gray-500" />
                    <span className="text-sm font-semibold text-gray-700">
                      {item.clicks.toLocaleString()} clicks
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(item)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 hover:scale-105 cursor-pointer ${
                      isCopied
                        ? "bg-[#d1fae5] text-[#065f46]"
                        : "bg-[#5b21f3] text-white hover:opacity-90"
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
                    className="px-3 py-1.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 hover:scale-105 cursor-pointer bg-[#e5e7eb] text-[#5b21f3]"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 text-center relative shadow-2xl border border-gray-100">
            <button
              type="button"
              onClick={() => setActiveQrLink(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#5b21f3] flex items-center justify-center mx-auto mb-4">
              <QrCode className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-1">QR Code</h3>
            <p className="text-xs text-gray-500 break-all mb-4">
              {activeQrLink.short_url}
            </p>

            <div className="bg-white p-3 rounded-xl border border-gray-100 inline-block shadow-xs mb-4">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(activeQrLink.short_url)}`}
                alt="QR Code"
                className="w-44 h-44 object-contain mx-auto"
              />
            </div>

            <p className="text-xs text-gray-400 mb-4 truncate px-2" title={activeQrLink.original_url}>
              {activeQrLink.original_url}
            </p>

            <button
              type="button"
              onClick={() => setActiveQrLink(null)}
              className="w-full py-2.5 rounded-xl bg-[#5b21f3] text-white text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
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

