# Early Computer Art (30.04.2025)


## References:
* [Vera Molnar](https://www.google.com/search?sca_esv=e6cbb193bcbd8d96&hl=en&q=vera+molnar&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBjLjqIC1CYKD9D-DQAQS3Z44LBK6yTXN_5587Z3ya9D7YaZgR7wOcelL7QO8tGqeqPg3wL_up5PM6gpd3X51iM5Lxec_LxvAHp2fQBxKkFjlVB1hnKs8azmIEgz2y9cQjxkXx7KoCTUV_591RdzoLpSHbs6BGrIkNRfB1nLwjY-WCJUAJA&sa=X&ved=2ahUKEwjIkv2KyoSMAxVPgf0HHeobHRwQtKgLegQIFxAB&biw=2560&bih=1302#vhid=eMhkSykdQSt1tM&vssid=mosaic)
* [Bridget Riley](https://www.google.com/search?sca_esv=e6cbb193bcbd8d96&hl=en&q=Bridget+Riley&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBjLjqIC1CYKD9D-DQAQS3Z44LBK6yTXN_5587Z3ya9D7hwo9slGPLDAsNLl5XtZMmgWLYCCECmC6vfubQXxuBctbhQGqBEEz1X6DcDvISG4hiFJU-OKkmAfrwJKb1v6z4x9Etdi66RTx93zxliTNT2RGafA2F59qXn-OkmehMNgcYClAQg&sa=X&ved=2ahUKEwjA4Nmyy4SMAxV48LsIHYvYOyUQtKgLegQIGhAB&biw=2560&bih=1302#vhid=rlPjUSyxPvleSM&vssid=mosaic)
* [Lillian F. Schwartz](https://www.google.com/search?sca_esv=e6cbb193bcbd8d96&hl=en&q=Lillian+F.+Schwartz&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBnsX62dbVmWR6QCQ5QEtPRrN1KFHti9EP_dqC742rxzHRLBZCil0j9azScQIqAr91A_0wL2IpY3AzDXFwXxvoefAS8agvZi8uq54xqUnkjI7wRVrDZLPWPaoLlugFdQCjZLAp0Zw9fg2zC9lNNCbuu-BrXQFwQpfHWzMFD8xiMVxvJ90MQ&sa=X&ved=2ahUKEwjPttjiy4SMAxX1gf0HHXjHDSAQtKgLegQIFhAB&biw=2560&bih=1302#vhid=Uv2uIc9TK2MZ7M&vssid=mosaic)

## Re-code && Re-think
Show Dither project

What is the meaning of randomizing a value?

Rules and ruleset what can I improve by changing how the algorithm works.

"Daily prompts" for advanced students


### Sol Levitt

### Agnes Martin

### From Vera Molnár:
* how to draw a square
* how to rotate a square
* how to draw a lot of squares
* how to add randomness
* how to apply randomness selectvely

### From Bridget Riley:
* how to draw lines
* how to generate smooth round paths for lines to follow
* how draw a lot of lines
* how to add randomness
* how to apply randomness selectvely

### From Lillian F. Schwartz:
* how to use images in our code
* how to use pixel information to generate abstract images
* how to add randomness
* how to apply randomness selectvely


## Code Examples
### Boilerplate

```javascript
function setup() {
    // happens only once at page load
    // input: width, height
    createCanvas(600, 600)
    // input color, (r, g, b) OR (0 => 255) for B/W
    background(127)
}

function draw() {

}
```

### Draw a single Square

```javascript
function setup() {
    // happens only once at page load
    // input: width, height
    createCanvas(600, 600)
    // input color, (r, g, b) OR (0 => 255) for B/W
    background(127)
}

function draw() {
  // square takes 3 values:
  // x, y, size of the edges
  square(0, 0, 200)
}
```

### Multiple squares with for loop

```javascript
for (let i = 0; i < 20; i++) {
  fill(255)
  // square distributed along x axis
  square(i * (20 + 10), 230, 20)
}

for (let i = 0; i < 20; i++) {
  noFill()
  stroke(255)
	// stacking squares with no fill
  square(width - 200, 0, 10 * i)
}

```

### Nested for loops and if statement mixup convolution of doom

```javascript
// first loop 
for (let i = 0; i < 20; i++) {
  // second loop 
  // be careful with curly brackets!!!!
  for (let j = 0; j < 10; j++) {
    noFill()
    // series of if statement to define 
    // the fill color depending on i and j
    // from the for loops
    if (i >= 10) {
      fill(0, 255, 0)
    }
    if (j >= 5) {
      fill(255, 0, 0)
    }
    if (j >= 5 && i >= 10) {
      fill(0, 0, 255)
    }
    // draw square at x position = i
    // draw square at y position = j
    square(i * (20 + 10), 290 + j * (20 + 10), 20)
  }
}
```

### for loop and rotation in place

```javascript
for (let i = 0; i < 20; i++) {
  rectMode(CENTER)
  noFill()
  stroke(255, 0, 0)
  // push and pop 
  // help in applying 
  // transformations
  // to primitives in dividually
  push()
  // always use translate
  // as first isntruction
  translate(300, 100)
  // than rotate
  rotate(i * PI / 19)
  // since primitve is translated
  // x, y needs to be set to 0
  square(0, 0, 10 * i)
  pop()
}
```

### smoothing jittery values

```javascript
// Thanks to Ted Davis!!!
/* VALUE SMOOTHING */
function smoothVal(inputVal, outputVal) {
  let tarVal = inputVal;
  let calcVal = tarVal - outputVal;
  outputVal += calcVal * easing;
  return outputVal;
}
```



# Presentation Sprint 1 (06.05.2025)

## TO DO:
* all students have a github account
* work with HTML and CSS for web protfolio
* print their work

### Group presentation of other group work in circular fashion
g1 presents g2 => g2 presents g3 => g3 presents g4 => g4 presents g5 => g5 presents g1
