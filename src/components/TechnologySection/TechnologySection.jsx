import React, { useState } from "react";
import StackGrid from "./StackGrid/StackGrid";
import StackSidebar from "./StackSidebar";
import data from "../../data/data.json";

function TechnologySection() {
  const [stack, setStack] = useState([]);

  const isSelected = (id) => stack.some((item) => item.id === id);

  const addToStack = (tech) => {
    if (!isSelected(tech.id)) {
      setStack([...stack, tech]);
    }
  };

  const removeFromStack = (id) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  const clearStack = () => {
    setStack([]);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {" "}
        {/* Added mx-auto px-4 for centering */}
        <h2 className="text-[var(--dark-color)] text-[36px] font-[800]">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-[var(--text-color)] text-[16px] leading-[24px]">
          Pick one technology per category to build your ideal stack.
        </p>
        <div className="grid grid-cols-12 gap-6 mt-10">
          <div className="stack-grid col-span-9">
            <StackGrid data={data} stack={stack} addToStack={addToStack} />
          </div>
          <div className="stack-sidebar col-span-3">
            <StackSidebar
              stack={stack}
              removeFromStack={removeFromStack}
              clearStack={clearStack}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnologySection;
