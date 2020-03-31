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

let quoteList = [
  {quote: "You are the shuckiest shuck faced shuck in the world!",
  source: "James Dashner",
  citation: "The Maze Runner 1",
  year: 2009
  },
  {quote: "Insane means fewer cameras!",
  source: "Ally Carter",
  citation: "Only the Good Spy Young",
  year: 2010
  },
  {quote: "Tried to escape, to block out the fact that I was being eaten alive by arachnids. For some reason the only thing I could replace it with was the image of being eaten by tiny clowns.",
  source: "David Wong",
  citation: "This Book is Full of Spiders",
  year: 2012
  },
  {quote: "I said I'm sorry, sir, but we don't speak Swedish. Well, of course you don't. Neither do I. Who the hell speaks Swedish?",
  source: "John Green Fank",
  citation: "The Fault in Our Stars",
  year: 2012
  },
  {quote: "Entropy is just a fancy way of saying: things fall apart.",
  source: "Dan Brown",
  citation: "Origin",
  year: 2017
  },
  {quote: "Sometimes we know people who are too wonderful for words. I am not one of them. Or you, for that matter, as you well know.",
  source: "Michael Hogan",
  citation: "Winter Solstice",
  year: 2011
  },
  {quote:"The greatest discovery of all time is that a person can change his future by merely changing his attitude.",
  source: "Oprah Winfrey"
  }
]

// console.log(` Student info print test. her is the Quote "${quoteList[0].quote}"  Here is the book its from ${quoteList[0].citation} Here is the source name and the year ${quoteList[0].source} ${quoteList[0].year}`)
/***
 * `getRandomQuote` function
***/
let chosenQuote;
function getRandomQuote(quoteArray) {
  //create a variable that generates a random number between 0 and the last index of the quote array
  //first use Math.random to get a number within the length of the array of quotes
  var numberPicked = Math.floor(Math.random() * (quoteArray.length + 1) );
  //Use the random number variable and bracket notation to grab a random object from the `quotes` array, and store it in a variable
     //test the numberPicked to make sure its working properly using console.log - passed
     //console.log("Number Picked: " + numberPicked)
  chosenQuote = quoteArray[numberPicked];
      //test chosenQuote Variable using console.log - passed
      //console.log("Chosen Quote Object is: " + chosenQuote)
  // Return the variable storing the random quote object
  return chosenQuote;
};
//getRandomQuote(quoteList);
  //test function to make sure it produces the random object using console.log  - passed
  // console.log(getRandomQuote(quoteList) );

// /***
//  * `printQuote` function
// ***/

let quoteString = '';
  function printQuote(quotesArr) {
    // 1. Create a variable that calls the getRandomQuote() 
    // function
    let callRandom = getRandomQuote(quotesArr);
    // 2. Create a variable that initiates your HTML string with 
    // the first two <p></p> elements, their classNames, 
    // and the quote and source properties, but leave off 
    // the second closing `</p>` tag for now
    quoteString += `<p class="quote"> ${callRandom.quote} </p>`;
    console.log
       // console.log(quoteString) Tested Quote String with console.log - passed;
    quoteString += `<p class="source"> ${callRandom.source}`;
       // console.log(quoteString) Tested Quote String with console.log - passed;
    // 3. Use an if statement to check if the citation property  exists, and if it does, concatenate a <span></span> element, appropriate className, and citation property  to the HTML string
      if (callRandom.citation) {
        quoteString +=  `<span class="citation"> ${callRandom.citation} </span>`;
      }
    // 4. Use an if statement to check of the year property exists, and if it does, concatenate a <span></span> element, appropriate className, and year property to the HTML 
    //string
    if (callRandom.year) {
      quoteString +=  `<span class = "year"> ${callRandom.year} </span>`;
    }
          //test to see if quoteString works with missig elements using console.log - passed;
        //console.log(quoteString); 
  
    // 5. After the two if statements, concatenate the closing </p>  tag to the HTML string
    quoteString += '</p>';
    console.log("Current: " + quoteString);
  
    // 6. set the innerHTML of the quote-box div to equal the complete HTML string
    document.getElementById('quote-box').innerHTML = quoteString; 
    return quoteString;
    
  }
  printQuote(quoteList);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);