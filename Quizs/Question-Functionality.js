                          /* ***** Functionality of Quiz Application ***** */
var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

// Getting Elements by ID...!

var container = document.getElementById('Quiz_Container');
var questionEL = document.getElementById('Question');

var opt1 = document.getElementById('Option1');
var opt2 = document.getElementById('Option2');
var opt3 = document.getElementById('Option3');
var opt4 = document.getElementById('Option4');

var nextButton = document.getElementById('NextButton');
var resultContainer = document.getElementById('Result');
var perA = document.getElementById('percent');
var correctA = document.getElementById('correct');
var position = document.getElementById('Position');
var timerhide=document.getElementById('timerSet'); 
var endButton = document.getElementById('logOutButton');

// Functionality of Load Questions...!

function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    questionEL.textContent = (questionIndex + 1) + '. ' + q.question;

    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
}
 
// Functionality pf Load Next Question...!

function loadNextQuestion() {

    // If user unchecked any option then this condition will true...!

    var selectOption = document.querySelector('input[type=radio]:checked');
    if (!selectOption) {
        alert('Please select your Answer!');
        return;
    }

    // If selected option is equal to correct answer then this condition will true...!

    var answer = selectOption.value;
    if (questions[currentQuestion].answer === answer) {
        score += 5;
    }
    selectOption.checked = false;
    currentQuestion++;

    // If second last question will come then this condition will come...!

    if (currentQuestion === totalQuestions - 1) {
        nextButton.textContent = "Result";
    }

    // If current question is equal to total questions then this condition will true...!

    if (currentQuestion === totalQuestions) {
        container.style.display = "none";
		timerSet.style.display = "none";
        resultContainer.style.display = "block";
        perA.textContent =  score + "%";
		correctA.textContent = score / 5 ;
        position.style.display = "block";
        endButton.style.display = "block";
        return;
    }

    // If score is graeter then pr less then 60% then this condition will true...!

    if (score === 0) {
        position.innerHTML = "You Got Poor!";
    }

    else if (score >= 60) {
        position.innerHTML = "Congralutations You have Passed!";
    }

    else if (score <= 60) {
        position.innerHTML = "Sorry to say, You Failed!"
    }

    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);

// Functionality if Log Out Button...!

function logOut() {
    //alert('You have Logged Out!');
    window.open('../index.html');
}

/* ***** TIMER ***** */

function getTimer() {
    var timeSet = setInterval(myTimer, 1000);
    var min = 02;
    var sec = 59;

    // If score is graeter then pr less then 60% then this condition will true...!

    if (score === 0) {
        position.innerHTML = "You Got Poor!";
    }

    else if (score >= 60) {
        position.innerHTML = "Congralutations You have Passed!";
    }

    else if (score <= 60) {
        position.innerHTML = "Sorry to say, You Failed!"
    }

    function myTimer() {
        sec--;
        if (sec === 0) {
            if (min > 0) {
                min--;
                sec = 60;
            }
            else {
                clearInterval(timeSet);
                container.style.display = "none";
				timerSet.style.display = "none";
                resultContainer.style.display = "block";
                position.textContent = "Time Out!,Your score";
				perA.textContent = score+"%";
				correctA.textContent = score / 5 ;
                position.style.display = "block";
                endButton.style.display = "block";
            }
        }
        document.getElementById('time').innerHTML = '0' + min + " min" + " : " + sec + " sec";
    }
}

            /* ***** Functionality of Quiz Application has Succesfully Completed ***** */