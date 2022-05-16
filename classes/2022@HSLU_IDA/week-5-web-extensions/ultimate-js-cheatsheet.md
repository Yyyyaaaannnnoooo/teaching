```bash
     ██╗███████╗
     ██║██╔════╝
     ██║███████╗
██   ██║╚════██║
╚█████╔╝███████║
 ╚════╝ ╚══════╝

 ██████╗██╗  ██╗███████╗ █████╗ ████████╗
██╔════╝██║  ██║██╔════╝██╔══██╗╚══██╔══╝
██║     ███████║█████╗  ███████║   ██║
██║     ██╔══██║██╔══╝  ██╔══██║   ██║
╚██████╗██║  ██║███████╗██║  ██║   ██║
 ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝

███████╗██╗  ██╗███████╗███████╗████████╗
██╔════╝██║  ██║██╔════╝██╔════╝╚══██╔══╝
███████╗███████║█████╗  █████╗     ██║
╚════██║██╔══██║██╔══╝  ██╔══╝     ██║
███████║██║  ██║███████╗███████╗   ██║
╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝

```

## including JS file

```html
<script src="path/to/javscript/script.js"></script>
<!-- 
  Remember that:
  ../ => one folder above
  ./ => this folder, can be omitted but sometimes some filesystems like it to be specified
  :~:~:~:
  If something does not work check the path
 -->
```

## comments

```javascript
// single line comment

// from the keyboard cmd + shift + 7 [for standard german keyboard]

/*
 multi
 line
 comment
 :~:~:~:~:

 use comments to remeber what the current code does
*/
```

## variables

```javascript
// containers for data types

let your_variable_name_0 = 1; // <= a number

let your_variable_name_1 = "some text"; // <= a string

let your_variable_name_2 = [0, 1, 2, 4, 5]; // <= an array

let your_variable_name_3 = {
  age: 30,
  name: "rob",
  id: "jhlhagfhjglagljhgfhlja",
}; // <= an object aka JSON

// you can reassign values in a variables

your_variable_name_0 = 2; // or 3 or any other number, string, array, object or function
your_variable_name_0 = 3 + 2; // variable = 5
your_variable_name_0 = your_variable_name_0 + 2; // variable = itself (5) + 2 = 7
```

## learn to debug

```javascript
/*
 Developing requires a lot of patience and debugging
 therefore using the bwser bbuilt in console is vital
*/

// For Example

/*
  Uncaught ReferenceError: fetch_cats_facts is not defined
      <anonymous> http://127.0.0.1:5501/classes/2022@HSLU_IDA/week-4-JS-API/New Folder With Items/assets/scripts/script.js:38 // <== here you find the line with the error
  script.js:38:1
      <anonymous> http://127.0.0.1:5501/classes/2022@HSLU_IDA/week-4-JS-API/New Folder With Items/assets/scripts/script.js:38
*/

// console.log is your best friend
console.log("string");
console.log(variable);
```

## functions

```javascript
// functions are declared like below
function do_something(parameter_1, parameter_2, parameter_3) {
  // do something with the parameters
}

let a = 0;
let b = "string";
let c = 34;
// and used like this in code
do_something(a, b, c);
```

## if statement

```javascript
// if statements interact with the flow of your code
// think of them as deciding whether your program should do
// one aaction or another one

if (statement == true) {
  /*
    a statement consist of an evaluation that results
    as being true or false.
    you can check whether a number is bigger, smaller or equal with this signs
    <  >  == 

    1 < 2 = true
    2 < 1 = false
    1 > 2 = false
    2 > 1 = true
    2 == 1 = false
    1 == 1 = true

    you can also check strings

    'hello' == 'hello' = true
    'hello' == 'hell' = false

  */
  // do something
} else {
  // do something else
}
```

## for loops

```javascript
// for loops execute some code for i amount of times
// i, j, k are usually the variables declared within a for loop
// but you are free to use any naming convention that suits you

for (let i = 0; i < 10; i++) {
  console.log(i);
}
// is the same as writing
for (
  let another_variale_name = 0;
  another_variale_name < 10;
  another_variale_name++
) {
  console.log(another_variale_name);
}

// for loops are useful to check the content of arrays
let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  // array.length returns the size of the array!
  let element = array[i];
  console.log(element);
}
```
