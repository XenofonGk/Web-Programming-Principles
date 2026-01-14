// // Construxts 
// var a = 3;
// var b = 6;
// var c = a+b;

// console.log("The sum of a and b is: " + c);

// // selections 

// var grade,mark=75;

// if (mark >= 90){
//     grade = 'A+';
// }else if (mark >= 80){
//     grade = 'A';
// }else if (mark >= 70){
//     grade = 'B';
// }else if (mark >= 60){
//     grade = 'C';
// }else if (mark >= 50){
//     grade = 'D';
// }else{
//     grade = 'F';
// }

// console.log("The grade is: " + grade);

// // switch case
// var semester;
// switch (semester){
//     case 1:
//         console.log("IPC144,ULI191");
//         break;
//     case 2:
//         console.log("OOP244,WEB222");
//         break;
//     case 3:
//         console.log("DBS301,WEB322");
//         break;
//     default:
//         console.log("You may have graduated from CPD");
//         break;  
// }

// // FOR LOOP     
// var days ="THE DAYS IN SEPTEMBER: \n";
// for (var i = 1; i <=30; i++) {
//     days += i + "\n";
// }   
// console.log(days);

// // for in loop 
// var student = {name:"John", program:"CPD", semester:2};
// var str = "Student info:\n\n";
// for (var x in student) { // x is the current property ('key') – ie: name, program, or semester
// str += x + ": " + student[x] + "\n";
// }
// console.log(str);

// // while loop 
// var text = "";
// var i = 0;

// while (i>10) { 
//     text += "The number is "  +i++;
// }
// console.log(text);

// // do…while loop
// var i = 10;
// do {
// console.log("week " + i++);
// } while (i < 15)

//     // break statementvar i=1;
// while (i < 5){
// console.log("week "+ i);
// if (i==3)
// break;
// else
// i++;
// }

// // continue statement
// var i=1, j=1;
// while (i < 5) {
// console.log('week: '+ i );
// for (j=1; j<=7; j++){
// if (j==3) continue;
// console.log('day: '+ j +' of week: '+ i);
// }
// i++;
// }



// INTRODUCTION PRACTICE 

var label = "senecacollege";
var tld = "ca";
var domainName = label + "." + tld; 
var isSeneca = domainName === "senecacollege.ca";
var isNotSeneca = !isSeneca;

console.log(domainName);
console.log(isSeneca);
console.log(isNotSeneca);

//BYTES
var byte1 = 0;
var byte2 = 94;
var byte3 = 173;
var byte4 = 255;
console.log( byte4.toString() );
console.log( byte3.toString(2) );
console.log( byte2.toString(6) );

// IP ADRESS STRING
var ipAdress = byte3 + "." + byte2 + "." + byte4 + "." + byte1;
console.log(ipAdress);

// IP ADRESS AS INTEGER (32 BIT)
var ipInt =
    (byte1 << 24) +
    (byte2 << 16) +
    (byte3 << 8) +
    byte4;

console.log(ipInt);

// IP ADRESS IN BINARY
var ipBinary = ipInt.toString(2);
console.log(ipBinary);

// HTTP STATUS CODE
var statusCode = 418; 

// CHECK FOR 4xx CLIENT ERROR
if (statusCode >= 400 && statusCode <= 499){
    console.log("Client Error " + statusCode);
}

// SWITCH FOR 1xx Responses
switch (statusCode) {
  case 100:
    console.log("Continue");
    break;
  case 101:
    console.log("Switching Protocols");
    break;
  case 102:
    console.log("Processing");
    break;
  default:
    console.log("unknown information response");
}

// FUNCTION: IS 2xx
function is2xx(status) {
    return status >= 200 && status <= 299;
}

console.log(is2xx(200));
console.log(is2xx(404));

//STUDENT INFO 
var studentName="Xenofon";
var studentAge = 27;

console.log(studentName + " is " + studentAge + "Years old.");

//EVEN / ODD 
var num = 10;

var isEven = num % 2 === 0;
var isOdd = !isEven;

console.log(isEven);
console.log(isOdd);

//CIRCLE AREA

var radius = 10;
var area= Math.PI * radius * radius;

console.log(area);

// TEMPERATURE CONVERSION

var temperatureInCelcius = 25;
var temperatureInFahrenheit = temperatureInCelcius * 9 / 5 + 32;

console.log(temperatureInFahrenheit);

// HEIGHT CONVERSION 
var heightInFeet = 6;
var heightInMeters = heightInFeet * 0.3048;

console.log(heightInMeters);

// TIME CONVERSION

var seconds = 90;

var minutes = Math.floor(seconds / 60);
var remainingSeconds = seconds % 60;

console.log(minutes,remainingSeconds);

// GRADES 
var score = 85;
var grade;

if (score >= 90) {
    grade ="A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
}else if (score >= 60) {
    grade= "D";
}else {
    grade = "F";
}

console.log(grade);


// DAY OF WEEK 

var day = 6;

switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Weekday");
    break;
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("Invalid day");
}

// FUNCTION: IS POSITIVE
function isPositive(num) {
    return num > 0; 
}

// FUNCTION: IS LEAP YEAR
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// FUNCTION: GET DAY OF WEEK
function getDayOfWeek(day){
      switch (day) {
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    case 7: return "Sunday";
    default: return "Invalid day";
  }
}


// FUNCTION: GET FULL NAME
function getFullName(firstName, lastName) {
    return firstName + "" + lastName;
}

// FUNCTION: GET CIRCLE AREA
function getCircleArea(radius) {
    return Math.PI * radius * radius;
}

// FUNCTION: GET HYPOTENUSE
function getHypotenuse(a, b){
    return Math.sqrt(a * a + b * b);
}
