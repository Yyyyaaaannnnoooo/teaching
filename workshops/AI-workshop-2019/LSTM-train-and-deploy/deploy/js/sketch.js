let text_gen;

let slider_temp;

let slider_length;

function preload() {
  text_gen = ml5.LSTMGenerator('models/shelley/', model_ready);
}

function setup() {
  // for the moment we won't draw anything
  noCanvas();
  // but we will use the dom elements

  // we will need sliders to change temperature and lenght
  // slider: start | stop | initial value | step
  slider_temp = createSlider(0, 1, 0.5, 0.05);
  slider_temp.parent('sliders');

  slider_length = createSlider(30, 300, 100, 5)
  slider_length.parent('sliders')
}

function keyPressed() {
  // console.log(keyCode);

  // lets make the ENTER our key to trigger the text generation
  // 13 is the key code for the ENTER key
  if (keyCode === 13) {
    // here we generate the text
    // first we grab our text
    const input_text = get_text_by_ID('seed')
    console.log(input_text);

    // now we generate the text
    text_gen.generate(data(input_text), generate_text)
  }
}

function model_ready(data) {
  // console.log(data);
  // tell the user that the model is ready
  select('#status').html('Model Loaded');
  // additionally would be nice to make the text box visible...
  // maybe using jquery show function...
}

function generate_text(data) {
  console.log(data);
  // we get the values of the sliders and we write it on top of the div

  const temp = slider_temp.value();
  const length = slider_length.value();
  // we write their value as first line for our text
  let result_text = 'temperature: ' + temp + 'length: ' + length + '<br>'; // <br> is equal to new line
  // we add the generated text
  result_text += data.generated;
  // we select the div where the response should go and put the generated text
  select('#response').html(result_text)
}

function data(seed_text) {
  return {
    seed: seed_text,
    // we get the values from the sliders
    temperature: slider_temp.value(),
    length: slider_length.value()
  }
}

function get_text_by_ID(id) {
  return document.getElementById(id).innerText
}

/*

  ####  #####  ###### ######  ####  #    #
 #      #    # #      #      #    # #    #
  ####  #    # #####  #####  #      ######
      # #####  #      #      #      #    #
 #    # #      #      #      #    # #    #
  ####  #      ###### ######  ####  #    #

*/
const synth = window.speechSynthesis;
// console.log(synth.getVoices());

/**
 * this works only on firefox browser
 * @param {String} speech_text text to be spoken by the machine
 */
function speak(speech_text) {
  // first we check wether the argument is text or an object
  // if it is an object than we use the inner text of the question
  let sp_text = speech_text;
  if (typeof speech_text === 'object') {
    sp_text = current_question;
  }
  const speech = new SpeechSynthesisUtterance(sp_text);

  // const cool_voices_names = ['Bad News', 'Cellos', 'Pipe Organ']
  // const cool_voices_names = ['Anna', 'Luca', 'Thomas'];
  const cool_voices_names = ['Serena', 'Kate'];
  const voices_list = synth.getVoices().filter(result => {
    for (const voice of cool_voices_names) {
      if (result.name === voice) return result;
    }
    // if(result.lang.includes('en'))return result
  });
  const random_idx = Math.floor(Math.random() * voices_list.length);
  const voice = voices_list[random_idx];
  console.log(voice.name);
  speech.voice = voice;
  // speech.rate = 0.1;
  speech.volume = 1;
  synth.speak(speech);
}