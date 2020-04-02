/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
  {quote: "You are the shuckiest shuck faced shuck in the world!",
  source: "James Dashner",
  citation: "The Maze Runner 1",
  year: 2009,
  genre: "Adventure"
  },
  {quote: "Insane means fewer cameras!",
  source: "Ally Carter",
  citation: "Only the Good Spy Young",
  year: 2010
  },
  {quote: "Tried to escape, to block out the fact that I was being eaten alive by arachnids. For some reason the only thing I could replace it with was the image of being eaten by tiny clowns.",
  source: "David Wong",
  citation: "This Book is Full of Spiders",
  year: 2012,
  genre: "Horror"
  },
  {quote: "I said I'm sorry, sir, but we don't speak Swedish. Well, of course you don't. Neither do I. Who the hell speaks Swedish?",
  source: "John Green Fank",
  citation: "The Fault in Our Stars",
  year: 2012
  },
  {quote: "Entropy is just a fancy way of saying: things fall apart.",
  source: "Dan Brown",
  citation: "Origin",
  year: 2017,
  genre: "Suspense"
  },
  {quote: "Sometimes we know people who are too wonderful for words. I am not one of them. Or you, for that matter, as you well know.",
  source: "Michael Hogan",
  citation: "Winter Solstice",
  year: 2011
  },
  {quote:"The greatest discovery of all time is that a person can change his future by merely changing his attitude.",
  source: "Oprah Winfrey"
  }
];
//used console.log below to check to make sure I can pull each property from each object correctly
// console.log(` Student info print test. her is the Quote "${quotes[0].quote}"  Here is the book its from ${quotes[0].citation} Here is the source name and the year ${quotes[0].source} ${quotes[0].year}`)
/***
 * `getRandomQuote` function
***/
let chosenQuote;
function getRandomQuote(quoteArray) {
  //create a variable that generates a random number between 0 and the last index of the quote array
  //first use Math.random to get a number within the length of the array of quotes
  var numberPicked = Math.floor(Math.random() * quoteArray.length);
     //test the numberPicked to make sure its working properly using console.log - passed
     //console.log("Number Picked: " + numberPicked)
  chosenQuote = quoteArray[numberPicked];
      //test chosenQuote Variable using console.log - passed
      //console.log("Chosen Quote Object is: " + chosenQuote)
  // Return the variable storing the random quote object
  return chosenQuote;
};
getRandomQuote(quotes);
  // test function to make sure it produces the random object using console.log  - passed
  // console.log(getRandomQuote(quotes) );

// /***
//  * `printQuote` function
// ***/


function printQuote() {
  //Created a variable calling getRandomQuote() function on input array
  let callRandom = getRandomQuote(quotes);
  // Created variable to begin my  HTML quote string with "quote" class for callRandom.quote
  let quoteString = `<p class="quote"> ${callRandom.quote}</p>`;
     // console.log(quoteString) Tested Quote String with console.log - passed;
  quoteString += `<p class="source"> ${callRandom.source}`;
     // console.log(quoteString) Tested Quote String with console.log - passed;
  // Used if statement to see if 'citation' property is present - if true add 'callRandom.citation' to quoteString  with a class of 'span'     
  if (callRandom.citation) {
    quoteString +=  `<span class="citation"> ${callRandom.citation} </span>`;
  }
  // Used if statement to see if 'year' property is present - if true add 'callRandom.year' to quoteString  with a class of 'span' 
  if (callRandom.year) {
    quoteString +=  `<span class = "year"> ${callRandom.year} </span>`;
  }
      //test to see if quoteString works with missig elements using console.log - passed;
        //console.log(quoteString); 

    //EXTRA CREDIT #1  - added a Genre to the quote string
  if (callRandom.genre) {
    quoteString +=  `<span class ="genre"> ${callRandom.genre} </span>`;
    }
      //test to see if quoteString works with missig elements using console.log - passed;
        // console.log(quoteString); 
  
  //  concatenate the closing </p>  tag to end of string
  quoteString += '</p>';
    //used console.log to confirm quoteString is assembling correctly - passed
    //console.log("Current: " + quoteString);
  // set the innerHTML of the quote-box div to equal the complete HTML string
  document.getElementById('quote-box').innerHTML = quoteString; 
  return quoteString;
}
  // printQuote();
  // console.log(printQuote(quotes)); -  tested printQuote Function using console.log - passsed





/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

