# Bonjour Code

## What will we do?

The aim of the workshop is to introduce you to programming. We will cover the basic elements to build an interactive website with [p5.js](https://p5js.org/).

With this tool we will be able transform a webpage into our canvas and with few line of code we will make it colorful and interactive.

As inspiration I suggest to take a look to the websites made by [Rafël Rozeandaal](https://www.newrafael.com/websites/)

## Schedule

### ~~19.03.2018 18:00 – 22:00~~

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

### ~~26.03.2018 19:15 – 22:00~~

-3. [How to disable telemetry reporting](https://code.visualstudio.com/docs/supporting/faq#_how-to-disable-telemetry-reporting)

-2. NO MAMP

-1. folders etc.

0. moving things without the mouse


1. operations `++` `+=` `--` `-=` `%`

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

### ~~09.04.2018 18:15 – 22:15~~

-1. Final Presentation 05.05.2018
0. [HTML](https://www.w3schools.com/tags/default.asp) & [CSS](https://www.w3schools.com/cssref/default.asp)

1. DOM events inputs buttons sliders

2. functions

### ~~16.04.2018 18:00 – 22:00~~

0. Terminal & bash commands

   ```bash
   cd #change directory
   pwd #prints the current directory to the terminal
   ls #shows the content of a directory
   mv #move something
   mkdir #make directory
   ```

1. [Git](https://git-scm.com/), [Brew](https://brew.sh/) & [Github](https://github.com/)

   ```bash
   /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    #install brew
   brew install git #install git
   ```

2. Pushing Website to github pages

   ```bash
   git add . #stage changes
   git commit #commit changes
   git push #pushes changes to the remote directory
   git pull #pulls from the remote directory
   git clone #clones a repository
   ```
   
3. more functions

### ~~23.04.2018 18:15 – 22:00~~

1. Array

   ``` javascript
   // declare an empty array
   let myArrayEmpty = [];
   // declare a filled array
   let myArrayFull = [1, 2, 3, 4, 5, 6, 7];
   // fill an empty array
   let numberOfElements = 100;
   for(let i = 0; i < numberOfElements; i++){
       myArrayEmpty.push(i);// .push(element) pushes any element at the end of the Arrray
   }
   // myArrayEmpty = [1, 2, 3, ..., 99]
   // get content of an array with standard for loop
   for(let i = 0; i < numberOfElements; i++){
       console.log(myArrayEmpty[i]);// prints the content of the array in the console
   }
   // get content with for of loop
   for(let element of myArrayEmpty){
       console.log(element);
   }
   // remove element from array
   myArrayFull.splice(2, 1);
   ```

2. Ted Davis guest lecture on gyroscope on handheld devices

   ```html
     <meta name="viewport" width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0>
     <meta name="apple-mobile-web-app-capable" content="yes">
     <meta name="apple-mobile-web-app-status-bar-style" content="black">
   ```

   ​

   ​

### ~~30.04.2018 18:15 – 22:00~~

1. Objects

### 05.05.2018 Exhibition

#### Exhibition @[Bonjour Baby](http://bonjourbaby.ch/) with artworks by:

 * [Haejung Paik](https://phjessi.github.io/ondevicemotion_eyes/)

* [Max Frischknecht](https://maxfrischknecht.github.io/gyroColors/)

* [Ted Davis](http://teddavis.org/spinningstripedsquares/)

* [Anonymous Otter](https://s4ac.github.io/BallWallGame/)

All the artwork are built upon the `devicemotion` feature. This means that they won't work on laptop or desktop machines, but only on hand held devices.

## Dependencies a.k.a. what you need to download

1. A good code editor. I sugest either [Visual Studio Code](https://code.visualstudio.com/) (Higly Recommended),  [Sublime Text 3](https://www.sublimetext.com/) or [Atom](https://atom.io/)
2. I know everybody hates it but we will use [Chrome](https://www.google.com/chrome/) as browser. It has good built in console for debugging, so make sure to download it.
3. Please download [MAMP](https://www.mamp.info/de/) the free version of it.
4. Also make sure to download this blankExample.zip [here](https://github.com/yanoteaching/SFAC/blob/master/classes/BlankExample.zip) by either clicking __download__ or __view raw__

## Readings
1. [Eloquent JavaScript](https://eloquentjavascript.net/Eloquent_JavaScript.pdf)

## Inspirations

* [Rafaël Rozendaal](https://www.newrafael.com/) check his websites
* [Ted Davis](http://www.teddavis.org/#projects)
* [Daniel Shiffman](http://shiffman.net/) for some tutorials
* [Zach Liebermann](http://thesystemis.com/)
* [Gene Kogan](http://genekogan.com/) AI!
* [Pippin Barr](https://www.pippinbarr.com/category/games/)
* [Katie Rose Pipkin](http://katierosepipkin.com/)
