const modal_main = document.getElementsByClassName('modal');
const modal_content = document.getElementsByClassName('modal__content')

modal_main[0].classList.add('modal_active');

let modals = Array.from(modal_content);

let buttonCloseMain = modals[0].getElementsByClassName('modal__close');
let buttonCloseSuccess = modals[1].getElementsByClassName('modal__close');
let buttonMain = modals[0].getElementsByClassName('btn_danger');

buttonMain[0].addEventListener('click',() => {
    modal_main[0].classList.remove("modal_active");
    modal_main[1].classList.add("modal_active");
});

buttonCloseMain[0].addEventListener('click',() => modalClose(modal_main));
buttonCloseSuccess[0].addEventListener('click',() => modalClose(modal_main));

function modalClose(modal_main) {
    if (modal_main[0].classList.contains("modal_active")) {
        modal_main[0].classList.remove("modal_active");
    } else if (modal_main[1].classList.contains("modal_active")) {
        modal_main[1].classList.remove("modal_active");
    }
}