// SCROLLED HEADER ANIMATION
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll' , () => {
    if(window.scrollY > 50) {
        navbar.classList.add('navbar-fixed');
        navbar.style.height='8rem';
    } else {
        navbar.classList.remove('navbar-fixed');
        navbar.style.height='14rem';
    }
});

let navButton = document.querySelector('.fa-bars');
navButton.addEventListener('click' , () => {
    navbar.classList.remove('navbar-fixed');
    console.log('button');
});
// HIDE NAVBAR AFTER CLICKING
let navLinks = document.querySelectorAll('.nav-link');
let navBar = document.querySelector('.navbar-collapse.collapse');

navLinks.forEach(links => {
    links.addEventListener('click' , () => {
       navBar.classList.remove('show');
    });
});
