const quizData = [
    {
        question: "1. apple",
        a: "jablko",
        b: "hruška",
        
        correct: "a",
    },
    {
      question: "2. house",
      a: "byt",
      b: "dom",
      
      correct: "b",
  },
  {
    question: "3. book",
    a: "zvíře",
    b: "kniha",
    
    correct: "b",
},
{
  question: "4. girl",
  a: "holka",
  b: "kluk",
  
  correct: "a",
},{
  question: "5. bee",
  a: "moucha",
  b: "včela",
  
  correct: "b",
},
{
question: "6. horse",
a: "prase",
b: "kůň",

correct: "b",
},{
  question: "7. banana",
  a: "buchta",
  b: "banán",
  
  correct: "b",
},
{
question: "8. pen",
a: "pero",
b: "pastelka",

correct: "a",
},{
  question: "9. cat",
  a: "holub",
  b: "kočka",
  
  correct: "b",
},
{
question: "10. water",
a: "voda",
b: "kapka",

correct: "a",
},{
  question: "11. boat",
  a: "loď",
  b: "raketa",
  
  correct: "a",
},
{
question: "12. warm",
a: "teplý",
b: "studený",

correct: "a",
},{
  question: "13. ball",
  a: "míč",
  b: "lopata",
  
  correct: "a",
},
{
question: "14. fish",
a: "ryba",
b: "pták",

correct: "a",
},{
  question: "15. medicament",
  a: "lék",
  b: "jídlo",
  
  correct: "a",
},
{
question: "grass",
a: "tráva",
b: "kráva",

correct: "a",
},{
  question: "17. red",
  a: "červená",
  b: "bílá",
  
  correct: "a",
},
{
question: "18. door",
a: "okno",
b: "dreře",

correct: "b",
},{
  question: "19. january",
  a: "leden",
  b: "březen",
  
  correct: "a",
},
{
question: "20. plate",
a: "talíř",
b: "vidlička",

correct: "a",
},
    
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    deselectAnswers()
  
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
   
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
  
    return answer
  }
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>
        
                  
                  <li>
                  <h4>Správná odpověď: ${question[quizData[i].correct]}</h4>
                <h4>Vybral jsi: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>Získala jsi ${score} bodů z ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Znovu zkusit</button>
            `
        
        
        }
    }
  })