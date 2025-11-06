import React from "react";
import Image from "next/image";
import AndreiImage from "../../public/andreiphoto.png";

export default function HeroSection() {
  return (
    <section className="flex flex-col pb-8 mx-5 text-center">
      <Image
        src={AndreiImage}
        priority
        alt="Andrei's image"
        className="w-50 h-50 rounded-full mx-auto"
      />
      <span>ANDREI LEONARD PLESCAN</span>
      <h1>Full Stack Developer / Continuos learner</h1>
      <p>Bio veloce ed efficace su dime</p>
    </section>
  );
}
