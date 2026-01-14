// Construxts 
var a = 3;
var b = 6;
var c = a+b;

console.log("The sum of a and b is: " + c);

// selections 

var grade,mark=75;

if (mark >= 90){
    grade = 'A+';
}else if (mark >= 80){
    grade = 'A';
}else if (mark >= 70){
    grade = 'B';
}else if (mark >= 60){
    grade = 'C';
}else if (mark >= 50){
    grade = 'D';
}else{
    grade = 'F';
}

console.log("The grade is: " + grade);

// switch case
var semester;
switch (semester){
    case 1:
        console.log("IPC144,ULI191");
        break;
    case 2:
        console.log("OOP244,WEB222");
        break;
    case 3:
        console.log("DBS301,WEB322");
        break;
    default:
        console.log("You may have graduated from CPD");
        break;  
}

// FOR LOOP     
var days ="THE DAYS IN SEPTEMBER: \n";
for (var i = 1; i <=30; i++) {
    days += i + "\n";
}   
console.log(days);

// for in loop 
var student = {name:"John", program:"CPD", semester:2};
var str = "Student info:\n\n";
for (var x in student) { // x is the current property ('key') – ie: name, program, or semester
str += x + ": " + student[x] + "\n";
}
console.log(str);

// while loop 
var text = "";
var i = 0;

while (i>10) { 
    text += "The number is "  +i++;
}
console.log(text);

// do…while loop
var i = 10;
do {
console.log("week " + i++);
} while (i < 15)

    // break statementvar i=1;
while (i < 5){
console.log("week "+ i);
if (i==3)
break;
else
i++;
}

// continue statement
var i=1, j=1;
while (i < 5) {
console.log('week: '+ i );
for (j=1; j<=7; j++){
if (j==3) continue;
console.log('day: '+ j +' of week: '+ i);
}
i++;
}
