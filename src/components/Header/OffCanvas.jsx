import React from "react";

function OffCanvas({ openCanvas, setOpenCanvas }) {
  return (
    <section
      className={`fixed ${openCanvas ? "flex" : "hidden"} justify-center items-center top-0 left-0 w-full h-full bg-[var(--dark-color)] z-999`}
    >
      <span
        className="absolute top-5 right-5 text-3xl"
        onClick={() => setOpenCanvas(false)}
      >
        ✕
      </span>

      <ul className="space-y-4 flex flex-col justify-center items-center text-white text-lg">
        <li><a href="#">Home</a></li>
        <li><a href="#technologies">Technologies</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

    </section>
  );
}

export default OffCanvas;
