const textarea = document.querySelector('textarea');
textarea.textContent = localStorage.getItem('textarea');;

textarea.addEventListener('input', (e) => {
    e.preventDefault();
    localStorage.setItem('textarea', document.querySelector('textarea').value);
})