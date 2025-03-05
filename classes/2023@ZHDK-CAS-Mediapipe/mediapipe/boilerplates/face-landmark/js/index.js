import vision from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3";
const { FaceLandmarker, FilesetResolver, DrawingUtils } = vision;
const demosSection = document.getElementById("demos");
const videoBlendShapes = document.getElementById("video-blend-shapes");

let faceLandmarker;
let runningMode = "VIDEO";
let enableWebcamButton;
let webcamRunning = false;
const videoWidth = 480;

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
createFaceLandmarker();



const video = document.getElementById("webcam");
const canvasElement = document.getElementById("output_canvas");
const canvasCtx = canvasElement.getContext("2d");

// Check if webcam access is supported.
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

let lastVideoTime = -1;
let results = undefined;
const drawingUtils = new DrawingUtils(canvasCtx);

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
  // console.log(results.faceLandmarks);
  if (results.faceLandmarks) {
    draw_face(results.faceLandmarks)
  }



  drawBlendShapes(results.faceBlendshapes);

  // Call this function again to keep predicting when the browser is ready.
  if (webcamRunning === true) {
    window.requestAnimationFrame(predictWebcam);
  }
}

const facemesh = document.querySelector('#facemesh')
const facemesh_bounds = facemesh.getBoundingClientRect()
const w = innerWidth
const h = innerHeight
const face = document.querySelector('#face')
console.log(face);
const left_eye = document.querySelector('#left-eye')
const right_eye = document.querySelector('#right-eye')
const mouth = document.querySelector('#mouth')

const top = 10
const bottom = 152
const left = 234
const right = 454
const eye_l = 468
const eye_r = 473
const nose = 4
const mouth_top = 13
const mouth_bottom = 14

const y = facemesh_bounds.top
const x = facemesh_bounds.left

function draw_face(landmarks) {
  facemesh.innerHTML = ''
  // console.log(landmarks[0]);
  if (landmarks[0] !== undefined) {
    // landmarks = landmarks[0]
    // console.log(landmarks[0]);
    for (let i = 0; i < landmarks[0].length; i++) {
      // console.log(i);
      const landmark = landmarks[0][i];
      if (landmark !== undefined) {
        // console.log(landmark.x);
        const lm = document.createElement('div')
        lm.classList.add('dot')
        lm.textContent = i
        lm.style.left = `${landmark['x'] * w}px`
        lm.style.top = `${landmark['y'] * h}px`
        facemesh.appendChild(lm)
      }
    }
    const lms = landmarks[0]
    // console.log(lms[bottom]);
    const face_h = (lms[bottom]['y'] * h) - (lms[top]['y'] * h)
    const face_w = (lms[right]['x'] * w) - (lms[left]['x'] * w)

    face.style.width = `${face_w}px`
    face.style.height = `${face_h}px`

    const center_x = (lms[nose]['x'] * w) + x
    const center_y = (lms[nose]['y'] * h) + y
    face.style.left = `${center_x}px`
    face.style.top = `${center_y}px`

    const left_eye_x = ((lms[eye_l]['x'] * w) + x) 
    const left_eye_y = ((lms[eye_l]['y'] * h) + y)
    left_eye.style.left = `${left_eye_x}px`
    left_eye.style.top = `${left_eye_y}px`

    const right_eye_x = ((lms[eye_r]['x'] * w) + x) 
    const right_eye_y = (lms[eye_r]['y'] * h) + y
    right_eye.style.left = `${right_eye_x}px`
    right_eye.style.top = `${right_eye_y}px`
    
    const mouth_x = ((lms[mouth_top]['x'] * w) + x) 
    const mouth_y = (lms[mouth_top]['y'] * h ) + y
    
    
    mouth.style.left = `${mouth_x}px`
    mouth.style.top = `${mouth_y}px`
    // right_eye.textContent = lms[eye_r]['x']
    // console.log(object);
    // console.log(lms[nose]['x'] * w);
    // console.log(lms[eye_l]['x'] * w);
    // console.log(lms[eye_r]['x'] * w);
    // console.log('```````object```````');

  }
}

function drawBlendShapes(blendShapes) {
  if (!blendShapes.length) {
    return;
  }

  // console.log(blendShapes[0]);
  /**
   * eyeBlinkLeft
   * eyeBlinkRght
   * eyeSquintLeft
   * eyeSquintright
   */
  let categories = blendShapes[0].categories
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    if (category.categoryName === 'jawOpen') {
      let value = category.score * 100
      mouth.style.height = value + 'px'
    }
    if (category.categoryName === 'eyeSquintLeft') {
      let value = category.score * 100
      left_eye.style.height = value + 'px'
    }
    if (category.categoryName === 'eyeSquintRight') {
      let value = category.score * 100
      right_eye.style.height = value + 'px'
    }
  }



}
