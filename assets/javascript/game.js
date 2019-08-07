//variables for correct/incorrect answers
let correctAnswers = 0;
let incorrectAnswers = 0;

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
        question: "the answer is 1",
        option1: "5",
        option2: "3",
        option3: "6",
        option4: "1",
        answer: "1",
    },

}

//setting up an array loop to go through the options
const optionLoop = ["option1", "option2", "option3", "option4"];
const questionLoop = Object.keys(questions);
console.log(questionLoop);

//setting up basic display options
const gameWindow = document.getElementById("game-window");
const timeLeft = document.createElement("div");
timeLeft.innerHTML = "time left"; //we'll add the timer here eventually
const questionWindow = document.createElement("div");
gameWindow.append(timeLeft);
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

        optionEl.addEventListener("click", function () {
            const userChoice = frameChoice;
            console.log(userChoice);
            //checking if user picked correct answer
            if (userChoice === frameAnswer) {
                correctAnswers++;
                console.log("you guessed correctly");
                console.log("correct answers:", correctAnswers);
            }
            else {
                incorrectAnswers++;
                console.log("you guessed incorrectly");
                console.log("incorrect answers:", incorrectAnswers);
            }

        })
    })

}




const button = document.createElement("button");
button.innerHTML = "next question";

button.addEventListener("click", function () {
    nextFrame();
})

gameWindow.append(button);


let currentQuestion = questionLoop[0];
let currentQuestionIndex = questionLoop.indexOf(currentQuestion);

console.log("currentQuestion",currentQuestion);
console.log("currentQuestionIndex",currentQuestionIndex);
console.log("currentQuestion+1",questionLoop[currentQuestionIndex + 1]);

frameMaker(questions[currentQuestion]);


function nextFrame () {
    questionWindow.innerHTML = "";
    frameMaker(questionLoop[currentQuestionIndex + 1]);
}

