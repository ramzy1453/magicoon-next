import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";

import TestimonialItem, {
  Props as ITestimonial,
} from "@/components/Home/TestimonialItem";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonial() {
  return (
    <>
      <div className="flex items-center justify-center space-x-4">
        <div className="h-px w-8 bg-primary" />
        <div className="font-bold text-center text-primary">TESTIMONIALS</div>
        <div className="h-px w-8 bg-primary" />
      </div>

      <p className="text-primary text-3xl md:text-[44px] font-bold text-center">
        What do Say About us?
      </p>
      <Swiper
        slidesPerView={1}
        centerInsufficientSlides
        spaceBetween={30}
        modules={[Autoplay, Mousewheel]}
        autoplay={{ delay: 3000 }}
        loop
        mousewheel={{ releaseOnEdges: true }}
        breakpoints={{ 768: { slidesPerView: 2 } }}
      >
        {Array(6)
          .fill(testimonials[0])
          .map((testimonial, i) => (
            <SwiperSlide key={testimonial.title + i}>
              <TestimonialItem {...testimonial} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

const testimonials: ITestimonial[] = [
  {
    title: "Mais Tazagulov",
    profilePicture: "/eren.png",
    description: "Design Team Lead at Halolab",
    content:
      "Free and premium high-quality vector icons library, that provides multiple formats and styles, mane for designers and developers. Free and premium high-quality vector icons library, that provides multiple formats and styles, mane for designers and developers.",
  },
];
