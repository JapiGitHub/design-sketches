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
    gsap.from(".vino-anim", { opacity: 0, duration: 0.4, stagger: -0.1 });
    gsap.from(".button-anim", { opacity: 0, duration: 0.4, stagger: 0.2 });
  }, []);

  useEffect(() => {
    gsap.to(".vino-anim", { y: -220 * chosenMenuItem });

    //gsap.to(`.vino-anim`, { opacity: 0.15 });
    //gsap.to(`#menu-item-${chosenMenuItem}`, { opacity: 1  });

    gsap.to(".item-text-container", {
      transform: `translateX(-${32 * chosenMenuItem}vw)`,
    });
  }, [chosenMenuItem]);

  return (
    <div>
      <div className="vinomenu-container fullscreen">
        {" "}
        <div className="gradient-container fullscreen">
          <aside id="vino-upper-gradient"></aside>
        </div>
        <div className="title-container fullscreen">
          <article className="vinomenu-title">
            {selectedTextTitle.map((title, idx) => {
              return (
                <>
                  <article
                    className={`item-text-container anim ${
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
        </div>
        <div className="menu-items-container">
          {selectedTextTitle.map((linkPic, idx) => {
            return (
              <>
                <hr className="vino-anim anim"></hr>

                <div className="number-pic-container">
                  <article
                    className="menu-item vino-anim anim"
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
                      src="./drops.small.mp4"
                      muted
                      loop="true"
                      autoPlay
                      preload
                    ></video>
                  </article>
                  <aside className="item-number vino-anim anim">
                    _{(idx + 1).toString().padStart(2, "0")}
                  </aside>
                </div>
              </>
            );
          })}
        </div>
        <section className="lowbar-buttons-container">
          {selectedTextTitle.map((button, idx) => {
            return (
              <div
                className={`lowbar-button button-anim ${
                  chosenMenuItem === idx ? "chosen-low-button" : null
                }`}
                onMouseEnter={(e) => {
                  setChosenMenuItem(idx);
                }}
              >
                _{(idx + 1).toString().padStart(2, "0")}
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
