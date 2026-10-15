// ============================================
// NORTHLAND MUSIC FESTIVAL - Lineup Manager
// ============================================

// ------------------------------------
// Festival Data
// ------------------------------------

// These three arrays are linked by index.
// artistNames[0] plays genres[0] and takes the stage at stageTimes[0], and so on.

// Stage times are stored as 4-digit numbers in 24-hour format (e.g. 1400 = 2:00 PM, 2200 = 10:00 PM).

const artistNames = [
  "The Rolling Clones",
  "Led Zeppelout",
  "The Beagles",
  "Wham! Bam!",
  "Notorious B.I.G. Deal",
  "ThreePac",
  "Fleetwood Snack",
  "The Grateful Dread",
];

const genres = [
  "Rock",
  "Rock",
  "Pop",
  "Pop",
  "Hip-Hop",
  "Hip-Hop",
  "Folk",
  "Folk",
];

const stageTimes = [2000, 2200, 1400, 1800, 1600, 2100, 1200, 1900];

// ------------------------------------
// Provided Helper Function
// Do NOT modify this function.
// ------------------------------------

// Converts a 24-hour number (e.g. 2200) to a readable time string (e.g. "10:00 PM")
function formatTime(time) {
  const hours24 = Math.floor(time / 100);
  const minutes = time % 100;
  const period = hours24 >= 12 ? "PM" : "AM";
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  const paddedMinutes = String(minutes).padStart(2, "0");
  return `${hours12}:${paddedMinutes} ${period}`;
}

// ------------------------------------
// Task 1: displayArtist
// ------------------------------------

// Write a function called displayArtist that takes a name, genre, and time as parameters.
// Use the provided formatTime() function to convert the numeric time to a readable string.
// Then build and RETURN a single formatted string combining all three values.
// Example output: "The Rolling Clones | Rock | 8:00 PM"
// Note: this function should RETURN the string, not log it directly.

// YOUR CODE HERE

function displayArtist(name, genre, time) {
  const formattedTime = formatTime(time);
  return `${name} | ${genre} | ${formattedTime}`;
}

console.log(displayArtist("The Rolling Clones", "Rock", 2000)); // Example usage
// ------------------------------------
// Task 2: filterByGenre
// ------------------------------------

// Write a function called filterByGenre that takes a genre string as a parameter.
// Loop through the artistNames array. For each artist, check if their genre matches
// the parameter. If it does, log that artist's name individually.
// Example: filterByGenre("Pop") logs "The Beagles", then "Wham! Bam!"

// YOUR CODE HERE


// ------------------------------------
// Task 3: findHeadliner
// ------------------------------------

// Write a function called findHeadliner that takes no parameters.
// Loop through stageTimes to find the highest (latest) time value,
// keeping track of which index it is at.
// Once you have found the latest time, use that index to look up
// the corresponding artist name and RETURN it.

// YOUR CODE HERE


 

// ------------------------------------
// Task 4: buildSetList
// ------------------------------------

// Write a function called buildSetList that takes no parameters.
// Start with an empty array. Loop through the artists and for each one,
// call your displayArtist function to produce a formatted string,
// then add that string to your array.
// Remember to use the same index to access the matching values
// across all three arrays.
// Once your loop is done, log "--- Full Set List ---" as a header,
// then log each item in your array individually.

// YOUR CODE HERE



// ------------------------------------
// Main Function
// ------------------------------------


// TODO 1: Call displayArtist for The Beagles and log the result
// TODO 2: Call filterByGenre to display all "Folk" artists
// TODO 3: Call findHeadliner and log a message in this format:
//         "Tonight's headliner is: [artist name]"
// TODO 4: Call buildSetList to display the full set list



// ============================================
// DO NOT CHANGE THE FOLLOWING LINES
// THEY ARE FOR AUTOMATED TESTING PURPOSES
// ============================================
if (typeof module !== "undefined") {
  module.exports = {
    displayArtist,
    filterByGenre,
    findHeadliner,
    buildSetList,
  };
}
