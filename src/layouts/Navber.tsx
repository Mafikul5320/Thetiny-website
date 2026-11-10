import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/logo.png";

export interface NavLinkItem {
  label: string;
  path: string;
}

export interface NavberProps {
  className?: string;
}

const NAV_LINKS: readonly NavLinkItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Terms", path: "/terms" },
];

export const Navber: React.FC<NavberProps> = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-[#e5e7eb] ${className}`.trim()}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={logoImg}
            alt="thetiny.site"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, path }: NavLinkItem) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }: { isActive: boolean }): string =>
                `text-[0.925rem] font-medium transition-colors border-b-2 pb-0.5 ${
                  isActive
                    ? "text-[#5b21f3] border-[#5b21f3]"
                    : "text-[#6b7280] border-transparent hover:text-gray-900"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm font-semibold text-[#1a1a1a] border border-[#e5e7eb] px-[18px] py-[7px] rounded-lg hover:bg-gray-50 transition-colors"
          >
            Log In
          </Link>
          <Link
            to="/register"
            className="text-sm font-semibold text-white bg-[#5b21f3] px-[18px] py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Get Started Free
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev: boolean) => !prev)}
          className="md:hidden p-2 text-[#1a1a1a] cursor-pointer"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#e5e7eb] px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, path }: NavLinkItem) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }: { isActive: boolean }): string =>
                `text-base font-medium text-left ${
                  isActive ? "text-[#5b21f3]" : "text-[#1a1a1a]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="w-full text-center text-sm font-semibold text-[#1a1a1a] border border-[#e5e7eb] py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Log In
          </Link>
          <Link
            to="/register"
            onClick={() => setIsOpen(false)}
            className="w-full text-center text-sm font-semibold text-white bg-[#5b21f3] py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Get Started Free
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navber;
