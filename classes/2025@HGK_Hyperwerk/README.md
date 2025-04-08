# HaPoC.002 | Input Theory of Data Fictions

There is a recurring saying among laptops connected to YouTube Servers:

```javascript
l = qj('minimum_duration_to_consider_mouseover_as_hover', 500),
m = qj('max_duration_to_consider_mouseover_as_hover', 600000);
```

That translated into human lingo it says: `It is engagement only up to 10 minutes`

The process of building AI systems requires acquiring enormous amounts of data. However, how this data is acquired within platforms is often opaque. As shown in the code above, some interactions are reduced to simplistic binary logic.

During this two-day workshop, the class will be introduced to the basics of coding through the lens of keyboard and mouse interactions. Students will learn JavaScript and [p5.js](https://p5js.org/), a beginner-friendly coding environment that transforms webpages into spaces for experimental interactions.

Beyond learning basic coding skills, the goal is to develop a "data fiction" about the data that can be retrieved through interactions with the machine. This will be explored through group projects in the form of websites, reflecting the reductive nature of discretizing interactions into binary operations.


### Dependencies a.k.a. what you need to download

* [Visual Studio Code](https://code.visualstudio.com/) Mac && Windows!
  * add extensions: live-server
* [Introduction to p5.js](https://www.youtube.com/watch?v=8j0UDiN7my4&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA) by Daniel Shiffman


### References

* [Everest Pipkin](http://everest-pipkin.com/)
* [clickclickclick](https://clickclickclick.click)
* [Joana Moll](http://www.janavirgin.com/) | [DEFOOOOOOOOOOOOOOOOOOOOOREST](https://www.janavirgin.com/CO2/DEFOOOOOOOOOOOOOOOOOOOOOREST.html)
* [Alex de Vries - The growing energy footprint of artificial intelligence](https://www.sciencedirect.com/science/article/pii/S2542435123003653)
* [Artificial intelligence: How much energy does AI use?](https://unric.org/en/artificial-intelligence-how-much-energy-does-ai-use/)
* [Weise 7](https://weise7.org/)

### Hello p5.js!

This part of the course will be concentrated in developing the basic skills of coding using [p5.js](https://p5js.org/). This JavaScript library builds on [Processing](https://processing.org/) a coding framework for generative design.

JavaScript is the most used scripting language for the web. By learning this tool you will be able to design simple interactive websites.

__Tutorials__

* [Introduction to p5.js](https://www.youtube.com/watch?v=8j0UDiN7my4&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA) by Daniel Shiffman

__GETTING HELP__ ⛑

To get any help while learning programming the best resource is the internet.

You can usually find help by typing the programming language you need help for and than adding the problem you are trying to solve (_type the following in google_)

> javascript how to get the text content of a div

__[Answer](https://stackoverflow.com/questions/8647216/get-content-of-a-div-using-javascript)__

Really helpful are the MDN [[mozilla foundation](https://developer.mozilla.org/en-US/)] references for [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) and [css](https://developer.mozilla.org/en-US/docs/Web/CSS)

__DEBUGGING__ 🐞

> _1) On average, a developer creates 70 bugs per 1000 lines of code_
>
> _2) 15 bugs per 1,000 lines of code find their way to the customers_
>
> _3) Fixing a bug takes 30 times longer than writing a line of code_
>
> _4) 75% of a developer’s time is spent on debugging (1500 hours a year!)_

Luckily there is a nice console on every browser that helps us debug our code.

To open the console:

* in Chrome: `cmd + alt + j` for windows `ctrl + shift + j`
* in Firefox: `cmd + alt + k` for windows `ctrl + shift + k`
* in Safari: safari is annoying. 
  1. open safari
  2. go to preferences `cmd + ,`
  3. go to advanced
  4. at the bottom of the menu check 
     * [x] "Show Develop menu in menu bar"
  5. now you can type `cmd + c` to show the console
* in Edge press `F12` or right-click and select "Inspect Element"

`console.log(message || object || anything else)` will be your best friend.

ERROR EXAMPLES

```pseudocode
sketch.js:8 Uncaught ReferenceError: color is not defined at sketch.js:8
// this means that there is an error in line 8 of the file sketch.js

Uncaught Error: [object Arguments]is not a valid color representation.
    at d.Color._parseInputs (p5.min.js:7)
    at new d.Color (p5.min.js:6)
    at e.d.color (p5.min.js:6)
    at d.Renderer2D.background (p5.min.js:8)
    at e.d.background (p5.min.js:7)
    at setup (sketch.js:15) // <== here is our error in line 15 of sketch.js
    at e.<anonymous> (p5.min.js:7)
    at e.<anonymous> (p5.min.js:7)
    at new e (p5.min.js:7)
    at e (p5.min.js:7)
```

__THE FOLDER 📂 STRUCTURE:__

```
my-website
|--/index.html
|--/style.css
|--/js
   |--/sketch.js
   |--/libraries
      |--/p5.js
      |--/other-libraries-you-may-need.js
```

__index.html:__

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>my-website</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- load the styling -->
    <link rel="stylesheet" type="text/css" media="screen" href="style.css" />
    <!-- load the js files -->
    <script src="js/libraries/p5.js"></script>
    <script src="js/sketch.js"></script>
</head>
<body>
    <div id="p5Sketch">
    <!-- we leave it empty -->
    </div>
</body>
</html>
```

__style.css:__

```css
#p5Sketch{
    position: fixed; /* or relative or whatever you decide */
    width: /* you define it! */;
    height: /* you define it! */;
    /* i usually do full screen */
}
```

__sketch.js:__

```javascript
let cnv;
function setup(){
    // setting up the sketch before to start drawing
    cnv = createCanvas(400, 400); // or (innerWidth, innerHeight) [full screen]
    cnv.parent('p5Sketch');// here we tell p5 in wich div should the sketch be placed
}

function draw(){
    // here the drawing happens
    // drawing a rectangle
    rect(x, y, width, height);
    // drawing circle
    ellipse(x, y, width, height);
    // drawing a free form defining the single vertices
    beginShape();
    vertex(x, y); // you can add as many vertices as you like
    endShape(x, y);
    
    // loops!
    for(start, end, increment){
        // repeat something
    }
    
    // if statement
    if(statement == true){
        // do something
    }else{
        // do something else
    }
}

/* VERY IMPORTANT FEATURE TO RESIZE THE CANVAS*/

function windowResized(){
    resizeCanvas(innerWidth, innerHeight);
}
```

 


__[What is the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)__

In this lesson we will look at interaction between DOM elements and javascript, [here](https://developer.mozilla.org/en-US/docs/Web/Events) a complete list of the many event listener you can attach to DOM elements

 Arrays

```javascript
let myArray = [];
myArray = [1, 45, 66, 3, 67, 30];
myArray.push(45);
// myArray: [1, 45, 66, 3, 67, 30, 45]
// you can fill it with strings or objects and more...
```

__BONUS:__

[execute functions at a specific interval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

```javascript
setInterval(functionToExecute, 1000); // the second attribute defines the interval in milliseconds => 1000 = 1 second || 60 * 1000 = 1 minute etc. 

function functionToExecute(){
    // some actions to be executed
    // for example sending data to the server
}
```



