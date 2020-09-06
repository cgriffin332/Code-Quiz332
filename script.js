// DOM variables
var timerValue = document.getElementById("timerValue");
var startButton = document.getElementById("startQuiz");
var startContainer = document.getElementById("container1");
var questionContainer = document.getElementById("container2");
var finalScoreContainer = document.getElementById("container3");

// when start button is clicked, timer is set at 75 and begins.
startButton.addEventListener("click", function(){
    // start timer number
    var time = 76;
    // hides this container
    startContainer.style.display = "none";
    // shows question to begin quiz
    questionContainer.style.display = "block";
    // start timer
    var setTimer = setInterval(function(){
        if (time > 0) {
            time--;
            timerValue.textContent = time;
        } else {
            clearInterval(setTimer);
            // get final score page to show
            questionContainer.style.display = "none";
            finalScoreContainer.style.display = "block";
        }
    }, 500)
})

// 