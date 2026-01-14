console.log("================================");
console.log("Xenofon Gkioka Lab 02");
console.log("================================");
// ============== ex 3 ===============
// 1. Variable Declaration (as required)
var input = 81;

// 2. Start the output string
// We start with the text so we can just add numbers to it later
var output = "The factors of " + input + " are: ";

// 3. Loop from 1 to the input number
for (var i = 1; i <= input; i++) {
    
    // 4. Check if 'i' is a factor (remainder is 0)
    if (input % i === 0) {
        
        // Formatting Logic: 
        // If 'i' is NOT 1 (the first factor), we add a comma and space first.
        // This prevents a trailing comma at the end (e.g., "1, 3, 81,")
        if (i !== 1) {
            output += ", ";
        }
        
        // Add the factor to the string
        output += i;
    }
}

// 5. Final Output
console.log(output);
// =============  ex 4 =============
console.log("exercise 4");
var input1 = 7;
var square = "";

for (var i = 0; i<input1; i++){
    for (var j=0; j < input1; j++){
        square +="* ";
    }
    square += "\n";
}
console.log(square);


// =============  ex 5 =============
console.log("exercise 5");
var input2 = 13;
var numfactor = 0;

for (var i = 1; i <=input2; i++){
    if(input2 % i == 0){
        numfactor++;
    }
}

if(numfactor == 2){
    console.log(input2 + " is a prime number");
} else {
    console.log(input2 + " is not a prime number");
}
