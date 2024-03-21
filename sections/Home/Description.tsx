import React from "react";
import DescriptionItem from "../../components/Home/DescriptionItem";

export default function Description() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#EAEEF5] rounded-2xl p-8">
        <DescriptionItem
          title="Figma"
          subtitle="Beta Version"
          icon="\figma_icon.svg"
          color="bg-[#EAEEF5]"
          firstElement
        />
        <DescriptionItem
          title="360"
          subtitle="Free icons"
          color="bg-[#F7931A]"
          icon="/etincelle.svg"
        />
        <DescriptionItem
          title="8,300+"
          subtitle="Free Download"
          icon="/download.svg"
          color="bg-[#01ACED]"
        />
        <DescriptionItem
          title="7,200+"
          subtitle="Duplicate on Figma"
          color="bg-[#757AD5]"
          icon="/white-figma.svg"
        />{" "}
      </div>
    </>
  );
}
