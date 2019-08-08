//variables for correct/incorrect answers
let correctAnswers = 0;
let incorrectAnswers = 0;
let totalAnswers = 0;
let doneWithQuiz = false;

// setting the questions 
const questions = {
    question1: {
        question: "what is my name",
        option1: "jackson",
        option2: "alan",
        option3: "bill",
        option4: "mark",
        answer: "jackson",
    },
    question2: {
        question: "what is my sister's name",
        option1: "jackson",
        option2: "claire",
        option3: "bill",
        option4: "mark",
        answer: "claire",
    },
    question3: {
        question: "what is my dad's name",
        option1: "bruce",
        option2: "dan",
        option3: "arthur",
        option4: "jerry",
        answer: "bruce",
    },
    question4: {
        question: "what is my mom's name",
        option1: "alice",
        option2: "barbara",
        option3: "nancy",
        option4: "carol",
        answer: "carol",
    },
    question5: {
        question: "what is my cat's name",
        option1: "tiger",
        option2: "nelson",
        option3: "kevin",
        option4: "kitty",
        answer: "beaux",
    }
}

const numberOfQuestions = Object.keys(questions).length;

//setting up an array loop to go through the options
const optionLoop = ["option1", "option2", "option3", "option4"];
const questionLoop = Object.keys(questions);
console.log(questionLoop);

//setting up basic display options
const gameWindow = document.getElementById("game-window");
const questionWindow = document.createElement("div");
gameWindow.append(questionWindow);

//function which sets up the question frame, and includes the logic for picking answers
function frameMaker(questionNumber) {
    //setting up the answer to the question
    const frameAnswer = questionNumber.answer
    //writing the question
    const frameQuestion = document.createElement("h3");
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
        const frameChoice = optionEl.textContent;
        // console.log(frameChoice);
        //adding event listener for user choice
        if (!doneWithQuiz) {
            optionEl.addEventListener("click", function () {
                const userChoice = frameChoice;
                console.log(userChoice);
                //checking if user picked correct answer
                if (userChoice === frameAnswer) {
                    correctAnswers++;
                    totalAnswers++;
                    console.log("you guessed correctly");
                    console.log("correct answers:", correctAnswers);
                    console.log("total answers", totalAnswers);
                    if (totalAnswers === numberOfQuestions) {
                        console.log("done with game");
                        endGame();
                    }
                    else {
                        nextFrame();
                    }
                }
                else {
                    incorrectAnswers++;
                    totalAnswers++;
                    console.log("you guessed incorrectly");
                    console.log("incorrect answers:", incorrectAnswers);
                    console.log("total answers", totalAnswers);
                    if (totalAnswers === numberOfQuestions) {
                        console.log("done with game");
                        endGame();
                    }
                    else {
                        nextFrame();
                    }
                }

            })

        }
    })

}



//function for going to next question
let i = 0
let currentQuestion = questionLoop[i];

function restartGame() {
    questionWindow.innerHTML = "";
    i = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    totalAnswers = 0;
    frameMaker(questions[currentQuestion]);
}

function nextFrame() {
    questionWindow.innerHTML = "";
    i++;
    currentQuestion = questionLoop[i];
    console.log("newQuestion:", currentQuestion)
    frameMaker(questions[currentQuestion]);
}

function welcome() {
    const startButton = document.createElement("button");
    startButton.innerHTML = "start";
    questionWindow.append(startButton);

    startButton.addEventListener("click", function () {
        restartGame()
    })
}

function endGame() {
    questionWindow.innerHTML = "";
    const questionsCorrectText = document.createElement("div");
    const questionsIncorrectText = document.createElement("div");
    questionsCorrectText.innerHTML = correctAnswers;
    questionsIncorrectText.innerHTML = incorrectAnswers;

    questionWindow.append("Questions Correct: ", questionsCorrectText);
    questionWindow.append("Questions Incorrect: ", questionsIncorrectText);

    const restartButton = document.createElement("button");
    restartButton.innerHTML = "try again";
    questionWindow.append(restartButton);

    restartButton.addEventListener("click", function () {
        questionWindow.innerHTML = "";
        restartGame();
    })

}

welcome();