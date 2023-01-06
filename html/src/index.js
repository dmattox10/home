import './SCSS/index.scss'

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

console.log(sections);
console.log(navLinks);

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

updateActiveLink()

window.addEventListener('scroll', updateActiveLink);

