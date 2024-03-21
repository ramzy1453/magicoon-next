import CodeUpdate from "@/components/Global/CodeUpdate";
import React from "react";

export default function Updates() {
  return (
    <div className="pt-28">
      <p className="font-extrabold text-4xl mb-6 text-center">UPDATES</p>
      <div className="bg-[#EAEEF5] text-xl rounded-2xl p-12 flex items-center justify-center">
        magicoon Library is perfect for design, development companies and
        freelancers, one icons library allows you to work on many different
        projects for one client.
      </div>
      <p className="text-[#8594B4] mt-6 mb-16 ">Last updated: Jan 3, 2023</p>
      <CodeUpdate />
      <p className="mt-16 text-primary">
        If you are still unclear about our terms, please contact us at{" "}
        <span className="font-bold">support@magicoon.com</span>
      </p>
    </div>
  );
}
