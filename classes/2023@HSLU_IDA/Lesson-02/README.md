# p5.js as Browser Extension

> Reference by [Daniel Shiffman](https://www.youtube.com/watch?v=IXXNIcQQLU8)

## Manifest.json
```json
{
  "manifest_version": 2,
  "name": "p5",
  "version": "1.0",
  "description": "Adds a p5 sketch on top of webpage",
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["p5.min.js", "sketch.js"]
    }
  ]

}
```

## Instance Mode

```javascript

const s = function (p5){
  // variable should be initialized using the p5. namespace
  p5.my_array = []
  p5.my_int = 137
  p5.etc = 'something'

  p5.setup = function(){
    // local variables can also be declared with let
    // but calling p5 functions requires p5. namespace
    let c = createCanvas(p5.windowWidth, p5.windowHeight)
    // there is a reason for saving the canvas into a variable
    // so that we can style it at setup
    // for exaple the position on the screen
    let x = 100
    let y = 200
    c.position = (x, y)
    // and also style its css
    // this comes handy for setting styling properties
    // for example remove pointer events so that 
    // it is possible to click trough the sketch
    c.style('pointer-events', 'none')
    // style its css position
    c.style('position', 'fixed')
    // z-index, so that the sketch is always on top
    c.style('z-index', '99999999')
    p5.clear() 
  }
  p5.draw = function (){
    // to have transparent background use clear
    // at the beginning of the sketch
    p5.clear() 
    // add your code after clearing the screen
  }

  p5.windowResized = function() {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
  }

}

// VERY IMPORTANT
// this starts your sketch
const myp5 = new p5(s)
```