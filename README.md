# 🎸 Northland Music Festival — Lineup Manager

## Overview

Northland Music Festival needs a lineup management system — and you're the developer for the job. You've been given the festival data and a helper function to get you started. Your task is to build a set of functions that display, filter, and analyze the festival lineup.

## Prerequisites

Before starting, make sure you have:
- VS Code installed with the Live Server extension
- Git installed and configured
- A GitHub account

## Getting Started

1. Accept the assignment via the link on Brightspace
2. Clone the repository to your local machine
3. Open the project in VS Code
4. Update the `README.md` with your name below
5. Open `index.html` with Live Server and check the console to confirm everything is running
6. Commit and push your changes

**Student Name:** *(replace this with your name)*

---

## Automated Tests

This assignment includes automated tests that run every time you push to GitHub. You can view the results by clicking the **Actions** tab in your GitHub repository.

> ⚠️ Tests are provided as a guide to help you check your work — they are not directly tied to your grade. Passing all tests is a good sign, but your submission will still be reviewed manually using the rubric below.

**Optional: Running tests locally**

If you're curious, you can also run the tests on your own machine. Note that we haven't covered Node.js or npm in this course yet — this is purely optional and not required.

1. Install [Node.js](https://nodejs.org) if you don't have it
2. In your project folder, run `npm install`
3. Then run `npm test`

---

## Instructions

Your job is to complete four functions in `index.js` and then wire them together inside `main()`.

The festival data is already provided as three parallel arrays — `artistNames`, `genres`, and `stageTimes`. Parallel arrays are separate arrays that are connected by index, meaning each index position refers to the same artist across all three arrays. For example, `artistNames[2]`, `genres[2]`, and `stageTimes[2]` all belong to the same artist. Read the comments in the file carefully before you start.

A `formatTime()` helper function is also provided. You will use it inside your own functions, but do not modify it.

### Task 1 — `displayArtist(name, genre, time)`

Write a function called `displayArtist` that accepts three parameters: a name, a genre, and a time. Inside the function, use the provided `formatTime()` function to convert the numeric time into a readable string. Then build and **return** a single formatted string that combines all three values.

Example output: `"The Rolling Clones | Rock | 8:00 PM"`

Note: this function should **return** the string, not log it. Other functions will call `displayArtist` and decide what to do with the result.

### Task 2 — `filterByGenre(genre)`

Write a function called `filterByGenre` that accepts a genre string as a parameter. Inside the function, loop through the `artistNames` array. For each artist, check whether their genre matches the parameter. If it does, log that artist's name to the console. Each matching name should be logged as its own separate `console.log` call.

For example, calling `filterByGenre("Pop")` should log:
```
The Beagles
Wham! Bam!
```

### Task 3 — `findHeadliner()`

Write a function called `findHeadliner` that takes no parameters. Loop through the `stageTimes` array to find the highest (latest) time value, keeping track of which index it's at. Once you've found the latest time, use that index to look up the corresponding artist name and **return** it.

### Task 4 — `buildSetList()`

Write a function called `buildSetList` that takes no parameters. Start with an empty array. Loop through the artists and for each one, call your `displayArtist` function to produce a formatted string, then add that string to your array. Remember that you'll need to pass `displayArtist` the matching name, genre, and stage time for each artist using the same index across all three arrays. Once your loop is done, log the header `"--- Full Set List ---"` to the console, then log each item in the array individually.

The first few lines of output should look like this:
```
--- Full Set List ---
The Rolling Clones | Rock | 8:00 PM
Led Zeppelout | Rock | 10:00 PM
The Beagles | Pop | 2:00 PM
```

### main()

Once your functions are complete, fill in the TODOs inside `main()` to call each function and display the results.

---

## Submitting

Commit and push your work regularly as you complete each task. Each commit should reflect meaningful progress on your solution. Do not save everything for one final commit.

---

## Rubric

This assignment is marked out of 10.

| Criterion | Full | Partial | None |
|---|---|---|---|
| **`displayArtist()` (1 pt)** | Returns a correctly formatted string using `formatTime()` (1) | — | Function missing or does not return a correct string (0) |
| **`filterByGenre()` (2 pts)** | Loops through all artists, correctly identifies matches by genre, and logs each matching name individually (2) | Correct approach with minor errors in matching logic or logging (1) | Function missing or does not filter correctly (0) |
| **`findHeadliner()` (2 pts)** | Correctly finds and returns the artist with the latest stage time (2) | Correct approach with minor errors (1) | Function missing or does not return correct result (0) |
| **`buildSetList()` (2 pts)** | Correctly builds array of formatted strings using `displayArtist()`, logs header and each item individually (2) | Correct approach with minor errors in output or logging (1) | Function missing or does not produce correct output (0) |
| **`main()` (2 pts)** | All four TODOs completed, functions called correctly and producing expected output (2) | Some TODOs completed or function calls partially correct (1) | No TODOs completed (0) |
| **Code Quality (1 pt)** | Readable code with descriptive variable names and clear comments (1) | — | Variable names unclear or comments missing/unhelpful (0) |

---

## Academic Integrity

### Use of Generative AI Tools in the Classroom
**USE NOT PERMITTED**

For the assignments/assessments in this course, the use of any Generative Artificial Intelligence (AI) tools is not permitted. The assignments/assessments are intended to measure each student's ability to generate their own work. Your unique comprehension and interpretation of the course content must be demonstrated in order to be successful. Using prohibited resources will be considered academic misconduct and be addressed following SR 1.3 Academic Integrity Procedure.

---

## Incremental Development

You must demonstrate incremental development of your solution. This means that you must begin work on your solution as soon as possible and commit often to the assignment repository. Each commit must demonstrate functional improvements to the solution. Just like in a professional environment, leaving a task untouched until right before the deadline is not acceptable — start early and make consistent progress. Failure to show incremental work during the assignment period will result in loss of marks of up to 20%.
