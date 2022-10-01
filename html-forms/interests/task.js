const interests = Array.from(document.querySelector("ul").children);

interests.forEach(interest => {
    interest.addEventListener("change", (e) => {
        e.preventDefault();
        e.target.closest('li').querySelectorAll('ul input[type=checkbox]').forEach( item => {
            if (!item.checked) {
                item.checked = e.target.checked;
            }
          })
    })
});
