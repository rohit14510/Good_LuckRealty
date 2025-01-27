document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});
// Scroll event for sticky header
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 150) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
  
// Splide Slider
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
    }).mount();
});
  