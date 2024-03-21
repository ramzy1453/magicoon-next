import { ReactNode } from "react";

export type Props = {
  Icon: ReactNode;
  style: string;
  border: string;
};

export default function IconItem({ Icon, style, border }: Props) {
  return (
    <div className="flex cursor-pointer flex-col justify-center items-center space-y-4 group hover:scale-95 transition-all">
      <div className="h-[120px] w-[120px] bg-[#EAEEF5] group-hover:bg-[#DDE2EB] rounded-2xl flex flex-col justify-center items-center space-y-4 px-8 py-4">
        {Icon}
        <div className="text-primary-500 text-sm font-bold">{border}</div>
      </div>
      <button className="btn px-4 bg-[#396CE8] text-primary-content transition-all text-xs btn-sm rounded-full group-hover:bg-primary">
        {style}
      </button>
    </div>
  );
}
