# Arrays 
> In computer science, an array is a data structure consisting of a collection of elements, of same memory size, each identified by at least one array index or key.

```javascript
let array = []
array[0] = 1
array[1] = 2
array[2] = 3
array[3] = 4
array[4] = 5
array[5] = 6
array[6] = 7

// or to avoid writing so much
array = [] // <= empty the array
array = [1, 2, 3, 4, 5, 6, 7]
// as you can see we are pairing values with identifiers that are unique!

console.log(array[0])
// prints: 1
console.log(array[1])
// prints: 2
console.log(array[2])
// prints: 3
console.log(array[3])
// prints: 4
```

## Add and remove items from array dinamically

```javascript
// Add at the end of the array
array.push(8)
console.log(array[7])
// prints: 8

// remove first item
array.splice(0, 1)
console.log(array)
// prints: [2, 3, 4, 5, 6, 7, 8]
// remove second item
array.splice(1, 1)
console.log(array)
// prints: [3, 4, 5, 6, 7, 8]
// remove second item
array.splice(2, 1)
console.log(array)
// prints: [4, 5, 6, 7, 8]

// if you just want to remove the first element than use
array.shift()
```

## Arrays and for loops
> Usually you will always see arrrays paired with for loops. Either to read the content of the array or to fill it values

```javascript
// fill an array with 10 random values
let array = [] // <= initialize empty array
for(let i = 0; i < 10; i++){
  let random_value = random(0, 100)
  array[i] = random_value
}

console.log(array)
// prints: [ 68.23675987944368, 6.89512201485647, 70.67343512447049, 41.57013768655191, 52.60162342848205, 21.060651416221678, 68.59005136196043, 99.5132624291166, 77.34052337546875, 27.70091315907466 ]

// fill the array with gradually growing values
array = [] // empty the array
for(let i = 0; i < 10; i++){
  let value = (i + 1)  * 10
  array[i] = value
}
console.log(array)
// prints: [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]

```
