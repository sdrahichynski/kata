import * as React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  return (
    <div className="flex flex-row rounded-full border-[1px] shadow-sm cursor-pointer hover:shadow-md text-sm font-semibold pl-2 items-center transition-shadow">
      <button className="block h-[48px]">
        <span className="px-4">Anywhere</span>
      </button>

      <span className="hidden sm:block h-[24px] border-l-[1px]" />

      <button className="hidden sm:block h-[48px]">
        <span className="px-4">Any week</span>
      </button>

      <span className="hidden sm:block h-[24px] border-l-[1px]" />

      <button className="hidden sm:block h-[48px]">
        <span className="px-4">Add guests</span>
      </button>

      <button className="p-2.5 mr-2 rounded-full bg-rose-500 text-white">
        <FaSearch size={12} />
      </button>
    </div>
  );
};

export default Search;
