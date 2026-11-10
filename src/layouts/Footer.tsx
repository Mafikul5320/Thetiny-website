import React from "react";
import { useNavigate } from "react-router";
import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa6";
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
  icon: React.ComponentType<{ className?: string }>;
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

const SOCIAL_LINKS: readonly SocialLinkItem[] = [
  { icon: FaFacebookF, url: CONTACT_INFO.facebook, label: "Facebook" },
  { icon: FaLinkedinIn, url: CONTACT_INFO.linkedin, label: "LinkedIn" },
  { icon: FaYoutube, url: CONTACT_INFO.youtube, label: "YouTube" },
  { icon: FaWhatsapp, url: CONTACT_INFO.whatsapp, label: "WhatsApp" },
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
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <div className="space-y-2 pt-1 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#5b21f3]" />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#5b21f3]" />
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
