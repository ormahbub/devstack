import React from "react";
import StackGrid from "./StackGrid";
import StackSidebar from "./StackSidebar";

function TechnologySection() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-[var(--dark-color)] text-[36px] font-[800]">
          Explore the{" "}
          <span class="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-[var(--text-color)] text-[16px] leading-[24px]">
          Pick one technology per category to build your ideal stack.
        </p>
        <div className="grid grid-cols-12 gap-8 mt-10">
            <div className="stack-grid col-span-8 border h-100">
              <StackGrid />
            </div>
            <div className="stack-sidebar col-span-4 border h-100">
              <StackSidebar />
            </div>
        </div>
      </div>
    </section>
  );
}

export default TechnologySection;
