let counterDead = document.getElementById('dead');
let counterMiss = document.getElementById('lost');
let getHoles = [];

for ( index = 1; index < 10; index++ ) {
    getHoles.push (document.getElementById(`hole${index}`));
}

getHoles.forEach(element => element.onclick = function() {
    if (element.className.includes( 'hole_has-mole' )) {
        counterDead.textContent ++;
    } else {
        counterMiss.textContent ++;
    }
    checkStopGame(counterDead, counterMiss);
})

function checkStopGame(counterDead, counterMiss){
    if (Number(counterMiss.textContent) === 5) {
        window.alert('Вы проиграли!');
         counterDead.textContent = 0;
         counterMiss.textContent = 0;
    } else if (Number(counterDead.textContent) === 10) {
        window.alert('Победа!');
        counterDead.textContent = 0;
        counterMiss.textContent = 0;
    }
}

