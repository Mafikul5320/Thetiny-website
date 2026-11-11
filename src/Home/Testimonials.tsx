import React from "react";
import { BadgeCheck, Quote, Star } from "lucide-react";

export interface TestimonialItem {
  id: string;
  name: string;
  initials: string;
  role: string;
  review: string;
  rating: number;
}

export interface TestimonialsProps {
  testimonials?: readonly TestimonialItem[];
  className?: string;
}

const DEFAULT_TESTIMONIALS: readonly TestimonialItem[] = [
  {
    id: "1",
    name: "Nadim Majid",
    initials: "NM",
    role: "Verified User",
    review: "A good platform for Link management.",
    rating: 5,
  },
  {
    id: "2",
    name: "Priya Sharma",
    initials: "PS",
    role: "Social Media Manager",
    review:
      "thetiny.site completely streamlined how I organize campaign links. Real-time click analytics are crisp, fast, and reliable across every channel.",
    rating: 5,
  },
  {
    id: "3",
    name: "Carlos Mendez",
    initials: "CM",
    role: "Full-Stack Developer",
    review:
      "Clean REST API and rock-solid redirect speed. I integrated branded short links into our product notifications in under thirty minutes.",
    rating: 5,
  },
  {
    id: "4",
    name: "Amara Osei",
    initials: "AO",
    role: "E-commerce Founder",
    review:
      "Custom QR codes and branded URLs gave our packaging a sharper look. Tracking scans by device helps us optimize every offline campaign.",
    rating: 5,
  },
  {
    id: "5",
    name: "Tarek Hasan",
    initials: "TH",
    role: "Growth Marketer",
    review:
      "The UTM builder and link expiration controls make seasonal launches effortless. Zero downtime even during peak campaign traffic spikes.",
    rating: 5,
  },
  {
    id: "6",
    name: "Elena Rostova",
    initials: "ER",
    role: "Product Designer",
    review:
      "Minimal, fast, and zero clutter. Generating clean short links and sharing performance snapshots with clients takes just seconds.",
    rating: 5,
  },
];

export const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials = DEFAULT_TESTIMONIALS,
  className = "",
}) => {
  return (
    <section className={`py-20 bg-[#f8f9fc] ${className}`.trim()}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 bg-[#5b21f3]/[0.08] border border-[#5b21f3]/20">
            <Star className="w-3.5 h-3.5 fill-[#5b21f3] text-[#5b21f3]" />
            <span className="text-xs font-semibold tracking-wide text-[#5b21f3]">
              4.9/5 Average Rating · Testimonials
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] tracking-tight mb-3">
            Loved by 80,000+ users worldwide.
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Creators, marketers, and engineering teams trust thetiny.site to power and measure every link.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden py-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-[#f8f9fc] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-[#f8f9fc] to-transparent z-20" />

        <div className="flex w-max animate-marquee-ltr">
          {[0, 1].map((copyIndex: number) => (
            <div
              key={copyIndex}
              aria-hidden={copyIndex === 1}
              className="flex shrink-0 gap-6 pr-6"
            >
              {testimonials.map((item: TestimonialItem) => (
                <div
                  key={`${copyIndex}-${item.id}`}
                  className="w-[310px] sm:w-[370px] shrink-0 group relative overflow-hidden rounded-2xl p-7 bg-white border border-gray-200/90 flex flex-col justify-between shadow-xs transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#5b21f3]/40 hover:shadow-[0_18px_45px_rgba(91,33,243,0.1)]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5b21f3] to-[#8b5cf6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex gap-1 transition-transform duration-300 origin-left group-hover:scale-105">
                        {Array.from({ length: 5 }).map((_, index: number) => (
                          <Star
                            key={index}
                            className={`w-4 h-4 ${
                              index < item.rating
                                ? "fill-[#5b21f3] text-[#5b21f3]"
                                : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                      </div>

                      <Quote className="w-7 h-7 text-[#5b21f3]/15 group-hover:text-[#5b21f3]/30 transition-colors duration-300" />
                    </div>

                    <p className="text-[0.95rem] text-[#1a1a1a]/90 leading-relaxed mb-6 font-medium">
                      &ldquo;{item.review}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5b21f3] to-[#7c3aed] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-105">
                        {item.initials}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-[#1a1a1a]">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500">{item.role}</p>
                      </div>
                    </div>

                    <BadgeCheck className="w-4 h-4 text-[#5b21f3]/70 shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
