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
document.addEventListener('DOMContentLoaded', () => {
  const switchBtn = document.querySelector('.switch_btn');
  const text1 = document.querySelector('.switch_text1');
  const text2 = document.querySelector('.switch_text2');
  const checkbox = document.querySelector('#switch');

  if (switchBtn && text1 && text2 && checkbox) {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        text1.classList.add('active');
        text2.classList.remove('active');
      } else {
        text1.classList.remove('active');
        text2.classList.add('active');
      }
    });
  }
});
// switch

let swiper = new Swiper(".fleetSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".fleet-button-next",
    prevEl: ".fleet-button-prev",
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // breakpoints: {
  //   640: {
  //     slidesPerView: 2.2,
  //     spaceBetween: 28,
  //   },
  //   993: {
  //     slidesPerView: 3.2,
  //     spaceBetween: 28,
  //   },
  //   1200: {
  //     slidesPerView: 3.6,
  //     spaceBetween: 40,
  //   },
  // },
});

let swiper2 = new Swiper(".companySwiper", {
  slidesPerView: 2.2,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".company-button-next",
    prevEl: ".company-button-prev",
  },
  breakpoints: {
    360: {
      slidesPerView: 3.2,
      spaceBetween: 32,
    },
    640: {
      slidesPerView: 4.2,
      spaceBetween: 32,
    },
    993: {
      slidesPerView: 4.2,
      spaceBetween: 32,
    },
    1200: {
      slidesPerView: 4.3,
      spaceBetween: 80,
    },
  },
});
