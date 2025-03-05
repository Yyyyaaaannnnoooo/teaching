import {
  GestureRecognizer,
  FilesetResolver,
  DrawingUtils
} from "./mediapipe/vision.js";


let gesture_recognizer;
let running_mode = "VIDEO";
let enable_webcam_button;
let webcam_running = false;
const video_height = "360px";
const video_width = "480px";

// CREATE TASK

const create_gesture_recognizer = async () => {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
  );
  gesture_recognizer = await GestureRecognizer.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath:
        "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task",
      delegate: "GPU"
    },
    runningMode: running_mode,
    num_hands: 2
  });
};

create_gesture_recognizer();



const video = document.getElementById("webcam");
const canvas_element = document.getElementById("output_canvas");
const canvas_ctx = canvas_element.getContext("2d");
const gesture_output = document.getElementById("gesture_output");

// Check if webcam access is supported.
function has_get_user_media() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

// If webcam supported, add event listener to button for when user
// wants to activate it.
if (has_get_user_media()) {
  enable_webcam_button = document.getElementById("webcam-button");
  enable_webcam_button.addEventListener("click", enable_cam);
} else {
  console.warn("getUserMedia() is not supported by your browser");
}

// Enable the live webcam view and start detection.
function enable_cam(event) {
  if (!gesture_recognizer) {
    alert("Please wait for gesture_recognizer to load");
    return;
  }

  if (webcam_running === true) {
    webcam_running = false;
    enable_webcam_button.innerText = "ENABLE PREDICTIONS";
  } else {
    webcam_running = true;
    enable_webcam_button.innerText = "DISABLE PREDICTIONS";
  }

  // getUsermedia parameters.
  const constraints = {
    video: true
  };

  // Activate the webcam stream.
  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    video.srcObject = stream;
    video.addEventListener("loadeddata", predict_webcam);
  });
}

let last_video_time = -1;
let results = undefined;
async function predict_webcam() {
  const webcam_element = document.getElementById("webcam");
  let nowInMs = Date.now();
  if (video.currentTime !== last_video_time) {
    last_video_time = video.currentTime;
    results = gesture_recognizer.recognizeForVideo(video, nowInMs);
  }

  // built in function um die hand zu zeichnen

  canvas_ctx.save();
  canvas_ctx.clearRect(0, 0, canvas_element.width, canvas_element.height);
  const drawingUtils = new DrawingUtils(canvas_ctx);

  canvas_element.style.height = video_height;
  webcam_element.style.height = video_height;
  canvas_element.style.width = video_width;
  webcam_element.style.width = video_width;

  if (results.landmarks) {
    for (const landmarks of results.landmarks) {
      drawingUtils.drawConnectors(
        landmarks,
        GestureRecognizer.HAND_CONNECTIONS,
        {
          color: "#00FF00",
          lineWidth: 5
        }
      );
      drawingUtils.drawLandmarks(landmarks, {
        color: "#FF0000",
        lineWidth: 2
      });
    }
  }
  canvas_ctx.restore();
  
  if (results.gestures.length > 0) {
    console.log(results);
    gesture_output.style.display = "block";
    gesture_output.style.width = video_width;
    const category_name = results.gestures[0][0].categoryName;
    const category_score = parseFloat(
      results.gestures[0][0].score * 100
    ).toFixed(2);
    const handedness = results.handednesses[0][0].displayName;
    gesture_output.innerText = `GestureRecognizer: ${category_name}\n Confidence: ${category_score} %\n Handedness: ${handedness}`;
  } else {
    gesture_output.style.display = "none";
  }
  // Call this function again to keep predicting when the browser is ready.
  if (webcam_running === true) {
    window.requestAnimationFrame(predict_webcam); 
  }
}
