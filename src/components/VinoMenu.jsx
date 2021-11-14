import React, { useState, useEffect } from "react";
import "./vinomenu.scss";
import gsap from "gsap";

export default function VinoMenu() {
  const [chosenMenuItem, setChosenMenuItem] = useState(0);
  const [selectedTextTitle, setSelectedTextTitle] = useState([
    "Speed sketches",
    "Tekstiiää",
    "Vielä neljäs",
    "Moro",
    "Tekstiiää",
    "Tekstiiää",
  ]);
  const [selectedText, setSelectedText] = useState([
    "LightninggG!!",
    "Pariatur numquam et iusto voluptas. Quisquam et, asperiores cupiditate",
    "Praesentium cumque rerum aut!",
    "NoroLorem, ipsum dolor sit amet consectetur adipisicing elit",
    "NoroLorem, ipsum dolor sit amet consectetur adipisicing elit",
    "NoroLorem, ipsum dolor sit amet consectetur adipisicing elit",
  ]);

  useEffect(() => {
    gsap.to(".vino-anim", { y: -220 * chosenMenuItem });

    //gsap.to(`.vino-anim`, { opacity: 0.15 });
    //gsap.to(`#menu-item-${chosenMenuItem}`, { opacity: 1  });

    gsap.to(".vinomenu-title", {
      transform: `translateX(-${30 * chosenMenuItem}vw)`,
    });
  }, [chosenMenuItem]);

  return (
    <div>
      <div className="vinomenu-container fullscreen">
        <article className="vinomenu-title">
          {selectedTextTitle.map((title, idx) => {
            return (
              <>
                <article
                  className={`item-text-container ${
                    chosenMenuItem === idx ? "chosen-text" : null
                  }`}
                >
                  <aside className="title-small-number">
                    _{(idx + 1).toString().padStart(2, "0")}
                  </aside>
                  <div className="item-title">{title.toUpperCase()}</div>
                  <div className="item-text">{selectedText[idx]}</div>
                </article>
              </>
            );
          })}
        </article>

        <div className="menu-items-container">
          <aside id="vino-upper-gradient"></aside>
          {selectedTextTitle.map((linkPic, idx) => {
            return (
              <>
                <hr className="vino-anim"></hr>
                <article
                  className="two menu-item vino-anim"
                  style={{
                    opacity: 0.3 - Math.abs(chosenMenuItem - idx) * 0.1,
                  }}
                  style={{
                    opacity:
                      chosenMenuItem === idx
                        ? 1
                        : 0.2 - Math.abs(chosenMenuItem - idx) * 0.04,
                  }}
                  id={`menu-item-${idx + 1}`}
                >
                  <aside
                    className={`vinomenu-pic-number ${
                      chosenMenuItem === idx ? "hide-pic-number" : null
                    }`}
                  >
                    _{(idx + 1).toString().padStart(2, "0")}
                  </aside>

                  <video
                    src="./drops.mp4"
                    muted
                    loop="true"
                    autoPlay
                    preload
                  ></video>
                </article>
              </>
            );
          })}
        </div>

        <section className="lowbar-buttons-container">
          {selectedTextTitle.map((button, idx) => {
            return (
              <div
                className="lowbar-button"
                onMouseEnter={(e) => {
                  setChosenMenuItem(idx);
                }}
              >
                #{(idx + 1).toString().padStart(2, "0")}
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
