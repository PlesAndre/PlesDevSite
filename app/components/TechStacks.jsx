import React from "react";

export default function TechStacks() {
  return (
    <section className="mx-auto mt-6 text-center w-50">
      <h2>Tech Stacks</h2>
      {/*Core languages*/}
      <div className="border-2 mb-4">
        <h3>Linguaggi Principali</h3>
        <p>HTML5</p>
        <p>CSS3</p>
        <p>Javascript</p>
      </div>

      <div className="border-2 mb-4">
        <h3>Bundler</h3>
        <p>Vite</p>
      </div>

      <div className="border-2 mb-4">
        <h3>SW Versionamento</h3>
        <p>Git</p>
        <p>GitHub</p>
      </div>

      <div className="border-2 mb-4">
        <h3>Framework & Librerie</h3>
        <h5>Front-End</h5>
        <p>Bootstrap</p>
        <p>TailwindCSS</p>
        <p>React</p>
        <h5>Back-End</h5>
        <p>Express.js</p>
        <p>Node.js</p>
        <p>MongoDB</p>
      </div>
    </section>
  );
}
