import { FaChevronRight, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaDribbble } from "react-icons/fa6";
import InputSearch from "../Home/InputSearch";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#EAEEF5] pt-16 pb-8">
      <div className="px-6 max-w-[1224px] md:max-w-[1240px] md:px-8 mx-auto">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(links).map(([category, values]) => {
            return (
              <div key={category} className="flex-1 flex flex-col space-y-1">
                <p className="font-black md:mb-4 lg:mb-8">
                  {category.toUpperCase()}
                </p>

                {values.map(({ name, href }) => {
                  return (
                    <span
                      key={name}
                      className="hover:text-black transition-all group flex items-center relative w-fit"
                    >
                      <FaChevronRight
                        size={10}
                        className="absolute top-1/2 -translate-y-1/2 left-0 group-hover:left-2 transition-all"
                      />
                      <Link
                        href={href}
                        className="ml-6 group-hover:font-bold transition-all"
                      >
                        {name}
                      </Link>
                    </span>
                  );
                })}
              </div>
            );
          })}
          <div className="flex-1 flex flex-col space-y-4">
            <p className="font-black md:mb-4">NEWSLETTER</p>
            <p className="">
              Stay close and subscribe to Newsletter to receive new updates.
            </p>
            <InputSearch
              width="full"
              height="h-12"
              bottomIcon="bottom-1.5"
              isPrimary
              isWhiteBg
              placeholder="Your Email"
            />
            <p className="mb-8">
              <span className="font-bold">Email:</span> Support@magicoon.com
            </p>
            <div className="flex space-x-2">
              {socialMedias.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="btn btn-circle btn-sm btn-info hover:bg-[#0c48d3]"
                >
                  <social.icon size={18} color="white" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[#DCE3ED] flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between text-primary pt-6 mt-[72px]">
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-8">
              <Link href="/terms-of-use" className="font-extrabold">
                LICENSE
              </Link>
              <Link href="/updates" className="font-extrabold">
                UPDATES
              </Link>
            </div>
            <p className="font-medium">
              Copyright © 2024 magicoon. All Rights Reserved.
            </p>
          </div>
          <div className="space-y-3">
            <p>
              MADE IN <span className="font-extrabold">ALGERIA</span>
            </p>
            <p>
              <span className="font-extrabold">BY:</span> Seyfeddine B.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const socialMedias = [
  {
    name: "X",
    icon: FaXTwitter,
    href: "https://react-icons.github.io/react-icons/search/#q=Dribbble",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://react-icons.github.io/react-icons/search/#q=Dribbble",
  },
  {
    name: "Dribbble",
    icon: FaDribbble,
    href: "https://react-icons.github.io/react-icons/search/#q=Dribbble",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    href: "https://react-icons.github.io/react-icons/search/#q=Dribbble",
  },
];

const links = {
  company: [
    { name: "Home", href: "/#start" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Our licence", href: "/terms-of-use" },
  ],
  help: [
    { name: "Support", href: "/#hero" },
    { name: "FAQs", href: "/#faq" },
    { name: "Contact us", href: "/contact" },
  ],
  products: [
    { name: "magicoon Library", href: "/contact" },
    { name: "magicoon Search", href: "/search" },
  ],
};
