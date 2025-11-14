import React from "react";
import Image from "next/image";
import AndreiImage from "../../public/andreiphoto.png";

export default function HeroSection() {
  return (
    <header className="relative flex w-3/5 m-auto p-20 rounded-4xl bg-gray-500">
      {/* Contenuto testuale */}
      <div className="flex flex-col gap-2">
        <div className="bg-slate-300 rounded-2xl text-center w-9/12 p-4">
          <span>ANDREI LEONARD PLESCAN</span>
          <h1>Full Stack Developer / Continuos learner</h1>
        </div>
        <p>
        </p>
      </div>

      {/* Immagine sovrapposta */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 transform max-w-52">
        <Image
          src={AndreiImage}
          alt="Andrei's image"
          priority
          className="w-full max-h-56 rounded-full"
        />
      </div>
    </header>
  );
}
