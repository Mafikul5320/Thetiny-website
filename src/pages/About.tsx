import React, { useState } from "react";
import {
  Award,
  Globe,
  Heart,
  ShieldCheck,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface AboutValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  initials: string;
}

export interface StoryMilestone {
  year: string;
  title: string;
  description: string;
}

export interface AboutProps {
  className?: string;
}

const VALUES: readonly AboutValue[] = [
  {
    icon: Zap,
    title: "Speed First",
    description:
      "Every decision we make puts performance at the center. Sub-50ms redirects aren't a goal — they're a baseline.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Safety",
    description:
      "We actively scan and remove links that lead to spam, malware, or phishing. Your audience's safety is our responsibility.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Our infrastructure spans 180+ countries with edge nodes that ensure fast redirects for everyone, everywhere.",
  },
  {
    icon: Heart,
    title: "User-Centric",
    description:
      "We build for real people with real workflows. Every feature is tested with users before it ships.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We're transparent about our roadmap, listen to feedback openly, and build in public whenever we can.",
  },
  {
    icon: Award,
    title: "Reliability",
    description:
      "A 98.9% uptime SLA backed by a real team. When we commit, we deliver — no excuses.",
  },
];

const TEAM_MEMBERS: readonly TeamMember[] = [
  {
    name: "Nadim Majid",
    role: "Founder",
    bio: "Current CEO at Bangla Puzzle Limited. Obsessed with internet infrastructure and developer tooling.",
    image: "https://thetiny.site/storage/ourteems/pp-300-300-6ac771282b154.png",
    initials: "NM",
  },
];

const STORY_MILESTONES: readonly StoryMilestone[] = [
  {
    year: "2021",
    title: "Founded",
    description:
      "Built the first version of thetiny.site in a weekend. 200 sign-ups in the first 48 hours.",
  },
  {
    year: "2022",
    title: "Product-Market Fit",
    description:
      "Launched analytics dashboard. Reached 10,000 monthly active users. Raised $1.2M in pre-seed funding.",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description:
      "Rolled out CDN edge nodes across Asia-Pacific and Europe. Surpassed 1 billion links shortened.",
  },
  {
    year: "2024",
    title: "Enterprise Launch",
    description:
      "Launched Business tier with API, white-label domains, and team features. Crossed 50,000 users.",
  },
  {
    year: "2026",
    title: "Today",
    description:
      "Serving 80,000+ users, 180+ countries, with 2.4 billion links shortened and counting.",
  },
];

export const About: React.FC<AboutProps> = ({ className = "" }) => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (name: string): void => {
    setFailedImages((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <div className={className}>
      <section className="hero-gradient py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <p className="text-xs font-bold uppercase tracking-widest text-[#5b21f3] mb-3.5">
              About Us
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a] leading-[1.1] tracking-tight mb-5">
              We built thetiny.site because links matter.
            </h1>
            <p className="text-base text-gray-500 leading-relaxed">
              Founded in 2021, thetiny.site started as a weekend project between two engineers frustrated by slow, ad-laden URL shorteners. Today we serve over 80,000 users across 180+ countries — from solo creators to Fortune 500 marketing teams.
            </p>
          </div>

          <div className="animate-fade-up-delay">
            <div className="rounded-2xl overflow-hidden aspect-video bg-[#e0e4ff] shadow-lg shadow-purple-500/10 border border-gray-200/70">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop&auto=format"
                alt="Team working together in a modern office"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#5b21f3] mb-3.5">
            Make every link smarter, faster, and safer.
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-extrabold text-[#1a1a1a] leading-tight tracking-tight mb-5">
            The web is built on links. We believe every link should be purposeful — clean to share, fast to redirect, and insightful to track. Our mission is to give anyone, from an individual creator to an enterprise marketing team, the tools to make their links work harder.
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            The web is built on links. We believe every link should be purposeful — clean to share, fast to redirect, and insightful to track. Our mission is to give anyone, from an individual creator to an enterprise marketing team, the tools to make their links work harder.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#5b21f3] mb-3">
              Our Values
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a1a1a] tracking-tight">
              What we stand for.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, description }: AboutValue) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl p-6 bg-white border border-gray-200/90 shadow-xs transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#5b21f3]/40 hover:shadow-[0_18px_45px_rgba(91,33,243,0.1)]"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5b21f3] to-[#8b5cf6] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />

                <div className="w-10 h-10 rounded-xl bg-[#5b21f3]/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#5b21f3] group-hover:scale-110">
                  <Icon className="w-5 h-5 text-[#5b21f3] transition-colors duration-300 group-hover:text-white" />
                </div>

                <h3 className="font-bold text-base text-[#1a1a1a] mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#5b21f3] mb-3">
              The Team
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a1a1a] tracking-tight">
              Meet the people behind thetiny.site.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member: TeamMember) => (
              <div
                key={member.name}
                className="group rounded-2xl overflow-hidden bg-white border border-gray-200/90 shadow-xs transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#5b21f3]/40 hover:shadow-[0_18px_45px_rgba(91,33,243,0.1)]"
              >
                <div className="aspect-square bg-[#eef0ff] overflow-hidden flex items-center justify-center">
                  {failedImages[member.name] ? (
                    <span className="text-2xl font-extrabold text-[#5b21f3]">
                      {member.initials}
                    </span>
                  ) : (
                    <img
                      src={member.image}
                      alt={member.name}
                      onError={() => handleImageError(member.name)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                <div className="p-5">
                  <p className="font-bold text-[0.95rem] text-[#1a1a1a]">
                    {member.name}
                  </p>
                  <p className="text-xs text-[#5b21f3] font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#f8f9fc]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#5b21f3] mb-3">
              Our Story
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a1a1a] tracking-tight">
              From side project to global platform.
            </h2>
          </div>

          <div className="flex flex-col">
            {STORY_MILESTONES.map(
              (milestone: StoryMilestone, index: number, list: readonly StoryMilestone[]) => (
                <div key={milestone.year} className="group flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#5b21f3] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-sm shadow-purple-500/25 transition-transform duration-300 group-hover:scale-110">
                      {milestone.year.slice(2)}
                    </div>
                    {index < list.length - 1 && (
                      <div className="w-0.5 flex-1 mt-1 bg-gray-200 min-h-10" />
                    )}
                  </div>

                  <div className="pb-8">
                    <p className="font-bold text-base text-[#1a1a1a] mb-1 transition-colors duration-200 group-hover:text-[#5b21f3]">
                      {milestone.year} — {milestone.title}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

