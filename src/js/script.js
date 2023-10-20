// Swiper pour effet carrousel
var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 10,
        autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true
    }
});

