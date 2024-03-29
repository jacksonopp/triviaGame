//variables for correct/incorrect answers
let correctAnswers = 0;
let incorrectAnswers = 0;
let totalAnswers = 0;
let doneWithQuiz = false;

//setting the contdown timer
const maxTime = 31;
let intervalTimer = maxTime;
let intervalID;

//setting the next frame counter
const nextMaxTime = 5;
let nextIntervalTimer = nextMaxTime;
let nextIntervalID;


// setting the questions 
const questions = {
    question1: {
        question: "Where did the Coen Brothers grow up?",
        option1: "Newton, MA",
        option2: "Saint Louis Park, MN",
        option3: "Northbrook, IL",
        option4: "Los Angeles, CA",
        answer: "Saint Louis Park, MN",
        answerCorrect: "Correct!",
        answerIncorrect: "Incorrect!",
        noAnswer: "You didn't choose an answer.",
        answerFunFact: "The Coen Brothers grew up in Saint Louis Park, MN."
    },
    question2: {
        question: "What superhero film did the Coen Brothers turn down to direct?",
        option1: "Superman II (1980)",
        option2: "Captain America (1990)",
        option3: "The Incredible Hulk Returns (1988)",
        option4: "Batman (1989)",
        answer: "Batman (1989)",
        answerCorrect: "Correct!",
        answerIncorrect: "Incorrect!",
        noAnswer: "You didn't choose an answer.",
        answerFunFact: "The Coen brothers turned down Batman (1989) to make Miller's Crossing, a box office failure, but critical darling."
    },
    question3: {
        question: "What was O Brother, Where Art Thou based on?",
        option1: "Homer's <em>The Odyssey</em>",
        option2: "L. Frank Baum's <em>The Wonderful Wizard of Oz</em>",
        option3: "Joseph Conrad's <em>Heart of Darkness</em>",
        option4: "Dante Alighieri's <em>The Divine Comedy</em>",
        answer: "L. Frank Baum's <em>The Wonderful Wizard of Oz</em>",
        answerCorrect: "Correct!",
        answerIncorrect: "Incorrect!",
        noAnswer: "You didn't choose an answer.",
        answerFunFact: "The Coen Brothers originally based their movie off of The Wizard of Oz, but later decided to say it was based off the Odyssey because it sounded better."
    },
    question4: {
        question: "What Minnesota celebrity shows up in the credits of Fargo?",
        option1: "Prince",
        option2: "Bob Dylan",
        option3: "Jesse Ventura",
        option4: "Garrison Keillor",
        answer: "Prince",
        answerCorrect: "Correct!",
        answerIncorrect: "Incorrect!",
        noAnswer: "You didn't choose an answer.",
        answerFunFact: "Prince is credited as 'Victim in Field' in the credits, and wanted a small part in the film, but the role is actually played by J. Todd Anderson, one of the Coen Brother's long-time storyboard artists."
    },
    question5: {
        question: "Who is the Coen Brothers' usual cinematographer?",
        option1: "Emmanuel Lubezki",
        option2: "Roger Deakins",
        option3: "Robert Elswit",
        option4: "Wally Pfister",
        answer: "Roger Deakins",
        answerCorrect: "Correct!",
        answerIncorrect: "Incorrect!",
        noAnswer: "You didn't choose an answer!",
        answerFunFact: "Roger Deakins is the Coen Brothers' long-time cinematographer. He has shot 12 of their films."

    },
    question6: {
        question: "Who plays the titular role in 'The Big Lebowski'?",
        option1: "Jeff Bridges",
        option2: "John Goodman",
        option3: "David Huddleston",
        option4: "Steve Buscemi",
        answer: "David Huddleston",
        answerCorrect: "Correct!",
        answerIncorrect: "Incorrect!",
        noAnswer: "You didn't choose an answer!",
        answerFunFact: "Jeff Bridges plays 'The Dude', who is mistaken for the 'Big' Lebowski, played by Huddleston"

    },
    question6: {
        question: "How many Academy Awards have the Coen Brothers been nominated for?",
        option1: "14",
        option2: "20",
        option3: "7",
        option4: "11",
        answer: "14",
        answerCorrect: "Correct!",
        answerIncorrect: "Incorrect!",
        noAnswer: "You didn't choose an answer!",
        answerFunFact: "The Coen Brothers have been nominated 14 times. They have won four, including two for Best Screenplay, one for Best Director, and one for Best Picture."
    },
    question7: {
        question: "Which film won the Academy Award for Best Picture?",
        option1: "Fargo",
        option2: "Barton Fink",
        option3: "The Big Lebowski",
        option4: "No Country for Old Men",
        answer: "No Country for Old Men",
        answerCorrect: "Correct!",
        answerIncorrect: "Incorrect!",
        noAnswer: "You didn't choose an answer!",
        answerFunFact: "The Coen Brothers won the Oscar for No Country for Old Men."
    },
    question8: {
        question: "Who edits their films?",
        option1: "Walter Murch",
        option2: "Roderick Jaynes",
        option3: "Michael Kahn",
        option4: "Alan Edward Ball",
        answer: "Roderick Jaynes",
        answerCorrect: "Correct!",
        answerIncorrect: "Incorrect!",
        noAnswer: "You didn't choose an answer!",
        answerFunFact: "Joel and Ethan Coen actually edit their own films. Roderick Jaynes is the pseudonym that they use in order to get around union requirements for receiving awards."
    },
    question9: {
        question: "Which famous actress is Joel Coen's wife?",
        option1: "Francis McDormand",
        option2: "Sissy Spacek",
        option3: "Kathy Bates",
        option4: "Alan Edward Ball",
        answer: "Francis McDormand",
        answerCorrect: "Correct!",
        answerIncorrect: "Incorrect!",
        noAnswer: "You didn't choose an answer!",
        answerFunFact: "Joel and Francis met on the set of the brothers' debut film, <em>Blood Simple</em>. She has since appeared in several of their films, including Fargo, for which she won an Oscar."
    },
    question10: {
        question: "How many times does The Dude say 'man' in The Big Lebowski?",
        option1: "329",
        option2: "133",
        option3: "212",
        option4: "147",
        answer: "147",
        answerCorrect: "Correct!",
        answerIncorrect: "Incorrect!",
        noAnswer: "You didn't choose an answer!",
        answerFunFact: "The dude says 'man' 147 times. Thats nearly once every 45 seconds!"
    },



}

