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
            button.classList.add("selected")

            //Storing user answers in "userAnswers" variable
            let questionID = button.dataset.answer;    // Decides which question it's on based on "data-answer" in html
            let points = parseInt(button.dataset.points);   // How many points are given for each question choice
            userAnswers[questionID] = points

            console.log(userAnswers);   // Shows answers in the console
        });
    });
});