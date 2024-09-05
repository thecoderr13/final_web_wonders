const questions = [
    {
        question: "Which of the following is a major plate?",
        answers: [
            {text: "Antartic", correct: true},
            {text: "Cocus", correct: false},
            {text: "Caroline", correct: false},
            {text: "None of the above", correct: false},
        ]
    },

    {
        question: "What percent of Indian land is potential to mild to high earthquake?",
        answers: [
            {text: "58.6", correct: true},
            {text: "53.1", correct: false},
            {text: "50.2", correct: false},
            {text: "57.8", correct: false},
        ]
    },

    {
        question: "The earth's plate responsible for earthquakes is",
        answers: [
            {text: "Mantle", correct: false},
            {text: "Crust", correct: true},
            {text: "Inner core", correct: false},
            {text: "None of the above", correct: false},
        ]

    },

    {
        question: "How temperature varies from earth's surface towards the centre",
        answers: [
            {text: "Increases", correct: true},
            {text: "Decreases", correct: false},
            {text: "Remains same", correct: false},
            {text: "None of the above", correct: false},
        ]

    },

    {
        question: "Which is the second most abundant metal in the earth's crust?",
        answers: [
            {text: "Zinc", correct: false},
            {text: "Iron", correct: true},
            {text: "Aluminium", correct: false},
            {text: "Copper", correct: false},
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