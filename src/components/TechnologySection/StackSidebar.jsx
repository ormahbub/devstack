import React from "react";
import { toast } from "react-toastify";

function StackSidebar({ stack, removeFromStack, clearStack }) {

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
      <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>
      <p className="text-sm text-[var(--text-color)] mt-1 mb-4">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technolog${stack.length > 1 ? "ies Selected" : "y Selected"}.`}
      </p>

      {stack.length === 0 ? (
        <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center text-[var(--text-color)] text-sm">
          Your stack is empty.
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt="" className="w-5 h-5" />
                <span className="text-sm font-medium text-gray-800">
                  {item.name}
                </span>
              </div>
              <button
                onClick={() => {
                  removeFromStack(item.id);
                  toast.info(`${item.name} removed from your stack.`);
                }}
                className="text-[var(--text-color)] cursor-pointer hover:text-red-700 font-bold p-1"
                title="Remove"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            onClick={() => {
              clearStack();
              toast.info("All technologies removed from your stack.");
            }}
            className="mt-4 w-full font-semibold py-2 text-sm text-red-500 border cursor-pointer border-red-500 rounded-lg hover:bg-red-50 transition-colors font-medium"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}

export default StackSidebar;
