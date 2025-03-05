let is_model_ready = false
function modelReady() {
  // model is ready
  console.log('Model Loaded!');
  is_model_ready = true
}

const s = function (p5) {

  p5.sentiment = null;

  p5.preload = function () {
    console.log(ml5)
  }
  
  p5.setup = function () {
    p5.sentiment = ml5.sentiment('movieReviews', modelReady);
    p5.noCanvas()
  }
  
  p5.draw = function (){
    if(is_model_ready === true){
      const result = p5.sentiment.predict('I love this movie')
      console.log(result)
      p5.noLoop()
    }else{
      console.log('the model is not loaded yet!')
    }
  }
}


const myp5 = new p5(s)