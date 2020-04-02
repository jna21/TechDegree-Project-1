//EXTRA CREDIT #1: was added onto the printQuote function int he script.js file

// EXTRA CREDIT #2: added function to change background color on click of button
function changeBkgdColor () {
  //watched youTube video to learn how to do change a background color randomly: https://youtu.be/xF-xR22oEbY
  //used Math.floor(Math.random) from a range of 0 - 256 to generage each of the colors for RGB color set up
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  //created a variable string for the new RGB color for the body color
  let newBkgdColor = "rgb(" + x + "," + y + "," + z + ")" 
  //applied the new color to the specific CSS Id element for the body background color;
  document.body.style.backgroundColor = newBkgdColor;
  //tested using console.log to make sure changeBkgdcolor creates random RGB colors - passed.
  // console.log(newBkgdColor);
}
document.getElementById('load-quote').addEventListener("click", changeBkgdColor, false);
//adding an event listenter to change the color of the background on the page on with new changeBackground function when button clicked

//EXTRA CREDIT #3: added a timing function to make the quote automatically refresh every 20 seconds(20,000 miliseconds) using setInterval() calling on the printQuote function
//Also added the changeBkgdColor function to this function so that the background color will change with the quote
//referenced video on YouTube to learn how to use setInterval: https://youtu.be/CqDqHiamRHA  
function quoteRefresh() {
    setInterval(printQuote, 20000);
    setInterval(changeBkgdColor, 20000);
}
quoteRefresh();
