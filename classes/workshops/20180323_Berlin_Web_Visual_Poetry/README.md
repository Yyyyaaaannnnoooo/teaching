# WEB VISUAL POETRY WORKSHOP

## What will we do?

The aim of the workshop is to introduce you to programming. We will cover the basic elements to build an interactive website with [p5.js](https://p5js.org/). 

With this tool we will be able transform a webpage into our canvas and with few line of code we will make it colorful and interactive.

As inspiration I suggest to take the websites made by [Rafël Rozeandaal](https://www.newrafael.com/websites/)

We will cover those topics:

-1. Prepare the index.html file and all the folders

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
 6. Sound
   ```javascript
        let osc;
        let env;
        osc = new p5.Oscillator();
        osc.setType('triangle');
        osc2 = new p5.Oscillator();
        osc2.setType('sawtooth');
        env = new p5.Env();
        osc.start();
        osc2.start();
        env.setADSR(0.001, 0.5, 0.1, 0.5);
        env.setRange(1, 0);
        volume0();

        /**
         AUDIO STUFF
        */
        //THE FLLOWING FUNCTIONS TURN ON AND OFF THE SOUND
        function volume0(){
            masterVolume(0, 0.5);
        }
        function volumeUp(){	
            masterVolume(1, 0.5);
        }
        //improve audio!!!!
        function playSound(num, divider){
            let midiValue = map(num, 0, document.getElementById("size").value, 20, 100);
            let frequency = map(num, 0, document.getElementById("size").value, 120, 660);
            var freqValue = midiToFreq(midiValue);
            osc.freq(freqValue);
            // osc2.freq(frequency);
            // env.add(osc2);
            env.play(osc, 0, 0.1);
            // env.play(osc2, 0, 0.1);
            // env.add(osc2);
        }
```

## Dependencies a.k.a. what you need to download

1. A good code editor. I sugest either [Visual Studio Code](https://code.visualstudio.com/) (Higly Recommended),  [Sublime Text 3](https://www.sublimetext.com/) or [Atom](https://atom.io/)
2. I know everybody hates it but we will use [Chrome](https://www.google.com/chrome/) as browser. It has good built in console for debugging, so make sure to download it.
3. Please download [MAMP](https://www.mamp.info/de/) the free version of it.
4. Make sure to download the complete [p5.js](https://p5js.org/download/) library.
5. ~~Also make sure to download this blankExample.zip [here](https://github.com/yanoteaching/SFAC/blob/master/classes/blankExample.zip) by either clicking __download__ or __view raw__~~ NOPE!

## Inspirations

* [Rafaël Rozendaal](https://www.newrafael.com/) check his websites
* [Ted Davis](http://www.teddavis.org/#projects)
* [Daniel Shiffman](http://shiffman.net/) for some tutorials
* [Zach Liebermann](http://thesystemis.com/)
* [Gene Kogan](http://genekogan.com/) AI!
* [Pippin Barr](https://www.pippinbarr.com/category/games/) 
* [Katie Rose Pipkin](http://katierosepipkin.com/)
