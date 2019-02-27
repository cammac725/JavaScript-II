// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function orchestra() {
  console.log(`I am the full orchestra`);
  const message = `Watch the conductor for direction!`;
  debugger;

  function woodwinds() {
    const woodwindsMessage = "I am the woodwinds section!";
    const instrumentsMessage = "Make sure you come in at the right time!";
    console.log(`${woodwindsMessage}. We got your ${message}.`);
    debugger;

    function oboe() {
      const oboeMessage = "I am an oboe, a double reed instrument.";
      console.log(`${oboeMessage}, and I got the orchestra's message: ${message} and the one from the section: ${woodwindsMessage}`);
      debugger;
    }

    oboe();
  }

  woodwinds();
}

orchestra();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
