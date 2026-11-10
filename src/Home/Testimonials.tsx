import React from "react";
import { Star } from "lucide-react";

export interface TestimonialItem {
  id: string;
  name: string;
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
    role: "User",
    review: "A good platform for Link management.",
    rating: 5,
  },
];

export const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials = DEFAULT_TESTIMONIALS,
  className = "",
}) => {
  return (
    <section className={`py-20 px-6 bg-[#f8f9fc] ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/40 mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a]">
            Loved by 80,000+ users worldwide.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl p-6 bg-white border border-gray-200 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
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

              <p className="text-sm text-[#1a1a1a] leading-relaxed mb-6 font-medium">
                "{item.review}"
              </p>

              <div>
                <p className="font-bold text-sm text-[#1a1a1a]">{item.name}</p>
                <p className="text-xs text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

