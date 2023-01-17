/*************************************/
/*                                   */
/*  RUSHCLIN TAKAM COPYRIGHT 2023    */
/*                                   */
/*************************************/

"use-strict";

const header = document.querySelector("header");

/* STICKY NAVBAR */

const stickyNavbar = () => {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
};

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

let sr = ScrollReveal({
  duration: 2500,
  distance: "60px",
});

sr.reveal(".showcase-info", { delay: 600 });
sr.reveal(".showcase-image", { origin: "top", delay: 700 });

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bar = document.querySelectorAll(".skills svg circle");

window.addEventListener("scroll", () => {
  if (!skillPlayed) skillCounter();
});

const hasReached = (el) => {
  let topPosition = el.getBoundingClientRect().top;
  if (window.innerHeight >= topPosition + el.offsetHeight) {
    return true;
  } else {
    return false;
  }
};

const updateCounter = (num, maxNum) => {
  let curentNum = +num.innerText;

  if (curentNum < maxNum) {
    num.innerText = curentNum + 1;
    setTimeout(() => {
      updateCounter(num, maxNum);
    }, 20);
  }
};

let skillPlayed = false;

const skillCounter = () => {
  if (!hasReached(first_skill)) return;

  skillPlayed = true;

  sk_counters.forEach((counter, i) => {
    let target = +counter.dataset.target;
    let strokeValue = 470 - 470 * (target / 100);

    progress_bar[i].style.setProperty("--target", strokeValue);

    setTimeout(() => {
      updateCounter(counter, target);
    }, 400);
  });

  progress_bar.forEach((p) => {
    console.log(p.style.animation);
    p.style.animation = "progress 2s ease-in-out forwards";
  });
};
