import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function LatestWorks() {
  return (
    <section className="mx-auto text-center w-50">
      <h2>Le mie creazioni</h2>
      <div className="border-2 mt-2">
        <div className="flex justify-around border-b-1">
          <div>Pimp My PC</div>
          <div className="my-auto">
            <FaLongArrowAltRight />
          </div>
        </div>
        <div>Immagine del progetto</div>
      </div>

       <div className="border-2 mt-4">
        <div className="flex justify-around border-b-1">
          <div>Your Next Project</div>
          <div className="my-auto">
            <FaLongArrowAltRight />
          </div>
        </div>
        <div>Immagine con un uomo che indica un file/progetto</div>
      </div>
    </section>
  );
}
