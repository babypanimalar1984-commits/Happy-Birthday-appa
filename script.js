/* =========================================================
   HAPPY BIRTHDAY DAD ❤️
   script.js
   Fully matched with main.html + style.css
   ========================================================= */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     ELEMENTS
     ======================================================= */

  const musicButton = document.getElementById("musicButton");
  const birthdaySong = document.getElementById("birthdaySong");

  const photoFrame = document.querySelector(".photo-frame");
  const musicIcon = document.querySelector(".music-icon");

  const memoryCards =
    document.querySelectorAll(".memory-card");

  const wishHeart =
    document.querySelector(".wish-heart");

  const stars =
    document.querySelector(".stars");

  const hero =
    document.querySelector(".hero");

  const finalSection =
    document.querySelector(".final-section");

  const revealElements =
    document.querySelectorAll(
      ".letter-section, .family-section, .wishes-section, .final-section"
    );


  /* =======================================================
     1. MUSIC PLAYER
     ======================================================= */

  if (musicButton && birthdaySong) {

    const setMusicState = (playing) => {

      musicButton.textContent = playing ? "❚❚" : "▶";

      musicButton.setAttribute(
        "aria-label",
        playing
          ? "Pause birthday song"
          : "Play birthday song"
      );

      if (musicIcon) {
        musicIcon.classList.toggle(
          "music-playing",
          playing
        );
      }
    };


    musicButton.addEventListener("click", async () => {

      try {

        if (birthdaySong.paused) {

          await birthdaySong.play();

          setMusicState(true);

        } else {

          birthdaySong.pause();

          setMusicState(false);

        }

      } catch (error) {

        console.warn(
          "The birthday song could not be played.",
          error
        );

        setMusicState(false);

      }

    });


    birthdaySong.addEventListener("play", () => {
      setMusicState(true);
    });


    birthdaySong.addEventListener("pause", () => {
      setMusicState(false);
    });


    birthdaySong.addEventListener("ended", () => {
      setMusicState(false);
    });


    /* Pause when the page is hidden */
    document.addEventListener(
      "visibilitychange",
      () => {

        if (
          document.hidden &&
          !birthdaySong.paused
        ) {
          birthdaySong.pause();
        }

      }
    );

  }


  /* =======================================================
     2. PHOTO 3D TILT
     ======================================================= */

  if (photoFrame) {

    const supportsHover =
      window.matchMedia("(hover: hover)").matches;

    if (supportsHover) {

      photoFrame.addEventListener(
        "mousemove",
        (event) => {

          const rect =
            photoFrame.getBoundingClientRect();

          const x =
            (event.clientX - rect.left)
            / rect.width
            - 0.5;

          const y =
            (event.clientY - rect.top)
            / rect.height
            - 0.5;

          const rotateX = -(y * 5);
          const rotateY = x * 5;

          photoFrame.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

        }
      );


      photoFrame.addEventListener(
        "mouseleave",
        () => {

          photoFrame.style.transform =
            "perspective(900px) rotateX(0deg) rotateY(0deg)";

        }
      );

    }

  }


  /* =======================================================
     3. MEMORY CARD REVEAL
     ======================================================= */

  if (memoryCards.length > 0) {

    if ("IntersectionObserver" in window) {

      const cardObserver =
        new IntersectionObserver(
          (entries, observer) => {

            entries.forEach((entry) => {

              if (entry.isIntersecting) {

                entry.target.classList.add(
                  "card-visible"
                );

                observer.unobserve(
                  entry.target
                );

              }

            });

          },
          {
            threshold: 0.15
          }
        );


      memoryCards.forEach((card) => {
        cardObserver.observe(card);
      });

    } else {

      memoryCards.forEach((card) => {
        card.classList.add("card-visible");
      });

    }

  }


  /* =======================================================
     4. HEART REVEAL
     ======================================================= */

  if (wishHeart) {

    if ("IntersectionObserver" in window) {

      const heartObserver =
        new IntersectionObserver(
          (entries, observer) => {

            entries.forEach((entry) => {

              if (entry.isIntersecting) {

                wishHeart.classList.add(
                  "heart-active"
                );

                observer.unobserve(
                  entry.target
                );

              }

            });

          },
          {
            threshold: 0.5
          }
        );


      heartObserver.observe(wishHeart);

    } else {

      wishHeart.classList.add(
        "heart-active"
      );

    }

  }


  /* =======================================================
     5. SECTION SCROLL REVEAL
     ======================================================= */

  if (revealElements.length > 0) {

    revealElements.forEach((element) => {
      element.classList.add("scroll-hidden");
    });


    if ("IntersectionObserver" in window) {

      const revealObserver =
        new IntersectionObserver(
          (entries, observer) => {

            entries.forEach((entry) => {

              if (entry.isIntersecting) {

                entry.target.classList.add(
                  "scroll-visible"
                );

                observer.unobserve(
                  entry.target
                );

              }

            });

          },
          {
            threshold: 0.12
          }
        );


      revealElements.forEach((element) => {
        revealObserver.observe(element);
      });

    } else {

      revealElements.forEach((element) => {
        element.classList.add("scroll-visible");
      });

    }

  }


  /* =======================================================
     6. STAR PARALLAX
     ======================================================= */

  if (stars) {

    const supportsHover =
      window.matchMedia("(hover: hover)").matches;

    if (supportsHover) {

      window.addEventListener(
        "mousemove",
        (event) => {

          const x =
            (event.clientX / window.innerWidth - 0.5)
            * 10;

          const y =
            (event.clientY / window.innerHeight - 0.5)
            * 10;

          stars.style.transform =
            `translate(${x}px, ${y}px)`;

        },
        {
          passive: true
        }
      );

    }

  }


  /* =======================================================
     7. HERO PARALLAX
     ======================================================= */

  if (hero) {

    const supportsHover =
      window.matchMedia("(hover: hover)").matches;

    if (supportsHover) {

      const heroTitle =
        hero.querySelector(".hero-title");

      const heroDecoration =
        hero.querySelector(".hero-decoration");


      hero.addEventListener(
        "mousemove",
        (event) => {

          const rect =
            hero.getBoundingClientRect();

          const x =
            (event.clientX - rect.left)
            / rect.width
            - 0.5;

          const y =
            (event.clientY - rect.top)
            / rect.height
            - 0.5;


          if (heroTitle) {

            heroTitle.style.transform =
              `translate(
                ${x * 5}px,
                ${y * 5}px
              )`;

          }


          if (heroDecoration) {

            heroDecoration.style.transform =
              `translate(
                ${x * -8}px,
                ${y * -8}px
              )`;

          }

        }
      );


      hero.addEventListener(
        "mouseleave",
        () => {

          if (heroTitle) {
            heroTitle.style.transform =
              "translate(0, 0)";
          }

          if (heroDecoration) {
            heroDecoration.style.transform =
              "translate(0, 0)";
          }

        }
      );

    }

  }


  /* =======================================================
     8. SMOOTH INTERNAL LINKS
     ======================================================= */

  const internalLinks =
    document.querySelectorAll(
      'a[href^="#"]'
    );

  internalLinks.forEach((link) => {

    link.addEventListener(
      "click",
      (event) => {

        const targetID =
          link.getAttribute("href");

        if (
          !targetID ||
          targetID === "#"
        ) {
          return;
        }

        let target = null;

        try {
          target =
            document.querySelector(targetID);
        } catch {
          return;
        }

        if (!target) {
          return;
        }

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });


  /* =======================================================
     9. FINAL SECTION PARALLAX
     ======================================================= */

  if (finalSection) {

    const finalTitle =
      finalSection.querySelector("h2");

    const supportsHover =
      window.matchMedia("(hover: hover)").matches;


    if (
      finalTitle &&
      supportsHover
    ) {

      finalSection.addEventListener(
        "mousemove",
        (event) => {

          const rect =
            finalSection.getBoundingClientRect();

          const x =
            (event.clientX - rect.left)
            / rect.width
            - 0.5;

          const y =
            (event.clientY - rect.top)
            / rect.height
            - 0.5;

          finalTitle.style.transform =
            `translate(
              ${x * 4}px,
              ${y * 4}px
            )`;

        }
      );


      finalSection.addEventListener(
        "mouseleave",
        () => {

          finalTitle.style.transform =
            "translate(0, 0)";

        }
      );

    }

  }


  /* =======================================================
     10. PREVENT BROKEN IMAGE EXPERIENCE
     ======================================================= */

  const dadPhoto =
    document.querySelector(".dad-photo");

  if (dadPhoto) {

    dadPhoto.addEventListener(
      "error",
      () => {

        dadPhoto.alt =
          "Dad's photo could not be loaded.";

        dadPhoto.classList.add(
          "image-error"
        );

        console.warn(
          'Could not load "dad.jpg". Make sure the image is in the same folder as main.html.'
        );

      }
    );

  }


  /* =======================================================
     11. FINAL CONSOLE MESSAGE
     ======================================================= */

  console.log(
    "❤️ Happy Birthday, Dad. This page was made with love."
  );

  console.log(
    "🎂 September 4, 1984 → A very special day."
  );

});