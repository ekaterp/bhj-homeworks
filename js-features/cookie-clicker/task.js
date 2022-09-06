const image = document.getElementById('cookie');

function clickCounter () {
    let counter = document.getElementById('clicker__counter');
    counter.textContent ++;
    if (counter.textContent % 2) {
        image.width = 220;
    } else {
        image.width = 200;
    }
}

image.onclick = clickCounter;