// AREA OF A CIRCLE 
function getCircleArea(radius){
    return Math.PI * radius * radius
}
console.log(getCircleArea(5));

// DICE ROLL
function roll(sides =6) {
    return Math.floor(Math.random() * sides) +1
}
console.log(roll());
console.log(roll(50));

// CELSIUS TO FAHRENHEIT
function convert(temp) {
    return (temp * 9 / 5 + 32) + " F";
}

console.log(convert(0));; 

// CONVERT WITH SCALE (C OR F)
function convert(temp, scale = "C") {
    if (scale === "C") {
        return (temp * 9/5 + 32) + " F";
    } else if (scale === "F") {
        return ((temp - 32) * 5/9) + " C";
    } else {
        return "Invalid scale";
    }
}

console.log(convert(0, "C"));   // "32 F"
console.log(convert(122, "F")); // "50 C"


// CHECK IF ALL NUMBERS < 50
function isUnder50(...nums) {
    return nums.every(n => n < 50);
}

console.log(isUnder50(1, 2, 3, 49)); // true
console.log(isUnder50(1, 2, 3, 50)); // false

// SUM NUMBERS

function sum(...nums) {
    return nums.reduce((total,n) => total +n,0);
}
console.log(sum(1,2,3));

//CHECK IF VALUE EXISTS

function allExist(...args) {
    return args.every(Boolean);
}
console.log(allExist(true, 1, "hello")); // true
console.log(allExist(true, 0, "hello")); // false

// JS LIBRARY NAME GENERATOR
function generateName(name) {
    return name + ".js";
}
console.log(generateName("dog"));

// Check multiple of 3
function isMultiplieOf3(num) {
    return num % 3 === 0;
}
console.log(isMultiplieOf3(9));
console.log(isMultiplieOf3(10));


// Check if number is between two numbers 
function checkBetween(num,  min, max, inclusive = false){
    if (inclusive) {
        return num >= min && num <= max;
    } else {
        return num > min && num < max;
    }
}

console.log(checkBetween(10, 5, 15));          // true
console.log(checkBetween(5, 5, 15));           // false
console.log(checkBetween(5, 5, 15, true));     // true

// Calculate HST (13)
function calcHST(amount) {
    return amount * 0.13;
}
console.log(calcHST(100));

// Subtract discount

function applyDiscount(total,discount = 0) {
    return total - (total * discount / 100);
}

console.log(applyDiscount(100, 10));
console.log(applyDiscount(100));

// Seconds x days y hours z minutes 
function formatTime(seconds) {
    let days = Math.floor(seconds / 86400);
    seconds %= 86400;
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.round(seconds / 60);

    return days + 'Days,' + hours +' Hours,' + minutes + ' Minutes';
}

console.log(formatTime(90061));

// Flip numbers 
function flip(...nums) {
    return nums.reverse().join("");
}

console.log(flip(1,2,3));

// Integer sum
function intSum(a, b) {
    return Math.floor(a + b);
}

console.log(intSum(1.6,3.333));

// Count matches
function findMaches(first, ...rest) {
    return rest.filter(n => n === first).length;
}
console.log(findMaches(66, 1, 345, 2334, 66, 67, 66));

// Show numbers outside byte range (>255)
function showOutsideByteRange(...nums) {
    nums.forEach(n => {if (n > 255) console.log(n); });
}

showOutsideByteRange(1,5,233,255,256,0);

// encode string for url
function prepareString(str) {
    return encodeURIComponent(str);
}
console.log(prepareString("hello world"));

//Build query string
function buildQueryString(...strings) {
    return "?" + strings.map(prepareString).join("&");
}
console.log(buildQueryString("hello word", "goodnight mom"));

//Apply function to numbers
function applyFn(fn, ...nums) {
    return nums.reduce((total,n) => total +fn(n), 0);
}
console.log(applyFn(x => x * x, 1, 2, 3));
