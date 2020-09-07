// DOM variables
var timerValue = document.getElementById("timerValue");
var startButton = document.getElementById("startQuiz");
var startContainer = document.getElementById("container1");
var questionContainer = document.getElementById("container2");
var finalScoreContainer = document.getElementById("container3");
var submitBtn = document.getElementById("submit");
var initialsInput = document.getElementById("initialsInput");
var highscoreList = document.getElementById("highscoreList");
var highscoreContainer = document.getElementById("container4");
var highscoreLink = document.getElementById("highscoreLink")
var goBackBtn = document.getElementById("goBack");
var clearBtn = document.getElementById("clear");
var quizQuestion = document.getElementById("quizQuestion");
var answer1 = document.getElementById("questionValue1");
var answer2 = document.getElementById("questionValue2");
var answer3 = document.getElementById("questionValue3");
var answer4 = document.getElementById("questionValue4");
var answersUl = document.getElementById("allAnswers");
var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");
var finalScore = document.getElementById("finalScore");




//questions array
var questions = [{
    question: "Commonly used data types DO NOT include:",
    answer1: "strings",
    answer2: "booleans",
    answer3: "alerts",
    answer4: "numbers",
    correct: "alerts"
}, {
    question: "The condition in an if/else statement is enclosed within ____.:",
    answer1: "quotes",
    answer2: "curly brackets",
    answer3: "parentheses",
    answer4: "square brackets",
    correct: "parentheses"
}, {
    question: "Arrays in JavaScript can be used to store ____.:",
    answer1: "numbers and strings",
    answer2: "other arrays",
    answer3: "booleans",
    answer4: "all of the above",
    correct: "all of the above"
}, {
    question: "These are listed inside the parentheses of a function when it is defigned:",
    answer1: "strings",
    answer2: "arguments",
    answer3: "parameters",
    answer4: "variables",
    correct: "parameters"
}, {
    question: "A function stored as an object property:",
    answer1: "callback",
    answer2: "unanimous",
    answer3: "method",
    answer4: "void",
    correct: "method"
}];

// when start button is clicked, timer is set at 75 and begins.
startButton.addEventListener("click", function(){
    // start timer number
    time = 75;
    i = 0;
    timerValue.textContent = time;
    changeQuestion();
    showQuestionContainer();
    // start timer
    var setTimer = setInterval(function(){
        if (time > 0) {
            time--;
            timerValue.textContent = time;
        } else {
        // clear setinterval
        clearInterval(setTimer);
        // open score page
        showScoreContainer();
        }
    }, 1000)
})

// populate quiz questions
var changeQuestion = function(){
    quizQuestion.textContent = questions[i].question;
    answer1.textContent = questions[i].answer1;
    answer2.textContent = questions[i].answer2;
    answer3.textContent = questions[i].answer3;
    answer4.textContent = questions[i].answer4;
}
// make questions change on click of answer
answersUl.addEventListener("click", function(event){
    // prevent buttons from staying highlighted
    event.preventDefault();
    // so you dont have to click the last answer twice
    if (i < questions.length - 1) {
        // if the answer is correct
        if (event.target.innerHTML === questions[i].correct) {
            // show user correct h5
            correct.style.display = "block";
            wrong.style.display = "none";
            // clear out result in 2 seconds
            setInterval(function(){
                correct.style.display = "none";
            }, 2000)
            // clear out result in 2 seconds
        } else {
            // subtract 10 seconds if answer is incorrect
            time -= 10;
            // show user wrong h5
            wrong.style.display = "block";
            correct.style.display = "none";
            // clear out result in 2 seconds
            setInterval(function(){
                wrong.style.display = "none";
            }, 2000)
        }
        i++;
        changeQuestion();
    } else {
        // stop clock but delay .5 second to allow subtraction of time if last question is incorrect.
        if (event.target.innerHTML === questions[i].correct) {
            // show correct h5
            correct.style.display = "block";
            wrong.style.display = "none";
            // clear out result in 2 seconds
            setInterval(function(){
                correct.style.display = "none";
            }, 2000)
        } else {
            // subtract 10 seconds if answer is incorrect
            time -= 10;
            //show wrong h5
            wrong.style.display = "block";
            correct.style.display = "none";
            // clear out result in 2 seconds
            setInterval(function(){
                wrong.style.display = "none";
            }, 2000)
        }
        finalScore.textContent = time;
        time = 0;
        timerValue.textContent = 0;
        showScoreContainer();
    }
})

var showQuestionContainer = function(){
    // hides this container
    startContainer.style.display = "none";
    // shows question to begin quiz
    questionContainer.style.display = "block";
}
var showScoreContainer = function(){
    // get final score page to show
    questionContainer.style.display = "none";
    finalScoreContainer.style.display = "block";
}
var showStartContainer = function(){
    // get start page to show
    finalScoreContainer.style.display = "none";
    highscoreContainer.style.display = "none";
    startContainer.style.display = "block";
}
// opens highscore page
var  showHighscoreContainer = function(){
    finalScoreContainer.style.display = "none";
    startContainer.style.display = "none";
    highscoreContainer.style.display = "block";
}

// open highscore page
highscoreLink.addEventListener("click", function(){
    // open highscore page
    showHighscoreContainer();
})
// go back to title page
goBackBtn.addEventListener("click", function(){
    //open start page
    showStartContainer();
})

var time = 0
var i = 0


//Score initials submit
submitBtn.addEventListener("click", function(event){
    // prevent reload of page
    event.preventDefault();
    // create new li
    var listScore = document.createElement("li");
    // add initials and score
    listScore.textContent = initialsInput.value + " - " + finalScore.textContent;
    //add score to ol
    highscoreList.appendChild(listScore);
    //change to highscore page
    showHighscoreContainer();
})
// clear button clears out highscores
clearBtn.addEventListener("click", function(){
    highscoreList.innerHTML = "";
})

