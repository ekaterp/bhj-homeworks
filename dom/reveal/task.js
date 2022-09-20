const reveals = document.querySelectorAll('.reveal');

document.addEventListener('scroll', () => {
    reveals.forEach(reveal => {
        let viewPortHeight = window.innerHeight;
        let revealTop = reveal.getBoundingClientRect().top;
        let revealHeight = reveal.getBoundingClientRect().height
        if ((revealTop > -revealHeight) && (revealTop < viewPortHeight)) {
            reveal.classList.add("reveal_active");
        } else {
            reveal.classList.remove("reveal_active");
        }
    });    
}); 

