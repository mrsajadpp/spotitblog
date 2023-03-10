let openMenu = document.getElementById('openmenu');
let closeMenu = document.getElementById('closemenu');
let navbar = document.getElementById('nav-bar');
let body = document.getElementById('body');

openMenu.addEventListener('click', () => {
   // body.classList.add('hidden');
    navbar.classList.remove('hidden');
});

closeMenu.addEventListener('click', () => {
    navbar.classList.add('hidden');
   // body.classList.remove('hidden');
});