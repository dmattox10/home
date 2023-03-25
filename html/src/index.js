import './SCSS/index.scss'

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
window.addEventListener('scroll', updateActiveLink);