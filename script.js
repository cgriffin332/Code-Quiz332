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
var  showHighscoreContainer = function(){
    finalScoreContainer.style.display = "none";
    startContainer.style.display = "none";
    highscoreContainer.style.display = "block";
}

// open highscore page
highscoreLink.addEventListener("click", function(){
    showHighscoreContainer();
})
// go back to title page
goBackBtn.addEventListener("click", function(){
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
            clearInterval(setTimer);
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
    showHighscoreContainer();
})
// clear button clears out highscores
clearBtn.addEventListener("click", function(){
    highscoreList.innerHTML = "";
})


