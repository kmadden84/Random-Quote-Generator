/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
1) A seperate .js file containing the array is linked in the HTML file.  Not included here to keep things clean.
***/


/***
1) Generate and return a random number (0-7)
***/

function getRandomQuote() {
    randomNumber = Math.floor(Math.random() * 8);
    return randomNumber;
}

/***

1) random number assinged to "random" variable
2) empty "message" variable created to house innerHTML
3) random number used to assign index to one of the objects in the array, therefore selecting a random quote
4) variable "outputDiv" select parent Div of the innerHTML
5) message variable built out with, by default, Quotes and Sources - as these are contained in every object. P tag left open in case of further content.
6) IF statements check if there are citations and/or years, and innerHTML is built out accordingly.  Finally, if no further content is available, p tag is closed.

***/

function printQuote(message) {
    random = getRandomQuote();
    var message = '';
    displayRandomQuote = quotes[random];
    var outputDiv = document.getElementById('quote-box');

    message += '<p class="quote">' + displayRandomQuote.quote + '</p>';
    message += '<p class="source">' + displayRandomQuote.source;

    if (displayRandomQuote.citation != null && displayRandomQuote.year != null) {
        message += '<span class="citation">' + displayRandomQuote.citation + '</span><span class="year">' + displayRandomQuote.year + '</span></p>';
        //outputDiv.innerHTML = message;
    }
    if (displayRandomQuote.citation != null && !displayRandomQuote.year) {
        message += '<span class="citation">' + displayRandomQuote.citation + '</p>';
        //outputDiv.innerHTML = message;
    }
    if (!displayRandomQuote.citation && displayRandomQuote.year != null) {
        message += '<span class="year">' + displayRandomQuote.year + '</span></p>';
        //outputDiv.innerHTML = message;
    } 
    else {
        message += '</p>';
    }
    outputDiv.innerHTML = message;
}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, true);


// Remember to delete the comments that came with this file, and replace them with your own code comments.