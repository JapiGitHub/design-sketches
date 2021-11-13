import React from "react";
import "./hoverReveal.scss";

export default function HoverReveal() {
  return (
    <div>
      <div className="hoverreveal-container fullscreen">
        <video src="./drops.mp4" muted loop="true" autoPlay preload></video>
        <div className="vino-card">
          <article>
            {" "}
            <div className="text-card">
              <img src="wheat.pic.jpg"></img>
              <h3>Title</h3>
              <p>Lorem, ipsum dolor sit amet consectetur</p>
            </div>
          </article>
          <article>
            <div className="text-card">
              <img src="wheat.pic.jpg"></img>
              <h3>Title</h3>
              <p>Lorem, ipsum dolor sit amet consectetur</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
