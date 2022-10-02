if (typeof(getCookie('popup')) == 'undefined') {
    const popup = document.querySelector('.modal');
    popup.classList.add("modal_active");

    popup.querySelector('.modal__close').onclick = (e) => {
        setCookie('popup', 'wasClosed');
        popup.classList.remove("modal_active");
    }
}

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));
    return cookie;
}