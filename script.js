const guessSubmission = document.getElementById("submitGuess");

// function startGame(){
//     //resetting the random number
//     randomNum = Math.floor(Math.random() * (100)) + 1;

//     console.log(randomNum)
//     //resetting the message
//     document.getElementById("message").innerHTML= "";

//     //resetting the input field
//     document.getElementById("guessInput").value="";

//     //resetting the attemps
//     attempts=0;
// }

// choosing the random number
let randomNum = Math.floor(Math.random() * (100)) + 1;

console.log(randomNum);
let attempts =0;
guessSubmission.addEventListener('click',()=>{

    attempts++;
    let obtainedNum = document.getElementById("guessInput").value;

    const messageDisplayed = document.getElementById("message");
    if(obtainedNum.length == 0){
        messageDisplayed.innerHTML= "Kindly enter a number.";
        attempts--;
        return;
    }

    
    if(randomNum==obtainedNum){
        messageDisplayed.innerHTML= `Correct Guess! You took ${attempts} attempts :)`;
    }

    else{
        if(obtainedNum < randomNum) messageDisplayed.innerHTML=`Too low, try again! Attempts: ${attempts}`;
        else messageDisplayed.innerHTML=`Too high, try again! Attempts: ${attempts}`;
    }

},false)

const resetGame = document.getElementById("resetGame");
resetGame.addEventListener('click', ()=>{         // can also use startGame function here

    //resetting the random number
    randomNum = Math.floor(Math.random() * (100)) + 1;

    console.log(randomNum)
    //resetting the message
    document.getElementById("message").innerHTML= "";

    //resetting the input field
    document.getElementById("guessInput").value="";

    //resetting the attemps
    attempts=0;

},false)
