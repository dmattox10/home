import './SCSS/index.scss'

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

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

let lastScrollY = 0;

function toggleFileDownloaded() {
  window.fileDownloaded = true;
}

updateActiveLink()

const modal = document.querySelector(".modal");
// const closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

// closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

window.addEventListener('scroll', updateActiveLink);

window.addEventListener('scroll', () => {
  if (
    window.scrollY < lastScrollY &&
    window.scrollY > 300 &&
    !window.fileDownloaded &&
    !window.modalShown
  ) {
    // const event = new Event('scrolling_up');
    // window.dispatchEvent(event);
    // console.log('scroll')        
    modal.classList.add("show-modal");
    window.modalShown = true;
  }
  lastScrollY = window.scrollY;
});

window.addEventListener('scrolling_up', function() {
  toggleModal();
});
