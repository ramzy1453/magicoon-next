import cn from "classnames";

export type Category = {
  title: string;
  numIcons: number;
  icon: JSX.Element;
  isNew?: boolean;
};

export default function CategoryItem({
  title,
  numIcons,
  icon,
  isNew,
}: Category) {
  return (
    <div className="relative flex-shrink-0">
      <div
        className={cn(
          "flex flex-shrink-0 p-4 rounded-lg bg-[#EAEEF5]",
          "flex-col items-center justify-center space-y-4",
          "md:space-y-0 md:flex-row md:items-center md:justify-start",
          "text-center h-full"
        )}
      >
        <div
          className={cn(
            "flex btn-circle items-center justify-center rounded-full bg-white"
          )}
        >
          {icon}
        </div>

        <div className="flex flex-col justify-center items-center md:items-start md:ml-4">
          <p className="font-bold text-sm">{title}</p>
          <p className="font-[12px] text-xs">{numIcons} icons</p>
        </div>
      </div>
      {isNew && (
        <div className="badge rounded-md p-3 bg-[#3B6CE8] text-white absolute -top-2 right-4 text-xs font-semibold">
          NEW
        </div>
      )}
    </div>
  );
}
