console.log("Hi");
let a = 6;
let b = 7;
console.log(a++);
console.log(--a);
console.log(a===b); // value same and typeof same ;
console.log(typeof a);
console.log( a != b);
console.log(a !== b);//value not same & typeof not same ;
console.log(a % b); // moduler 
console.log(a/b) // division 
console.log(a == b);
//Next  video 7 >

let data = prompt("inter your number string");
//data = Number.parseInt(data);
console.log(typeof data);
if(data > 10 && typeof data === "number" ){
  alert("WOW this is big ");
  
}else{
  alert("NO! sad");
}
console.log(data);

let value =100;

if ( value >= 100 && typeof value === "number") {
  console.log("The value is a number.");
} else {
  console.log("The value is not a number.");
}

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

let input = prompt("Enter char please");
switch(input){
  case "A" :
  console.log("This char A");
  break;
  case "B" :
  console.log("This char B");
  break;
  case "C":
  console.log("This char c");
  break;
  default :
  console.log("Not match");
}

// next video 8