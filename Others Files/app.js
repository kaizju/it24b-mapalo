//Data Types

let a = 10;
let b = 15;

let name = "hello";
let char = 'a';

//Arithmetic & Logical Statements

let sum = a+b;
console.log(sum);

let minus = a-b;
console.log(minus);

let multiply = a*b;
console.log(multiply);

let divide = a / b;
if (b != 0) {
    
} else{
    console.log("Error: Division by zero is not allowed.");
    return;
}
console.log(divide);

//Conditional Statements

let age = 14;
if (age >= 21) {
    console.log("sugar mommy");
} else {
    console.log("pedophile ka");
}

let halaka = 'B';

switch (halaka) {
  case 'A':
    console.log('choy');
    break;
  case 'B':
    console.log('pinaka choy');
    break;
  case 'C':
    console.log('beri good');
    break;
  case 'D':
    console.log('geng geng');
    break;
  default:
    console.log('fade away');
}

//LOOPS

for (let n = 0; n < 5; n++) {
    console.log("For Loop "+n);
}

let v = 0;
while (v < 5) {
    console.log("While Loop "+v);
    v++;
}

//Functional Programming

function showOddorEven(){
    if(a%2==0){
        let result = console.log("Odd");
    } else {
        let result = console.log("Even");
    }
} 
function showPrime(){
    if(a%2==1){
        let result = console.log("Number is Prime");
    } else {
        let result = console.log("Number is not Prime");
    }
} 
console.log(showOddorEven());
console.log(showPrime());