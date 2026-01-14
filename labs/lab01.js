console.log("================================");
console.log("Xenofon Gkioka Lab 01");
console.log("================================");
// exercise 1

var input =10;
if (input & 2 == 0) {
    console.log(input + " is even");
}else{
    console.log(input + " is odd");
}

// exercise 2

var input2 = 4;
var input2factorial = 1;
for (var i = input2; i>1; i--){
    input2factorial *= i;
    console.log(input2factorial);
}

console.log(input2 + "! = " + input2factorial);
