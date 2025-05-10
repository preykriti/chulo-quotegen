import { quotes } from "./data.js";

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

function changeFontSize(type) {
  chosenSize = type === "increment" ? chosenSize + 2 : chosenSize - 2;
  quoteText.style.fontSize = `${chosenSize}px`;
  quoteAuthor.style.fontSize = `${chosenSize - 5}px`;
  displayFont.textContent = `${chosenSize}px`;
}

increaseFont.addEventListener("click", () => {
  if (chosenSize < 52) {
    changeFontSize("increment");
  }
});

decreaseFont.addEventListener("click", () => {
  if (chosenSize > 16) {
    changeFontSize("decrement");
  }
});

function updateQuotes() {
  const chosenCategory = category.value;
  console.log(chosenCategory);

  chosenQuotes = quotes.filter((quote) => quote.category === chosenCategory);
  displayQuote();
}

function displayQuote() {
  const selectedQuote = chosenQuotes[i];
  quoteText.textContent = selectedQuote.quote;
  quoteAuthor.textContent = selectedQuote.author;
}

category.addEventListener("change", updateQuotes);
updateQuotes();
