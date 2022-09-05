let wasAlert = false;
let reduceTimer = setInterval(function() {
    let windowTimer = document.getElementById('timer');
    if (windowTimer.textContent > 0) {
        windowTimer.textContent --;
    } else if (!wasAlert) {
        window.alert('Вы победили в конкурсе!');
        wasAlert = true;
    }
}, 1000)