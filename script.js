const cardContainer = document.querySelector('#flashcard-container');
const statusBar = document.querySelector('#status-bar');
const btnPrev = statusBar.querySelector('#prev');
const btnNext = statusBar.querySelector('#next');

const flashcardContainer = document.querySelector("#flashcard-container");



// Task 1: flip word/ definition
function flipCard(event) {
   const childNodes = event.currentTarget.children;
   console.log(childNodes);

   childNodes[0].classList.toggle("hidden")
   childNodes[1].classList.toggle("hidden")
}


// Task 2: populate data
function createCard(word, definition) {
    const cardContainer = document.createElement("div")
    cardContainer.classList.add("flashcard-box")
    const wordDiv= document.createElement("div")
    wordDiv.classList.add("flashcard", "word");
    wordDiv.textContent = word;

    const definitionDiv = document.createElement("div")
    definitionDiv.classList.add("flashcard", 'definition', "hidden")
    definitionDiv.textContent = definition;

    cardContainer.appendChild(wordDiv)
    cardContainer.appendChild(definitionDiv)
    cardContainer.addEventListener("click", flipCard)

    flashcardContainer.appendChild(cardContainer)
}

function populateCards(cardContainer) {
    for (const [word, definition] of Object.entries(KOREAN)) {
        createCard(word, definition)
    
    }
    console.log(cardContainer);
}

const cards = populateCards(cardContainer);
cardArr[0].classList.remove("hidden")


const statusNoWords = statusBar.querySelector('span');


// Task 3: mouse events - navigation
const statusCurrentIndex = statusBar.querySelector('strong');

// on start: show first word
let currentIndex = 0;


function setIndex(index) {
    // check if valid index

    // hide current card


    // show card at index


    // disable/ enable navigating buttons

}

function prevCard() {
    
}

function nextCard() {
    
}



// Task 4: keyboard events - navigation
function onKeyDown(event) {
    
}
