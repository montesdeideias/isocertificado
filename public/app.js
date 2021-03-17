/* navbar hide on scroll */
const navbar = document.querySelector('.nav-fixed');
window.onscroll = () => {
    if (window.scrollY > 0) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};
/* end navbar hide on scroll */

const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");
const burger = document.querySelector(".burger");
const cross = document.querySelector(".cross")

hamburger.addEventListener('click', () => {
    links.classList.toggle('open');
    burger.classList.toggle('closing');
    cross.classList.toggle('open');
});