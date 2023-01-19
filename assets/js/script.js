/*************************************/
/*                                   */
/*  RUSHCLIN TAKAM COPYRIGHT 2023    */
/*                                   */
/*************************************/

"use-strict";

const header = document.querySelector("header");
const logoSpans = document.querySelectorAll(".logo-span");

const stickyScroll = () => {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
  logoSpans.forEach((logoSpan) => {
    logoSpan.classList.toggle("scrolled", window.pageYOffset > 0);
  });
};

stickyScroll();

window.addEventListener("scroll", stickyScroll);

/* SCROLL REVEAL */
let sr = ScrollReveal({
  duration: 2500,
  distance: "60px",
});

sr.reveal(".showcase-info", { delay: 600 });
sr.reveal(".showcase-image", { origin: "top", delay: 700 });
