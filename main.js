const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

navbar_email.addEventListener('click', () => {
    desktop_menu.classList.toggle('desktop-menu--active');
});
