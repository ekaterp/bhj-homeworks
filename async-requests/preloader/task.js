const loader = document.getElementById("loader");
const valuesList = document.querySelector("#items");

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove("loader_active");
        if (xhr.status == 200) {
            const valutes = Object.values((JSON.parse(xhr.responseText)).response.Valute);
            valutes.forEach(valute => {
                let valuteItem = document.createElement('div');
                valuteItem.className = "item";
                valuteItem.innerHTML = `
                    <div class="item__code">${valute.CharCode}</div>
                    <div class="item__value">${valute.Value}</div>
                    <div class="item__currency">руб.</div>
                    `;
                valuesList.appendChild(valuteItem);
            });
        } else {
            console.error("HTTP request failed", xhr.status, xhr.responseText);
        }
    }
});

xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/');
xhr.send();
