let currentQuestion = 0;
let currentScore = 0;

function startQuiz () {
$('.start').on('click', '#quizStart', function (event) {
$('.start').remove();
$('#quizPage').css('display', 'block');
$('#questionNumDisplay').text(1);
callQuestions();
displayQuestions();
});
}

function callQuestions () {
	if (currentQuestion < Quiz.length){
		 return `<h3>${Quiz[currentQuestion].question}</h3>
            <form class='quizQuestions' >
                <fieldset>
                    <label class='answerContainer'>
                        <input type="radio" name="option" required></input>
                        <span>${Quiz[currentQuestion].multiple_choice[0]}</span>
                    </label>

                    <label class='answerContainer'>
                        <input type="radio" name="option" required></input>
                        <span>${Quiz[currentQuestion].multiple_choice[1]}</span>
                    </label>

                    <label class='answerContainer'>
                        <input type="radio" name="option" required></input>
                        <span>${Quiz[currentQuestion].multiple_choice[2]}</span>
                    </label>

                    <label class='answerContainer'>
                        <input type="radio" name="option" required></input>
                        <span>${Quiz[currentQuestion].multiple_choice[3]}</span>
                    </label>
                </fieldset>
                <button type="submit" class="quizSubmit">Submit</button>
 </form>`
		 
} else { 
displayResults();
restartQuiz();
$('#questionNumDisplay').text(10)
}
}
console.log(Quiz.length);
console.log(Quiz[currentQuestion].question);
console.log(Quiz[currentQuestion].answer);

console.log(Quiz[1].answer);



function displayQuestions() {
	$('#quizPage').html(callQuestions());
}


 function selectAnswerDisplay () {
   $('form').on('submit', function (event) {
    event.preventDefault();
    
    let selectedAnswer = $( "input[type=radio]:checked" );
    let selectedAnswerDis = selectedAnswer.val();
    let answer = `${Quiz[currentQuestion].answer}`;
    console.log(selectedAnswer);
    console.log(answer);
      if (answer === selectedAnswer) {
     
       determindedCorrect();
       currentScoreDisplay();
     } else {
          determindedIncorrect();    }
   }); }

function displayNextQuestion() {
	$('main').on('click', '#quizNext', function (event){
	incrementQuestionNumber();
	displayQuestions();
	selectAnswerDisplay(); //was subbed for determineAnswer()*/
  
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <button id='quizNext'>Next</button>
            </div>`
		);
	}


function displayResults () {
  if (currentScore >= 5) {
		$('#quizPage').html(`<div class="feedback">
            <div class="pass_feedback"><img src="https://i.imgur.com/ixarVzn.jpg" alt="pennybags_pass_feedback_end" />
            </div>
            <h2>You got X amount right!</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <button id='quizRestart'>Restart</button>
        </div>`)
		
		
	}else {
		
		
		$('#quizPage').html(
      `<div class="feedback">
            <div class="fail_feedback"><img src="https://i.imgur.com/17llem8.png" alt="pennybags_fail_feedback_end" />
            </div>
            <h2>Sorry, you got more than half wrong. Please try again</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

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
//	displayQuestions(); //now within startQuiz
  selectAnswerDisplay(); 
  displayNextQuestion();
	
}

$(makeQuiz);
