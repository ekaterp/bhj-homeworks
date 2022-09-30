const form = document.getElementById('form'); 
const progress = document.getElementById('progress');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const url = form.getAttribute('action');
    let progressRate = 0;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    if (xhr.upload) {

        xhr.addEventListener('progress', function (event) {
            let fileSize = form.file.files[0].size;
            const progressRate = event.loaded / 100000000;
            progress.setAttribute('value', progressRate);
        });

        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === xhr.DONE) {
                progressRate = 1;
                progress.setAttribute('value', progressRate);
                if (xhr.status == 200) {
                    alert('Данные успешно отправлены');
                } else {
                    console.error("HTTP request failed", xhr.status, xhr.responseText);
                }
            }
        });
    
        xhr.send(formData);
    }
});
