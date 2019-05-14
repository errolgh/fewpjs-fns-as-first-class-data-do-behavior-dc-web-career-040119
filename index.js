console.log('connected');
/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
};

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


// The greet function should take one argument, a String which specifies the 24-hour time in the format HH:MM.
//
// If the time is earlier than 12pm, return "Good Morning".
// If the time is between 12pm and 5pm, return "Good Afternoon".
// If the time is later than 5pm, return "Good Evening".


function greet(string){
  if (string < "12:00") {
    return "Good Morning"
  } else if (string > "12:00" && string < "17:00") {
      return "Good Afternoon"
  } else if (string > "17:00" && string < "00:00") { //
      return "Good Evening"
  } else {
      return "I don't know how to respond to this time."
  };
};


function displayMessage(){
  // some code here
}





// function displayMessage(){};
