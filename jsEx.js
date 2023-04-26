var y = 10;
if (true) {
   var y = 50;
   console.log("var: ",y); // Output: 
}
console.log("var: ",y); // Output: 

let x = 10;
if (true) {
  let x = 50;
  console.log("let: ",x); // Output: 
}
console.log("let: ",x); // Output: 

let a = (1 + 7, 3 + 4);
console.log(a); // 7 (the result of 3 + 4)

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// | | | |
// ‿‿‿‿
const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);

const str = '0123456789';
const newStr = str.slice(3, 6);
document.getElementById("demo1").innerHTML = newStr;

let text = "Apple, Banana, Kiwi";

document.getElementById("demo2").innerHTML = text.slice(7);

document.getElementById("demo3").innerHTML = text.substring(7,13);

document.getElementById("demo4").innerHTML = text.substr(7,6);

let text2 = "I love chocolate cake."+" "+"They are delicious."+" "+"chocolate are best eat with peanut butter";
document.getElementById("demo6").innerHTML = text2.replaceAll("chocolate","strawberry");
document.getElementById("demo5").innerHTML = text2.replace("chocolate","strawberry");

function add7(num){
  return num + 7;
}
function multiply(num1,num2){
  return num1*num2
}
function capitalize (str){
  const lowerstr=str.toLowerCase();

  return lowerstr.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
function lastletter(str){
   return str.charAt(str.length-1);
}

let j = 0;
let i=0;
do {
  console.log(j);
  j++;  
} while (j < 5);

while (i < 5) {
  console.log(i);
  i++;
}

const mystr="SELAMAT HARI RAYA aidilfitri";
document.getElementById("demo7").innerHTML =add7(7);
document.getElementById("demo8").innerHTML =multiply(5,2);
document.getElementById("demo9").innerHTML =capitalize(mystr);
document.getElementById("demo10").innerHTML =lastletter(mystr);
document.getElementById("demo11").innerHTML =j;
document.getElementById("demo12").innerHTML =i;