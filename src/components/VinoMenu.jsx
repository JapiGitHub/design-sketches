import React, { useState, useEffect } from "react";
import "./vinomenu.scss";
import gsap from "gsap";

export default function VinoMenu() {
  const [chosenMenuItem, setChosenMenuItem] = useState(0);
  const [selectedText, setSelectedText] = useState([
    "Some of my work",
    "moro",
    "tekstiiää",
  ]);

  useEffect(() => {
    gsap.to(".menu-item", { y: -220 * chosenMenuItem });

    gsap.to(`.menu-item`, { opacity: 0.15 });
    gsap.to(`#menu-item-${chosenMenuItem}`, { opacity: 1 });
  }, [chosenMenuItem]);

  return (
    <div>
      <div className="vinomenu-container fullscreen">
        <article className="vinomenu-title">
          {selectedText[chosenMenuItem]}
        </article>
        <div className="menu-items-container">
          <article className="one menu-item" id="menu-item-1">
            <img src="./wheat.pic.jpg"></img>
          </article>
          <article className="two menu-item" id="menu-item-2">
            <video src="./drops.mp4" muted loop="true" autoPlay preload></video>
          </article>
        </div>

        <section className="lowbar-buttons-container">
          <div
            className="lowbar-button"
            data-reactid="1"
            onMouseEnter={(e) => {
              setChosenMenuItem(e.target.dataset.reactid);
            }}
          ></div>
          <div
            className="lowbar-button"
            data-reactid="2"
            onMouseEnter={(e) => {
              setChosenMenuItem(e.target.dataset.reactid);
            }}
          ></div>
        </section>
      </div>
    </div>
  );
}
