import vision from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3";
const { FaceLandmarker, FilesetResolver, DrawingUtils } = vision;
const demosSection = document.getElementById("demos");
// const videoBlendShapes = document.getElementById("video-blend-shapes");

let faceLandmarker;
let runningMode = "VIDEO";
let enableWebcamButton;
let webcamRunning = false;
const videoWidth = 480;
const video = document.getElementById("webcam");
const canvasElement = document.getElementById("output_canvas");
const canvasCtx = canvasElement.getContext("2d");
let lastVideoTime = -1;
let results = undefined;
const drawingUtils = new DrawingUtils(canvasCtx);



createFaceLandmarker();
init_webcam();

let canvas
let pos_x = 0, pos_y = 0, size = 0
function setup(){
  canvas = createCanvas(innerWidth - 200, innerHeight - 200)
  canvas.parent('#p5')
  pos_x = width / 2
  pos_y = height / 2
  size = 150
}

function draw(){
  background(255)
  fill(0)
  ellipse(pos_x, pos_y, size)
}

window.setup = setup
window.draw = draw


async function predictWebcam() {
  const radio = video.videoHeight / video.videoWidth;
  video.style.width = videoWidth + "px";
  video.style.height = videoWidth * radio + "px";
  canvasElement.style.width = videoWidth + "px";
  canvasElement.style.height = videoWidth * radio + "px";
  canvasElement.width = video.videoWidth;
  canvasElement.height = video.videoHeight;

  let startTimeMs = performance.now();
  if (lastVideoTime !== video.currentTime) {
    lastVideoTime = video.currentTime;
    results = faceLandmarker.detectForVideo(video, startTimeMs);
  }

  draw_face();

  face_expressions(results.faceBlendshapes);

  // Call this function again to keep predicting when the browser is ready.
  if (webcamRunning === true) {
    window.requestAnimationFrame(predictWebcam);
  }
}

function face_expressions(blendShapes) {
  if (!blendShapes.length) {
    return;
  }

  // console.log(blendShapes[0].categories)

  // eyeBlinkRight, eyeBlinkLeft, cheekPuff

  let categories = blendShapes[0].categories
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];

    if (category.categoryName === 'jawOpen') {
      let value = category.score * 255
      // console.log('~~~~~~~~~~~~~~~~~~~~~~~');
      // console.log(category.categoryName, value)
      size = map(value, 0, 255, 50, 350)
    }
    if (category.categoryName === 'eyeBlinkRight') {
      let value = category.score * 255
      // console.log(category.categoryName, value)
      pos_x = map(value, 0, 255, 150, width - 150)
    }
    if (category.categoryName === 'eyeBlinkLeft') {
      let value = category.score * 255
      // console.log(category.categoryName, value)
      pos_y = map(value, 0, 255, 150, height - 150)
      console.log(pos_y);
    }
    // if (category.categoryName === 'cheekPuff') {
    //   let value = category.score * 255
    //   console.log(category.categoryName, value)
    // }
  }

}

function draw_face() {
  if (results.faceLandmarks) {
    // console.log(results);
    // console.log(FaceLandmarker.FACE_LANDMARKS_TESSELATION);
    for (const landmarks of results.faceLandmarks) {
      drawingUtils.drawConnectors(
        landmarks,
        FaceLandmarker.FACE_LANDMARKS_TESSELATION,
        { color: "#C0C0C070", lineWidth: 1 }
      );
      drawingUtils.drawConnectors(
        landmarks,
        FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE,
        { color: "#FF3030" }
      );
      drawingUtils.drawConnectors(
        landmarks,
        FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW,
        { color: "#FF3030" }
      );
      drawingUtils.drawConnectors(
        landmarks,
        FaceLandmarker.FACE_LANDMARKS_LEFT_EYE,
        { color: "#30FF30" }
      );
      drawingUtils.drawConnectors(
        landmarks,
        FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW,
        { color: "#30FF30" }
      );
      drawingUtils.drawConnectors(
        landmarks,
        FaceLandmarker.FACE_LANDMARKS_FACE_OVAL,
        { color: "#E0E0E0" }
      );
      drawingUtils.drawConnectors(
        landmarks,
        FaceLandmarker.FACE_LANDMARKS_LIPS,
        { color: "#E0E0E0" }
      );
      drawingUtils.drawConnectors(
        landmarks,
        FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS,
        { color: "#FF3030" }
      );
      drawingUtils.drawConnectors(
        landmarks,
        FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS,
        { color: "#30FF30" }
      );
    }
  }
}


async function createFaceLandmarker() {
  const filesetResolver = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
  );
  faceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
      delegate: "GPU"
    },
    outputFaceBlendshapes: true,
    runningMode,
    numFaces: 1
  });
  demosSection.classList.remove("invisible");
}


function init_webcam() {
  function hasGetUserMedia() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  }

  // If webcam supported, add event listener to button for when user
  // wants to activate it.
  if (hasGetUserMedia()) {
    enableWebcamButton = document.getElementById(
      "webcamButton"
    );
    enableWebcamButton.addEventListener("click", enableCam);
  } else {
    console.warn("getUserMedia() is not supported by your browser");
  }

  // Enable the live webcam view and start detection.
  function enableCam(event) {
    if (!faceLandmarker) {
      console.log("Wait! faceLandmarker not loaded yet.");
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
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      video.srcObject = stream;
      video.addEventListener("loadeddata", predictWebcam);
    });
  }
}