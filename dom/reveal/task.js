const reveals = document.querySelectorAll('.reveal');

function throttle(callback, limit) {
    let waiting = false;
    return function () {
        if (!waiting) {
            callback.apply(this, arguments);
            waiting = true;
            setTimeout(function () {
                waiting = false;
            }, limit);
        }
    }
}

document.addEventListener('scroll', throttle(() => {
    reveals.forEach(reveal => {
        let viewPortHeight = window.innerHeight;
        let revealTop = reveal.getBoundingClientRect().top;
        let revealHeight = reveal.getBoundingClientRect().height
        if (revealTop > -revealHeight && revealTop < viewPortHeight) {
            reveal.classList.add("reveal_active");
        } else {
            reveal.classList.remove("reveal_active");
        }
    });
}, 50));
