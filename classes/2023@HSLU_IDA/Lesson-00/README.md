# TO DO:
* present yourself and myself and hubs 
* Installing necessary software
    - Firefox
    - Visual Studio Code 
    - Live Server Extension

* Boilerplate

* Debugging 101 aka intro to JS - HTML - CSS


## Exercise "Slider of Doom"
> build a sigle slider in html that creates randomness in the sketch. But try to keep everything inside the screen 😸
1. Setup the sketch using the boilerplate
2. draw ellipse in the middle of the screen
```javascript
// inside draw
background(51);
// here you draw to the screen
// fill(r, g, b) or fill(0=>255) for b/w
fill(255);
// noFill();
// stroke(255)
// strokeWeight(2)
ellipse(200, 200, 100, 100);
```
3. control the ellipse with the mouse
```javascript
/// ~~~~~~~~ ///
// control the ellipse using the mouse
// mouseX, mouseY
ellipse(mouseX, mouseY, 100, 100);
/// ~~~~~~~~ ///
```
4. Save mouse coordinates in variables
```javascript
/// ~~~~~~~~ ///
// maybe is good to save mouseX and mouseY into a variable
// let x = mouseX;
// let y = mouseY;
ellipse(x, y, width, height)
/// ~~~~~~~~ ///
```
5. Use for loop to draw multiple ellipses
```javascript
/// ~~~~~~~~ ///
// draw multiple ellipses that follow the mouse
for (let i = 0; i < 20; i++) {
  ellipse(x + i * 10, y + i * 10, 100, 100);
}
/// ~~~~~~~~ ///
```
6. Draw the ellipse in different sizes or colors
```javascript
/// ~~~~~~~~ ///
// what about different size depending on the loop
ellipse(x, y, i * 10, i * 10);
/// ~~~~~~~~ ///

/// ~~~~~~~~ ///
// what about different color depending on the loop
stroke(i * 10, 100, 255)
// what about fill()? who can solve the fill issue
/// ~~~~~~~~ ///
```
7. what about alternating ellipses and rect
```javascript
/// ~~~~~~~~ ///
// what about alternating ellipse and rect
if (i % 2 === 0) {
  rect(x, y, i * 10 * sinus, i * 10);
} else {
  ellipse(x, y, i * 10, i * 10 * sinus);
}
/// ~~~~~~~~ ///
```
8. what about nesting loops?
```javascript
/// ~~~~~~~~ ///
// what if we nest another loop?
for (let j = 0; j < 20; j++) {
  ellipse(x + j * 10, y + i * 10, 10, 10);
  // what about alternating ellipse and rect in the nested loop?
}
/// ~~~~~~~~ ///
```