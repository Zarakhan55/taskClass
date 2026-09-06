
// // Chapter 14: Arrays
// //--1--
// let studentNames = [];

// console.log(studentNames);

// //--2--
// let studentNames2 = ["John", "Jane", "Alice", "Bob"];
// console.log(studentNames2);
// //--3--
// let fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits[0]);
// //--4--
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// //--5--
// let booleanArray = [true, false, true, false];
// console.log(booleanArray);
// //--6--
// let mixedArray = [1, "Hello", true, 3.14];
// console.log(mixedArray);
// //--7--
// let educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// console.log(educationQualifications);

// //--8--
// let studentNames3 = ["John", "Jane", "Alice", "Bob"];
// let studentScores = [85, 92, 78, 90];
// let totalMarks = 500;
// console.log("Score of " + studentNames3[0] + " is " + studentScores[0] + ". Percentage: " + (studentScores[0] / totalMarks) * 100 + "%");
// console.log("Score of " + studentNames3[1] + " is " + studentScores[1] + ". Percentage: " + (studentScores[1] / totalMarks) * 100 + "%");
// console.log("Score of " + studentNames3[2] + " is " + studentScores[2] + ". Percentage: " + (studentScores[2] / totalMarks) * 100 + "%");
// console.log("Score of " + studentNames3[3] + " is " + studentScores[3] + ". Percentage: " + (studentScores[3] / totalMarks) * 100 + "%");

// //--9--
// let color=["Red", "Green", "Blue"];
// console.log("Initial colors: " + color);

// let addColorStart = prompt("Enter a color to add at the beginning:");
// color.unshift(addColorStart);
// console.log("After adding color at the beginning: " + color);
// let addColorEnd = prompt("Enter a color to add at the end:");
// color.push(addColorEnd);
// console.log("After adding color at the end: " + color);
// let addColorStart2 = prompt("Enter two more colors to add at the beginning (comma-separated):");
// let newColors = addColorStart2.split(",");
// color.unshift(...newColors);
// console.log("After adding two more colors at the beginning: " + color);
// color.shift();
// console.log("After removing the first color: " + color);
// color.pop();
// console.log("After removing the last color: " + color);
// let indexToAdd = Number(prompt("Enter the index to add a color:"));
// let colorToAdd = prompt("Enter the color to add:");
// color.splice(indexToAdd, 0, colorToAdd);
// console.log("After adding color at index " + indexToAdd + ": " + color);
// let indexToRemove = Number(prompt("Enter the index to remove color(s):"));
// let numToRemove = Number(prompt("Enter the number of colors to remove:"));
// color.splice(indexToRemove, numToRemove);
// console.log("After removing " + numToRemove + " color(s) from index " + indexToRemove + ": " + color);

//--10--
let studentScores2 = [320, 230, 480, 120];

console.log("Scores of Students: " + studentScores2);

let sortedScores = studentScores2.sort();

console.log("Ordered Scores of Students: " + sortedScores);

//--11--
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = cities.slice(2, 4);
console.log("Selected Cities: " + selectedCities);

//--12--
var arr = ["This", "is", "my", "cat"];
var str = arr.join(" ");
console.log("Array: " + arr);
console.log("String: " + str);

//--13--
let devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
console.log("Devices: " + devices);
console.log("Out:\n " + devices[0]);
console.log("Out: \n" + devices[1]);
console.log("Out: \n" + devices[2]);
console.log("Out: \n" + devices[3]);

//--15
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (let i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}