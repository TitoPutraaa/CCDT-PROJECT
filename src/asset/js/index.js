// dark mode
let toggle = document.getElementById("dark-toggle");
toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const icon = toggle.querySelector('ion-icon');
    if (document.documentElement.classList.contains('dark')) {
        icon.setAttribute('name', 'sunny');
    } else {
        icon.setAttribute('name', 'moon');
    }
});

// scroll fixed navbar
let navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('bg-white/20', 'dark:bg-dark/20','outline-1', 'outline-gray-200', 'dark:outline-gray-700');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.remove('bg-white/20', 'dark:bg-dark/20','outline-1', 'outline-gray-200', 'dark:outline-gray-700');
        navbar.classList.add('bg-transparent');
    }
});

// animasi type
const typed = new Typed("#create", {
  strings: ["EXPERIENCE", "WORLDS", "STORIES","ADVENTURES","LEGENDS"],
  typeSpeed: 100, 
  backSpeed: 100, 
  loop: true, 
});

//animasi swiper
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 600,
    spaceBetween: 0,
    effect: "coverflow",
    centeredSlides: true,
      slidesPerView: "2",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });


