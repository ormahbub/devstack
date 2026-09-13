import React, { useState, useEffect } from "react";
import StackGrid from "./StackGrid/StackGrid";
import StackSidebar from "./StackSidebar";
import data from "../../data/data.json";

function TechnologySection() {
  const [stack, setStack] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setTechnologies(data);
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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
    <section id="technologies" className="pt-20 pb-12">
      <div className="container mx-auto px-4 flex flex-col justify-center lg:justify-start items-center lg:items-start">
        {" "}
        {/* Added mx-auto px-4 for centering */}
        <h2 className="text-[var(--dark-color)] text-[24px] text-center lg:text-left lg:text-[36px] font-[800]">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-[var(--text-color)] lg:text-[16px] text-[14px] leading-[20px] text-center lg:text-left w-[75%] lg:leading-[24px]">
          Pick one technology per category to build your ideal stack.
        </p>
        <div className="grid grid-cols-12 gap-6 mt-10">
          <div className="stack-grid col-span-12 lg:col-span-9">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-12 h-12 border-4 border-gray-200 border-t-[#FF5722] rounded-full animate-spin"></div>
                <p className="mt-4 text-[var(--text-color)] font-medium">
                  Loading technologies...
                </p>
              </div>
            ) : (
              <StackGrid
                data={technologies}
                stack={stack}
                addToStack={addToStack}
              />
            )}
          </div>
          <div className="stack-sidebar col-span-12 lg:col-span-3">
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
