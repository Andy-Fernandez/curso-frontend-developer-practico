const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');
const buttom_menu = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');


navbar_email.addEventListener('click', () => {
    desktop_menu.classList.toggle('desktop-menu--active');
});

buttom_menu.addEventListener('click', () => {
    mobile_menu.classList.toggle('mobile-menu--active');
});
