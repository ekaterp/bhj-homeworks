const links = document.querySelectorAll(".menu__link");

links.forEach((link) => {
    link.onclick = function(event) {
        const element = document.querySelector('.menu_active');
        const submenu = link.closest('.menu__item').querySelector('.menu_sub');
        
        if (element) {
            element.classList.remove('menu_active');
            if (submenu === element) {
                return false;
            }
        }
        
        if (submenu) {
            submenu.classList.toggle('menu_active');
            return false;
        }
    }
    
});