// setting the total number of questions to later check to see if you've answered all the questions
const numberOfQuestions = Object.keys(questions).length;

//setting up an array loop to go through the options and questions
const optionLoop = ["option1", "option2", "option3", "option4"];
const questionLoop = Object.keys(questions);
console.log(questionLoop);

//setting up basic display divs
const gameWindow = document.getElementById("game-window");
const questionWindow = document.createElement("div");
questionWindow.classList.add("game-frame");
gameWindow.append(questionWindow);

//put functions here------------------------------------

//sets the question index to 0 for going to next question
let i = 0
//allows us to go through the question loop array
let currentQuestion = questionLoop[i];

//resets all the tracking variables and the question loop index and runs the frameMaker function
function restartGame() {
    questionWindow.innerHTML = "";
    i = 0;
    intervalTimer = maxTime;
    nextIntervalTimer = nextMaxTime;
    currentQuestion = questionLoop[i];
    correctAnswers = 0;
    incorrectAnswers = 0;
    totalAnswers = 0;
    frameMaker(questions[currentQuestion]);
}

//clears the timer varibles, adds 1 to the question loop index, and runs the frameMaker function with the next question in the question loop array as its parameter
function nextFrame() {
    clearInterval(intervalID);
    intervalTimer = maxTime;
    nextIntervalTimer = nextMaxTime;
    clearInterval(nextIntervalID);
    questionWindow.innerHTML = "";
    i++;
    currentQuestion = questionLoop[i];
    console.log("newQuestion:", currentQuestion)
    frameMaker(questions[currentQuestion]);
}

//sets the welcome screen
function welcome() {
    const startButton = document.createElement("button");
    startButton.innerHTML = "Start";
    questionWindow.append(startButton);

    startButton.addEventListener("click", function () {
        restartGame()
    })
}

