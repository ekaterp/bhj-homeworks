const dropdown = document.querySelector(".dropdown");
const selectedLanguage = document.querySelector(".dropdown__value");
const dropdownItems = Array.from(document.getElementsByClassName("dropdown__item"));

dropdown.addEventListener("click", () => {
    dropdown.querySelector(".dropdown__list").classList.toggle("dropdown__list_active");
});

dropdownItems.forEach(item => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        selectedLanguage.textContent = item.querySelector(".dropdown__link").textContent;
    })
});