
// ----Chapter -6 to 9-----------------

// --------1---------
let value=10;
console.log("The value of value is: "+value);
value++;
console.log("The value of ++value is: "+value);
console.log("Now the value of value is: "+value);

console.log("The value of value++ is: "+value);
value++;
console.log("Now the value of value is: "+value);

console.log("The value of --value is: "+value);
value--;
console.log("Now the value of value is: "+value);


//--------2---------
let a=2;
console.log("The value of a is: "+a);

let b=1;
console.log("The value of b is: "+b);

let result=--a - --b + ++b + b--;
//  1 - 0 + 1 + 1
console.log("The result is: "+result);

//--------3---------
// let name=prompt("Enter your name: ");
// alert("Hello "+name+"! Welcome to our website.");

//-------4---------
// let tableNumber = prompt("Enter a number to show its multiplication table:");

// if (tableNumber === "") {
//     tableNumber = 5;
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
// }

//-------5---------
let subject1 = prompt("Enter the name of subject 1:");
let subject2 = prompt("Enter the name of subject 2:");
let subject3 = prompt("Enter the name of subject 3:");
let totalMarks = 100;
let obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
let obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
let obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
let percentage1 = (obtainedMarks1 / totalMarks) * 100;
let percentage2 = (obtainedMarks2 / totalMarks) * 100;
let percentage3 = (obtainedMarks3 / totalMarks) * 100;
let overallPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

console.log("Subject\t\tTotal Marks\tObtained Marks\tPercentage");
console.log(subject1 + "\t\t" + totalMarks + "\t\t" + obtainedMarks1 + "\t\t" + percentage1.toFixed(2) + "%");
console.log(subject2 + "\t\t" + totalMarks + "\t\t" + obtainedMarks2 + "\t\t" + percentage2.toFixed(2) + "%");
console.log(subject3 + "\t\t" + totalMarks + "\t\t" + obtainedMarks3 + "\t\t" + percentage3.toFixed(2) + "%");
console.log("Total\t\t" + (totalMarks * 3) + "\t\t" + totalObtainedMarks + "\t\t" + overallPercentage.toFixed(2) + "%");


