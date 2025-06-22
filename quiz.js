functioncheckAnswer() ;{
    //Function body

    // Declare correct answer
    const correctAnswer = "4";

    // Retrieve user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an option is selected
    if (!selectedOption) {
        alert("Please select an answer before submitting.");
        return;
    }
      // Get the value of the selected radio input
    const userAnswer = selectedOption.value;

    // Compare userAnswer with correctAnswer and update feedback
    const feedbackElement = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = ("Correct! Well done.");
    } else {
        feedbackElement.textContent = ("That's incorrect. Try again!");
    }

    // Add event listener to the submit button
    const submitButton = document.getElementById("submit-answer");
    submitButton.addEventListener("click", checkAnswer);
}

