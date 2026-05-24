import {
    Star,
  } from "lucide-react";
  
  import Container from "../layout/container";
  
  const testimonials = [
    {
      name: "Aarav Sharma",
  
      review:
        "The depth of flavor and smooth finish genuinely feels premium. Brew & Zest completely changed my morning coffee ritual.",
    },
  
    {
      name: "Riya Kapoor",
  
      review:
        "Their fruit-aged collection is unlike anything I’ve tasted before. Elegant, balanced, and incredibly refined.",
    },
  
    {
      name: "Karan Mehta",
  
      review:
        "Beautiful packaging, luxury experience, and exceptional coffee quality. Every cup feels crafted with intention.",
    },
  ];
  
  export default function Testimonials() {
    return (
      <section className="bg-[#FBF7F1] py-20 md:py-32">
  
        <Container>
  
          {/* Heading */}
          <div className="mx-auto mb-16 max-w-4xl text-center md:mb-20">
  
            <p className="mb-5 uppercase tracking-[0.35em] text-[#8A6A5A]">
  
              Testimonials
  
            </p>
  
            <h2 className="text-4xl font-semibold leading-tight text-[#161414] md:text-6xl">
  
              Loved By Coffee Enthusiasts
  
            </h2>
  
            <p className="mt-8 text-lg leading-relaxed text-[#6E625C] md:text-xl">
  
              Crafted for those who appreciate depth,
              aroma, and a refined coffee experience.
  
            </p>
  
          </div>
  
          {/* Cards */}
          <div className="grid gap-6 lg:grid-cols-3">
  
            {testimonials.map(
              (testimonial) => (
  
                <div
                  key={testimonial.name}
                  className="group rounded-[36px] border border-black/5 bg-white/80 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl md:p-10"
                >
  
                  {/* Stars */}
                  <div className="mb-8 flex gap-1">
  
                    {[...Array(5)].map(
                      (_, index) => (
  
                        <Star
                          key={index}
                          size={20}
                          className="fill-[#C89B6D] text-[#C89B6D]"
                        />
  
                      )
                    )}
  
                  </div>
  
                  {/* Review */}
                  <p className="text-lg leading-relaxed text-[#4B403A] md:text-xl">
  
                    “{testimonial.review}”
  
                  </p>
  
                  {/* User */}
                  <div className="mt-10 border-t border-black/5 pt-6">
  
                    <h3 className="text-xl font-semibold text-[#161414]">
  
                      {testimonial.name}
  
                    </h3>
  
                    <p className="mt-2 text-[#8A6A5A]">
  
                      Verified Customer
  
                    </p>
  
                  </div>
  
                </div>
  
              )
            )}
  
          </div>
  
        </Container>
  
      </section>
    );
  }