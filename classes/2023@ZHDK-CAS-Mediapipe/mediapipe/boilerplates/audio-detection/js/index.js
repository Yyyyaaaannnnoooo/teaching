import audio from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-audio@0.10.0";
const { AudioClassifier, AudioClassifierResult, FilesetResolver } = audio;

const demosSection = document.getElementById("demos");

let isPlaying = false;
let audioClassifier;
let audioCtx;

const createAudioClassifier = async () => {
  const audio = await FilesetResolver.forAudioTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-audio@0.10.0/wasm"
  );

  audioClassifier = await AudioClassifier.createFromOptions(audio, {
    baseOptions: {
      modelAssetPath:
        "https://storage.googleapis.com/mediapipe-models/audio_classifier/yamnet/float32/1/yamnet.tflite"
    }
  });
  demosSection.classList.remove("invisible");
};
createAudioClassifier();

const streamingBt = document.getElementById("microBt");

streamingBt.addEventListener("click", async function () {
  await runStreamingAudioClassification();
});

async function runStreamingAudioClassification() {
  const output = document.getElementById("microResult");
  const constraints = { audio: true };
  let stream;

  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
  } catch (err) {
    console.log("The following error occured: " + err);
    alert("getUserMedia not supported on your browser");
  }

  if (!audioCtx) {
    audioCtx = new AudioContext({ sampleRate: 16000 });
  } else if (audioCtx.state === "running") {
    await audioCtx.suspend();
    streamingBt.firstElementChild.innerHTML = "START CLASSIFYING";

    return;
  }

  // resumes AudioContext if has been suspended
  await audioCtx.resume();

  streamingBt.firstElementChild.innerHTML = "STOP CLASSIFYING";

  const source = audioCtx.createMediaStreamSource(stream);
  const scriptNode = audioCtx.createScriptProcessor(16384, 1, 1);

  scriptNode.onaudioprocess = function (audioProcessingEvent) {
    const inputBuffer = audioProcessingEvent.inputBuffer;
    let inputData = inputBuffer.getChannelData(0);

    // Classify the audio
    const result = audioClassifier.classify(inputData);
    const categories = result[0].classifications[0].categories;
    // console.log(categories);

    const start = 0
    const end = 5
    let text = ''
    let r = '255', g = '255', b = '255'
    for (let i = 0; i < end; i++) {
      const category_name = categories[i].categoryName;
      const score = categories[i].score.toFixed(3);
      let font_size = 20
      if(i === 0){font_size = 40}
      // text += `<span style="font-size: ${font_size}px">Item ${i}: ${category_name} (${score})</span> <br>`
      text += '<span style="font-size: ' + font_size + 'px">Item ' + i+': '+ category_name + ' (' + score +')</span> <br>'
      if (category_name === 'Silence') {
        r = (score * 255).toString()
        console.log('R: ', r);
      } 
      if (category_name === 'Speech' || category_name === 'Laughter') {
        g = (score * 255).toString()
        console.log('G: ', g);
      } 
      if (category_name === 'Ding' || category_name === 'Water' || category_name === 'Glass') {
        b = (score * 255).toString()
        console.log('B: ', b);
      } 
      const gradient = `linear-gradient(to bottom, rgb(${r}, 51, 51), rgb(51, ${g}, 51), rgb(51, 51, ${b}))`
      console.log(gradient);
      document.body.style.background = gradient
    }

    output.innerHTML = text


    // Display results
    // output.innerText =
    //   categories[0].categoryName +
    //   "(" +
    //   categories[0].score.toFixed(3) +
    //   ")\n" +
    //   categories[1].categoryName +
    //   "(" +
    //   categories[1].score.toFixed(3) +
    //   ")\n" +
    //   categories[2].categoryName +
    //   "(" +
    //   categories[2].score.toFixed(3) +
    //   ")";
  };

  source.connect(scriptNode);
  scriptNode.connect(audioCtx.destination);
}
