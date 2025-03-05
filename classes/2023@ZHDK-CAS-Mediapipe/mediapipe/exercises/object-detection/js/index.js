import {
  ImageClassifier,
  FilesetResolver
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.2";

// Get DOM elements
const video = document.getElementById("webcam");
const webcamPredictions = document.getElementById("webcamPredictions");
const demosSection = document.getElementById("demos");
let enableWebcamButton;
let webcamRunning = false;
const videoHeight = "360px";
const videoWidth = "480px";

const imageContainers = document.getElementsByClassName("classifyOnClick");
let runningMode = "IMAGE";

// Add click event listeners for the img elements.
for (let i = 0; i < imageContainers.length; i++) {
  imageContainers[i].children[0].addEventListener("click", handleClick);
}

// Track imageClassifier object and load status.
let imageClassifier;

/**
 * Create an ImageClassifier from the given options.
 * You can replace the model with a custom one.
 */
const createImageClassifier = async () => {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.2/wasm"
  );
  imageClassifier = await ImageClassifier.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/image_classifier/efficientnet_lite0/float32/1/efficientnet_lite0.tflite`
      // NOTE: For this demo, we keep the default CPU delegate.
    },
    maxResults: 1,
    runningMode: runningMode
  });

  // Show demo section now model is ready to use.
  demosSection.classList.remove("invisible");
};

createImageClassifier();

function setup(){}
function draw(){}

// window hack

// Check if webcam access is supported.
function hasGetUserMedia() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

// Get classification from the webcam
async function predictWebcam() {
  // Do not classify if imageClassifier hasn't loaded
  if (imageClassifier === undefined) {
    return;
  }
  // if image mode is initialized, create a new classifier with video runningMode
  if (runningMode === "IMAGE") {
    runningMode = "VIDEO";
    await imageClassifier.setOptions({ runningMode: "VIDEO" });
  }
  const startTimeMs = performance.now();
  const classificationResult = imageClassifier.classifyForVideo(
    video,
    startTimeMs
  );
  video.style.height = videoHeight;
  video.style.width = videoWidth;
  webcamPredictions.style.width = videoWidth;
  const classifications = classificationResult.classifications;
  console.log(classifications);
  webcamPredictions.className = "webcamPredictions";
  webcamPredictions.innerText =
    "Classification: " +
    classifications[0].categories[0].categoryName +
    "\n Confidence: " +
    Math.round(parseFloat(classifications[0].categories[0].score) * 100) +
    "%";

  // EXERCISE
  // list of items
  //  https://storage.googleapis.com/mediapipe-tasks/image_classifier/labels.txt
  // if classifications[0].categories[0].categoryName === coffee mug

  // if classifications[0].categories[0].categoryName === coffeepot

  // document.body.style.backgroundColor = 'rgb()' // #ff0




  // Call this function again to keep predicting when the browser is ready.
  if (webcamRunning === true) {
    window.requestAnimationFrame(predictWebcam);
  }
}

// Enable the live webcam view and start classification.
async function enableCam(event) {
  if (imageClassifier === undefined) {
    return;
  }

  if (webcamRunning === true) {
    webcamRunning = false;
    enableWebcamButton.innerText = "ENABLE PREDICTIONS";
  } else {
    webcamRunning = true;
    enableWebcamButton.innerText = "DISABLE PREDICTIONS";
  }

  // getUsermedia parameters.
  const constraints = {
    video: true
  };

  // Activate the webcam stream.
  video.srcObject = await navigator.mediaDevices.getUserMedia(constraints);
  video.addEventListener("loadeddata", predictWebcam);
}

// If webcam supported, add event listener to button.
if (hasGetUserMedia()) {
  enableWebcamButton = document.getElementById("webcamButton");
  enableWebcamButton.addEventListener("click", enableCam);
} else {
  console.warn("getUserMedia() is not supported by your browser");
}
