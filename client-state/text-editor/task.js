const textarea = document.querySelector('textarea');
textarea.textContent = localStorage.getItem('textarea');;

textarea.addEventListener('input', (e) => {
    localStorage.setItem('textarea', document.querySelector('textarea').value);
})