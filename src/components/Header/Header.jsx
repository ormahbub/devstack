import React from "react";
import logo from "../../assets/logo-text.png";

function Header() {
  return (
    <header className="bg-white border-b border-[#eeeeee]">
      <div className="container grid grid-cols-12 items-center justify-between py-3">
        <a className="col-span-3" href="/">
          <img className="w-[140px]" src={logo} alt="Logo" />
        </a>

        <nav className="col-span-6">
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

        <div className="col-span-3 flex justify-end items-center space-x-4 header-buttons">
          <a className="" href="/login">
            Log In
          </a>
          <a className="btn bg-[var(--primary-color)] text-white px-4 py-2 rounded-full" href="/signup">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
