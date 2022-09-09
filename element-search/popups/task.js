const modals = document.querySelectorAll(".modal");
modals[0].classList.add("modal_active");

button = modals[0].querySelector(".btn_danger");
button.onclick = () => {
    modals[0].classList.remove("modal_active");
    modals[1].classList.add("modal_active");
}

modals.forEach((modal) => {    
    let closeElement = modal.getElementsByClassName('modal__close');
    closeElement[0].onclick = () => {
        modal.classList.remove("modal_active");
    }
})