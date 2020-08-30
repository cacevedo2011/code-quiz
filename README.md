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