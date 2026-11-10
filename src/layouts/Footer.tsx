import React from "react";
import { useNavigate } from "react-router";
import logoImg from "../assets/logo.png";

export interface ContactInfo {
  email: string;
  number: string;
  facebook: string;
  linkedin: string;
  youtube: string;
  whatsapp: string;
}

export interface FooterLinkItem {
  label: string;
  page: string;
}

export interface SocialLinkItem {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  url: string;
  label: string;
}

export interface FooterProps {
  onNavigate?: (page: string) => void;
  className?: string;
}

const CONTACT_INFO: ContactInfo = {
  email: "banglapuzzle@gmail.com",
  number: "+880 1880-811048",
  facebook: "https://www.facebook.com/",
  linkedin: "https://bd.linkedin.com/",
  youtube: "https://www.youtube.com",
  whatsapp: "https://wa.me/8801880811048",
};

const PRODUCT_LINKS: readonly FooterLinkItem[] = [
  { label: "Features", page: "features" },
  { label: "Pricing", page: "pricing" },
  { label: "API Docs", page: "api-docs" },
  { label: "Browser Extension", page: "extension" },
  { label: "Report Malicious URL", page: "report" },
];

const COMPANY_LINKS: readonly FooterLinkItem[] = [
  { label: "About Us", page: "about" },
  { label: "Blog", page: "blog" },
  { label: "Terms & Conditions", page: "terms" },
  { label: "Privacy Policy", page: "privacy" },
  { label: "Cookie Policy", page: "cookie" },
  { label: "Refund Policy", page: "refund" },
];

const LEGAL_LINKS: readonly FooterLinkItem[] = [
  { label: "Privacy Policy", page: "privacy" },
  { label: "Refund Policy", page: "refund" },
  { label: "Cookie Policy", page: "cookie" },
  { label: "Terms & Conditions", page: "terms" },
];

const Icons = {
  Facebook: (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512" {...props}>
      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
    </svg>
  ),
  LinkedIn: (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512" {...props}>
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
    </svg>
  ),
  YouTube: (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 576 512" {...props}>
      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
    </svg>
  ),
  WhatsApp: (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512" {...props}>
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  ),
  Mail: (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="w-4 h-4 text-[#5b21f3] fill-current" viewBox="0 0 512 512" {...props}>
      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
    </svg>
  ),
  Phone: (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="w-4 h-4 text-[#5b21f3] fill-current" viewBox="0 0 512 512" {...props}>
      <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
    </svg>
  ),
};

const SOCIAL_LINKS: readonly SocialLinkItem[] = [
  { icon: Icons.Facebook, url: CONTACT_INFO.facebook, label: "Facebook" },
  { icon: Icons.LinkedIn, url: CONTACT_INFO.linkedin, label: "LinkedIn" },
  { icon: Icons.YouTube, url: CONTACT_INFO.youtube, label: "YouTube" },
  { icon: Icons.WhatsApp, url: CONTACT_INFO.whatsapp, label: "WhatsApp" },
];

export const Footer: React.FC<FooterProps> = ({ onNavigate, className = "" }) => {
  const navigate = useNavigate();

  const handleNav = (page: string): void => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      navigate(`/${page === "home" ? "" : page}`);
    }
  };

  return (
    <footer className={`mt-auto bg-white border-t border-gray-200 text-gray-500 font-sans ${className}`.trim()}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2 space-y-5">
            <button
              type="button"
              onClick={() => handleNav("home")}
              className="block cursor-pointer focus:outline-none"
            >
              <img
                src={logoImg}
                alt="thetiny.site logo"
                className="h-8 w-auto object-contain"
              />
            </button>

            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              The fastest way to shorten, track, and manage your URLs. Trusted by
              thousands of marketers, developers, and businesses across
              Bangladesh and beyond.
            </p>

            <div className="flex items-center gap-3 pt-1">
              {SOCIAL_LINKS.map(({ icon: Icon, url, label }: SocialLinkItem) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center transition-opacity hover:opacity-75"
                >
                  <Icon />
                </a>
              ))}
            </div>

            <div className="space-y-2 pt-1 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Icons.Mail />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icons.Phone />
                <span>{CONTACT_INFO.number}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-4">
              Product
            </h3>
            <ul className="space-y-3 text-sm">
              {PRODUCT_LINKS.map((item: FooterLinkItem) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => handleNav(item.page)}
                    className="hover:text-gray-900 transition-colors text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              {COMPANY_LINKS.map((item: FooterLinkItem) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => handleNav(item.page)}
                    className="hover:text-gray-900 transition-colors text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>
            © 2026{" "}
            <a
              href="https://banglapuzzle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5b21f3] hover:underline font-medium"
            >
              Bangla Puzzle Limited
            </a>
            . All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {LEGAL_LINKS.map((item: FooterLinkItem) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNav(item.page)}
                className="hover:text-gray-900 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
