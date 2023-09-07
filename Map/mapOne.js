function generateRandomBirthMonth() 
  {
    return Math.floor(Math.random() * 12) + 1;
  }
  
  function generateRandomYear()
  {
   
    return Math.floor(Math.random() * 2) + 1992;
  }
  
  function generateRandomBirthdays(count) {
    const birthdays = [];
    for (let i = 0; i < count; i++) {
      const birthMonth = generateRandomBirthMonth();
      const birthYear = generateRandomYear();
      birthdays.push({ month: birthMonth, year: birthYear });
    }
    return birthdays;
  }
  
  function findSharedBirthMonths(birthdays) {
    const sharedMonths = {};
  
    for (const birthday of birthdays) {
      const key = `${birthday.month}-${birthday.year}`;
      if (sharedMonths[key]) {
        sharedMonths[key].push(birthday);
      } else {
        sharedMonths[key] = [birthday];
      }
    }
  
    return sharedMonths;
  }
  
  const numberOfIndividuals = 50;
  const allBirthdays = generateRandomBirthdays(numberOfIndividuals);
  const sharedMonths = findSharedBirthMonths(allBirthdays);
  
  console.log("Birthdays by Month:");
  for (const key in sharedMonths) {
    if (sharedMonths[key].length > 1) {
      const monthYearParts = key.split('-');
      const month = monthYearParts[0];
      const year = monthYearParts[1];
      console.log(`Month ${month}, Year ${year}:`, sharedMonths[key]);
    }
  }
