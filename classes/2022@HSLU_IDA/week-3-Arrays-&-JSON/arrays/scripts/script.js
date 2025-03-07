let number = 9
let string = 'string'

// arrays

let array = [3, 5, 67, 8, 90, 43, 23, 12, 3, 4]


// console.log(array.length)
// // console.log(array[8])

// for (let i = 0; i < array.length; i += 2) {
//   console.log('showing array in position: ' + i)
//   console.log(array[i])
// }

// cmd + /

// cmd + shift + 7

// how to fill an array with random values

let empty_array = []

let number_of_items = 50

for (let i = 0; i < number_of_items; i++) {
  let random_value = Math.random() * 1000
  empty_array.push(random_value)
}

console.log(empty_array)



// let's see what are objects


let object = {
  x: 100,
  y: 200,
  width: 100,
  height: 300
}

let div = document.createElement('div')
div.style.position = 'fixed'
div.style.width = object.width + 'px'
div.style.height = object.height + 'px'
div.style.top = object.y + 'px'
div.style.left = object.x + 'px'
div.style.backgroundColor = '#f33'

document.body.appendChild(div)

console.log(object)


document.onmousemove = (e) => {
  let pos_x = e.clientX
  let pos_y = e.clientY
  console.log(pos_x)
  console.log(pos_y)
}

