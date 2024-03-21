import { RefObject, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import Image from "next/image";
import Link from "next/link";
import classes from "../../styles/navbar.module.css";
import classNames from "classnames";
import { PiCaretDownFill } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>();

  const ref = useRef() as RefObject<HTMLElement>;

  useOnClickOutside(ref, () => {
    setOpen(false);
  });

  return (
    <nav className="border-b border-[#DDE2EB] bg-[#F8F9FB] sticky top-0 z-10 px-8">
      <div className="text-medium h -24 flex items-center justify-between mx-auto max-w-[1176px]">
        <Link href="/">
          <Image
            src="/magicoonLogo.svg"
            alt="Magicoon Logo"
            width={150}
            height={150}
            className="cursor-pointer"
          />
        </Link>
        <div className="flex space-x-8 items-center justify-center">
          <ul className="flex justify-center items-center space-x-8 transition-all">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className="font-bold py-10 hover:text-info"
              >
                {link.name}
              </Link>
            ))}
          </ul>
          <div
            className={classNames("dropdown dropdown-end", {
              "dropdown-open": open,
            })}
            ref={ref as RefObject<HTMLDivElement>}
          >
            <button
              tabIndex={0}
              role="button"
              onClick={() => setOpen((prev) => !prev)}
              className={classNames(
                "h-12 px-4 space-x-4 rounded-full text-primary-content",
                classes["gradient-button"]
              )}
            >
              <Image
                src="/grid-square.svg"
                alt="Grid Square"
                width={16}
                height={16}
              />
              <div>Our Products</div>
              <div className="relative">
                <div className="rounded-full w-6 h-6 bg-white flex items-center justify-center opacity-10" />
                <PiCaretDownFill
                  color="white"
                  size={16}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </button>
            <AnimatePresence>
              {open && (
                <motion.ul
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  tabIndex={0}
                  style={{ boxShadow: "0px 4px 12px #8594B480" }}
                  className={classNames(
                    "mt-3 z-[1] p-0 menu menu-sm dropdown-content bg-base-100 rounded-box w-[676px]",
                    {
                      hidden: !open,
                    }
                  )}
                >
                  <div className="flex items-center p-8 text-primary">
                    <Image alt="star" src="/star.png" width={48} height={48} />
                    <p className="font-medium text-[16px] ml-8 w-2/3">
                      Discover the only digital marketplace for selling and
                      downloading icons.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 p-8 bg-[#EAEEF5] rounded-b-box">
                    {magicoonWebsites.map((mgc) => (
                      <Link
                        href={mgc.href}
                        key={mgc.id}
                        onClick={() => {
                          setOpen(false);
                        }}
                        className="bg-white rounded-lg p-4 space-y-4 cursor-pointer hover:scale-[1.02] transition-all"
                      >
                        <Image
                          alt="mgc"
                          src={mgc.src}
                          width={176}
                          height={25}
                        />
                        <p className="text-primary text-sm font-medium">
                          {mgc.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>{" "}
        </div>
      </div>
    </nav>
  );
}

const links = [
  { name: "Start", href: "/#start" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Contact", href: "/contact" },
];

const magicoonWebsites = [
  {
    id: 0,
    href: "",
    src: "/mgc-library.png",
    description: "One place to buy icons",
  },
  {
    id: 1,
    href: "/search",
    src: "/mgc-search.png",
    description: "Carefully crafted Icon Packs",
  },
  {
    id: 2,
    href: "",
    src: "/mgc-freebies.png",
    description: "Carefully crafted Icon Packs",
  },
  {
    id: 3,
    href: "/#market",
    src: "/mgc-market.png",
    description: "One place to buy icons",
  },
];
