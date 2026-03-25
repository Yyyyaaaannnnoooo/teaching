// content-script.js
/**
 * This is the content script use it to inject 
 * javascript on any active html page
 */
"use strict";
console.log("content script loaded")

/**
 * the following functions are used to access HTML 
 * elements of a webpage
 * the one below here searches for al paragraphs
 * aka <p> elements
 */
let p_el = document.querySelectorAll('p')
// this for loops iterate over all of the found html elements
for (let i = 0; i < p_el.length; i++) {
  let element = p_el[i];
  // console.log(element);
  element.innerHTML = ""
  element.textContent = "Cats are cute"
}

/**
 * the one below here searches for al paragraphs
 * aka <span> elements
 */
let span_el = document.querySelectorAll('span')
// this for loops iterate over all of the found html elements
for (let i = 0; i < span_el.length; i++) {
  let element = span_el[i];
  // console.log(element);
  element.innerHTML = ""
  element.textContent = "Cats are cute"
}




setTimeout(() => {
  let img_el = document.querySelectorAll('img')

  let image_url = browser.runtime.getURL("cat.png")

  for (let i = 0; i < img_el.length; i++) {
    let element = img_el[i];
    // console.log(element);
    element.src = ""
    // console.log(image_url);
    element.src = image_url
  }

  let sources = document.querySelectorAll('source')
  for (let i = 0; i < sources.length; i++) {
    const element = sources[i];
    element.srcset = image_url
  }
}, 5000)






let size = 100

const s = function (sketch) {
  sketch.setup = function () {
    //document.body.style.userSelect="none";
    let h = document.body.clientHeight;
    let c = sketch.createCanvas(sketch.windowWidth, h);
    // sketch.pixelDensity(1);
    c.position(0, 0);
    const canvas = c.canvas;
    console.log(canvas);
    canvas.style.position = "fixed"
    canvas.style.pointerEvents = "none"
  }

  sketch.draw = function () {
    sketch.clear();
    // sketch.background(0)
    sketch.fill(255, 0, 0);
    sketch.noStroke();
    sketch.ellipse(sketch.mouseX, sketch.mouseY, 200)
  }
}
let myp5 = new p5(s);



// function extract_cookie(data, tab) {
//   console.log("COOKIE");
//   console.log(data);
//   console.log(tab);
//   size++
// }
// function extract_network(data, tab) {
//   console.log("NETWORK");
//   console.log(data);
//   console.log(tab);
//   let body = convert_raw(data)
//   console.log(body);
// }

// browser.runtime.onMessage.addListener((request) => {
//   // console.log("Message from the background script:");
//   switch (request.type) {
//     case "network":
//       // console.log("network message");
//       // extract_network(request.data, request.tab)
//       break;
//     case "cookie":
//       // console.log("cookie message");
//       // extract_cookie(request.data, request.tab)
//       break;

//     default:
//       break;
//   }
//   // console.log(request.data);
//   return Promise.resolve({ response: "message received!" });
// });


// function convert_raw(network) {
//   let result = null
//   if (!!network.requestBody.raw) {
//     /**
//      * solution to translate RAW bytes into readable JSON
//      * Source of the solution found here:
//      * https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
//      */
//     console.log('~~~~~ raw request body ~~~~');
//     console.log(network.url);
//     // // console.log(network);
//     // // const raw_body = String.fromCharCode.apply(null, new Uint8Array(network.requestBody.raw[0].bytes))
//     result = String.fromCharCode.apply(null, new Uint8Array(network.requestBody.raw[0].bytes))
//     result = JSON.parse(result)
//   }
//   return result
// }
