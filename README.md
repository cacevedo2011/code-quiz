# code-quiz

## Summary

The Code Quiz is an html / javaquiz wensite in which it lets the user interact with.  Code Quiz like previously said, it uses HTML but most of the coding using JavaScript to make the website be more interactive rather being static.

The first thing that I stated with the code was calling up the questions, choices and answers so the user can see start interact with;

var questions = [

    {q: "Steve Sanchez loves eating?", choices:["Apples", "Bananas", "Water Melons", "Strawberies"], a: "Bananas"},

    {q: "The sky is ____ ", choices:["Red", "Black", "Blue", "green"], a: "Blue"},

    {q: 'The 2020 President of the United States is ____', choices:["Barack Obama", "Hilary Clinton", "Ronald Regan", "Donald Trump"], a: 'Donald Trump' },

    {q: 'what was the order of Donald Trump Cognitive Test.', choices:["Person, Woman, Man, Camera, TV", "Person, Man, Woman, Camera, TV", "Woman, Camera, TV, Man", "TV, Camera, Man, Woman"], a: 'Person, Woman, Man, Camera, TV' }

];

At the same time I went to index.html and added some divs, h1, ul, button with their perspective IDs

![Screen Shot 2020-08-30 at 6 03 52 PM](https://user-images.githubusercontent.com/18291317/91670414-4d1a3a00-eaeb-11ea-96cb-c9e74b584ace.png)

and I also did a highScore.html so the user can see who is the current leader

![Screen Shot 2020-08-30 at 6 04 10 PM](https://user-images.githubusercontent.com/18291317/91670502-3d4f2580-eaec-11ea-8ee0-bea4fdab0179.png)

Afterwards, I did an addEventListener when the user press the button

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

What this code does, is that start the timer for the quiz.  I set the timer for 76 seconds.