//clears all timer variables, and sets the end screen
function endGame() {
    questionWindow.innerHTML = "";
    clearInterval(intervalID);
    clearInterval(nextIntervalID);
    const questionsCorrectText = document.createElement("div");
    questionsCorrectText.classList.add("results")
    const questionsIncorrectText = document.createElement("div");
    questionsIncorrectText.classList.add("results")

    questionsCorrectText.innerHTML = "Questions Correct: " + correctAnswers;
    questionsIncorrectText.innerHTML = "Questions Incorrect: " + incorrectAnswers;
    timeLeftText.innerHTML = "";
    questionWindow.append(questionsCorrectText);
    questionWindow.append(questionsIncorrectText);

    const restartButton = document.createElement("button");
    restartButton.innerHTML = "Play Again";
    questionWindow.append(restartButton);

    restartButton.addEventListener("click", function () {
        restartGame();
    })

}

//function which sets up the question frame, and includes the logic for picking answers
//this is the game
function frameMaker(questionNumber) {
    countdownTimer();
    //setting up the answer to the question
    const frameAnswer = questionNumber.answer
    //writing the question and setting up div for answer
    const frameQuestion = document.createElement("h3");
    const answerText = document.createElement("div");
    answerText.classList.add("answer");
    //check to see if answer has been chosen

    frameQuestion.innerHTML = questionNumber.question
    questionWindow.append(frameQuestion);
    //loop to create the options for users to select
    optionLoop.forEach(function (node) {
        const frameOption = document.createElement("p");
        frameOption.classList.add("option");
        frameOption.setAttribute("option-number", optionLoop.indexOf(node));
        frameOption.innerHTML = questionNumber[node];
        questionWindow.append(frameOption);
    })
    //setting up the logic for selecting answers
    document.querySelectorAll(".option").forEach(function (optionEl) {
        // setting a variable that will equal the text content of the user's choice
        const frameChoice = optionEl.innerHTML;
        // console.log(frameChoice);
        //adding event listener for user choice
        if (!doneWithQuiz) {
            optionEl.addEventListener("click", function () {
                const userChoice = frameChoice;
                console.log("$$$$$", userChoice, frameAnswer, userChoice === frameAnswer);
                //checking if user picked correct answer
                if (userChoice === frameAnswer) {
                    correctAnswers++;
                    totalAnswers++;
                    answerText.innerHTML = questionNumber.answerCorrect + " " + questionNumber.answerFunFact;
                    questionWindow.append(answerText);
                    console.log("you guessed correctly");
                    console.log("correct answers:", correctAnswers);
                    console.log("total answers", totalAnswers);
                    if (totalAnswers === numberOfQuestions) {
                        console.log("done with game");
                        endGame();
                    }
                    else {
                        nextCountdownTimer();
                    }
                }
                //checking if user picked incorrect answer
                else {
                    incorrectAnswers++;
                    totalAnswers++;
                    answerText.innerHTML = questionNumber.answerIncorrect + " " + questionNumber.answerFunFact;
                    questionWindow.append(answerText);
                    console.log("you guessed incorrectly");
                    console.log("incorrect answers:", incorrectAnswers);
                    console.log("total answers", totalAnswers);
                    if (totalAnswers === numberOfQuestions) {
                        console.log("done with game");
                        endGame();
                    }
                    else {
                        nextCountdownTimer();
                    }
                }

            })

        }
    })
    //setting up the countdown timer
    function countdownTimer() {
        clearInterval(intervalID);
        intervalID = setInterval(decrement, 1000);
    }


    function decrement() {
        intervalTimer--;
        timeLeftText = document.getElementById("timer");
        timeLeftText.innerHTML = "Time Left: " + intervalTimer;

        if (intervalTimer < 1) {
            // clearInterval(intervalID);
            answerText.innerHTML = questionNumber.noAnswer + " " + questionNumber.answerFunFact;
            questionWindow.append(answerText);
            incorrectAnswers++
            totalAnswers++
            // nextFrame()
            nextCountdownTimer();
        }

    }
    function nextCountdownTimer() {
        clearInterval(intervalID);
        clearInterval(nextIntervalID);
        nextIntervalID = setInterval(nextDecrement, 1000)
    }

    function nextDecrement() {
        nextIntervalTimer--;

        if (nextIntervalTimer < 1 && totalAnswers !== numberOfQuestions) {
            nextFrame();
        } else if (nextIntervalTimer < 1 && totalAnswers === numberOfQuestions) {
            endGame();
        }
    }
}

welcome();