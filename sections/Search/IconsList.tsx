"use client";
import IconItem from "../../components/Search/IconItem";
import icons from "../../lib/icons";
import { useSearchStore } from "@/store/zustand";
import searchIcons from "@/lib/searchIcons";
import IconPopup from "../../components/Search/IconPopup";
import { useDebounce } from "usehooks-ts";
import { AnimatePresence } from "framer-motion";
import NotFound from "../../components/Search/NotFound";

export default function IconsList() {
  const { color, iconType, query } = useSearchStore();
  const debouncedQuery = useDebounce(query, 300);

  const filteredIcons =
    iconType !== 0
      ? [...icons]
          .sort((a, b) => a.name.localeCompare(b.name))
          .filter((icon) => icon.type === iconsTypes[iconType - 1])
      : [...icons].sort((a, b) => a.name.localeCompare(b.name));

  const searchedIcons = searchIcons(filteredIcons, debouncedQuery, 0);

  const { isModalShown } = useSearchStore();
  return (
    <>
      {isModalShown && (
        <div className="fixed top-24 left-0 w-screen h-screen bg-black bg-opacity-[0.2]" />
      )}
      <AnimatePresence>{isModalShown && <IconPopup />}</AnimatePresence>
      <div className="px-6 max-w-[1224px] md:max-w-[1240px] md:px-8 mx-auto">
        {searchedIcons?.length > 0 ? (
          <>
            <p className="text-lg font-medium mb-4">
              <span className="font-bold">{searchedIcons?.length} Results</span>
              (ICONS)
            </p>
            <div
              className="grid gap-3"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                gridTemplateRows: "repeat(auto-fill, minmax(120px, 1fr))",
                gridAutoRows: "calc(120px)",
              }}
            >
              {searchedIcons?.map((icon) => {
                return <IconItem key={icon.id} {...icon} pathColor={color} />;
              })}
            </div>
          </>
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
}

const iconsTypes = ["Light", "Regular", "Filled", "Duotone"];
