// // ----------------------------------chapter 12-13-----------------------------------

// --1--
// let input = prompt("Enter a character:");
// let code = input.charCodeAt(0);
// if (code >= 65 && code <= 90) {
//  alert("The character is an uppercase letter.");
// }
// else if (code >= 97 && code <= 122) {
//  alert("The character is a lowercase letter.");
// }
// else if (code >= 48 && code <= 57) {
//  alert("The character is a digit.");
// }
// else{
//     alert("The character is a special character.");
// }

//--2--
// let num1 = Number(prompt("Enter the first number:"));
// let num2 = Number(prompt("Enter the second number:"));
// if (num1 > num2) {
//   alert(num1 + " is larger than " + num2);
// }
// else if (num2 > num1) {
//   alert(num2 + " is larger than " + num1);
// }
// else {
//   alert("Both numbers are equal.");
// }


//--3--
// let num = Number(prompt("Enter a number:"));
// if (num > 0) {
//   alert("The number is positive.");}
// else if (num < 0) {
//   alert("The number is negative.");
// }
// else{
//     alert("The number is zero.");
// }


//--4--

// let char = prompt("Enter a character:");

// if (
//     char === "a" || char === "e" || char === "i" ||
//     char === "o" || char === "u" ||
//     char === "A" || char === "E" || char === "I" ||
//     char === "O" || char === "U"
// ) {
// return true;
// }
// else {
// return false;
// }


//--5--
// let password = "myPassword123";
// let userInput = prompt("Enter your password:");
// if (userInput === "") {
//   alert("Please enter your password.");
// }
// else if (userInput === password) {
//   alert("Correct! The password you entered matches the original password.");
// }
// else{
//     alert("Incorrect password.");
// }


//--6--
// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// }
// else {
//   greeting = "Good evening";
// }
// console.log(greeting);

//--7--
let time = Number(prompt("Enter the time in 24-hour format (e.g., 1900 for 7 PM):"));
if (time >= 0 && time < 1200) {
  alert("Good morning!");
}
else if (time >= 1200 && time < 1700) {
  alert("Good afternoon!");
}
else if (time >= 1700 && time < 2100) {
  alert("Good evening!");
}
else if (time >= 2100 && time <= 2359) {
  alert("Good night!");
}
else{
    alert("Invalid time entered.");
}