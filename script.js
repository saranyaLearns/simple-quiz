const quizData=[
    {
        question: "Which of the below the property is used to overflow the text in CSS?",
        a: "text-shadow",
        b: "text-stroke",
        c: "text-overflow",
        d: "text-decoration",
        correct: "c",
    },
    {
        question: "Which below function in CSS is used to perform the calculation ?",
        a: "cal() function",
        b: "calculator() function",
        c: "calculate() funtion",
        d: "calc() function",
        correct: "d",
    },
    {
        question: "Which below CSS property best describes how an image or video fits into a container?",
        a: "object-fit",
        b: "object-move",
        c: "position-hide",
        d: "All of the above",
        correct: "a",
    },
    {
        question: "Which property in CSS is responsible for setting the difference between two lines ?",
        a: "min-height property",
        b: "max-height property",
        c: "line-height property",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which element is used to represent the transparency of an element in CSS ?",
        a: "hover",
        b: "opacity",
        c: "transparent",
        d: "overflow",
        correct: "b",
    }

];

const quiz=document.getElementById("quiz");
const answerEls=document.querySelectorAll(".answer");
const questionEl=document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitBtn=document.getElementById("submit");

let currentQuiz=0;
let score=0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData=quizData[currentQuiz];

    questionEl.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
}

function getSelected(){
    let answer=undefined;

answerEls.forEach((answerEl)=>{
    if(answerEl.checked){
        answer=answerEl.id;
    }
});
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked=false;
    });
}

submitBtn.addEventListener("click",()=>{
    const answer=getSelected();
    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz<quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML=`
            <h1>You Have Answered ${score}/${quizData.length} questions correctly.</h1>
            <button onclick="location.reload()">RELOAD</button>
            `;
        }
    }
});