import {
  GestureRecognizer,
  FilesetResolver,
  DrawingUtils
} from "./mediapipe/vision.js";


let gesture_recognizer;
let running_mode = "VIDEO";
let enable_webcam_button;
let webcam_running = false;
const h = innerHeight - 200;
const w = innerWidth - 200;

const video = document.getElementById("webcam");
video.style.height = h + "px"
video.style.width = w + "px"
video.height = h + "px"
video.width = w + "px"
const canvas_element = document.getElementById("output_canvas");
const canvas_ctx = canvas_element.getContext("2d");
const gesture_output = document.getElementById("gesture_output");
const debug = document.querySelector('#debug')
let show_hand = true

debug.addEventListener('click', (e) => {
  if (show_hand) {
    canvas_element.style.display = 'none'
    e.target.innerText = 'SHOW HAND'
  } else {
    canvas_element.style.display = 'block'
    e.target.innerText = 'HIDE HAND'
  }
  show_hand = !show_hand
})

let canvas
let webcam = null
let results = undefined;

let move_x = 300, move_y = 300, size = 250

function setup() {
  canvas = createCanvas(w, h)
  canvas.parent('#p5')
  background(0)

  init_cam();
  create_gesture_recognizer();
  webcam = select('.webcam')
  console.log(webcam);
}

function draw() {
  background(255)
  fill(0)
  ellipse(move_x, move_y, size) // Homework control size
  if(move_y < 0){ // move_y < ??? tip it has to do with size 
    // HOMEWORK SOLVE ISSUE
    // the circle should disappear before reappearing at the bottom
    move_y = height // move_y = ???
  }

  if(move_x > width){
    // HOMEWORK
  }

  // HOMEWORK
  // if (move_x < 0)
  // if(move_y > height)

}

window.setup = setup
window.draw = draw



async function predict_webcam() {
  const webcam_element = document.getElementById("webcam");
  let nowInMs = Date.now();
  results = gesture_recognizer.recognizeForVideo(video, nowInMs);

  // built in function um die hand zu zeichnen

  draw_hand();

  if (results.gestures.length > 0) {
    const category_name = results.gestures[0][0].categoryName;
    const category_score = parseFloat(
      results.gestures[0][0].score * 100
    ).toFixed(2);
    const handedness = results.handednesses[0][0].displayName;
      if(category_name === 'Pointing_Up'){
        move_y -= 1
      }
      if(category_name === 'ILoveYou'){
        move_x += 1
      }

      // if(category_name === 'Open_Palm') // HOME WORK SET THE SIZE
  }
  if (webcam_running === true) {
    window.requestAnimationFrame(predict_webcam);
  }
}
/**
* Thumb_Down = move down / HOMEWORK!!
* Thumb_Up
* Open_Palm = increase size / HOMEWORK!!
* Closed_Fist = move right / HOMEWORK!!
* Pointing_Up = move up
* ILoveYou = move left
 */

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



function draw_hand() {
  canvas_ctx.save();
  canvas_ctx.clearRect(0, 0, canvas_element.width, canvas_element.height);
  const drawingUtils = new DrawingUtils(canvas_ctx);

  canvas_element.style.height = h + "px";

  canvas_element.style.width = w + "px";
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
}

function init_cam() {
  function has_get_user_media() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  }

  if (has_get_user_media()) {
    enable_webcam_button = document.getElementById("webcam-button");
    // enable_cam()
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

    navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
      video.srcObject = stream;
      video.addEventListener("loadeddata", predict_webcam);
    });
  }
}
