///---------------------------Object----------------

//--1--
let itemsArray = [
    { name: "juice", price: 50, quantity: 3 },
    { name: "cookie", price: 30, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "pen", price: 100, quantity: 2 }
];

let total = 0;

for (let i = 0; i < itemsArray.length; i++) {
    total = total + (itemsArray[i].price * itemsArray[i].quantity);
}

document.write("Total Price = " + total);


//--2--

let student = {
    name: "Zara",
    email: "zara@gmail.com",
    password: "12345",
    age: 22,
    gender: "Female",
    city: "Karachi",
    country: "Pakistan"
};

// Check age
if ("age" in student) {
    console.log("Age property exists");
} else {
    console.log("Age property does not exist");
}

// Check country
if ("country" in student) {
    console.log("Country property exists");
} else {
    console.log("Country property does not exist");
}

// Check firstName
if ("firstName" in student) {
    console.log("firstName property exists");
} else {
    console.log("firstName property does not exist");
}

// Check lastName
if ("lastName" in student) {
    console.log("lastName property exists");
} else {
    console.log("lastName property does not exist");
}


//---3--
function Student(name, age, city, email) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.email = email;
}

let student1 = new Student(
    "Zara",
    22,
    "Karachi",
    "zara@gmail.com"
);

let student2 = new Student(
    "Sara",
    21,
    "Lahore",
    "sara@gmail.com"
);

let student3 = new Student(
    "Ayesha",
    23,
    "Islamabad",
    "ayesha@gmail.com"
);

console.log(student1);
console.log(student2);
console.log(student3);

