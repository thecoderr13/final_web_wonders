const questions = [
    {
        question: "Nebular hypothesis is related to the origin of?",
        answers: [
            {text: "Solar System", correct: true},
            {text: "Earth", correct: false},
            {text: "Planets", correct: false},
            {text: "Moon", correct: false},
        ]
    },

    {
        question: "What are nebulae primarily made of?",
        answers: [
            {text: "Hydrogen, helium and other gases", correct: true},
            {text: "Metal", correct: false},
            {text: "Carbon particles", correct: false},
            {text: "Lead particles", correct: false},
        ]
    },

    {
        question: "The nebula which looks like lemon",
        answers: [
            {text: "Flashlight", correct: false},
            {text: "Lemon slice", correct: true},
            {text: "Yellow maid", correct: false},
            {text: "None of the above", correct: false},
        ]

    },

    {
        question: "In what year is it believed that Chinese astronomers saw the supernova that created the Crab Nebula?",
        answers: [
            {text: "1054 AD", correct: true},
            {text: "3500 BC", correct: false},
            {text: "1000 AD", correct: false},
            {text: "1921 AD", correct: false},
        ]

    },

    {
        question: "If nebular theories of the origin of the solar system are correct, then which of the following is a likely consequence?",
        answers: [
            {text: "there may be many planetary systems in the galaxy", correct: true},
            {text: "the sun is much older than the planets", correct: false},
            {text: "the sun once spun much more slowly than it does today", correct: false},
            {text: "the sun once had a binary companion", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let QuestionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = QuestionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `Score: ${score}/${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }

});

startQuiz();