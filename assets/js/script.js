// Module 4 Challenge: Cristian Acevedo

var questions = [
    {q: "Steve Sanchez loves eating?", choices:["Apples", "Bananas", "Water Melons", "Strawberies"], a: "Bananas"},
    {q: "The sky is ____ ", choices:["Red", "Black", "Blue", "green"], a: "Blue"},
    {q: 'The 2020 President of the United States is ____', choices:["Barack Obama", "Hilary Clinton", "Ronald Regan", "Donald Trump"], a: 'Donald Trump' },
    {q: 'what was the order of Donald Trump Cognitive Test.', choices:["Person, Woman, Man, Camera, TV", "Person, Man, Woman, Camera, TV", "Woman, Camera, TV, Man", "TV, Camera, Man, Woman"], a: 'Person, Woman, Man, Camera, TV' }

];

// Declare Variables
var score = 0;
var questionIndex = 0;

var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startGame");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

// Seconds left on the Timer (Each of the questions has 15 seconds to answer)
var timeLeft = 76;

// Holds Interval Time
var holdInterval = 0;

// If you get the wrong answers
var wrongAnswer = 10;

// Create an ul element in html
var ulCreate = document.createElement("ul");

timer.addEventListener("click", function () {
  // We are checking zero because its originally set to zero
  if (holdInterval === 0) {
      holdInterval = setInterval(function () {
          timeLeft--;
          currentTime.textContent = "Time: " + timeLeft;

          if (timeLeft <= 0) {
              clearInterval(holdInterval);
              allDone();
              currentTime.textContent = "Time's up!";
          }
      }, 1000);
  }
  render(questionIndex);
});

// Renders questions and choices to page: 
function render(questionIndex) {
  // Clears existing data 
  questionsDiv.innerHTML = "";
  ulCreate.innerHTML = "";
  // For loops to loop through all info in array
  for (var i = 0; i < questions.length; i++) {
      // Appends question title only
      var userQuestion = questions[questionIndex].q;
      var userChoices = questions[questionIndex].choices;
      questionsDiv.textContent = userQuestion;
  }
  // New for each for question choices
  userChoices.forEach(function (newItem) {
      var listItem = document.createElement("li");
      listItem.textContent = newItem;
      questionsDiv.appendChild(ulCreate);
      ulCreate.appendChild(listItem);
      listItem.addEventListener("click", (compare));
  })
}
// Event to compare choices with answer
function compare(event) {
  var element = event.target;

  if (element.matches("li")) {

      var createDiv = document.createElement("div");
      createDiv.setAttribute("id", "createDiv");
      // Correct condition 
      if (element.textContent == questions[questionIndex].a) {
          score++;
          createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].a;
          // Correct condition 
      } else {
          // Will deduct -5 seconds off secondsLeft for wrong answers
          timeLeft = timeLeft - wrongAnswer;
          createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].a;
      }

  }
  // Question Index determines number question user is on
  questionIndex++;

  if (questionIndex >= questions.length) {
      // All done will append last page with user stats
      allDone();
      createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
  } else {
      render(questionIndex);
  }
  questionsDiv.appendChild(createDiv);

}


// All done will append last page
function allDone() {
  questionsDiv.innerHTML = "";
  currentTime.innerHTML = "";

  // Heading:
  var createH1 = document.createElement("h1");
  createH1.setAttribute("id", "createH1");
  createH1.textContent = "All Done!"

  questionsDiv.appendChild(createH1);

  // Paragraph
  var createP = document.createElement("p");
  createP.setAttribute("id", "createP");

  questionsDiv.appendChild(createP);

  // Calculates time remaining and replaces it with score
  if (timeLeft >= 0) {
      var timeRemaining = timeLeft;
      var createP2 = document.createElement("p");
      clearInterval(holdInterval);
      createP.textContent = "Your final score is: " + timeRemaining;

      questionsDiv.appendChild(createP2);
  }

  // Label
  var createLabel = document.createElement("label");
  createLabel.setAttribute("id", "createLabel");
  createLabel.textContent = "Enter your name or initials: ";

  questionsDiv.appendChild(createLabel);

  // input
  var createInput = document.createElement("input");
  createInput.setAttribute("type", "text");
  createInput.setAttribute("id", "initials");
  createInput.textContent = "";

  questionsDiv.appendChild(createInput);

  // submit
  var createSubmit = document.createElement("button");
  createSubmit.setAttribute("type", "submit");
  createSubmit.setAttribute("id", "Submit");
  createSubmit.textContent = "Submit";

  questionsDiv.appendChild(createSubmit);

    // Event listener to capture initials and local storage for initials and score
createSubmit.addEventListener("click", function () {
    var initials = createInput.value;

    if (initials === null) {

        console.log("No value entered!");

    } else {
        var finalScore = {
            initials: initials,
            score: timeRemaining
        }
            console.log(finalScore);
        var allScores = localStorage.getItem("allScores");
        if (allScores === null) {
            allScores = [];
        } else {
            allScores = JSON.parse(allScores);
        }
            allScores.push(finalScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);
            // Travels to final page
        window.location.replace("highScore.html");
        }
    });
}