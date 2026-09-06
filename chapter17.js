// // ------------------LOOP--------------------
// // --1--
// let arr = [
//     [],
//     [],
//     []
// ];
// console.log(arr);
// //--2--
// let arr2 = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
// console.log(arr2);
// //--3--
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// //--4--
// let tableNumber = Number(prompt("Enter a number to show its multiplication table:"));
// let tableLength = Number(prompt("Enter the length of the multiplication table:"));
// for (let i = 1; i <= tableLength; i++) {
//     console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
// }

// //--5--
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log("Element of index " + i +" " + " is "+"  " + fruits[i]);
// }

//--6--
//--a--
// let counting = [];
// for (let i = 1; i <= 15; i++) {
//     counting.push(i);
// }
// console.log("Counting: " + counting.join(", "));
// //--b--
// let reverseCounting = [];
// for (let i = 10; i >= 1; i--) {
//     reverseCounting.push(i);
// }
// console.log("Reverse Counting: " + reverseCounting.join(", "));
// //--c--
// let evenNumbers = [];
// for (let i = 0; i <= 20; i += 2) {
//     evenNumbers.push(i);
// }
// console.log("Even: " + evenNumbers.join(", "));
// //--d--
// let oddNumbers = [];
// for (let i = 1; i <= 19; i += 2) {
//     oddNumbers.push(i);
// }
// console.log("Odd: " + oddNumbers.join(", "));
// //--e--
// let series = ["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"];

// console.log(series);

// //--7--
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// let item = prompt("Enter item:");

// let found = false;

// for (let i = 0; i < A.length; i++) {
//     if (A[i] == item) {
//         found = true;
//     }
// }

// if (found) {
//     alert("Item found");
// } else {
//     alert("Item not found");
// }

//--8--
// let B = [24, 53, 78, 91, 12];

// let largest = B[0];

// for (let i = 1; i < B.length; i++) {

//     if (B[i] > largest) {
//         largest = B[i];
//     }
// }

// console.log("Largest number is " + largest);

//--9--
// let B = [24, 53, 78, 91, 12];

// let smallest = B[0];

// for (let i = 1; i < B.length; i++) {

//     if (B[i] < smallest) {
//         smallest = B[i];
//     }

// }

// console.log("Smallest number is " + smallest);

//--10--
 for (let i = 5; i <= 100; i = i + 5) {
            document.write(i + "<br>");
        }