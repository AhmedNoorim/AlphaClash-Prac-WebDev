function handleKeyboardKeyUpEvent(event) {
    const keyPressed = event.key
    const targetAlpha = document.getElementById('current-alpha').innerText.toLowerCase()
    console.log('Pressed:', keyPressed, 'Target:', targetAlpha)

    // check match
    if (keyPressed === targetAlpha) {
        console.log('you get a point!')

        // update score
        const currentScoreText = document.getElementById('current-score')
        const currentScore = parseInt(currentScoreText.innerText)
        currentScoreText.innerText = currentScore + 1

        // new round
        removeBackColorById(targetAlpha)
        continueGame()
    }
    else {
        console.log('you lost a life!')

        // update life
        const currentLifeText = document.getElementById('current-life')
        const currentLife = parseInt(currentLifeText.innerText)
        currentLifeText.innerText = currentLife - 1
    }

}
// capture keypress
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame() {
    const alphabet = getRandomAlphabet()
    console.log("Random Alphabet:", alphabet)

    const displayAlpha = document.getElementById('current-alpha')
    displayAlpha.innerText = alphabet

    setBackColorById(alphabet)
}

//main function
function play() {
    hideElement("home")
    unHideElement("play-ground")
    continueGame()
}

