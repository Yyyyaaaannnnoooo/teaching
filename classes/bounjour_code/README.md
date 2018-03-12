# Bonjour Code

## What will we do?

The aim of the workshop is to introduce you to programming. We will cover the basic elements to build an interactive website with [p5.js](https://p5js.org/). 

With this tool we will be able transform a webpage into our canvas and with few line of code we will make it colorful and interactive.

As inspiration I suggest to take a look to the websites made by [Rafël Rozeandaal](https://www.newrafael.com/websites/)

## Schedule

### 19.03.2018 18:00 – 22:00

We will cover those topics:

0. Syntax `() [] {} , ;` 

1. variables `let something = be something`

2. coordinate system x, y, [z]{WEBGL}

3. basic shapes

   ```javascript
   rect(so far from the left, so below the top, so large, and so tall)//a rect
   ellipse(same, same, rather thin, but tall)//an ellipse
   ```

   ​

4. colors `background(r, g, b)` , `fill(r, g, b)`, `stroke(r, g, b)`

   ```javascript
   RGB color system
   background(255, 0, 0) // RED
   fill(0, 255, 0) // GREEN
   stroke(0, 0, 255) // BLUE
   ```

   ​

5. mouse coordinates `mouseX`  & `mouseY`

6. if statements

   ```javascript
   if(I am Something){
       change me into something else
   }else{
       let me be what I am
   }
   ```

### 26.03.2018 19:00 – 22:00

0. moving things without the mouse


1. operations `++` `+=` `--` `-=` ` %`

2. for loops

   ```javascript
   for(let me start here; and end here; increasing by something){
       do this so many times
   }
   ```

   ​
3. 3D WEBGL
    ```javascript
    createCanvas(600, 600, WEBGL)
    ```

4. transformations (rotate etc)
    ```javascript
    rotate(angle)
    rotateX(angle)
    rotateY(angle)
    rotateZ(angle)
    translate(x, y, z)
    push()
    pop()
    ```

5. mouse and keyboard events
    ```javascript
    function mouseClicked(){
        do something
    }
    function mouseDragged(){
        do something
    }
    function keyPressed(){
        do something
    }
    ```
### 09.04.2018 18:00 – 22:00

1. DOM events inputs buttons sliders
2. functions

### 16.04.2018 18:00 – 22:00

1. Github
2. Pushing Website to github pages
3. more functions

### 23.04.2018 18:00 – 22:00

1. Array

### 30.04.2018 18:00 – 22:00

1. Objects

### 05.05.2018 T.B.A.

#### open code night

## Dependencies a.k.a. what you need to download

1. A good code editor. I sugest either [Visual Studio Code](https://code.visualstudio.com/) (Higly Recommended),  [Sublime Text 3](https://www.sublimetext.com/) or [Atom](https://atom.io/)
2. I know everybody hates it but we will use [Chrome](https://www.google.com/chrome/) as browser. It has good built in console for debugging, so make sure to download it.
3. Please download [MAMP](https://www.mamp.info/de/) the free version of it.
4. Also make sure to download this blankExample.zip [here](https://github.com/s4ac/SFAC/blob/master/classes/BlankExample.zip) by either clicking __download__ or __view raw__

## Inspirations

* [Rafaël Rozendaal](https://www.newrafael.com/) check his websites
* [Ted Davis](http://www.teddavis.org/#projects)
* [Daniel Shiffman](http://shiffman.net/) for some tutorials
* [Zach Liebermann](http://thesystemis.com/)
* [Gene Kogan](http://genekogan.com/) AI!
* [Pippin Barr](https://www.pippinbarr.com/category/games/) 
* [Katie Rose Pipkin](http://katierosepipkin.com/)