
      const questions = [
    
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: [
      { text: "var", correct: true },
      { text: "int", correct: false },
      { text: "string", correct: false },
      { text: "letvar", correct: false }
    ]
  },
  {
    question: "Which keyword declares a block-scoped variable?",
    answers: [
      { text: "var", correct: false },
      { text: "const", correct: false },
      { text: "let", correct: true },
      { text: "static", correct: false }
    ]
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "/* */", correct: false },
      { text: "#", correct: false },
      { text: "<!-- -->", correct: false }
    ]
  },
  {
    question: "Which method converts JSON to a JavaScript object?",
    answers: [
      { text: "JSON.parse()", correct: true },
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.convert()", correct: false },
      { text: "JSON.object()", correct: false }
    ]
  },
  {
    question: "Which operator checks both value and type?",
    answers: [
      { text: "==", correct: false },
      { text: "=", correct: false },
      { text: "===", correct: true },
      { text: "!=", correct: false }
    ]
  },
  {
    question: "How do you write an arrow function?",
    answers: [
      { text: "() => {}", correct: true },
      { text: "function => {}", correct: false },
      { text: "() -> {}", correct: false },
      { text: "=> function()", correct: false }
    ]
  },
  {
    question: "Which method adds an item to the end of an array?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false }
    ]
  },
  {
    question: "Which method removes the last item from an array?",
    answers: [
      { text: "pop()", correct: true },
      { text: "push()", correct: false },
      { text: "shift()", correct: false },
      { text: "slice()", correct: false }
    ]
  },
  {
    question: "Which keyword is used to define a function?",
    answers: [
      { text: "function", correct: true },
      { text: "def", correct: false },
      { text: "func", correct: false },
      { text: "method", correct: false }
    ]
  },
  {
    question: "Which JavaScript type is NOT primitive?",
    answers: [
      { text: "Object", correct: true },
      { text: "String", correct: false },
      { text: "Number", correct: false },
      { text: "Boolean", correct: false }
    ]
  },
  {
    question: "How do you write a conditional statement?",
    answers: [
      { text: "if (x > y)", correct: true },
      { text: "if x > y then", correct: false },
      { text: "if x > y:", correct: false },
      { text: "when (x > y)", correct: false }
    ]
  },
  {
    question: "Which loop is guaranteed to run at least once?",
    answers: [
      { text: "do...while", correct: true },
      { text: "for", correct: false },
      { text: "while", correct: false },
      { text: "foreach", correct: false }
    ]
  },
  {
    question: "Which method selects an element by ID?",
    answers: [
      { text: "document.getElementById()", correct: true },
      { text: "document.querySelectorAll()", correct: false },
      { text: "document.getElementsByClass()", correct: false },
      { text: "document.select()", correct: false }
    ]
  },
  {
    question: "What does NaN stand for?",
    answers: [
      { text: "Not a Number", correct: true },
      { text: "No assigned Number", correct: false },
      { text: "New and Null", correct: false },
      { text: "Negative Number", correct: false }
    ]
  },
  {
    question: "Which method converts an object to JSON?",
    answers: [
      { text: "JSON.stringify()", correct: true },
      { text: "JSON.parse()", correct: false },
      { text: "JSON.object()", correct: false },
      { text: "JSON.toJSON()", correct: false }
    ]
  }
]


const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const nextBtn = document.getElementById("next-btn");
const container = document.getElementById("container");

let qIndex =0;
let score =0;
nextBtn.disabled = true;

function startQuiz(){

    qIndex =0;
    score=0;
    showAns();
}

function showAns()
{

   const getQuestion = questions[qIndex];
   questionEl.innerText = getQuestion.question;
   
   getQuestion.answers.forEach(ans=>
    {
          const btn = document.createElement("button");
          btn.innerText = ans.text;
          answerEl.appendChild(btn);
          btn.classList.add("btn")
          
          if(ans.correct)
            {
                btn.dataset.correct =ans.correct;
            }

             btn.addEventListener('click',selectAns)
             
          })
           

}

function selectAns(e)
{

    const getAnsBtn = e.target;
    const getAns = getAnsBtn.dataset.correct === "true"
    if(getAns)
        {
            score++;
        }
        Array.from(answerEl.children).forEach(btn=>
            {
                const isCorrect = btn.dataset.correct;
                if(isCorrect)
                    {
                        btn.classList.add("correct");
                        
                    }else
                        {
                            btn.classList.add("incorrect");                            
                        }
            })
            nextBtn.disabled = false;
      
}

      nextBtn.addEventListener('click',()=>{
         qIndex++;    
         reset()  ;
       if(qIndex < questions.length){
                  showAns();
            }else{
               showScore();
                                           
                 if(nextBtn.innerText =="Restart"){
                    nextBtn.onclick = window.location.reload();
                }
                else{
                     nextBtn.innerText =  "Restart"; 
                    }
               }   
             })

             function showScore()
             {                
                questionEl.innerText = `Your score is ${score} out of ${questions.length}`
                nextBtn.disabled = false;
              
             }

    function reset()
    {
         
        while(answerEl.firstChild)
            {
                answerEl.removeChild(answerEl.firstChild);
            }
            nextBtn.disabled = true;

    }
startQuiz();

