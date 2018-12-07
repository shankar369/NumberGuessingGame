/*
GAME FUNCTION:
- PLAYER MUST CHOOSE BETWEEN TWO VALUES
- PLAYER GETS A CERTAIN AMOUNT OF GUESSES
- NOTIFY PLAYER OF GUESSES REMAINING
- NOTIFY CORRECT OR NOT
- LET PLAYER CHOOSE TO PLAY AGAIN
*/

//game values
let min = getRandom(1,1000),
    max = min+10,
    actual_number = getRandom(min,max),
    guessLeft = 3;
    console.log(actual_number);

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click',startGame);


function startGame(){
    //taking the entered number
    guessNumber = parseInt(guessInput.value);

    //failure test cases
    if(isNaN(guessNumber) || guessNumber < min || guessNumber > max){
        guessInput.style.borderColor = 'red';
        setMessage(`Please Enter a number between ${min} and ${max}`,'red');
    }

    //winning test
    else if(guessNumber === actual_number){
        guessInput.disabled = true;
        setMessage(`You Won :) ${guessNumber} is correct guess...`,'green');
        playAgain();
    }

    else{
        //wrong guess
        guessLeft -=1 ;
        if(guessLeft === 0){
            setMessage(`Game Over :( The correct number was ${actual_number}`,'red');
            guessInput.disabled = true;
            playAgain();
        }
        else{
            setMessage(`Wrong guess :(  You have ${guessLeft} guesses left`,'red');
            guessInput.value = '';
            
        }
    }

}

//play again
function playAgain(){
    guessBtn.value = 'Play Again';
    guessBtn.addEventListener('mousedown',function(){
        window.location.reload();
    });
}

//random number
function getRandom(minVal,maxVal){
    return Math.floor(Math.random()*(maxVal-minVal+1)+minVal);
}

//displaying message
function setMessage(mess,col){
    message.textContent = mess;
    message.style.color = col;
    guessInput.style.borderColor = col;
}