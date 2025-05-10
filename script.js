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
const darkModeSwitch = document.getElementById("dark-mode-switch");

let i = 0;
let chosenQuotes = [];
let chosenSize = 20;


function changeFontSize(type) {
  chosenSize = type === "increment" ? chosenSize + 2 : chosenSize - 2;
  quoteText.style.fontSize = `${chosenSize}px`;
  quoteAuthor.style.fontSize = `${chosenSize - 7}px`;
  displayFont.textContent = `${chosenSize}px`;
}

increaseFont.addEventListener("click", () => {
  if (chosenSize < 54) {
    changeFontSize("increment");
  }
});

decreaseFont.addEventListener("click", () => {
  if (chosenSize > 20) {
    changeFontSize("decrement");
  }
});



//for quotes
function updateQuotes() {
  const chosenCategory = category.value;
  chosenQuotes = quotes.filter((quote) => quote.category === chosenCategory);
  displayQuote();
}

function displayQuote() {
  const selectedQuote = chosenQuotes[i];
  quoteText.style.opacity = 0;
  quoteAuthor.style.opacity = 0;

  setTimeout(() => {
    quoteText.textContent = selectedQuote.quote;
    quoteAuthor.textContent = selectedQuote.author;

    quoteText.style.opacity = 1;
    quoteAuthor.style.opacity = 1;
    document.getElementById("category-icon").style.opacity = 1;
  }, 300);
}

//to change according to category
category.addEventListener("change", updateQuotes);

nextBtn.addEventListener("click", ()=>{
  if(chosenQuotes.length >0){
    i = (i+1)% chosenQuotes.length;
    displayQuote();
  }
});

previousBtn.addEventListener("click", ()=>{
  if(chosenQuotes.length > 0 ){
    i = (i-1 + chosenQuotes.length)% chosenQuotes.length;
    displayQuote();
  }
});

randomBtn.addEventListener("click", ()=>{
  i = Math.floor(Math.random() * (chosenQuotes.length));
  displayQuote();
  }
)


//for dark mode
darkModeSwitch.addEventListener("change", ()=>{
  document.body.classList.toggle("dark-mode");

  localStorage.setItem("darkMode", darkModeSwitch.checked);

})

function initialize(){
  updateQuotes();
  if(localStorage.getItem("darkMode") === "true"){
    darkModeSwitch.checked = true;
    document.body.classList.add("dark-mode");
  }
}
initialize();
