let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const user_score = document.getElementById("user-score")
const comp_score = document.getElementById("comp-score")
const winner = document.getElementById("winner")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const decimlNum=Math.random () * 3
    console.log(decimlNum,"decimlNum index");
    const randIdx = Math.floor(decimlNum);
    console.log(randIdx,"rendam index")
    return options[randIdx];
}

const drawGame = () => {
    alert("game draw!]");
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);
 
    if(userChoice === compChoice) {
        drawGame();
    }else {
    
        if(userChoice === "rock" ) {
  
        if(compChoice === "paper"){
            alert(`computer you win! }`)
            comp_score.innerHTML=compScore++

        }else{
            alert(`congratulation you win! `);
            user_score.innerHTML=userScore++
        }
           
        }else if(userChoice === "paper") {
            // compChoice === "scissors" ?  alert(`computer you win! ${compScore+1}`) :  alert(`congratulation you win! ${userScore+1}`);
            if(compChoice === "scissors") {
                alert(`Computer win`)
                comp_score.innerHTML=compScore++
            }else{
                alert(`congratulation you win! `);
                user_score.innerHTML=userScore++
            }
        }else if(userChoice === "scissors") {
            // compChoice === "rock" ?  alert(`computer you win! ${compScore+1}`) :  alert(`congratulation you win! ${userScore+1}`);
            if(compChoice === "rock") {
                alert(`computer win`)
                comp_score.innerHTML=compScore++
            }else{
                alert(`congratulation you win! `);
                user_score.innerHTML=userScore++
            }
        }
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        if(userScore === 10 || compScore === 10) {
            if(user_score === 5) {
                console.log("match ended you won")
            }
            return "";
        }
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})