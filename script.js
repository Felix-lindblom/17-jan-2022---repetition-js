/*
Datatyper
*/

// string
let string = "hello, string time";
let numbers = 67.58;
let boolean = true || false;
let inget = null; 
let uf = undefined;

// Funktioner
function name(nume) {
    console.log(`Hejsan ${nume}, din gamla öh`);
}

function add(num1= 0, num2= 0) {
    return num1+num2;
}

let answer = add(12);
console.log(answer);
// console.log(add(12))

name(`wq`);

// anynom
function() {};
() => {};

// Datastruktur
let arr = [];
let obj = {
    key: "value"
};


let fruits = ["appel","bottem","jeans"];

let jeans = fruits(2);

fruits.push("pintappel","bannan");
fruits.pop();
let picked_fruits = fruits.splice(0,1); 

let number = [123,4,,67,19,43,23]
let b20 = number.filter((num) => {return num > 20})
console.log(b20);