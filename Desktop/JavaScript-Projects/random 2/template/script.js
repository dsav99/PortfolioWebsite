let apiQuotes = [];

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
// const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

//Show New Quote
function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
  // authorText.textcontent = quote.author;
  quoteText.textContent = quote.text;
  //authorText.textcontent = quote.author;
}

//GET API
async function getQuotes(){
  const url = 'https://type.fit/api/quotes';
  try{
    const response = await fetch(url);
    apiQuotes =await response.json();
    newQuote();

  } catch {

  }
}

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textcontent}`;
  window.open(twitterUrl,'_blank');
}

//EVENT LISTENER

newQuoteBtn.addEventListener('click',newQuote());
twitterBtn.addEventListener('click',tweetQuote());

 getQuotes();
