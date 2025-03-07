# 🤩 DATA STRUCTURES 🤩

## What is an array?

```javascript
// Declare empty and filled array
let filled_array = [1, 2, 3, 4, 5, 6, 7];
console.log(filled_array);
console.log(filled_array[0]);
console.log(filled_array[1]);
console.log(filled_array[2]);
console.log(filled_array[...]);
// if we want to log each element

// long syntax
for (let i = 0; i < filled_array.length; i++) {
  let element = filled_array[i];
  console.log(elment);
}

// short syntax

for(let element of filled_array){
    console.log(element)
}

let array = [];

// Fill an array
// explain .push(element)

for (let i = 0; i < 10; i++) {
  let rand = Math.random() * 100;
  array.push(rand);
}


for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (let element of array) {
  console.log(element);
}

// array inception
outer_array = []
for(let i = 0; i < 10; i++){
  inner_array = []
  for(let j = 0; j < 10; j++){
    inner_array.push(j)
  }
  outer_array.push(inner_array)
}

// remove elements from the array
Array.splice(index, number_of_elements)
// remove the first item of the array
array.splice(0, 1)
// remove to elements from the beginning
array.splice(0, 2)
// remove number of items n at index i
array.splice(i, n)

// another way to remove the first element is to use the method .shift()
array.shift()
// is the same as
array.splice(0, 1)

// to completely erase an array

array = [] // array equals empty array; every data point is lost
```

## What is an Object a.k.a. JSON

```javascript
// you can think of a JSON as a way to describe a complex variable with multiple dimensions. For example the position in space of an object defined by x and y

let position = {
  x: 145,
  y: 765
};

// and you can have the same for other multidimensional variables. Like a user

let user ={
    age: 34,
    sex: m,
    mouse_movements: [...],
    typing_errors_timestamps: [...]
}

// access single items

console.log(user)
console.log(user.age)
console.log(user['age'])
console.log(user.sex)
console.log(user['sex'])
console.log(user.mouse_movements)
console.log(user['mouse_movements'])
console.log(user.typing_errors_timestamps)
console.log(user['typing_errors_timestamps'])

// looping all the items

Object.keys(user).forEach(key => {
    console.log(user[key])
})

```

## Exercise make a div or img that shows the path of the mouse

- three things needed:

  1. `document.onmousemove = (e) => {}` to record the mouse

  2. `window.requestAnimationFrame()` to animate the mouse movements

  3. `document.onkeypressed = () => {}` to record our mouse movements

  4. a cursor from [here](https://icons8.com/icons/set/cursor)

  5. load and save JSON || Please copy and paste

  ```javascript
  // save JSON data
  let save_button = document.querySelector("#save-button");
  save_button.addEventListener("click", () => {
    console.log("clicked");
    let data = JSON.stringify(mouse_movements); // <= !!! this needs to match your mouse_movements array !!!
    let blob = new Blob([data], { type: "application/json" });
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = "mouse_movements" + Date.now().toString() + ".json";
    a.click();
    URL.revokeObjectURL(url);
  });

  // load JSON data
  let load_button = document.querySelector("#load-button");
  load_button.addEventListener("click", () => {
    console.log("clicked");
    let input = load_button.querySelector("input");
    let file = input.files[0];
    let reader = new FileReader();
    reader.onload = (event) => {
      let data = JSON.parse(event.target.result);
      mouse_movements = data;
      console.log(mouse_movements); // <= !!! this needs to match your mouse_movements array !!!
    };
    reader.readAsText(file);
  });
  ```
