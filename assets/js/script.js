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
