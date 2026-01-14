/******************************
Lab 4
********************************/

// Given array of course objects
var courses = [
    { code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/' },
    { code: 'IPC144', name: 'Introduction to Programming Using C', hours: null, url: 'https://scs.senecac.on.ca/~ipc144/' },
    { code: 'ULI101', name: 'Introduction to Unix/Linux and the Internet', hours: 4, url: 'https://cs.senecac.on.ca/~fac/uli101/live/' },
    { code: 'IOS110', name: 'Introduction to Operating Systems Using Windows', hours: 4, url: 'https://cs.senecac.on.ca/~fac/ios110' },
    { code: 'EAC150', name: 'College English', hours: 3, url: null }
];

// Prototype object for creating student objects
var student = {
    name: "",
    dob: new Date(),
    sid: "",
    program: "",
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
            ', student id ' + this.sid + ', program ' + this.program + ', current GPA ' + this.gpa;
    }
};

/******************************
Task 1
********************************/

// a. Remove the last course and store it
var removedCourse = courses.pop();

// b. Output a message showing which course was removed
console.log("Removed course:", removedCourse);

// c. Create 4 new course objects
var ibc233 = { code: 'IBC233', name: 'Intermediate Business Communication', hours: 3, url: 'http://www.senecacollege.ca/ibc233' };
var oop244 = { code: 'OOP244', name: 'Object-Oriented Programming', hours: 4, url: 'http://www.senecacollege.ca/oop244' };
var web222 = { code: 'WEB222', name: 'Web Programming', hours: 4, url: 'http://www.senecacollege.ca/web222' };
var dbs201 = { code: 'DBS201', name: 'Database Systems', hours: 3, url: 'http://www.senecacollege.ca/dbs201' };

// d. Add these courses to the courses array
courses.push(ibc233, oop244, web222, dbs201);

// e. Calculate total hours using a for loop
var totalHours = 0;
for (var i = 0; i < courses.length; i++) {
    // Some courses may have hours null, so handle that
    if (courses[i].hours) {
        totalHours += courses[i].hours;
    }
}
console.log("Total course hours:", totalHours);

/******************************
Task 2
********************************/

// a. Create 4 student objects based on prototype
var student1 = Object.create(student);
student1.name = "Alice Johnson";
student1.dob = new Date(2000, 5, 15); // June 15, 2000
student1.sid = "A12345";
student1.program = "Computer Programming";
student1.gpa = 3.8;

var student2 = Object.create(student);
student2.name = "Bob Smith";
student2.dob = new Date(1999, 10, 22); // November 22, 1999
student2.sid = "B67890";
student2.program = "Software Engineering";
student2.gpa = 3.6;

var student3 = Object.create(student);
student3.name = "Carol Lee";
student3.dob = new Date(2001, 2, 8); // March 8, 2001
student3.sid = "C13579";
student3.program = "Web Development";
student3.gpa = 3.9;

var student4 = Object.create(student);
student4.name = "David Brown";
student4.dob = new Date(2000, 7, 30); // August 30, 2000
student4.sid = "D24680";
student4.program = "Database Administration";
student4.gpa = 3.7;

// b. Create an array of students
var students = [student1, student2, student3, student4];

// c. Use forEach to output student info
students.forEach(s => console.log(s.toString()));
