import Image from "next/image";
import React from "react";

export type Props = {
  title: string;
  profilePicture: string;
  description: string;
  content: string;
};

export default function TestimonialItem(props: Props) {
  return (
    <section className="bg-[#F8F9FB] px-10 py-12 rounded-xl">
      <div className="flex items-center mb-8">
        <div className="btn-circle btn h-16 w-16 bg-[#DCE3ED] mr-4 flex items-center justify-center">
          <Image
            alt="logo-testimonial"
            src="/eren.png"
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>
        <div>
          <p className="font-black">Mais Tazagulov</p>
          <p className="text-[#93a0bb] font-medium">
            Design Team Lead at Halolab
          </p>
        </div>
      </div>
      <p className="font-medium">
        Free and premium high-quality vector icons library, that provides
        multiple formats and styles, mane for designers and developers. Free and
        premium high-quality vector icons library, that provides multiple
        formats and styles, mane for designers and developers.
      </p>
    </section>
  );
}
