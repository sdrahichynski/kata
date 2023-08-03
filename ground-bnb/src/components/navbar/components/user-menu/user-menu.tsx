"use client";

import * as React from "react";
import { IoMenuOutline } from "react-icons/io5";
import * as LC from "./components";
interface UserMenuProps {}

const UserMenu: React.FC<UserMenuProps> = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-row gap-3 rounded-full relative">
      <button className="rounded-full h-[40px] flex items-center rounded-full px-4 hover:bg-gray-100 transition-colors">
        G-bnb your home
      </button>

      <button
        className="flex gap-2 border-[1px] rounded-full h-[40px] pr-1 px-2.5 items-center hover:shadow-md transition-shadow"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <IoMenuOutline size={18} />
        <LC.Avatar />
      </button>

      {isOpen && <LC.Menu onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default UserMenu;
