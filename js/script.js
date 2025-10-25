console.log("script.js connected!");

let userAnswers = {};   //Setting up key, value pairs for each user answer to the questions

// Selecting all question blocks
let questions = document.querySelectorAll(".question-block");

questions.forEach(function(questionBlock) {
    // Selecting all answer buttons in question block
    let buttons = questionBlock.querySelectorAll(".answer-btn");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Removing "selected" class from the buttons in block
            buttons.forEach(function(btn) {
                btn.classList.remove("selected");
            });

            // Adding "selected" class to the button user clicks
            button.classList.add("selected");

            //Storing user answers in "userAnswers" variable
            let questionID = button.dataset.answer;    // Decides which question it's on based on "data-answer" in html
            let points = parseInt(button.dataset.points);   // Converts string to integer
            userAnswers[questionID] = points;

            console.log(userAnswers);   // Shows answers in the console
        });
    });
});

// Function to calculate final result and display it
function displayResult() {
    let totalPoints = 0;

    for (let key in userAnswers) {
        totalPoints += userAnswers[key];    // Getting total points by adding up all the keys for each question
    }

    let resultText = "";

    // Result based on how many total points user has
    if (totalPoints >= 4 && totalPoints <= 6) {
        resultText = "Explorer";
    } else if (totalPoints >= 7 && totalPoints <= 9) {
        resultText = "Artist";
    } else if (totalPoints >= 10 && totalPoints <= 12) {
        resultText = "Leader";
    } else if (totalPoints >= 13 && totalPoints <= 16) {
        resultText = "Thinker";
    } else {
        resultText = "Please answer all questions to get results.";
    }

    // Displaying the result by replacing the text in the result container with resultText
    let resultContainer = document.getElementById("result-container");
    document.getElementById("result-text").textContent = resultText;
    resultContainer.style.display = "block";    // Makes the results show up on the page
}

// When user clicks Show Results button, it runs the displayResult function
document.getElementById("show-result").addEventListener("click", displayResult);