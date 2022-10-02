const cardContainer = document.querySelector('#flashcard-container');
const statusBar = document.querySelector('#status-bar');
const btnPrev = statusBar.querySelector('#prev');
const btnNext = statusBar.querySelector('#next');

const flashcardContainer = document.querySelector("#flashcard-container");

const cardArr = []
// Task 1: flip word/ definition
function flipCard(event) {
    let childNodes = event.currentTarget.childNodes;
    let word = childNodes[0];
    let definition = childNodes[1];

    console.log(childNodes);
    word.classList.toggle("hidden")
    definition.classList.toggle("hidden")

}


// Task 2: populate data
function createCard(word, definition) {
    const cardBox = document.createElement("div")
    cardBox.classList.add("flashcard-box", "hidden")

    const wordDiv= document.createElement("div")
    wordDiv.classList.add("flashcard", "word");
    wordDiv.textContent = word;

    const definitionDiv = document.createElement("div")
    definitionDiv.classList.add("flashcard", 'definition', "hidden")
    definitionDiv.textContent = definition;

    cardBox.appendChild(wordDiv)
    cardBox.appendChild(definitionDiv)
    cardBox.addEventListener("click", flipCard)
    cardArr.push(cardBox)
    flashcardContainer.appendChild(cardBox)
}

function populateCards(cardContainer) {
    for (const [word, definition] of Object.entries(KOREAN)) {
        createCard(word, definition)
    
    }
}

const cards = populateCards(cardContainer);
cardArr[0].classList.add('selected')
const statusNoWords = statusBar.querySelector('span');


// Task 3: mouse events - navigation
const statusCurrentIndex = statusBar.querySelector('strong');

// on start: show first word
let currentIndex = 0;


function setIndex(index) {
    // check if valid index
    if (index >= 0 && index < cardArr.length) {
        currentIndex = index;

        document.querySelector(".selected").classList.remove("selected")
    }
    // hide current card
    cardArr[currentIndex].classList.add("selected")

    // show card at index
    statusCurrentIndex.textContent = currentIndex + 1

    // disable/ enable navigating buttons
    btnPrev.disabled = index <= 0
    btnNext.disabled = index >= cardArr.length
}

function prevCard() {
    setIndex(currentIndex - 1)
}

function nextCard() {
    setIndex(currentIndex + 1)
}


btnPrev.addEventListener("click", prevCard)
btnNext.addEventListener("click", nextCard)

// Task 4: keyboard events - navigation
function onKeyDown(event) {
    if (event.keyCode === 37) prevCard()
    else if (event.keyCode === 39) nextCard()
}


document.addEventListener("keydown", onKeyDown);
console.log(cardArr);