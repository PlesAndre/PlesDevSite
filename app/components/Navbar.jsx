import React from "react";

export default function Header() {
  return (
    <nav className="flex justify-between text-lg px-6 my-10 mx-8">
      <button className="p-3 rounded-2xl bg-cyan-600 text-white">Work</button>
      <button className="p-3 rounded-2xl bg-cyan-600 text-white">
        Contact me!
      </button>
    </nav>
  );
}
