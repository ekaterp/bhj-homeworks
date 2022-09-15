const tabs = document.querySelectorAll(".tab");
const contents = Array.from(document.querySelectorAll(".tab__content"));

tabs.forEach((tab) => {
    tab.onclick = function(tab) {
        document.querySelector(".tab_active").classList.remove("tab_active");
        document.querySelector(".tab__content_active").classList.remove("tab__content_active");
        let indexThis = Array.from(tabs).indexOf(this, 0);
        this.classList.add("tab_active");
        contents[indexThis].classList.add("tab__content_active");
    }
    
});
