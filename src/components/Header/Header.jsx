import React from "react";
import logo from "../../assets/logo-text.png";
import HamburgerIcon from "../../assets/hamburger.png";
import OffCanvas from "./OffCanvas";

function Header() {
  const [openCanvas, setOpenCanvas] = React.useState(false);

  return (
    <header className="bg-white border-b border-[#eeeeee] sticky top-0 left-0 z-99">
      <div className="container grid grid-cols-12 items-center justify-between px-4 py-3">
        <div className="col-span-3 lg:hidden flex items-center justify-start">
          <img
            onClick={() => setOpenCanvas(!openCanvas)}
            className="cursor-pointer w-[24px]"
            src={HamburgerIcon}
            alt="Menu"
          />
        </div>

        <a className="col-span-5 lg:col-span-3" href="/">
          <img className="w-[120px] lg:w-[140px]" src={logo} alt="Logo" />
        </a>

        <nav className="hidden lg:block lg:col-span-6">
          <ul className="flex justify-center space-x-10 ">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#technologies">Technologies</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="col-span-4 lg:col-span-3 flex justify-end items-center space-x-2 lg:space-x-4 header-buttons">
          <a className="text-[12px] lg:text-[14px]" href="/login">
            Log In
          </a>
          <a
            className="btn bg-[var(--primary-color)] text-white px-3 py-2 text-[12px] lg:text-[14px] lg:px-4 lg:py-2 rounded-full"
            href="/signup"
          >
            Sign Up
          </a>
        </div>
      </div>
      <OffCanvas openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />
    </header>
  );
}

export default Header;
