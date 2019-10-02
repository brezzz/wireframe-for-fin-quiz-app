let currentQuestion = 0;
let currentScore = 0;


function startQuiz () {
$('.start').on('click', '#quizStart', function (event) {
$('.start').remove();
$('#quizPage').css('display', 'block');
$('#questionNumDisplay').text(1);
callQuestions();
displayQuestions();
selectAnswerDisplay ()
});
}

function callQuestions () {
	if (currentQuestion < Quiz.length){
		 return `<h3>${Quiz[currentQuestion].question}</h3>
            <form class='quizQuestions' >
                <fieldset>
                    <label class='answerContainer'>
                        <input type="radio" name="option"  value='${Quiz[currentQuestion].multiple_choice[0]}' required></input>
                        <span>${Quiz[currentQuestion].multiple_choice[0]}</span>
                    </label>

                    <label class='answerContainer'>
                        <input type="radio" name="option"  value='${Quiz[currentQuestion].multiple_choice[1]}' required></input>
                        <span>${Quiz[currentQuestion].multiple_choice[1]}</span>
                    </label>

                    <label class='answerContainer'>
                        <input type="radio" name="option" value='${Quiz[currentQuestion].multiple_choice[2]}' required></input>
                        <span>${Quiz[currentQuestion].multiple_choice[2]}</span>
                    </label>

                    <label class='answerContainer'>
                        <input type="radio" name="option" value='${Quiz[currentQuestion].multiple_choice[3]}' required></input>
                        <span>${Quiz[currentQuestion].multiple_choice[3]}</span>
                    </label>
                </fieldset>
                <input type="submit" class="quizSubmit" value="Submit"></input>
 </form>`
		 
} else { 
displayResults();
restartQuiz();
$('#questionNumDisplay').text(10)
}
}

console.log('There are '+ Quiz.length + ' questions in this quiz.');
console.log('Key: '+ Quiz[currentQuestion].question + ' '+ Quiz[currentQuestion].answer);
console.log('The answer to question two is: '+Quiz[1].answer);



function displayQuestions() {
	$('#quizPage').html(callQuestions());
}

 function selectAnswerDisplay () {
   $('.quizQuestions').on('submit', function (event) {
    event.preventDefault();
    
    let selectedAnswer = $("input:checked");
    let selectedAnswerDis = selectedAnswer.val();
    let answer = `${Quiz[currentQuestion].answer}`;
    console.log('Key: '+ Quiz[currentQuestion].question + '    '+ Quiz[currentQuestion].answer);
    console.log('The answer selected is: ' + selectedAnswerDis);
    console.log('The correct answer is: ' + answer);
      if (answer === selectedAnswerDis) {
     
       determindedCorrect();
       currentScoreDisplay();
     } else {
          determindedIncorrect();    }
   }); }

function displayNextQuestion() {
	$('main').on('click', '#quizNext', function (event){
	incrementQuestionNumber();
	displayQuestions();
	selectAnswerDisplay(); 
  
  });
}

function incrementQuestionNumber() {
	currentQuestion ++;
	$('#questionNumDisplay').text(currentQuestion+1)
}

function incrementScore () {
	currentScore++;
}

function currentScoreDisplay () {
	incrementScore();
	$('#scoreDisplay').text(currentScore)
}

/*determining if an answer is correct and giving feedback*/
function determindedCorrect() {
    $('#quizPage').html(
		`<div class="feedback">
            <div class="correct_feedback"><img src="https://pbs.twimg.com/media/CV46cwKWIAExUra.jpg" alt="pennybags_correct_feedback" />
            </div>
            <h2>That was the correct choice!</h2>
            <p>
                Just in case that choice was luck, 
                Here's a resource to learn more about:

                
<a href = '${Quiz[currentQuestion].topic_url} '>${Quiz[currentQuestion].topic} </a>
            </p>

            <button id='quizNext'>Next</button>
        </div>`
		);
    
}
		
		
function	determindedIncorrect() {
		$('#quizPage').html(
		`<div class="feedback">
            <div class="wrong_feedback"><img src="https://i.imgur.com/wPHQcWb.gif" alt="pennybags_wrong_feedback" />
            </div>
            <h2>That was the incorrect choice!</h2>
            <p>
                Here's a resource to learn more about 

 <a href = '${Quiz[currentQuestion].topic_url} '>${Quiz[currentQuestion].topic} </a> 
                
            </p>

            <button id='quizNext'>Next</button>
            </div>`
		);
	}


function displayResults () {
  
  let percentageScore = (currentScore/10)*100+'%';
  if (currentScore >= 5) {
		$('#quizPage').html(`<div class="feedback">
            <div class="pass_feedback"><img src="https://i.imgur.com/ixarVzn.jpg" alt="pennybags_pass_feedback_end" />
            </div>
            <h2>You got 
  ${percentageScore}
  
 right!</h2>
            

            <button id='quizRestart'>Restart</button>
        </div>`)
		
		
	}else {
		
		
		$('#quizPage').html(
      `<div class="feedback">
            <div class="fail_feedback"><img src="https://i.imgur.com/17llem8.png" alt="pennybags_fail_feedback_end" />
            </div>



            <h2>Sorry, you got more than half wrong. Please try again</h2>
          

            <button id='quizRestart'>Restart</button>
        </div>`
      
      
      
      )
	}
		
	
	
}

function restartQuiz() {
	$('main').on('click', '#quizRestart', function (event) {
		location.reload();
	});
	
}

function makeQuiz () {
	startQuiz();
  callQuestions();

  selectAnswerDisplay(); 
  displayNextQuestion();
	
}

$(makeQuiz);
