const interests = document.querySelectorAll(".interest");
let checked = false;
interests.forEach(interest => {
    interest.onchange = () => {
        const childInterests = interest.querySelector("ul").querySelectorAll(".interest__check");
        checked = !checked;
        childInterests.forEach(childInterest => {
            if (checked === false) {
                childInterest.checked = false
            } else {
                childInterest.checked = true
            }
        });
    };
});

