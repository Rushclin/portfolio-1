/*************************************/
/*                                   */
/*  RUSHCLIN TAKAM COPYRIGHT 2023    */
/*                                   */
/*************************************/

"use-strict";

const header = document.querySelector("header");
const logoSpans = document.querySelectorAll(".logo-span");

const links = document.querySelectorAll(".nav-link");

const hamburger = document.querySelector(".hamburger");

const contactForm = document.getElementById("contact-form");

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

/* HAMBURGER */

hamburger.addEventListener("click", () => {
  document.body.classList.toggle("open");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("open");
  });
});

/* EMAIL JS */

window.addEventListener("load", () => {
  emailjs.init("service_6n2comb");
});

contactForm
  .addEventListener("submit", (event) => {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let subject = document.getElementById("message").value;
    let name = document.getElementById("name").value;

    var templateParams = {
      to_name: name,
      from_name: email,
      message: subject,
    };

    emailjs.send(
      "service_6n2comb",
      "template_smz7t4m",
      templateParams,
      "mUekWcwWqRgFMiiHO"
    );
  })
  .then(
    function (response) {
      email.value = "";
      subject.value = "";
      name.value = "";
      alert("Message send");
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );

/* emailjs
  .send(
    "service_6n2comb",
    "template_smz7t4m",
    templateParams,
    "mUekWcwWqRgFMiiHO"
  )
  .then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  ); */
