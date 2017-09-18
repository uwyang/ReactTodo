/*
function add(a, b){
  return a+ b;
}

console.log(add(2, 3));

var toAdd = [9, 5];
console.log(add(...toAdd));
*/
var groupA = ["alice", "bob"];
var groupB = ["cleopatra"];
var final = [...groupA, ...groupB]
console.log(final);

var a = ["Joe", 35];

function greet(name, age){
  console.log("hello " , name , " : ", age);
}

greet(...a); 
