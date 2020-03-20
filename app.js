// verbals
const overLay = document.querySelector('#overlay');
const buttonStart = document.querySelector('a');
let movieTitles = [['THE LION KING'],['REQUIEM FOR A DREAM'],['THE MISSING PICTURE']];
let lives = 0;
let guessedLetters = 0;

let winLose = (result) =>{
    overLay.style.display = 'block';
    const playAgain = document.createElement('h2');
    const buttonRestart = document.createElement('button');
    buttonRestart.className = 'btn__reset';
    buttonRestart.id = 'restartButton';
    buttonRestart.type = 'submit';
    overLay.appendChild(buttonRestart);
    overLay.removeChild(buttonStart);
    buttonRestart.style.color = 'black';
    
   

    if(result === lives){        
        
        playAgain.textContent = 'GAME OVER';        
        
    }
    if(result === guessedLetters){        
        
        playAgain.textContent = 'YOU WIN';

    }
    overLay.insertBefore(playAgain,overLay.childNodes[2]);
    document.querySelector('button').textContent = 'Pay Again';
    document.querySelector('#restartButton').addEventListener('click',()=>{
        window.location.reload();
    });
    
}



//start The game
buttonStart.addEventListener('click', () =>{
    overLay.style.display = 'none';
});


//letters of array
let getRandomPhraseAsArray = () =>{
   let randomNum = Math.floor(Math.random() * 3);
   let wordArr =  movieTitles[randomNum];
   return wordArr[0].split('');

};

const getTitle = getRandomPhraseAsArray();
console.log(getTitle);


// plaice the move on the screen
for(let i=0 ; i<getTitle.length ; i++){
    const createBlock = document.createElement('li');
    const targetUl = document.querySelector('ul');
    createBlock.textContent = getTitle[i];
    createBlock.className = 'letter';
    targetUl.appendChild(createBlock);
    createBlock.style.fontSize = '30px';
    if(getTitle[i]===' '){
        guessedLetters++;
        createBlock.style.backgroundColor = 'white';
        console.log(guessedLetters);
 }
}


// checking the guess if is right
const checkLetter = (letter) =>{
    for(let i=0 ; i<getTitle.length ; i++){
    if(letter.toUpperCase() === getTitle[i]){
        
            
        return true;
    }
}      
         const lostHeart = document.querySelectorAll('img');
        lostHeart[lives].src = 'images/lostHeart.png';
        lives++;
              if(lives===5){
                  return winLose(lives);
              }
        return false;
}

// keyboard click event
const pressTheLetter = document.querySelector('#qwerty');
pressTheLetter.addEventListener('click', (e) =>{

    
    if (e.target.tagName === 'BUTTON'){
        if(checkLetter(e.target.textContent)){
            e.target.style.backgroundColor = '#9cfa7f';
            let gesRight = document.querySelectorAll('li');
            for(let i=0 ; i<getTitle.length ; i++){
                if(getTitle[i]=== e.target.textContent.toUpperCase()){
                    let rightLetter = document.querySelectorAll('li');
                    rightLetter[i].style.color='white';
                    rightLetter[i].style.backgroundColor='black';
                    guessedLetters++;
                    console.log(guessedLetters);
                    if(guessedLetters === getTitle.length){
                        winLose(guessedLetters);
                    }
                }
            }
        }
        else{
            e.target.style.backgroundColor= '#ff8888';            
        }
        
    }
   
});

