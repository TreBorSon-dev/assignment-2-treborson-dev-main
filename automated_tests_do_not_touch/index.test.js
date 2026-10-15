/**
 * WEBD2006 - Assignment 2 Tests
 * Northland Music Festival - Lineup Manager
 */

let consoleSpy;
let logs;
let functions;

beforeEach(() => {
  // Capture console.log output
  logs = [];
  consoleSpy = jest.spyOn(console, "log").mockImplementation((...args) => {
    logs.push(args.join(" "));
  });

  // Reset and re-run the student's script before each test
  jest.resetModules();
  functions = require("../index.js");
});

afterEach(() => {
  consoleSpy.mockRestore();
});

// --- Task 1: displayArtist ---

test("displayArtist — returns a correctly formatted string", () => {
  const result = functions.displayArtist("The Rolling Clones", "Rock", 2000);
  expect(result).toBe("The Rolling Clones | Rock | 8:00 PM");
});

test("displayArtist — correctly converts time using formatTime", () => {
  const result = functions.displayArtist("Led Zeppelout", "Rock", 2200);
  expect(result).toBe("Led Zeppelout | Rock | 10:00 PM");
});

// --- Task 2: filterByGenre ---

test("filterByGenre — logs only Folk artists", () => {
  logs = [];
  functions.filterByGenre("Folk");
  expect(logs).toContain("Fleetwood Snack");
  expect(logs).toContain("The Grateful Dread");
});

test("filterByGenre — does not log non-matching artists", () => {
  logs = [];
  functions.filterByGenre("Folk");
  expect(logs).not.toContain("Led Zeppelout");
  expect(logs).not.toContain("ThreePac");
});

// --- Task 3: findHeadliner ---

test("findHeadliner — returns the artist with the latest stage time", () => {
  const result = functions.findHeadliner();
  expect(result).toBe("Led Zeppelout");
});

// --- Task 4: buildSetList ---

test("buildSetList — logs the set list header", () => {
  logs = [];
  functions.buildSetList();
  expect(logs).toContain("--- Full Set List ---");
});

test("buildSetList — logs all 8 artists as formatted strings", () => {
  logs = [];
  functions.buildSetList();
  expect(logs).toContain("The Rolling Clones | Rock | 8:00 PM");
  expect(logs).toContain("Led Zeppelout | Rock | 10:00 PM");
  expect(logs).toContain("The Beagles | Pop | 2:00 PM");
  expect(logs).toContain("Wham! Bam! | Pop | 6:00 PM");
  expect(logs).toContain("Notorious B.I.G. Deal | Hip-Hop | 4:00 PM");
  expect(logs).toContain("ThreePac | Hip-Hop | 9:00 PM");
  expect(logs).toContain("Fleetwood Snack | Folk | 12:00 PM");
  expect(logs).toContain("The Grateful Dread | Folk | 7:00 PM");
});

// --- main ---

test("main — logs The Beagles display string", () => {
  expect(logs).toContain("The Beagles | Pop | 2:00 PM");
});

test("main — logs Folk artists from filterByGenre", () => {
  expect(logs).toContain("Fleetwood Snack");
  expect(logs).toContain("The Grateful Dread");
});

test("main — logs headliner announcement", () => {
  expect(logs).toContain("Tonight's headliner is: Led Zeppelout");
});

test("main — logs set list header from buildSetList", () => {
  expect(logs).toContain("--- Full Set List ---");
});
