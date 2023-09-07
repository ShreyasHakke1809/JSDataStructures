function rollDie() {
    return Math.floor(Math.random() * 6) + 1; // Generates a random number between 1 and 6
  }
  
  function playGame() {
    const resultsMap = new Map();
    let maxRolls = -1;
    let minRolls = Number.MAX_VALUE;
    let maxNumber = null;
    let minNumber = null;
  
    while (true) {
      const roll = rollDie();
      
      // Store the result in the map
      if (resultsMap.has(roll)) {
        resultsMap.set(roll, resultsMap.get(roll) + 1);
      } else {
        resultsMap.set(roll, 1);
      }
  
      // Check if any number has reached 10 times
      if (resultsMap.get(roll) >= 10) {
        break;
      }
  
      // Check for max and min numbers
      if (resultsMap.get(roll) > maxRolls) {
        maxRolls = resultsMap.get(roll);
        maxNumber = roll;
      }
  
      if (resultsMap.get(roll) < minRolls) {
        minRolls = resultsMap.get(roll);
        minNumber = roll;
      }
    }
  
    console.log("Results:", resultsMap);
    console.log(`Number ${maxNumber} occurred ${maxRolls} times (maximum).`);
    console.log(`Number ${minNumber} occurred ${minRolls} times (minimum).`);
  }
  
  playGame();