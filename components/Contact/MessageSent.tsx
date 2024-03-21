import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";

type Props = {};

export default function MessageSent({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center space-y-[14px] mb-16">
      <Image alt="message sent" src="check_circle.svg" width={56} height={56} />
      <p className="text-primat font-black text-[38px]">Great!</p>
      <p className="font-medium text-[15px]">
        Your message has been successfully recieved.
      </p>
      <Link
        href="/"
        className="btn btn-info btn-xl hover:bg-[#0c48d3] rounded-full"
      >
        <FaHome className="w-6 h-6" />
        <span className="font-bold text-[16px]">RETURN TO HOME</span>
      </Link>
    </div>
  );
}
