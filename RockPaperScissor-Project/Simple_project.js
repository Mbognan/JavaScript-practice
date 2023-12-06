const score = JSON.parse(localStorage.getItem('score'))||{wins:0,lose:0,tie:0};

document.querySelector('.js-rock-button').addEventListener('click', () =>{
  Winner('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () =>{
  Winner('paper');
});
document.querySelector('.js-scissors-button').addEventListener('click', () =>{
  Winner('scissors');
});

document.body.addEventListener('keydown',(event)=>{
  if(event.key ==='r' || event.key === 'R'){
      Winner('rock');
  }else if(event.key ==='p' || event.key === 'P'){
    Winner('paper');
  }else if(event.key ==='s' || event.key === 'S'){
    Winner('scissors');
  }
});
let result = '';
function Winner(playerMove){

        
        let result = '';
     let computer =   computerMove();

     if(playerMove === 'scissors'){          
        if(computer ===  'rock'){
          result = 'You Win'
          
        }else if(computer === 'paper'){
          result = 'Tie';
          
        }else if(computer === 'scissors'){
          result = 'You Lose';
          
        }

        
        if(result ==='You Win'){
        score.wins +=1;
      }else if(result === 'You Lose'){
        score.lose +=1;
      }else if(result === 'Tie'){
        score.tie +=1;
      }

    UpdateScore();
        
        document.querySelector('.moveDetec').innerHTML = `You <img src="/image/${playerMove}-emoji.png" class="move-icon"> <img src="/image/${computer}-emoji.png" class="move-icon"> Computer`;
        document.querySelector('.Scorer').innerHTML = result;
        
      }
      else if(playerMove === 'paper'){
        let result = '';
        let computer = computerMove();

          if(computer ===  'rock'){
            result= 'You Lose'
          }else if(computer === 'paper'){
            result = 'You Win';
          }else if(computer === 'scissors'){
            result = 'Tie ';
          }


          if(result ==='You Win'){
        score.wins +=1;
      }else if(result === 'You Lose'){
        score.lose +=1;
      }else if(result === 'Tie'){
        score.tie += 1;
      }


     UpdateScore();

        document.querySelector('.moveDetec').innerHTML = `You <img src="/image/${playerMove}-emoji.png" class="move-icon"> <img src="/image/${computer}-emoji.png" class="move-icon"> Computer`;
        document.querySelector('.Scorer').innerHTML = result;
           
      }
      else if(playerMove === 'rock'){
        const randomNumber = Math.random();
      

      
    let computer = computerMove();
      if(computer ===  'rock'){
        result = 'Tie'
         }else if(computer === 'paper'){
            result = 'You Lose';
             }else if(computer === 'scissors'){
               result = 'You Win';
         }

         if(result ==='You Win'){
          score.wins +=1;
             }else if(result === 'You Lose'){
                score.lose +=1;
                   }else if(result === 'Tie'){
                       score.tie +=1;
      }

      UpdateScore();
            document.querySelector('.moveDetec').innerHTML = `You <img src="/image/${playerMove}-emoji.png" class="move-icon"> <img src="/image/${computer}-emoji.png" class="move-icon"> Computer`;
             document.querySelector('.Scorer').innerHTML = result;
        
      }
      localStorage.setItem('score', JSON.stringify(score));
          
     
}

function computerMove(){
const randomNumber = Math.random();
      let computer = '';
            if(randomNumber >= 0 && randomNumber <1/3){
                computer = 'rock';
                     }else if(randomNumber >= 1/3 && randomNumber< 2/3){
                        computer =  'paper';
                             }else if(randomNumber >= 2/3 && randomNumber < 1){
                                     computer =  'scissors';
                                      }                 
                                            return computer;
                                                     }
function UpdateScore(){
document.getElementById('win').innerHTML = score.wins;
document.getElementById('lose').innerHTML = score.lose;
document.getElementById('tie').innerHTML = score.tie;
}
function clickReset(){
  score.wins = 0;
  score.lose = 0;
  score.tie = 0;
  localStorage.removeItem('score');
  document.querySelector('.moveDetec').innerHTML = '';
  document.querySelector('.Scorer').innerHTML = '';
    UpdateScore();
}

const resetButton = document.querySelector('.js-reset-button');
if(resetButton){
  resetButton.addEventListener('click', clickReset);
}





let isAutoplay = false;

let IntervalId;

function autoplay(){
  if(!isAutoplay){
 IntervalId =  setInterval(() => {
    const playerMove = computerMove();
    Winner(playerMove);
    UpdateScore();
  }, 1000);
  isAutoplay = true;
}else{
    clearInterval(IntervalId);
    isAutoplay = false;
}
}


const autoPlay = document.querySelector('.js-auto-button');
if(autoPlay){
  autoPlay.addEventListener('click', autoplay);
}

UpdateScore();
