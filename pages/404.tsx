import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center space-y-[14px] mt-28 mb-16">
      <Image alt="404 page error" src="/404.png" width={79} height={116} />
      <p className="text-primat font-black text-[38px] text-center">
        Sorry, Page not found!
      </p>
      <p className="font-medium text-[15px] text-center">
        It seems that the page you requested could not be found.
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
