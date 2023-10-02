// Function to validate if a value is a positive number
function isValidNumber(value) {
    return !isNaN(value) && value >= 0;
  }
  
  // Function to schedule alarms based on user input
  function setAlarms(alarms) {
    for (const time of alarms) {
      if (isValidNumber(time)) {
        setTimeout(() => {
          process.stdout.write('\x07'); // Beep sound
        }, time * 1000); 
      }
    }
  }
  
  const args = process.argv.slice(2);
  const alarms = args.map(Number).filter(isValidNumber);
  
  setAlarms(alarms);
  