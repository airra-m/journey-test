// Get the navbar
let navbar = document.getElementsByClassName("nav");
let mobileBtnOverlay = document.getElementsByClassName("mobile-btn-overlay");
let mobileMenu = document.getElementsByClassName("nav-mobile");
let overlay = document.getElementsByClassName("overlay");

// Hide nav on scroll down
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {

    if (lastScrollY < window.scrollY) {
        navbar[0].classList.add('hide-display');
        mobileBtnOverlay[0].classList.add('hide-display');
    } else {
        navbar[0].classList.remove('hide-display');
        mobileBtnOverlay[0].classList.remove('hide-display');
    }

    lastScrollY = window.scrollY;

});

// Open mobile nav when button is tapped
let openMobileNav = () => {
    mobileBtnOverlay[0].classList.add('hide-display');
    mobileMenu[0].classList.remove('hide-display');
    overlay[0].classList.remove('hide-display');
};

// Close mobile nav when button is tapped
let closeNav = () => {
    mobileBtnOverlay[0].classList.remove('hide-display');
    mobileMenu[0].classList.add('hide-display');
    overlay[0].classList.add('hide-display');
};
