// setting the questions 
const questions = {
    question1: {
        question: "what is my name",
        option1: "jackson",
        option2: "alan",
        option3: "bill",
        option4: "mark",
        answer: "jackson",
    }
}

//setting up a loop to go through the options
const optionLoop = ["option1", "option2", "option3", "option4"];

//setting up basic display options
const gameWindow = document.getElementById("game-window");
const timeLeft = document.createElement("div");
timeLeft.innerHTML = "time left"; //we'll add the timer here eventually
const questionWindow = document.createElement("div");
gameWindow.append(timeLeft);
gameWindow.append(questionWindow);

//function which sets up the question frame, and includes the logic for picking answers
function frameMaker(questionNumber) {
    const frameQuestion = document.createElement("h3");
    frameQuestion.innerHTML = questionNumber.question
    questionWindow.append(frameQuestion);
    optionLoop.forEach(function (node) {
        const frameOption = document.createElement("p");
        frameOption.classList.add("option");
        frameOption.setAttribute("option-number", optionLoop.indexOf(node));
        frameOption.innerHTML = questionNumber[node];
        questionWindow.append(frameOption);
    })
    document.querySelectorAll(".option").forEach(function(optionEl){
        optionEl.addEventListener("click", {function() {
            //stuff here
        }})
    })
}

frameMaker(questions.question1);