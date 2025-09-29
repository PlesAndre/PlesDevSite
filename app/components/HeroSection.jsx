import React from "react";
import photoAndrei from "../../public/andreiphoto.png";

export default function HeroSection() {
  return (
    // Container SectionHero
    <div className="py-6">
      <div className="px-3">
        <div className="text-center">
          <div>
            <img src={photoAndrei} alt="andrei's photo"></img>
          </div>
          <div>
            <p>ANDREI LEONARD PLESCAN</p>
          </div>
          <div>
            <p>Full Stack Developer / Continuos learner</p>
          </div>
          <div>Bio veloce ed efficace su di me</div>
        </div>
      </div>
    </div>
  );
}
