const questions = document.querySelectorAll('.question-wrapper');

questions.forEach((question)=> {
    // console.log(question);
    const btn = question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click', (e)=> {

        questions.forEach(function (item) {
            if (item !== question) {
              item.classList.remove("show");
            }
        });

        
        question.classList.toggle('show');
    });
});
