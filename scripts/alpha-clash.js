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

