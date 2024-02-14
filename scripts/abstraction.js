function hideElement(elementID) {
    const element = document.getElementById(elementID)
    element.classList.add('hidden')
}

function unHideElement(elementID) {
    const element = document.getElementById(elementID)
    element.classList.remove('hidden')
}

function getRandomAlphabet() {
    const alphaString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphaString.split('')

    const randomNumber = Math.floor(Math.random() * 25)

    const alphabet = alphabets[randomNumber]

    return alphabet
}

function setBackColorById(elementID) {
    const element = document.getElementById(elementID)
    element.classList.add('bg-orange-500')
}
function removeBackColorById(elementID) {
    const element = document.getElementById(elementID)
    element.classList.remove('bg-orange-500')
}