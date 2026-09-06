// -----------------------------------------chapter-5---------------------------------------------------------
// -----------1-----------
let no1=5;
let no2=6;
let sum=no1+no2;
console.log("The sum of "+no1+" and "+no2+" is: "+sum);
// -----------2-----------
console.log("The Subtraction of "+no1+" and "+no2+" is: "+(no1-no2));
console.log("The Multiplication of "+no1+" and "+no2+" is: "+(no1*no2));
console.log("The Division of "+no1+" and "+no2+" is: "+(no1/no2));
console.log("The Modulus of "+no1+" and "+no2+" is: "+(no1%no2));
// -----------3-----------
// ---a---
let a;
// --b--
console.log("Value after variable declaration is: "+a);
// --c--
a=5;
// --d--
console.log("Initial value: "+a);
// --e--
a++;
//--f--
console.log("Value after increment is: "+a);
//--g--
a=a+7;
//--h--
console.log("Value after addition is: "+a);
//--i--
a--;
//--j--
console.log("Value after decrement is: "+a);
//--k--
let remainder=a%3;
//--l--
console.log("The remainder is: "+remainder);

//-----------4-----------
let script=600;
let cost=script*5;
console.log("Total cost to buy 5 tickets to a movie is "+cost+" PKR");


//-----------5-----------
let table=4;
for(let i=1;i<=10;i++){
    console.log(table+" x "+i+" = "+(table*i));
}


//-----------6-----------
// convert to fahrenheit
let celsius=25;
let fahrenheit=(celsius*9/5)+32;
console.log(celsius+"°C is "+fahrenheit+"°F");
//convert to celsius
let fahrenheit2=70;
let celsius2=(fahrenheit2-32)*5/9;
console.log(fahrenheit2+"°F is "+celsius2+"°C");




//-----------7-----------
let item1=650;
let item2=100;
let quantity1=3;
let quantity2=7;
let shippingCharges=100;
let totalCost=(item1*quantity1)+(item2*quantity2)+shippingCharges;
console.log("Price of item 1 is: "+item1);
console.log("Quantity of item 1 is: "+quantity1);
console.log("Price of item 2 is: "+item2);
console.log("Quantity of item 2 is: "+quantity2);
console.log("Shipping charges are: "+shippingCharges);
console.log("Total cost of your order is: "+totalCost);









///--------------------8----------------
let totalMarks=980;
let marksObtained=804;
let percentage=(marksObtained/totalMarks)*100;
console.log("Total marks: "+totalMarks);
console.log("Marks obtained: "+marksObtained);
console.log("Percentage: "+percentage+"%");




///--------------------9----------------
let usDollar=10;
let saudiRiyal=25;
let pkr=(usDollar*104.80)+(saudiRiyal*28);
console.log("Total currency in PKR: "+pkr);


//----------------10----------------
let num =5;
let result =((num*5)/2);
console.log("Result is: "+result);


//----------------11----------------
let curentyear=2026;
let birthyear=2004;
let age=curentyear-birthyear;
console.log("Current year: "+curentyear);
console.log("Birth year: "+birthyear);
console.log("Your age is: "+age);

//----------------12----------------
// --a--
let radius=20;
// --b--
let circumference=2*3.142*radius;
let area=3.142*radius*radius;

console.log("Radius of a circle is: "+radius);
console.log("The circumference is: "+circumference);
console.log("The area is: "+area);




//----------------13----------------
let favoriteSnack="Chocolate Chip";
let currentAge=22;
let maxAge=65;
let amountPerDay=3;
let totalSnacks=(maxAge-currentAge)*amountPerDay*365;

console.log("Favorite Snack: "+favoriteSnack);
console.log("Current age: "+currentAge);
console.log("Estimated Maximum Age: "+maxAge);
console.log("Amount of snacks per day: "+amountPerDay);
console.log("You will need "+totalSnacks+" "+favoriteSnack+" to last you until the ripe old age of "+maxAge);