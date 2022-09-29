const pollAnswers = document.querySelector(".poll__answers");
const pollTitle = document.querySelector(".poll__title");

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status == 200) {
            pollTitle.textContent = (JSON.parse(xhr.responseText)).data.title;
            const answers = Object.values((JSON.parse(xhr.responseText)).data.answers);
            answers.forEach(answer => {
                let answerData = document.createElement('button');
                answerData.className = "poll__answer";
                answerData.innerHTML = answer;
                pollAnswers.appendChild(answerData);
                answerData.addEventListener('click', function(e) {
                    e.preventDefault();
                    alert("Спасибо, ваш голос засчитан!");
                });
            });
                } else {
            console.error("HTTP request failed", xhr.status, xhr.responseText);
        }
    }
});

xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();