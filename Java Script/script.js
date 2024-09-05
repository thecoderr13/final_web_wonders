const questions = [
    {
        question: "Which planet is closest to the sun?",
        answers: [
            {text: "Mercury", correct: true},
            {text: "Venus", correct: false},
            {text: "Neptune", correct: false},
            {text: "Jupiter", correct: false},
        ]
    },

    {
        question: "What is the gap between the orbit of mars and jupiter called?",
        answers: [
            {text: "Asteroids", correct: true},
            {text: "Comets", correct: false},
            {text: "Meteor", correct: false},
            {text: "Meteorite", correct: false},
        ]
    },

    {
        question: "Which group of planets have rings?",
        answers: [
            {text: "Jupiter and Saturn", correct: false},
            {text: "Jupiter, Saturn, Uranus and Neptune", correct: true},
            {text: "Mercury, Venus, Neptune and Saturn", correct: false},
            {text: "None of the above", correct: false},
        ]

    },

    {
        question: "The instance when the Sun is excatly above the equator and day and night are of equal length is called:",
        answers: [
            {text: "Vernal equinox", correct: true},
            {text: "Summer solstice", correct: false},
            {text: "Beginning of spring", correct: false},
            {text: "Winter solstice", correct: false},
        ]

    },

    {
        question: "Approximately how many kilometers are there in a ligth year?",
        answers: [
            {text: "9.5 billion km", correct: false},
            {text: "9.5 trillion km", correct: true},
            {text: "9.5 million km", correct: false},
            {text: "9,50,000 km", correct: false},
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
        score = score + 1;
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