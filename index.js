function play(playerchoice){
    const choices=['stone','paper','scissors'];
    const computerchoice = choices[Math.floor(Math.random()*3)];

    const movesElements = document.getElementById("moves");
    movesElements.textContent=` You : ${playerchoice} | Computer: ${computerchoice}`;

    const resultElements = document.getElementById('result');

    if (playerchoice === computerchoice){
        resultElements.textContent = "It's a draw! 🤝";
        resultElements.style.color = "#00eaff";  
        resultElements.style.textShadow = "0 0 20px #00eaff, 0 0 35px #00f7ff";
    } else if(
        (playerchoice === 'stone' && computerchoice === 'scissors')|| 
        (playerchoice === 'paper' && computerchoice === 'stone') ||
        (playerchoice === 'scissors' && computerchoice === 'paper') )
    {
        resultElements.textContent = "You win! 🎉";
        resultElements.style.color = "#39ff14";  
        resultElements.style.textShadow = "0 0 25px #39ff14, 0 0 45px #00ff62";

    }
    else{
        resultElements.textContent = "You lose! 😞";
        resultElements.style.color = "#ff005d";  
        resultElements.style.textShadow = "0 0 25px #ff005d, 0 0 45px #ff2a6a";
    }

}