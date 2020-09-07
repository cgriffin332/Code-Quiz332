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
    correct: "unanimous"
}];


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

// when start button is clicked, timer is set at 75 and begins.
startButton.addEventListener("click", function(){
    // start timer number
    time = 76;
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
    }, 100)
})

//why doesnt this work???
//Score initials submit
submitBtn.addEventListener("click", function(event){
    // prevent reload of page
    event.preventDefault();
    // create new li
    var listScore = document.createElement("li");
    // add initials and score
    listScore.textContent = initialsInput.value + " - " + time;
    //add score to ol
    highscoreList.appendChild(listScore);
    //change to highscore page
    showHighscoreContainer();
})
// clear button clears out highscores
clearBtn.addEventListener("click", function(){
    highscoreList.innerHTML = "";
})


