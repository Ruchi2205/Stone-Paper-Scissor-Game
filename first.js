let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const DrawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw.Play Again.";
    msg.style.backgroundColor="black";
}
const showWinner=(userWin,userchoice,compChoice)=>{
    if (userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win!");
        msg.innerText=`You win!Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText=`You lost. ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }

}
const playgame=(userchoice)=>{
console.log("user choice",userchoice);
const compChoice=genComputerChoice();
console.log("comp choice=",compChoice);

if(userchoice===compChoice){
    DrawGame();
}
else{
    let userWin=true;
    if(userchoice==="rock"){
        userWin=compChoice==="paper"?false:true;
    }
    else if(userchoice==="paper"){
        userWin=compChoice==="scissors"?false:true;
    }
    else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userchoice,compChoice);
}
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);

        
    })
})












































