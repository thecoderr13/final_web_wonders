const questions = [
    {
        question: "How many planets are in our solar system?",
        answers: [
            {text: "8", correct: true},
            {text: "7", correct: false},
            {text: "9", correct: false},
            {text: "10", correct: false},
        ]
    },

    {
        question: "Which planet is farthest from sun?",
        answers: [
            {text: "Neptune", correct: true},
            {text: "Jupiter", correct: false},
            {text: "Mars", correct: false},
            {text: "Mercury", correct: false},
        ]
    },

    {
        question: "How many planets in solar system are made of gas?",
        answers: [
            {text: "6", correct: false},
            {text: "4", correct: true},
            {text: "3", correct: false},
            {text: "5", correct: false},
        ]

    },

    {
        question: "Which is the most common type of star in the universe?",
        answers: [
            {text: "Red dwarf star", correct: true},
            {text: "Blue Dwarf Star", correct: false},
            {text: "Sun", correct: false},
            {text: "Cerensque", correct: false},
        ]

    },

    {
        question: "What percent of solar system's mass is in the sun?",
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