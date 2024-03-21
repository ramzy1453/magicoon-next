import Image from "next/image";
import React from "react";

type Props = {};

export default function Usability(props: Props) {
  return (
    <button className="hover:shadow-md transition-all">
      <Image alt="featured" src="featured.svg" width={250} height={200} />
    </button>
  );
}
