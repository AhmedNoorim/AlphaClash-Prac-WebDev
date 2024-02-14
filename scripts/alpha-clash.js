function handleKeyboardKeyUpEvent(event) {
    const keyPressed = event.key

    // stop if pressed escape
    if (keyPressed === 'Escape') {
        gameOver()
    }

    const targetAlpha = document.getElementById('current-alpha').innerText.toLowerCase()
    console.log('Pressed:', keyPressed, 'Target:', targetAlpha)

    // check match
    if (keyPressed === targetAlpha) {
        console.log('you get a point!')

        // update score
        const currentScore = getTextElementValueById('current-score')
        setTextElementValueById('current-score', currentScore + 1)

        // new round
        removeBackColorById(targetAlpha)
        continueGame()
    }
    else {
        console.log('you lost a life!')

        // update life
        const currentLife = getTextElementValueById('current-life')
        setTextElementValueById('current-life', currentLife - 1)

        if (currentLife - 1 === 0) {
            console.log('Game Over')

            gameOver()
        }
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
    // hide all - unhide playground
    hideElement("home")
    unHideElement("play-ground")
    hideElement("final-score")

    // reset score & life
    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)

    continueGame()
}
function gameOver() {
    hideElement("play-ground")
    unHideElement("final-score")

    // update final score
    const finalScore = getTextElementValueById('current-score')
    setTextElementValueById('final-points', finalScore)

    // clear last selected alphabet
    const currentAlpha = document.getElementById('current-alpha')
    removeBackColorById(currentAlpha.innerText)
}


