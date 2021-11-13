import React from "react";
import { useState, useEffect } from "react";
import gsap from "gsap";
import "./salmiakki.scss";

export default function Salmiakki() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [jumpingText, setJumpingText] = useState(
    `Some nice things about something`.split(/!*/)
  ); //regex so the spaces remain in the string

  useEffect(() => {
    const tlMenu = gsap.timeline({
      defaults: { opacity: 0, duration: 1, stagger: 0.5 },
    });

    console.log("init");
    tlMenu.from(".anim", { y: 50, scale: 0.8 });
  }, [videoLoaded]);

  return (
    <div>
      <section className="allcontainer fullscreen">
        <div className="grid-lines">
          {Array.from({ length: 150 }, (item, idx) => (
            <div>
              {/* en saanu jostain syystä gsappia toimimaan staggerin kanssa tässä ni tein vaa css:llä */}
              <aside style={{ animationDelay: `${idx * 0.01}s` }}></aside>
            </div>
          ))}
        </div>

        <img id="wheat-pic" className="fullscreen" src="wheat.pic.jpg"></img>
        <video
          id="wheat-video"
          className="fullscreen"
          src="./wheat.vid.mp4"
          autoPlay
          muted
          preload="true"
          loop
          onLoadedData={() => {
            setVideoLoaded(true);
            console.log("loaded");
          }}
        ></video>

        {videoLoaded ? (
          <div className="texts-container fullscreen">
            <span id="title" className="anim">
              Some title
            </span>

            <div className="anim">
              {jumpingText.map((letter, idx) => {
                return (
                  <aside style={{ animationDelay: `${idx * 0.06}s` }}>
                    {letter === " " ? <span>&nbsp;</span> : letter}
                  </aside>
                );
              })}
            </div>
            <span className="lower-text anim">WELCOME</span>
          </div>
        ) : null}

        <div className="svg-container fullscreen">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="loading-wheat-video"
          >
            <g>
              <rect width="32" height="32" fill="none" />
              <g id="ulompi">
                <path
                  id="Vector"
                  d="M7.7 4.7C6.55299 5.58018 5.54211 6.62476 4.7 7.8L6.3 9C7.03445 7.98143 7.90986 7.07235 8.9 6.3L7.7 4.7Z"
                  fill="white"
                  fillOpacity="0.3"
                  fillOpacity="0.3"
                />
                <path
                  id="Vector_2"
                  d="M4.6 12.3L2.7 11.7C2.21696 13.0814 1.98004 14.5368 2 16H4C3.99594 14.7421 4.19864 13.4921 4.6 12.3V12.3Z"
                  fill="white"
                  fillOpacity="0.3"
                />
                <path
                  id="Vector_3"
                  d="M2.7 20.4C3.16376 21.7944 3.83824 23.1097 4.7 24.3L6.3 23.1C5.57708 22.0878 5.00448 20.9763 4.6 19.8L2.7 20.4Z"
                  fill="white"
                  fillOpacity="0.3"
                />
                <path
                  id="Vector_4"
                  d="M7.8 27.3C8.99033 28.1618 10.3056 28.8362 11.7 29.3L12.3 27.4C11.1237 26.9955 10.0122 26.4229 9 25.7L7.8 27.3Z"
                  fill="white"
                  fillOpacity="0.3"
                />
                <path
                  id="Vector_5"
                  d="M11.7 2.7L12.3 4.6C13.4921 4.19864 14.7421 3.99594 16 4V2C14.5368 1.98004 13.0814 2.21696 11.7 2.7V2.7Z"
                  fill="white"
                  fillOpacity="0.3"
                />
                <path
                  id="Vector_6"
                  d="M24.2 27.3C25.3779 26.4221 26.4221 25.3779 27.3 24.2L25.7 23C24.9563 24.0438 24.0438 24.9563 23 25.7L24.2 27.3Z"
                  fill="white"
                  fillOpacity="0.3"
                />
                <path
                  id="Vector_7"
                  d="M27.4 19.7L29.3 20.3C29.735 18.9069 29.9707 17.4592 30 16H28C28.0041 17.2579 27.8014 18.5079 27.4 19.7V19.7Z"
                  fill="white"
                  fillOpacity="0.3"
                />
                <path
                  id="Vector_8"
                  d="M29.2 11.6C28.7362 10.2056 28.0618 8.89033 27.2 7.7L25.6 8.9C26.3229 9.91221 26.8955 11.0237 27.3 12.2L29.2 11.6Z"
                  fill="white"
                  fillOpacity="0.3"
                />
                <path
                  id="Vector_9"
                  d="M24.1 4.6C22.9097 3.73824 21.5944 3.06376 20.2 2.6L19.6 4.5C20.7763 4.90448 21.8878 5.47708 22.9 6.2L24.1 4.6Z"
                  fill="white"
                  fillOpacity="0.3"
                />
                <path
                  id="Vector_10"
                  d="M20.3 29.3L19.7 27.4C18.5079 27.8014 17.2579 28.0041 16 28V30C17.4534 29.9134 18.8942 29.6789 20.3 29.3V29.3Z"
                  fill="white"
                  fillOpacity="0.3"
                />
              </g>
              <g id="sisempi">
                <path
                  id="Vector_11"
                  d="M10.2937 8.23125C9.50518 8.83637 8.8102 9.55452 8.23125 10.3625L9.33125 11.1875C9.83618 10.4872 10.438 9.86224 11.1187 9.33125L10.2937 8.23125Z"
                  fill="white"
                  fillOpacity="0.3"
                />
                <path
                  id="Vector_12"
                  d="M8.1625 13.4563L6.85625 13.0437C6.52416 13.9934 6.36128 14.994 6.375 16H7.75C7.74721 15.1352 7.88657 14.2758 8.1625 13.4563V13.4563Z"
                  fill="white"
                  fillOpacity="0.3"
                />
                <path
                  id="Vector_13"
                  d="M6.85625 19.025C7.17509 19.9837 7.63879 20.8879 8.23125 21.7062L9.33125 20.8813C8.83424 20.1854 8.44058 19.4212 8.1625 18.6125L6.85625 19.025Z"
                  fill="white"
                  fillOpacity="0.3"
                />
                <path
                  id="Vector_14"
                  d="M10.3625 23.7687C11.1809 24.3612 12.0851 24.8249 13.0437 25.1437L13.4563 23.8375C12.6476 23.5594 11.8834 23.1658 11.1875 22.6688L10.3625 23.7687Z"
                  fill="white"
                  fillOpacity="0.3"
                />
                <path
                  id="Vector_15"
                  d="M13.0437 6.85625L13.4563 8.1625C14.2758 7.88657 15.1352 7.74721 16 7.75V6.375C14.994 6.36128 13.9934 6.52416 13.0437 6.85625V6.85625Z"
                  fill="white"
                  fillOpacity="0.3"
                />
                <path
                  id="Vector_16"
                  d="M21.6375 23.7687C22.4473 23.1652 23.1652 22.4473 23.7687 21.6375L22.6688 20.8125C22.1575 21.5301 21.5301 22.1575 20.8125 22.6688L21.6375 23.7687Z"
                  fill="white"
                  fillOpacity="0.3"
                />
                <path
                  id="Vector_17"
                  d="M23.8375 18.5438L25.1437 18.9562C25.4428 17.9985 25.6048 17.0032 25.625 16H24.25C24.2528 16.8648 24.1134 17.7242 23.8375 18.5438V18.5438Z"
                  fill="white"
                  fillOpacity="0.3"
                />
                <path
                  id="Vector_18"
                  d="M25.075 12.975C24.7562 12.0163 24.2925 11.1121 23.7 10.2937L22.6 11.1187C23.097 11.8146 23.4907 12.5788 23.7687 13.3875L25.075 12.975Z"
                  fill="white"
                  fillOpacity="0.3"
                />
                <path
                  id="Vector_19"
                  d="M21.5688 8.1625C20.7504 7.57004 19.8462 7.10634 18.8875 6.7875L18.475 8.09375C19.2837 8.37183 20.0479 8.76549 20.7437 9.2625L21.5688 8.1625Z"
                  fill="white"
                  fillOpacity="0.3"
                />
                <path
                  id="Vector_20"
                  d="M18.9562 25.1437L18.5438 23.8375C17.7242 24.1134 16.8648 24.2528 16 24.25V25.625C16.9992 25.5655 17.9897 25.4042 18.9562 25.1437V25.1437Z"
                  fill="white"
                  fillOpacity="0.3"
                />
              </g>
            </g>
          </svg>
        </div>

        {/* */}

        {/* */}
      </section>
    </div>
  );
}
