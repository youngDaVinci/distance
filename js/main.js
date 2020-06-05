const menu_btn = document.querySelector('.m-menu');
const menu_sidebar = document.querySelector('.menu-sidebar');

menu_btn.addEventListener('click', () => {
    menu_sidebar.classList.toggle('active')
});