import {quotes} from "./data.js"

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const previousBtn = document.getElementById("previous-btn");
const randomBtn = document.getElementById("random-btn");
const nextBtn = document.getElementById("next-btn");
const category = document.getElementById("category");
const increaseFont = document.getElementById("increase-font");
const decreaseFont = document.getElementById("decrease-font");
const displayFont = document.getElementById("font-size-display");

let i = 0;
let chosenQuotes = [];
let chosenSize = 16;

increaseFont.addEventListener("click", ()=>{
  if(chosenSize <52){
    chosenSize = chosenSize + 2;
    quoteText.style.fontSize = `${chosenSize}px`;
    quoteAuthor.style.fontSize = `${chosenSize-5}px`;
    displayFont.textContent = `${chosenSize}px`;
  }
});

decreaseFont.addEventListener("click", ()=>{
  if (chosenSize > 16) {
    chosenSize = chosenSize - 2;
    quoteText.style.fontSize = `${chosenSize}px`;
    quoteAuthor.style.fontSize = `${chosenSize - 5}px`;
    displayFont.textContent = `${chosenSize}px`;
  }
})

function updateQuotes(){
    const chosenCategory = category.value;
    console.log(chosenCategory);

    chosenQuotes  = quotes.filter(quote => (quote.category === chosenCategory));
    displayQuote();
}
 

function displayQuote(){
    
    const selectedQuote = chosenQuotes[i];
    quoteText.textContent = selectedQuote.quote;
    quoteAuthor.textContent = selectedQuote.author;
}

category.addEventListener("change", updateQuotes);
updateQuotes();