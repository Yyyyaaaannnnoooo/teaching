
// Declare empty and filled array
let myArrayEmpty = [];

let myArrayFilled = [1, 2, 3, 4, 5, 6, 7];


// Fill an array
// explain .push(element)

for(let i = 0; i < 10; i++){
  let rand = Math.random() * 100;
  myArrayEmpty.push(rand);
}
// console.log(this);
// console.log(myArrayFilled);

// get content of an array
// explain .length

// console.log(myArrayEmpty[5])
// myArrayEmpty[50] = 50;// this is very bad syntax

for(let i = 0; i < myArrayEmpty.length; i++){
  // console.log(myArrayEmpty[i]);
}

for(let element of myArrayEmpty){
  // console.log(element);
}
let indexesOfDeletedElements = [];
// remove element from array
// explain .splice(index, how many)
for(let i = 0; i < myArrayEmpty.length; i++){
  if(myArrayEmpty[i] < 50){
    console.log(myArrayEmpty[i]);
    indexesOfDeletedElements.push(i);
    myArrayEmpty.splice(i, 1);

  }
  // console.log(myArrayEmpty[i]);
}
console.log(myArrayEmpty);
console.log(indexesOfDeletedElements);
