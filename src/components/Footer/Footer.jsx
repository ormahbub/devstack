import React from "react";
import SiteLogo from "../../assets/logo-text.png";

function Footer() {
  return (
    <footer className="border-t border-gray-200 pt-12">
      <div className="container grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <img src={SiteLogo} alt="Site Logo" />
          <p className="max-w-[75%] text-[var(--text-color)] text-[14px] leading-[20px] mt-2">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <ul className="flex space-x-4 mt-6">
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <h4 className="font-semibold uppercase text-[var(--dark-color)] mb-4">
            Product
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#technologies">Technologies</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <h4 className="font-semibold uppercase text-[var(--dark-color)] mb-4">
            Company
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <h4 className="font-semibold uppercase text-[var(--dark-color)] mb-4">
            Legal
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-12 py-6 border-t border-gray-200 py-4 flex justify-between items-center">
        <p className="text-[var(--text-color)] text-[14px]">
          © 2026 Dev Stack. All rights reserved.
        </p>
        <ul className="flex justify-end items-center space-x-5">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
