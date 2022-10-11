let signIn = document.getElementById('signin');
let form = document.getElementById('signin__form');
let userId = document.getElementById('user_id');

if (localStorage.getItem('userid') == 'undefined') {
    signIn.classList.add('signin_active');
} else {
    userId.textContent = localStorage.userId;
    signIn.classList.remove('signin_active');
    userId.closest('.welcome').classList.add('welcome_active');
    form.reset();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let login = document.getElementsByName('login');
    let password = document.getElementsByName('password');

    let formData = new FormData(form);
    formData.login = login[0].value;
    formData.password = password[0].value;
    
    const url = form.getAttribute('action');

    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', url);
    xhr.send(formData);

    xhr.addEventListener('load', () => {
        localStorage.userId = xhr.response.user_id;
        console.log(xhr.response);
        if (xhr.response.success) {
            userId.textContent = xhr.response.user_id;
            signIn.classList.remove('signin_active');
            userId.closest('.welcome').classList.add('welcome_active');
            form.reset();
        } else {
            alert('Неверный логин/пароль')
        }
    });
});
