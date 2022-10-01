const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const url = form.getAttribute('action');

    const xhr = new XMLHttpRequest();
    const fileSize = form.file.files[0].size;

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status == 200) {
                alert('Данные успешно отправлены');
            } else {
                console.error("HTTP request failed", xhr.status, xhr.responseText);
            }
        }
    });

    xhr.upload.addEventListener('progress', function (e) {
        console.log('loaded ', e.total, ' bytes of ', fileSize);
        progress.value = e.loaded / fileSize;
    });

    xhr.open(form.getAttribute('method'), form.getAttribute('action'));
    xhr.send(formData);

});
