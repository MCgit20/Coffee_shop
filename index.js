// Navbar

const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('sticky', window.scrollY > 0);
});

const menu = document.querySelector(".menu");
const toggleMenu = () => menu.classList.toggle("active");

document.querySelector(".menu-btn").addEventListener("click", toggleMenu);
document.querySelector(".close-btn").addEventListener("click", toggleMenu);

document
  .querySelectorAll(".menu a")
  .forEach((item) => item.addEventListener("click", toggleMenu));

// Swiper
const swiper = new Swiper(".swiper", {
  //Parameters
  slidesPerView: 1,
  direction: "horizontal",
  lazyLoading: true,
  centeredSlides: true,
  loop: true,
  keyboard: {
    enabled: true,
  },

  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation Arrows
  navigation : {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})


/* Audio */

if (!document.getElementById('background-audio')) {
  const audio = document.createElement('audio');
  audio.id = 'background-audio';
  audio.src = "Coffee.mp3";
  audio.autoplay = true;
  audio.loop = true;
  audio.hidden = true; 
  document.body.appendChild(audio);
}