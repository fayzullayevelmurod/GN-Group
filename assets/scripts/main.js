// burger
let header_link = document.querySelector('.header_link');
let burger_btn = document.querySelector('.burger_btn');

burger_btn.addEventListener('click', () => {
  header_link.classList.toggle('active');
})
// burger

// tabs
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    const target = tab.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
  });
});
// tabs

// switch
const switchBtn = document.querySelector('.switch_btn');
const text1 = document.querySelector('.switch_text1');
const text2 = document.querySelector('.switch_text2');
const checkbox = document.querySelector('#switch');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    text1.classList.add('active');
    text2.classList.remove('active');
  } else {
    text1.classList.remove('active');
    text2.classList.add('active');
  }
});
// switch

let swiper = new Swiper(".treatmentsSwiper", {
  slidesPerView: 1.10,
  spaceBetween: 28,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2.2,
      spaceBetween: 28,
    },
    993: {
      slidesPerView: 3.2,
      spaceBetween: 28,
    },
    1200: {
      slidesPerView: 3.6,
      spaceBetween: 40,
    },
  },
});
