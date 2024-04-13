import React, { useState } from "react";
import { appleImg, bagImg, searchImg } from "../utils/index";

import { navLists } from "../constants";
import { RiCloseLine } from "react-icons/ri";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = ({ className }: { className?: string }) => (
    <div className={className}>
      {navLists.map((nav) => (
        <div
          key={nav}
          className="px-5 text-[14px] cursor-pointer text-gray mb-3 hover:text-white transition-all"
        >
          {nav}
        </div>
      ))}
    </div>
  );

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="appleimg" width={14} height={18} />

        <div className="flex flex-1 justify-center">
          <Menu className="hidden lg:flex xl:flex-1 xl:justify-center" />
        </div>

        <div className="flex items-center gap-7 max-sm:justify-end">
          <div className="lg:hidden z-[1000]">
            {toggleMenu ? (
              <RiCloseLine
                className="text-white cursor-pointer"
                size={25}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                className="text-white cursor-pointer"
                size={25}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="absolute p-4 top-[50px] right-0 w-[200px] bg-indigo-900  shadow-lg rounded-md mt-2 transform origin-top scale-100 sm:scale-105 transition-transform">
                <div className="text-center flex flex-col gap-5">
                  <Menu />
                </div>
              </div>
            )}
          </div>

          <img
            src={searchImg}
            className="cursor-pointer"
            alt="search"
            width={18}
            height={18}
          />
          <img
            src={bagImg}
            className="cursor-pointer"
            alt="bag"
            width={18}
            height={18}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
