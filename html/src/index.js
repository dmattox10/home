import './SCSS/index.scss'
import { gsap } from "gsap"

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

const links = document.querySelectorAll("[data-part1][data-part2][data-part3]");
for (const link of links) {
  const attrs = link.dataset;
  link.setAttribute(
    "href",
    `mailto:${attrs.part1}@${attrs.part2}.${attrs.part3}?subject=${attrs.subject}`
  );
  link.textContent = `${attrs.part1}@${attrs.part2}.${attrs.part3}`;
}

function updateActiveLink() {
  for (const section of sections) {
    const boundingRect = section.getBoundingClientRect();
    if (boundingRect.top >= 0 && boundingRect.top <= window.innerHeight / 2) {
      const id = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
      navLinks.forEach((link) => link.classList.remove('active'));
      navLink.classList.add('active');
    }
  }
}

function toggleFileDownloaded() {
  window.fileDownloaded = true;
}

updateActiveLink()

const modal = document.querySelector(".modal");
const closeArea = document.querySelector(".close");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function hideModal() {
  modal.classList.remove("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

closeArea.addEventListener("click", hideModal);
window.addEventListener("click", windowOnClick);

window.addEventListener('scroll', updateActiveLink);

let lastScrollY = 0;

window.addEventListener('scroll', () => {
  if (
    window.scrollY < lastScrollY &&
    window.scrollY > 500 &&
    !window.fileDownloaded &&
    !window.modalShown
  ) {
    modal.classList.add("show-modal");
    window.modalShown = true;
  }
  lastScrollY = window.scrollY;
});

window.addEventListener('scrolling_up', function() {
  toggleModal();
});

// const section = document.querySelector("#about");
// const backgroundImage = document.querySelector(".background-image");
// const overlay = document.querySelector(".overlay");
// const overlayTextContainer = document.querySelector(".overlay-text-container");

// // Create a timeline
// const tl = gsap.timeline({ defaults: { ease: "linear" } });

// // Add animations to the timeline
// tl.to(backgroundImage, { y: "-20%", duration: 2 });
// tl.to(overlay, { y: "-10%", duration: 2 }, "-=2");
// tl.to(overlayTextContainer, { y: "-5%", duration: 2 }, "-=2");

// // Create a scrollTrigger
// gsap.utils.scrollTrigger.create({
//   trigger: section,
//   start: "top top",
//   end: "bottom bottom",
//   animation: tl,
// });