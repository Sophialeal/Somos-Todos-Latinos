new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerVier: 1
        },
        768: {
            slidesPerVier: 2
        },
        1024: {
            slidesPerVier: 3
        },
    }
  });