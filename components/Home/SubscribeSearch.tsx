import React from "react";
import { FaArrowRight } from "react-icons/fa";

type Props = {};

export default function SubscribeSearch({}: Props) {
  return (
    <div className="relative">
      <input
        type="search"
        id="default-search"
        className="hover:bg-[#EAEEF5] text-black bg-transparent block border focus:border-black outline-none border-[#DDE2EB] w-full p-4 text-sm rounded-full placeholder-gray-400"
        placeholder="Your email"
        required
      />
      <button
        type="submit"
        className="transition-all text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
}
