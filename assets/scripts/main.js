AOS.init();
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

// radar_btn
document.addEventListener('DOMContentLoaded', () => {
  const radarButtons = document.querySelectorAll('.radar_btn');

  radarButtons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
    });
  });
});
// radar_btn

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

let swiper3 = new Swiper(".homeSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  effect: "fade",
  // autoplay: {
  //   delay: 6000,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".home-button-next",
    prevEl: ".home-button-prev",
  },
  pagination: {
    el: ".home-pagination",
    clickable: true,
  },
});

const homeSwpBtn = document.querySelectorAll('.home_slider_number button');
const homeIcons = document.querySelectorAll('.home_icon');

if (homeSwpBtn.length) {
  swiper3.on('slideChange', function (e) {
    homeSwpBtn.forEach((el, elID) => {
      if (elID == swiper3.realIndex) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    })

    for (let i = 0; i < 4; i++) {
      if (i == swiper3.realIndex) {
        homeIcons.forEach(el => {
          el.classList.add(`active${swiper3.realIndex + 1}`);
        })
      } else {
        homeIcons.forEach(el => {
          el.classList.remove(`active${i + 1}`);
        })
      }
    }
  });

  homeSwpBtn.forEach((btn, btnID) => {
    btn.onclick = () => {
      swiper3.slideTo(btnID);
    }
  })
}

const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");
const openModalBtns = document.querySelectorAll(".open-modal__btn")
if (modal && modalClose && openModalBtns) {
  openModalBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("show");
    })
  })
  modalClose.addEventListener('click', () => {
    modal.classList.remove("show");
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });
}
try {
  flatpickr('.calendar-tomorrow', {
    "minDate": new Date().fp_incr(1)
  });
} catch (error) {

}

let gallery = document.getElementById("light-gallery");
if (gallery) {
  lightGallery(gallery, {
    plugin: [lgZoom],
    controls: true,
    counter: false,
    download: true,
    thumbnail: true,
    animateThumb: false,
    showThumbByDefault: false,
  })

}
try {
} catch (error) {
  
}
$(function () {
  $("#datepicker").datepicker({
    numberOfMonths: 3,
    showButtonPanel: true
  });
});