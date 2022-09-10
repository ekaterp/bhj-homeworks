const arrowLeft = document.querySelector(".slider__arrow_prev");
const arrowRight = document.querySelector(".slider__arrow_next");

const images = Array.from(document.querySelectorAll(".slider__item"));

let activeImage = document.querySelector(".slider__item_active");
let indexActiveImage = images.indexOf(activeImage, 0);

arrowLeft.addEventListener('click',() => clicker(false));
arrowRight.addEventListener('click',() => clicker(true));

function clicker(flag) {
    if (flag) {
        if (indexActiveImage < images.length - 1) {
            indexActiveImage ++;
        } else {
            indexActiveImage = 0;
        }
    } else {
        if (indexActiveImage > 0) {
            indexActiveImage --;
        } else {
            indexActiveImage = images.length - 1;
        }
    }
    activeImage.classList.remove("slider__item_active");
    activeImage = images[indexActiveImage];
    activeImage.classList.add("slider__item_active");
};