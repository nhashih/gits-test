let scrollPosition = window.scrollY;
const nav = document.querySelector("nav");
const main = document.querySelector("main");
const floatingup = document.querySelector(".FloatingButton2");
const navHeight = nav.offsetHeight;

const addClassOnScroll = () => {
  nav.classList.add("navigationSticky");
  nav.classList.remove("navigationUnsticky");
  main.classList.add("mainOnScroll");
  main.classList.remove("main");
  floatingup.classList.remove("buttonFloatingUpHidden");
};

const removeClassOnScroll = () => {
  nav.classList.remove("navigationSticky");
  nav.classList.add("navigationUnsticky");
  main.classList.remove("mainOnScroll");
  main.classList.add("main");
  floatingup.classList.add("buttonFloatingUpHidden");
};

window.addEventListener("scroll", function () {
  scrollPosition = window.scrollY;

  if (scrollPosition >= navHeight) {
    addClassOnScroll();
  } else {
    removeClassOnScroll();
  }

  console.log(scrollPosition);
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }, 
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});
const swiper3 = new Swiper('.mySwiper3', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },
});
const swiper4 = new Swiper('.mySwiper4', {
  // Optional parameters'
  slidesPerView: 15,
  direction: 'horizontal',
  loop: true, 
  autoplay: {
  delay: 1000,
  },
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry) 
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
