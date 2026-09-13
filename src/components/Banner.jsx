import React from "react";
import BannerImage from "../assets/banner-stack.png";

function Banner() {
  return (
    <section className="py-0 lg:py-12">
      <div className="container flex flex-col lg:flex-row justify-between items-center px-4 py-0 lg:py-10">
        <div className="w-full lg:w-[55%] pt-20 lg:pt-0">
          <h1 className="font-[900] text-center lg:text-left text-[var(--dark-color)] text-[32px] lg:text-[60px] leading-[38px] lg:leading-[68px]">
            Build Your Ideal
            <br />
            <span class="gradient-text">
              Development Stack
            </span>
          </h1>
          <p className="text-[var(--text-color)] text-center lg:text-left text-[16px] leading-[24px] mt-4 mb-6 lg:max-w-[64%]">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex space-x-4 mt-8 lg:mt-12 justify-center lg:justify-start">
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
        <div className="w-full lg:w-[40%] flex justify-center lg:justify-end items-center -mt-5 -mb-10 lg:mt-0 lg:mb-0">
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
