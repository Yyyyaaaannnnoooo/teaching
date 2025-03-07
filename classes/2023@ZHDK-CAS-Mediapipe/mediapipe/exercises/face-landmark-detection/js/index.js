import vision from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3";
const { FaceLandmarker, FilesetResolver, DrawingUtils } = vision;
const demosSection = document.getElementById("demos");

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



let canvas
let size = 250, pos_x = 300, pos_y = 200
function setup(){
  canvas = createCanvas(innerWidth - 200, innerHeight - 200)
  canvas.parent('#p5')
  createFaceLandmarker();
  init_wabcam();
}

function draw(){
  background(0)
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
  if (results.faceLandmarks) {
    draw_face_mesh();
  }
  drawBlendShapes(results.faceBlendshapes);
  if (webcamRunning === true) {
    window.requestAnimationFrame(predictWebcam);
  }
}



function drawBlendShapes(blendShapes) {
  if (!blendShapes.length) {
    return;
  }

  // console.log(blendShapes[0].categories);

  // eyeSquintLeft, eyeSquintRight, browOuterUpLeft, browOuterUpRight

  let categories = blendShapes[0].categories
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    if (category.categoryName === 'jawOpen') {
      let value = category.score * 255
      size = map(value, 0, 255, 50, 500)
    }
    if (category.categoryName === 'eyeSquintLeft') {
      console.log('~~~~~~~~~~~~~');
      console.log(category.categoryName, category.score);
      let value = category.score * 255
      pos_x =  map(value, 0, 255, 100, width - 100)
    }
    if (category.categoryName === 'eyeSquintRight') {
      console.log('~~~~~~~~~~~~~');
      console.log(category.categoryName, category.score);
      let value = category.score * 255
      pos_y =  map(value, 0, 255, 100, height - 100)
    }
    if (category.categoryName === 'browOuterUpLeft') {
      console.log('~~~~~~~~~~~~~');
      console.log(category.categoryName, category.score);
      // let value = category.score * 255
      // size = map(value, 0, 255, 50, 500)
    }
    if (category.categoryName === 'browOuterUpRight') {
      console.log('~~~~~~~~~~~~~');
      console.log(category.categoryName, category.score);
      // let value = category.score * 255
      // size = map(value, 0, 255, 50, 500)
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


function init_wabcam() {
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


function draw_face_mesh() {
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
