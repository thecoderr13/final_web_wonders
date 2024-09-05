const questions = [
    {
        question: "When lunar eclise occur?",
        answers: [
            {text: "When earth is between sun and moon", correct: true},
            {text: "When sun is between moon and earth", correct: false},
            {text: "When moon is between earth and sun", correct: false},
            {text: "When earth is between sun and celestial bodies", correct: false},
        ]
    },

    {
        question: "When does lunar eclipse happen?",
        answers: [
            {text: "Full moon", correct: true},
            {text: "Half moon", correct: false},
            {text: "Equinox", correct: false},
            {text: "None of the above", correct: false},
        ]
    },

    {
        question: "When the same pattern of solar eclipse repeats every 18 years 11 dats 8 hours are known as:",
        answers: [
            {text: "Nodes cycle", correct: false},
            {text: "Saros cycle", correct: true},
            {text: "Saras cycle", correct: false},
            {text: "Payan cycle", correct: false},
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
        question: "What is blood moon?",
        answers: [
            {text: "Total solar eclipse", correct: false},
            {text: "Total lunar eclipse with deep red glow", correct: true},
            {text: "Total lunar eclipse with a red glow", correct: false},
            {text: "None of the above", correct: false},
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