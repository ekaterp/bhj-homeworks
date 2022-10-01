const haveTooltip = Array.from(document.querySelectorAll(".has-tooltip"));
let indexLastTooltip = -1;

haveTooltip.forEach((hasTooltip) => {
    hasTooltip.onclick = (event) => {
        event.preventDefault();
        let positionTop = hasTooltip.offsetTop + 20;
        const tooltip = '<div class="tooltip tooltip_active" style="data-position: bottom; position: absolute; margin-left: ' + hasTooltip.offsetLeft +'px; top: '+ positionTop +'px">' + hasTooltip.getAttribute("title") + '</div>';
        const activeTooltip = document.querySelector(".tooltip_active");
       
        if (activeTooltip) {
            activeTooltip.remove();
            if (indexLastTooltip === haveTooltip.indexOf(hasTooltip)) {
                return false;
            }
        }
        
        hasTooltip.insertAdjacentHTML('beforeBegin', tooltip);
        indexLastTooltip = haveTooltip.indexOf(hasTooltip);
    };
});