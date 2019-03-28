/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
1) A seperate .js file containing the array is linked in the HTML file.  Not included here to keep things clean.
***/


// All Variables

// Variables related to changing background color
var color;
var bodyElement = document.querySelector('body');
var shadeOne;
var shadeTwo;
var shadeThree;

// Category
var outputCat;
var cat;

// Quote
var outputDiv;
var message;

//Random Quote object
var displayRandomQuote;


/***
1) Generate and return a random number
***/

function getRandomQuote() {
    randomNumber = Math.floor(Math.random() * 8);
    return randomNumber;
}

/***
1) random number assinged to "random" variable
2) empty "message" and empty "cat" variables created to house innerHTML
3) random number used to assign index to one of the objects in the array, therefore selecting a random quote
4) Three random RGB values generated for random background color
4) variable "outputDiv" select parent Div of the innerHTML
5) message variable built out with, by default, Quotes and Sources - as these are contained in every object. P tag left open in case of further content
6) IF statements check if there are citations and/or years, and innerHTML is built out accordingly.  Finally, if no further content is available, p tag is closed.
7) Category, Quote and new background color generated
***/






function printQuote(message) {
    random = getRandomQuote();
    message = '';
    cat = '';
    displayRandomQuote = quotes[random];
    outputDiv = document.getElementById('quote-box');
    outputCat = document.getElementById('category');

    shadeOne = Math.floor(Math.random() * 256);
    shadeTwo = Math.floor(Math.random() * 256);
    shadeThree = Math.floor(Math.random() * 256);
    color = 'rgb(';
    color += shadeOne + ',';
    color += shadeTwo + ',';
    color += shadeThree + ')';

    message += '<p class="quote">' + displayRandomQuote.quote + '</p>';
    message += '<p class="source">' + displayRandomQuote.source;
    cat += '<p>Category: ' + displayRandomQuote.category + '</p>';

    if (displayRandomQuote.citation != null && displayRandomQuote.year != null) {
        message += '<span class="citation">' + displayRandomQuote.citation + '</span><span class="year">' + displayRandomQuote.year + '</span></p>';
    }
    if (displayRandomQuote.citation != null && !displayRandomQuote.year) {
        message += '<span class="citation">' + displayRandomQuote.citation + '</p>';
    }
    if (!displayRandomQuote.citation && displayRandomQuote.year != null) {
        message += '<span class="year">' + displayRandomQuote.year + '</span></p>';
    } else {
        message += '</p>';
    }

    outputDiv.innerHTML = message;
    outputCat.innerHTML = cat;
    bodyElement.style.backgroundColor = color;
}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, true);

// Quote, background and category automatically change after 20 seconds

window.addEventListener('load', function() {
    setInterval(printQuote, 20000);
}, false);
