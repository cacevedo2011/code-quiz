# code-quiz

## Summary

The Code Quiz is an html / javaScript website in which it lets the user interact with.  Code Quiz like previously said, it uses HTML but most of the coding using JavaScript to make the website be more interactive rather being static.

The first thing that I stated with the code was calling up the questions, choices and answers so the user can see start interact with;

    var questions = [

    {q: "Steve Sanchez loves eating?", choices:["Apples", "Bananas", "Water Melons", "Strawberies"], a: "Bananas"},

    {q: "The sky is ____ ", choices:["Red", "Black", "Blue", "Green"], a: "Blue"},

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

Next I generated the questions and options for the answers so it could be displayed in the website.

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

After I compared the choices with the answers in which I called it as _"a"_ and I basically said if you have it right you get points and the timer doesn't change and else you dont get points plus the penalty in which you get time deducted. and when finishing the game it would create a local file with the scores and send it to the highScore.html so it could display it.

As you would see in this image, it displays the high score in the website but the information is saved in your local storage of your computer.

![Screen Shot 2020-08-30 at 6 40 13 PM](https://user-images.githubusercontent.com/18291317/91670968-6a9dd280-eaf0-11ea-9d87-ca563ab92a72.png)

## Step by Step code

Upon entering on the website, you'll be greated with "Quiz Challenge"

<img width="1280" alt="Screen Shot 2020-08-30 at 5 17 07 PM" src="https://user-images.githubusercontent.com/18291317/91677441-b06a9300-eb10-11ea-90d0-a8e11ae63b23.png">

Once you press that "Start Quiz" button the javascript woulb begin the code and display the questions

![Screen Shot 2020-08-30 at 10 37 19 PM](https://user-images.githubusercontent.com/18291317/91677707-8665a080-eb11-11ea-80e8-1e41864a900e.png)

Depending on the code, you can have infite number of questions but for the purpose of this challenge, we only have 4 questions in it.

Once finishing the challenge youll be prompt to write your name or initial so the high score could be displayed on the highScore.html

![Screen Shot 2020-08-30 at 10 37 04 PM](https://user-images.githubusercontent.com/18291317/91677966-4bb03800-eb12-11ea-9449-2dde3f04249b.png)

This one is after you put your recent high score (I added more to populate this area)

<img width="1280" alt="Screen Shot 2020-08-30 at 5 16 50 PM" src="https://user-images.githubusercontent.com/18291317/91677864-068c0600-eb12-11ea-91f2-a5e5e5603fed.png">