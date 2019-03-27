
// Create Variables
var random = randomNumber();
var displayRandomQuote = '';
var displayRandomSource = '';


// Generate random number 0-7 for use as object index
function randomNumber() {
	randomNumber = Math.floor(Math.random() * 8);
	return randomNumber;
}
// Print to div function
function print(message) {
  var outputDiv = document.getElementById('displayDiv');
  outputDiv.innerHTML = message;
}

// Loop through quotes and sources, assign random number as the index 

displayRandomQuote = quotes[random].quote;
displayRandomSource = quotes[random].source;


// Display random quote and source
message = '<p>Quote: ' + displayRandomQuote + '</p><p>Source: ' + displayRandomSource + '</p>'
print(message);
console.log(random);



