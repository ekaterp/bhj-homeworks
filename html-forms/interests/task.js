const interests = Array.from(document.querySelector("ul").children);

interests.forEach(interest => {
    interest.addEventListener("change", (e) => {
        e.preventDefault();
        let needInversion =  true;
        const childCheckboxes = Array.from(e.target.closest('li').querySelectorAll('ul input[type=checkbox]'));
        if (childCheckboxes.length > 0) {
            for (let i=1; i < childCheckboxes.length; i++) {
                if (childCheckboxes[i].checked === e.target.checked) {
                    needInversion = false;
                }
            }
            if (needInversion) {
                childCheckboxes.forEach( item => {
                    item.checked = e.target.checked;
              })
            }
        }
    })
});
