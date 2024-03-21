import classNames from "classnames";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

type Props = {
  selectOptions: string[];
  setSubject: (subject: string) => void;
};

export default function SelectForm({ selectOptions, setSubject }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleSelectOption = (option: string) => () => {
    setSelectedOption(option);
    setSubject(option);
    setIsOpen(false);
  };

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Select an option"
        value={selectedOption || ""}
        readOnly
        onClick={toggleMenu}
        className="input input-bordered rounded-full bg-[#f8f9fb] hover:bg-transparent w-full pr-10 focus:border-info focus:border-2 focus:outline-none text-sm font-medium cursor-pointer"
      />
      <div
        className="absolute right-0 top-0 bottom-0 flex items-center px-3 pointer-events-none text-gray-500"
        onClick={toggleMenu}
      >
        <HiChevronDown />
      </div>
      {isOpen && (
        <ul className="absolute top-full mt-2 left-0 p-2 shadow dropdown-content z-[1] bg-base-100 rounded-box w-full">
          {selectOptions.map((option, index) => (
            <li
              key={index}
              onClick={handleSelectOption(option)}
              className={classNames(
                "p-2 cursor-pointer hover:bg-info font-medium hover:text-white rounded-md transition-colors duration-200 ease-in-out",
                {
                  "text-info": selectedOption === option,
                }
              )}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
