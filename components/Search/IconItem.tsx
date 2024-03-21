import { useSearchStore } from "@/store/zustand";
import { ReactElement, cloneElement } from "react";

type Props = {
  name: string;
  id: number;
  type: string;
  keywords: string[];
  path: ReactElement;
  pathColor?: string;
};

export default function IconItem(props: Props) {
  const { setSelectedIcon, showModal } = useSearchStore();
  const { name, id, type, keywords, path } = props;
  return (
    <label
      onClick={() => {
        showModal();
        setSelectedIcon({
          name,
          id,
          type,
          keywords,
          path,
        });
      }}
      className="w-full h-full flex flex-col py-4 space-y-4 px-3 items-center justify-evenly rounded-2xl cursor-pointer bg-[rgb(248,249,251)] hover:bg-[#D2DCEA]"
    >
      {cloneElement(props.path, {
        style: { fill: props.pathColor, width: "40", height: "40" },
      })}
      <div className="text-primary font-bold text-xs text-center">
        {props.name}
      </div>
    </label>
  );
}
