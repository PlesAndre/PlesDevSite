import React from "react";
import Image from "next/image";
import AndreiImage from "../../public/andreiphoto.png";

export default function HeroSection() {
  return (
    <section className="mb-8 text-center">
      <div>
        <Image
          src={AndreiImage}
          alt="Andrei's image"
          className="mx-auto w-40 h-40 rounded-full"
        />
        <h1>ANDREI LEONARD PLESCAN</h1>
        <h3>Full Stack Developer / Continuos learner</h3>
        <p>Bio veloce ed efficace su dime</p>
      </div>
    </section>
  );
}
