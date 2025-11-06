import React from "react";

export default function Header() {
  return (
    <header className="my-10 mx-8">
      <nav className="flex justify-between text-lg px-6">
        <p className="p-3 rounded-2xl bg-cyan-600 text-white">Work</p>
        <p className="p-3 rounded-2xl bg-cyan-600 text-white">Contact me!</p>
      </nav>
    </header>
  );
}
