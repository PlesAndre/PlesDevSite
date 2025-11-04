import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

export default function Contacts() {
  return (
    <>
      <section className="mt-4 mx-auto border-2 w-96">
        <div>
          <h2>Cerchi un Full Stack Developer per il tuo progetto?</h2>
          <p>Contattami e mostrami le tue idee</p>
          <p>
            <AiOutlineMail />
            Email
          </p>
        </div>

        <div>
          <p>
            <TbFileCv />
            CV
          </p>
          <p>
            <FaLinkedin />
            Linkedin
          </p>
          <p>
            <FaGithub />
            GitHub
          </p>
        </div>
      </section>
      <footer>Developed Andrei | 2025</footer>
    </>
  );
}
