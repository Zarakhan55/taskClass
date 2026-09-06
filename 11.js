// -----------------------Chapter 9-11-----------------------

// ---1---
// let City=prompt("Enter your city name");
// if(City==="Karachi"){
//     alert("Welcome to city of lights");
// }
// else{
//     alert("Welcome to "+City);
// }







// --------2-----
// let gender=prompt("Enter your gender");
// if (gender === "male"){
//     alert("Good Morning Sir");
// }
// else if(gender === "female"){
//     alert("Good Morning Ma'am");
// }
// else{
//     alert("Good Morning");
// }








//----------3-----------
// let lightColor=prompt("Enter traffic signal color");
// if(lightColor==="red"){
//     alert("Must Stop");
// }
// else if(lightColor==="yellow"){
//     alert("Ready to move");
// }
// else if(lightColor==="green"){
//     alert("Move now");
// }
// else{
//     alert("Invalid color");
// }








//----------4-----------
// let fuel=prompt("Enter remaining fuel in car (in litres)");
// if(fuel<0.25){
//     alert("Please refill the fuel in your car");
// }
// else{
//     alert("You have enough fuel in your car");
// }

//----------5--------'
// --a--
//  var a = 4; 
//  if (++a === 5){ 
    
// alert("given condition for variable a is true");}
// // --b--
// var b = 82;
// if (b++ === 83){ 
// alert("given condition for variable b is true");}

// // --c--
// var c = 12;
// if (c++ === 13){ 
// alert("condition 1 is true");}
// else if (c === 13){
// alert("condition 2 is true");}
// else if (++c < 14){
// alert("condition 3 is true");}
// else if(c === 14){
// alert("condition 4 is true");}

// // --d--
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");}

// // --e--
// if (true){
// alert("True");}
// else{
//     alert("False");}


// // --f--
// if ("car" < "cat"){
// alert("car is smaller than cat");}





// //----------6-----------
// let marks1=+prompt("Enter marks obtained in subject 1");
// let marks2=+prompt("Enter marks obtained in subject 2");
// let marks3=+prompt("Enter marks obtained in subject 3");
// let totalMarks=+prompt("Enter total marks");
// let obtainedMarks=marks1+marks2+marks3;
// let percentage=(obtainedMarks/totalMarks)*100;
// let grade,remarks;
// if(percentage>=80){
//     grade="A-one";
//     remarks="Excellent";
// }
// else if(percentage>=70){
//     grade="A";
//     remarks="Good";
// }
// else if(percentage>=60){
//     grade="B";
//     remarks="You need to improve";
// }
// else{
//     grade="Fail";
//     remarks="Sorry";
// }
// console.log("Total Marks: "+totalMarks);
// console.log("Marks Obtained: "+obtainedMarks);
// console.log("Percentage: "+percentage+"%");
// console.log("Grade: "+grade);
// console.log("Remarks: "+remarks);











//----------7-----------
// let secretNumber=7;
// let userGuess=+prompt("Guess the secret number (between 1 and 10)");
// if(userGuess===secretNumber){
//     alert("Bingo! Correct answer");
// }
// else if(userGuess===secretNumber+1 || userGuess===secretNumber-1){
//     alert("Close enough to the correct answer");
// }
// else{
//     alert("Try again!");
// }

//----------8-----------
// let number=+prompt("Enter a number to check if it is divisible by 3");
// if(number%3===0){
//     alert(number+" is divisible by 3");}
//     else{
//         alert(number+" is not divisible by 3");
//     }













//----------9-----------
// let number=+prompt("Enter a number to check if it is even or odd");
// if(number%2===0){
//     alert(number+" is an even number");}
// else{
//     alert(number+" is an odd number");
// }


//----------10-----------
// let temperature=+prompt("Enter the temperature in Celsius");
// if(temperature>40){
//     alert("It is too hot outside.");
// }
// else if(temperature>30){
//     alert("The Weather today is Normal.");
// }
// else if(temperature>20){
//     alert("Today’s Weather is cool.");
// }
// else if(temperature>10){
//     alert("OMG! Today’s weather is so Cool.");
// }
// else{
//     alert("It is freezing outside.");
// }

//----------11-----------
let num1 = +prompt("Enter first number:");
let num2 = +prompt("Enter second number:");

let operation = prompt("Enter operation (+, -, *, /, %):");

let result;

if (operation === "+") {
    result = num1 + num2;
}
else if (operation === "-") {
    result = num1 - num2;
}
else if (operation === "*") {
    result = num1 * num2;
}
else if (operation === "/") {
    result = num1 / num2;
}
else if (operation === "%") {
    result = num1 % num2;
}
else {
    alert("Invalid operation");
}

    console.log("Result is: " + result);
