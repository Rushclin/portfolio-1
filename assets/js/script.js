/*************************************/
/*                                   */
/*  RUSHCLIN TAKAM COPYRIGHT 2023    */
/*                                   */
/*************************************/

"use-strict";

const header = document.querySelector("header");
const logoSpans = document.querySelectorAll(".logo-span");

const links = document.querySelectorAll(".nav-link");

const stickyScroll = () => {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
  logoSpans.forEach((logoSpan) => {
    logoSpan.classList.toggle("scrolled", window.pageYOffset > 0);
  });
};

stickyScroll();

window.addEventListener("scroll", () => {
  stickyScroll();
  activeLink();
});

/* SCROLL REVEAL */
let sr = ScrollReveal({
  duration: 2500,
  distance: "60px",
});

sr.reveal(".showcase-info", { delay: 600 });
sr.reveal(".showcase-image", { origin: "top", delay: 700 });

/* Change Active on scroll */

const activeLink = () => {
  let sections = document.querySelectorAll("section[id]");

  let passedSection = Array.from(sections)
    .map((section, id) => {
      return {
        y: section.getBoundingClientRect().top - header.offsetHeight,
        id: id,
      };
    })
    .filter((sct) => sct.y <= 0);

  let curentSectionID = passedSection.at(-1).id;

  links.forEach((link) => {
    link.classList.remove("active");
  });

  links[curentSectionID].classList.add("active");
};

activeLink();
