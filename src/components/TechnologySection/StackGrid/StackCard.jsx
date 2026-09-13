import React from "react";
import { toast } from "react-toastify";

function StackCard({ tech, isSelected, onAdd }) {
  const notifyAdd = () => toast.success(`${tech.name} added to your stack!`);
  return (
    <div
      className={`relative bg-white rounded-xl p-6 transition-all duration-300 flex flex-col h-full
        ${
          isSelected
            ? "border border-red-500 shadow-md"
            : "border border-gray-200 shadow-sm hover:shadow-md"
        }
      `}
    >
      <div className="flex justify-between items-start mb-4">
        <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
        {tech.tag && (
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full text-${tech.tagColor}-500 bg-${tech.tagColor}-100`}
          >
            {tech.tag}
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold text-[var(--dark-color)] mb-2">{tech.name}</h3>
      <p className="text-sm text-[var(--text-color)] mb-6 flex-grow">{tech.description}</p>

      <div className="flex justify-between items-center text-xs text-gray-600 mb-4 bg-gray-50 p-2 rounded-lg">
        <span>{tech.category}</span>
        <span>{tech.level}</span>
        <span className="text-yellow-600 font-bold">
          ★ <span className="text-[var(--dark-color)]">{tech.rating}</span>
        </span>
      </div>

      <button
        onClick={() => {
          notifyAdd();
          onAdd();
        }}
        disabled={isSelected}
        className={`w-full py-2 rounded-md font-semibold text-sm transition-colors
          ${
            isSelected
              ? "bg-gray-500 cursor-not-allowed text-white cursor-default"
              : "bg-gray-900 cursor-pointer text-white hover:bg-gray-800"
          }
        `}
      >
        {isSelected ? "Added" : "Add to Stack"}
      </button>
    </div>
  );
}

export default StackCard;
