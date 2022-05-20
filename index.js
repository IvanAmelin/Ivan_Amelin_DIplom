const menuToggle = document.querySelector('.menu_toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    console.log('Hi')
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
})