# WEB VISUAL POETRY WORKSHOP

## What will we do?

The aim of the workshop is to introduce you to programming. We will cover the basic elements to build an interactive website with [p5.js](https://p5js.org/). 

With this tool we will be able transform a webpage into our canvas and with few line of code we will make it colorful and interactive. We will than use the built in gyroscope of smartphone and use it to interact with our newly created website.

As inspiration I suggest to take the websites made by [Rafël Rozeandaal](https://www.newrafael.com/websites/)

### We will cover those topics:

0. Prepare the index.html file and all the folders

0. Syntax `() [] {} , ;` 

1. variables `let something = be something`

2. basic shapes

   ```javascript
   rect(so far from the left, so below the top, so large, and so tall)//a rect
   ellipse(same, same, rather thin, but tall)//an ellipse
   ```

   ​

3. if statements

   ```javascript
   if(I am Something){
       change me into something else
   }else{
       let me be what I am
   }
   ```

4. for loops

   ```javascript
   for(let me start here; and end here; increasing by something){
       do this so many times
   }
   ```

5. mouse event

   ```javascript
   mouseX 
   mouseY
   function mouseClicked(){
       who clicked me?
   }

   function mouseDragged(){
       who clicks and moves me?
   }
   ```
 7. Device Motion (code by [Ted Davis](http://www.teddavis.org/#projects))
   ```javascript
    /* PREFS */
    let easing = 0.5; // set between 0 - 1
   
    /* VARS */
    let rx, ry, rz, sx, sy, sz;
    rx = ry = rz = sx = sy = sz = 0;
   
    /* ONDEVICEMOTION */
    // https://developer.mozilla.org/en-US/docs/Web/Events/devicemotion
    window.ondevicemotion = event => {
        /* RAW VALUES */
        rx = event.accelerationIncludingGravity.x;
        ry = event.accelerationIncludingGravity.y;
        rz = event.accelerationIncludingGravity.z;
   
        /* SMOOTHED VALUES */
        sx = smoothVal(rx, sx);
        sy = smoothVal(ry, sy);
        sz = smoothVal(rz, sz);
    };
   
    /* VALUE MAPPING */
    function mapVal(value, istart, istop, ostart, ostop) {
        return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
    }
   
    /* VALUE SMOOTHING */
    function smoothVal(inputVal, outputVal) {
        let tarVal = inputVal;
        let calcVal = tarVal - outputVal;
        outputVal += calcVal * easing;
        return outputVal;
    }
   ```
## Dependencies a.k.a. what you need to download

1. A good code editor. I sugest either [Visual Studio Code](https://code.visualstudio.com/) (Higly Recommended),  [Sublime Text 3](https://www.sublimetext.com/) or [Atom](https://atom.io/)
2. I know everybody hates it but we will use [Chrome](https://www.google.com/chrome/) as browser. It has good built in console for debugging, so make sure to download it.
3. Please download [MAMP](https://www.mamp.info/de/) the free version of it.
4. Make sure to download the complete [p5.js](https://p5js.org/download/) library.

## Inspirations

* [Rafaël Rozendaal](https://www.newrafael.com/) check his websites
* [Ted Davis](http://www.teddavis.org/#projects)
* [Daniel Shiffman](http://shiffman.net/) for some tutorials
* [Zach Liebermann](http://thesystemis.com/)
* [Gene Kogan](http://genekogan.com/) AI!
* [Pippin Barr](https://www.pippinbarr.com/category/games/) 
* [Katie Rose Pipkin](http://katierosepipkin.com/)