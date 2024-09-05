const questions = [
    {
        question: "In space, the big bang machine is another name for?",
        answers: [
            {text: "The Large Hadron Collider", correct: true},
            {text: "The Small Hadron Coliider", correct: false},
            {text: "Both of the above", correct: false},
            {text: "None of the above", correct: false},
        ]
    },

    {
        question: "In astronomy, ‘The Big Dipper’ is another name for which constellation?",
        answers: [
            {text: "The Plough", correct: true},
            {text: "The Ursa Major", correct: false},
            {text: "The Ursa Minor", correct: false},
            {text: "The Gemini", correct: false},
        ]
    },

    {
        question: "How may moons does the planet Mars have?",
        answers: [
            {text: "1", correct: false},
            {text: "2", correct: true},
            {text: "3", correct: false},
            {text: "4", correct: false},
        ]

    },

    {
        question: "Who was the commander of the first U.S. Space Shuttle mission?",
        answers: [
            {text: "John Young", correct: true},
            {text: "Robert Crippen", correct: false},
            {text: "Ron McNairy", correct: false},
            {text: "Thomas Mattingly", correct: false},
        ]

    },

    {
        question: "Who discovered the supernova and was the first to theorize that stars die?",
        answers: [
            {text: "Galeleo Galilei", correct: false},
            {text: "Nicolas Corpanicus", correct: true},
            {text: "Tycho Brahe", correct: false},
            {text: "Jahannes Kepler", correct: false},
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