const fonts = Array.from(document.querySelectorAll(".font-size"));
const book = document.querySelector(".book__content");
let attr;

fonts.forEach((font) => {
    font.onclick = function(event) {
        event.preventDefault();
        document.querySelector(".font-size_active").classList.remove("font-size_active");
        book.classList.remove(attr);
        attr = this.getAttribute("class");
        if (attr !== "font-size") {
            attr = attr.replace("font-size ", "");
            book.classList.add(attr);
        }
        this.classList.add("font-size_active");
    }    
});
