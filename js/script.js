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
