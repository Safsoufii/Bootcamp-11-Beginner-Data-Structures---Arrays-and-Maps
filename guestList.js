let arr = [];

// Prompt the user to enter the names of 10 guests
for (let i = 0; i < 10; i++) {
  console.log(`Guest ${i + 1}:`);
  let input = prompt(`Please enter guest ${i + 1} name`);
  arr.push(input);
  console.log(input);
}

while (true) {
  // Check if the maximum number of guests has been reached
  if (arr.length >= 10) {
    let replace = prompt("You have already added 10 people to your guest list. Would you like to replace someone on the list with this person? y/n:");

    if (replace === "y") {
      let name = prompt("Who would you like to replace?");
      console.log(`Searching for guest with name: ${name}`);

      // Find the index of the guest with the specified name
      let index = -1;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === name) {
          index = i;
          break;
        }
      }

      if (index === -1) {
        console.log("Guest not found.");
      } else {
        // Prompt the user to enter the new name
        let newName = prompt("Please enter the new name:");
        arr[index] = newName;
        console.log(`Guest list after replacing a guest: ${arr}`);
      }
    } else if (replace === "n") {
      console.log("The maximum number of guests is 10. Exiting the program.");
      break;
    } else {
      console.log("Invalid input. The maximum number of guests is 10. Exiting the program.");
      break;
    }
  } else {
    // Prompt the user to enter the new guest's name
    let newName = prompt("Please enter the new guest name:");
    arr.push(newName);
  }
}

