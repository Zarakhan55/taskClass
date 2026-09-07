// ---------------------------chapter 21 - 25---------------------\

// --1--
// let firstName=prompt("Enter your First name:");
// let SecondName=prompt("Enter your second name");
// let fullName=firstName+" "+SecondName;
// console.log("Hello "+fullName);

//--2--
// let FavMobile = prompt("Enter your Favorite Mobile phone model");

// let lengthModel = FavMobile.length;

// alert("My Favorite Mobile phone model is " + FavMobile +
//       "\nLength of Mobile: " + lengthModel);

// //--3--
// let word = "Pakistani";

// let index = word.indexOf("n");

// document.write("The index of letter 'n' in Pakistani is: " + index);


//--4--
// let word = "Hello World";

// let lastIndex = word.lastIndexOf("l");

// document.write("The last index of 'l' is: " + lastIndex);

// //--5--
// let character = "Pakistani";

// let ThirdIndex = character.charAt(3);

// document.write("String: Pakistani <br> Character at Index 3: " + ThirdIndex);

// //--6--
// let firstName = prompt("Enter your First name:");
// let secondName = prompt("Enter your Second name:");

// let fullName = firstName.concat(" ", secondName);

// console.log("Hello " + fullName);

//--7--
// let word = "Hyderabad";

// let result = word.replace("Hyder", "Islam");

// document.write(result);

//--8--
// let message = "Ali and Sami are best friends. They play cricket and football together.";

// let result = message.replaceAll("and", "&");

// document.write(result);

//--9--
// let value = "472";

// let numberValue = Number(value);

// document.write("Value: " + value + "<br>");
// document.write("Type: " + typeof value + "<br><br>");

// document.write("Value: " + numberValue + "<br>");
// document.write("Type: " + typeof numberValue);


//--10--
// let userInput = prompt("Enter something:");

// let result = userInput.toUpperCase();

// document.write("User input: " + userInput + "<br>");
// document.write("Upper case: " + result);



//--11--

// let userInput = prompt("Enter something:");

// let result = userInput.charAt(0).toUpperCase() + userInput.slice(1);

// document.write("User input: " + userInput + "<br>");
// document.write("Title case: " + result);


//---12---
// let num = 35.36;

// let result = num.toString().replace(".", "");

// document.write("Number: " + num + "<br>");
// document.write("Result: " + result);



//--13----

// let username = prompt("Enter your username:");

// if (
//     username.includes("@") ||
//     username.includes(".") ||
//     username.includes("!") ||
//     username.includes(",")
// ) {
//     alert("Please enter a valid username");
// } else {
//     alert("Username is valid");
// }

//--14--
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// let search = prompt("What do you want to search?");

// let found = false;

// for (let i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === search.toLowerCase()) {
//         found = true;
//         break;
//     }
// }

// if (found) {
//     alert(search + " is available in the list.");
// } else {
//     alert(search + " is not available in the list.");
// }


//--15---
// let password = prompt("Enter your password:");

// document.write("Entered password: " + password + "<br>");

// if (!isNaN(password.charAt(0))) {
//     document.write("Password can not begin with a number<br>");
//     document.write("Please enter a valid password");
// }
// else if (password.length < 6) {
//     document.write("Password must be at least 6 characters long<br>");
//     document.write("Please enter a valid password");
// }
// else {
//     document.write("Password is valid");
// }

//--16--
// let university = "University of Karachi";

// let arr = university.split(" ");

// document.write(arr);


//--17--

// let userInput = prompt("Enter something:");

// let lastCharacter = userInput.charAt(userInput.length - 1);

// document.write("User input: " + userInput + "<br>");
// document.write("Last character of input: " + lastCharacter);

//--18--
let text = "The quick brown fox jumps over the lazy dog";

let count = 0;

let words = text.toLowerCase().split(" ");

for (let i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++;
    }
}

document.write("Text: " + text + "<br>");
document.write("There are " + count + " occurrence(s) of word 'the'");