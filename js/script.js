/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
1) A seperate .js file containing the array is linked in the HTML file.  Not included here to keep things clean.
***/




// Global Variables

const bodyElement = document.querySelector('body');
const outputDiv = document.getElementById('quote-box');   // specify quote container
const outputcategory = document.getElementById('category');    // define category container


//Generate and return a random number


function getRandomQuote() {
    randomNumber = Math.floor(Math.random() * 8);
    return randomNumber;
}

// Define random quote/color/category functionality 

function printQuote() {
    let random = getRandomQuote();                          // random number assinged to "random" variable
    let message = '';                                       // empty "message" variable to house house innerHTML
    let category = '';                                      // empty "category" variables created to
    let displayRandomQuote = quotes[random];                // random number used to assign index to one of the objects in the array, therefore selecting a random quote
    const shadeOne = Math.floor(Math.random() * 256);         
    const shadeTwo = Math.floor(Math.random() * 256);        //Three random RGB values generated for random background color
    const shadeThree = Math.floor(Math.random() * 256);       
    color = 'rgb(';                                   
    color += shadeOne + ',';
    color += shadeTwo + ',';                            // color rgb value created from random numbers
    color += shadeThree + ')';

    message += '<p class="quote">' + displayRandomQuote.quote + '</p>';   // define message html
    message += '<p class="source">' + displayRandomQuote.source;          // define message html
    category += '<p>Category: ' + displayRandomQuote.category + '</p>';   // define category html

    if (displayRandomQuote.citation != null && displayRandomQuote.year != null) {      //what to show if there's a citation and year
        message += '<span class="citation">' + displayRandomQuote.citation + '</span><span class="year">' + displayRandomQuote.year + '</span></p>';
    }
    if (displayRandomQuote.citation != null && !displayRandomQuote.year) {             //what to show if there's a year, but no citation
        message += '<span class="citation">' + displayRandomQuote.citation + '</p>';
    }
    if (!displayRandomQuote.citation && displayRandomQuote.year != null) {             //what to show if there's a citation, but no year
        message += '<span class="year">' + displayRandomQuote.year + '</span></p>';
    } else {
        message += '</p>';                                                             // close second p tag
    }
    outputDiv.innerHTML = message;                                                     //append message to message container
    outputcategory.innerHTML = category;                                               //append category to category container
    bodyElement.style.backgroundColor = color;                                         //set background as randomly generated color
}

//Click function to generate quote

document.getElementById('loadQuote').addEventListener("click", printQuote, true);    //click function for to call printQuote function and generate quote

//Load function, for automatic quote toggle after 20 seconds

window.addEventListener('load', function() {
    setInterval(printQuote, 20000);  // Quote, background and categoryegory automatically change after 20 seconds
}, false);
