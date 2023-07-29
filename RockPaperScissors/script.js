
const totalScore={computerScore:0,playerScore:0};

function getComputerChoice() {
  const computerChoice=["Rock","Paper","Scissors"]
  const randomNumber=Math.floor(Math.random()*3);
  return computerChoice[randomNumber];
}



function getResult(playerChoice, computerChoice) {
  
  let score;
  if(playerChoice==computerChoice){
    score=0;
  // Otherwise human loses (aka set score to -1)
  }
  // All situations where human wins, set `score` to 1
else if(playerChoice=="Rock"&&computerChoice=="Scissors"){
  score=1;
}else if(playerChoice=="Paper"&&computerChoice=="Rock"){
  score=1;
}else if(playerChoice=="Scissors"&&computerChoice=="Paper"){
  score=1;
}else{
  score=-1;
}
  // make sure to use else ifs here
  // return score
  return score;
}
function showResult(score, playerChoice, computerChoice,totalScore) {
 
  const resultDiv=document.getElementById('result');
  const handsDiv=document.getElementById('hands');
  const playerScoreId=document.getElementById('player-score');
  if(score==-1){
    resultDiv.innerText='You lose!'
  }else if(score==0){
    resultDiv.innerText="It's a tie!"
  }else{
    resultDiv.innerText="You Won!"
  }
  playerScoreId.innerText=`Your Score:${totalScore['playerScore']}`
  handsDiv.innerText=`👱‍♂️${playerChoice} vs 🤖${computerChoice}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log({playerChoice})
  const computerChoice=getComputerChoice();
  console.log({computerChoice})
  const score=getResult(playerChoice,computerChoice)
  totalScore['playerScore']+=score;
  console.log({score})
  console.log(totalScore)
  showResult(score,playerChoice,computerChoice,totalScore)
}



function playGame() {

   const rpsButtons=document.querySelectorAll('.rpsButton')
  rpsButtons[0].onclick=()=>console.log(rpsButtons[0].value)
  
   rpsButtons.forEach(rpsButton=>{
     rpsButton.onclick=()=>onClickRPS(rpsButton.value)
   })
 

  const endGameButton=document.getElementById('endGameButton');
  endGameButton.onclick=()=>endGame(totalScore);
  
}

function endGame(totalScore) {
  totalScore['playerScore']=0;
  totalScore['ComputerScore']=0;
   const resultDiv=document.getElementById('result');
  const handsDiv=document.getElementById('hands');
  const playerScoreId=document.getElementById('player-score');
  resultDiv.innerText=' '
  handsDiv.innerText=' '
  playerScoreId.innerText=' '
}

playGame()
