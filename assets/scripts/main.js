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
});

let swiper2 = new Swiper(".companySwiper", {
  slidesPerView: 2.2,
  spaceBetween: 20,
  loop: true,
  simulateTouch: false,
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
let companyHistorySwiper = new Swiper(".companyHistorySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".company-button-next",
    prevEl: ".company-button-prev",
  },
  simulateTouch: false,
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

let certificates_img = document.querySelectorAll('.gallery-img');
if (certificates_img.length) {
  certificates_img.forEach(img => {
    img.onclick = () => {
      let src = [];
      certificates_img.forEach(item => {
        src.push({
          'src': item.getAttribute('src'),
          'thumb': item.getAttribute('src'),
          'subHtml': ''
        });
      })
      let pdf = img.getAttribute('data-pdf');
      $('#lightgallery').remove();
      const galleryContainer = document.createElement('div');
      galleryContainer.id = 'lightgallery';
      document.body.appendChild(galleryContainer);
      lightGallery(galleryContainer, {
        dynamic: true,
        dynamicEl: src,
      });
      setTimeout(() => {
        let download = document.querySelector('#lg-download');
        download.setAttribute('href', pdf);
      }, 500);
    }
  })
}

try {
  $(function () {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left',
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      },
      locale: {
        format: 'YYYY-MM-DD',
        separator: ' to '
      }
    }, function (start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
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


const loader = document.getElementById('loader');
const video = document.querySelector('#loader video');

if (loader && video) {
  video.addEventListener('ended', () => {
    loader.style.display = 'none';
  });
}

// script.js

// Swiper'ni sozlash
const galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
});

const galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 5,
  centeredSlides: true,
  slideToClickedSlide: true,
  initialSlide: 1,
  navigation: {
    nextEl: ".gallery-button-next",
    prevEl: ".gallery-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 5,
    },
    0: {
      initialSlide: 0,
      slidesPerView: 3,
    }
  }
});

// Ikkala Swiper'ni bir-biriga bog'lash
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;
