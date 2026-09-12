import React from "react";
import BannerImage from "../assets/banner-stack.png";

function Banner() {
  return (
    <section className="py-12">
      <div className="container flex justify-between items-center py-10">
        <div className="w-[55%]">
          <h1 className="font-[900] text-[var(--dark-color)] text-[60px] leading-[68px]">
            Build Your Ideal
            <br />
            <span class="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="text-[var(--text-color)] text-[16px] leading-[24px] mt-4 mb-6 max-w-[64%]">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex space-x-4 mt-12">
            <a
              className="bg-gradient-to-r from-[#F97316] to-[#EC4899] px-6 py-3 rounded-lg text-white font-medium"
              href="#"
            >
              Explore Technologies
            </a>
            <a
              className="px-8 py-3 rounded-lg text-[var(--text-color)] font-medium border border-[#dddddd]"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="w-[40%] flex justify-end items-center">
          <img
            className="max-w-[100%]"
            src={BannerImage}
            alt="Development Stack"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
