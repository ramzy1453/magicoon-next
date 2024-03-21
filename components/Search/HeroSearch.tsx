import { useSearchStore } from "@/store/zustand";
import { ChangeEvent } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

export default function HeroSearch() {
  const { query, setQuery } = useSearchStore();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const clearSearch = () => {
    setQuery("");
  };

  return (
    <div className="sticky top-0">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-primary sr-only"
      >
        Search
      </label>
      <div className="relative">
        <input
          value={query}
          onChange={handleChange}
          type="text"
          id="default-search"
          className="border border-[#D2DCEA] block w-full p-4 pl-10 pr-12 text-sm text-primary font-bold rounded-lg bg-primary-content outline-none focus:ring-2 focus:ring-primary"
          placeholder="Search 1080 icons..."
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 flex items-center px-3"
          >
            <FaTimes size={16} color="#25314C" />
          </button>
        )}
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <FaSearch size={16} color="#25314C" />
        </div>
      </div>
    </div>
  );
}
