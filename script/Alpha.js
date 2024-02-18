// function play(){
//     // step:1 hide the home screen. To the screen add the class hidden to
//     // the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)
    

//     // show the playground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }



function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    // console.log('button pressed');
    // console.log(playerPressed);
    
    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed,expectedAlphabet);

    if(playerPressed === expectedAlphabet){
        console.log('Right');
        // console.log('you have pressed correctly',expectedAlphabet);
        //update score
        //1. get the current score

        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        //2. increase the score by 1
        const newScore = currentScore+1;

        //3. show the updated score
        currentScoreElement.innerText = newScore;


        //start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        // console.log('Wrong');
        //step-1: get the current life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);


        //step-2:reduce the life count
        const newLife = currentLife-1;
        console.log(newLife,currentLife);

        //step-3:display the updated life count
        currentAlphabetElement.innerText = newLife;
        
    }
}
document.addEventListener('keyup',handleKeyboardButtonPress);

function continueGame(){
    // step-1: Generate a random alphabet
    const alphabet = getRandomAlphabet();
    // console.log('your alphabet',alphabet)

    //set randomly generated alphabet to the screen (show it)
    // console.log('your random alphabet ',alphabet);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color 
    setBackgroundById(alphabet);

}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}