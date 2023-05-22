//English to Arabic translator 

let translator = new Map();
// Add key-value pairs to the 'translator' Map object, where the keys are English words and the values are their corresponding Arabic translations
translator.set("Star", "\u{646}\u{62C}\u{645}\u{629}");
translator.set("Moon", "\u{627}\u{644}\u{642}\u{645}\u{631}");
translator.set("Sun", "\u{627}\u{644}\u{634}\u{645}\u{633}");
translator.set("Planet", "\u{643}\u{648}\u{643}\u{628}");
translator.set("Earth", "\u{627}\u{644}\u{627}\u{631}\u{636}");
translator.set("Sea", "\u{628}\u{62D}\u{631}");
translator.set("River", "\u{646}\u{647}\u{631}");
translator.set("Tree", "\u{634}\u{62C}\u{631}\u{629}");
translator.set("Sky", "\u{633}\u{645}\u{627}\u{621}");
translator.set("Forest", "\u{63A}\u{627}\u{628}\u{629}");

// Initialize a counter variable 'i' with a value of 1
let i = 1;
// Iterate over the key-value pairs in the 'translator' Map object
for (let [key, value] of translator) {
    // Log the value of 'i' followed by a colon and a space, and then the value of 'key'
    console.log(i + ": " + key);
    // Increment the value of 'i' by 1
    i++;
}

// Prompt the user to enter a number corresponding to the English word they want to translate
let choice = prompt("Enter the number corresponding to the English word you want to translate:");

// Retrieve the key-value pair at the index specified by the user's input, and store the key in a variable called 'chosenWord'
let chosenWord = Array.from(translator)[choice - 1][0];

// Log the value of 'chosenWord' followed by the string " in Arabic is ", and then the value of the chosenWord key in the 'translator' Map object
console.log(chosenWord + " in Arabic is " + translator.get(chosenWord));



/*
Sources:
-http://mylanguages.org/converter.php
-https://r12a.github.io/app-conversion
*/