console.log('ml-script loaded');

// When the model is loaded
function modelLoaded() {
  classifier_loaded = true
  console.log('coco ssd Loaded!');
}


const s = function (p5) {
  p5.classifier_loaded = false

  p5.classifier = null
  p5.objectDetector = null
  p5.faceApi = null
  p5.sentiment = null

  p5.detectionOptions = {
    withLandmarks: true,
    withDescriptors: false,
  };

  p5.preload = function () {
    console.log(ml5);
    p5.classifier = ml5.imageClassifier('MobileNet');
    p5.faceapi = ml5.faceApi(p5.detectionOptions);
    console.log('models loaded');
  }

  p5.setup = function () {
    p5.objectDetector = ml5.objectDetector('cocossd', {}, modelLoaded);
    p5.sentiment = ml5.sentiment('movieReviews', modelLoaded);
    p5.noCanvas()
  }

  p5.classify = function (img) {
    console.log('imged passed to object classsifier');
    p5.classifier.classify(img, (err, results) => {
      if (err) {
        console.log('image classifier error');
        console.log(err);
      } else {
        console.log(results);
        // do something with this info
      }
    });
  }

  p5.face_detection = function (img) {
    console.log('imged passed to face API');
    // console.log(img);
    p5.faceapi.detectSingle(img, (err, results) => {
      if (err) {
        console.log('face api error');
        console.log(err);
      } else {
        console.log(results);
        // remove img if it contains a face
        console.log(img)
        console.log(img.parentElement)
        // img.parentElement.innerHTML = ''
      
      }
    });
  }

  p5.object_detection = function (img) {
    console.log('imged passed to coco ssd classifier');
    p5.objectDetector.detect(img, (err, results) => {
      if (err) {
        console.log('object api error');
        console.log(err);
      } else {
        // console.log(results[0].label);

        for(let i = 0; i < results.length; i++){
          console.log(results[i].label);
          if(results[i].label === 'person'){
            img.parentElement.style.backgroundColor = '#ff0000'
          }
        }

        // do something with this info
      }
    });
  }

  p5.sentiment_analysis = function (text) {
    console.log(text);
    const prediction  = p5.sentiment.predict(text)
    console.log(prediction);
  }

}

const myp5 = new p5(s)




window.onclick = e => {
  // console.log(e.target);  // to get the element
  // console.log(e.target.tagName);  // to get the element tag name alone;

  if(e.target.tagName === 'P'){
    console.log('passing paragraph to sentiment analyzer');
    console.log(e.target.innerText);
    myp5.sentiment_analysis(e.target.innerText)
  }else{
    const p = e.target.querySelectorAll('p')
    console.log(p);
    // if(p !== null){
    //   console.log('passing paragraph to sentiment analyzer');
    //   myp5.sentiment_analysis(p.innerText)
    // }
  }

  if (e.target.tagName === 'IMG') {
    console.log('passing image to classifier');
    myp5.classify(e.target)
    myp5.face_detection(e.target)
    myp5.object_detection(e.target)
  } else {
    const img = e.target.querySelector('img')
    // console.log(img);
    if (img !== null) {
      console.log('passing image to classifier');
      myp5.classify(img)
      myp5.face_detection(img)
      myp5.object_detection(img)
    }
  }
}