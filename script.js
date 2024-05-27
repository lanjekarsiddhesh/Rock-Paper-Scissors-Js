let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');

const showWinner = (user,userChoice,ComputerChoice) => {
    if(user){
        let result = document.getElementById("result")
        result.innerText=`You win! your ${userChoice} beats ${ComputerChoice}`;
        result.style.backgroundColor = "green"
        result.style.color = "#fff"
        userScore++
    }else{
        let result = document.getElementById("result")
        result.innerText=`Computer win! ${ComputerChoice} beats your ${userChoice}`;
        result.style.backgroundColor = "red"
        result.style.color = "#fff"
        compScore++
    }
}

const ComputerChoice = () =>{
    let options = ['rock','paper','scissor']
    let random = Math.floor(Math.random()*3)
    return options[random];
}


const playGame = (userChoice) => {
    let Computer = ComputerChoice()

    if(userChoice === Computer){
        let result= document.getElementById("result")
        result.innerText="Draw, Play again.";
        result.style.backgroundColor = "yellowgreen"
        result.style.color = "black"
        
    }else{
        let winUser = false;
        if(userChoice === 'rock'){
            winUser = Computer === 'paper' ? false:true;
        }else if(userChoice === 'scissor'){
            winUser = Computer === 'rock' ? false:true;
        }else{
            winUser = Computer === 'scissor' ? false:true;
        }
        // winUser === true ? userScore++:compScore++;
        showWinner(winUser,userChoice,Computer);
        
        document.getElementById("userScore").textContent = userScore
        document.getElementById("compScore").textContent = compScore
    }
} 

choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})