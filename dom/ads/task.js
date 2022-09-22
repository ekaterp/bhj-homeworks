let indexActiveEL;
const rotators = Array.from(document.querySelectorAll('.rotator__case'));

rotators.forEach(rotator => {
    if (rotator.textContent === document.querySelector('.rotator__case_active').textContent) {
        indexActiveEL = rotators.indexOf(rotator);
        return false;
    }
});

let changer = setInterval(function changeRotators() {
    rotators[indexActiveEL].classList.remove('rotator__case_active');
    if (indexActiveEL === rotators.length - 1) {
        indexActiveEL = 0;
    } else {
        indexActiveEL ++;
    }
    rotators[indexActiveEL].classList.add('rotator__case_active');
}, 1000);
