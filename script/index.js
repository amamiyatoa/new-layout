/*
    Copyright© 2025 雨宮とあ All Right Reserved.
*/

document.addEventListener('DOMContentLoaded', () => {
    const Menu = document.getElementById('menuWrapper');
    const MenuOpener = document.getElementById('mainFSMenuOpener');
    const MenuCloser = document.getElementById('mainFSMenuCloser');

    MenuOpener.addEventListener('click', () => {
        if(Menu.className === "closeMenu") {
            Menu.classList.remove("closeMenu");
            Menu.classList.add("openMenu");
        } else if(Menu.className === "openMenu") {
            Menu.classList.remove("openMenu");
            Menu.classList.add("closeMenu");
        }
    });

    document.addEventListener('keydown', event => {
        if(event.key === 'Escape' && Menu.className === "closeMenu") {
            Menu.classList.remove("closeMenu");
            Menu.classList.add("openMenu");
        } else if(Menu.className === "openMenu") {
            Menu.classList.remove("openMenu");
            Menu.classList.add("closeMenu");
        }
    })
});