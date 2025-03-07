import * as THREE from 'three';

import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Water } from 'three/addons/objects/Water.js';
import { Sky } from 'three/addons/objects/Sky.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { CustomControls } from './controls.js';

import {
  GestureRecognizer,
  FilesetResolver,
  DrawingUtils
} from "./mediapipe/vision.js";


let gesture_recognizer;
let running_mode = "VIDEO";
let enable_webcam_button;
let webcam_running = false;
// 320 x 240
const h = 240;
const w = 320;

const video = document.getElementById("webcam");
video.style.height = h + "px"
video.style.width = w + "px"
video.height = h + "px"
video.width = w + "px"
const canvas_element = document.getElementById("output_canvas");
const canvas_ctx = canvas_element.getContext("2d");
const gesture_output = document.getElementById("gesture_output");
const debug = document.querySelector('#debug')
let webcam = null
let results = undefined;



let camera, scene, renderer, controls;


let texture
let shader_material
// let object = null;
let objects = []
let renderTarget = undefined

let composer;
let postprocessing = false
let scene_loaded = false
let water = undefined, sun, sky;
let pmremGenerator
let sceneEnv

const sun_param = {
  elevation: 2,
  azimuth: 90
};


const params = {
  threshold: 0.75,
  strength: 1,
  radius: 0,
  exposure: 1
};

const slider = document.querySelector('#color')
const slider_azymuth = document.querySelector('#azymuth')
const slider_elevation = document.querySelector('#elevation')
const canvas = document.querySelector('#c')
const meshes = []
init();
// it's like setup
function init() {
  create_gesture_recognizer()
  init_cam()
  scene_setup();

  // const manager = new THREE.LoadingManager(load_manager);
  texture = build_texture('textures/758px-Canestra_di_frutta_(Caravaggio).jpg');
  const material = build_material({ r: 255, g: 51, b: 51 }, 0, 1)
  const matcap = build_matcap_material('textures/matcaps/512/3B3C3F_DAD9D5_929290_ABACA8-512px.png')


  let pos = {
    x: 0, y: 4, z: 0, scale: 1
  }

  load_model('models/tena/yann/alien.obj', material, pos);
  for (let i = 0; i < 10; i++) {
    const val = i + 1
    const geometry = new THREE.TorusGeometry(1 + (val * 2), 0.5, 16, 100);
    const torus = new THREE.Mesh(geometry, material);
    meshes.push(torus)
    scene.add(torus);
  }


  // build renderer
  // build_renderer();
  bloom_pass_composer();

  // load_skybox('textures/equirectangular/space.hdr');
  skybox()


  // CONTROLS
  // const controls = new OrbitControls(camera, renderer.domElement);
  // controls.maxPolarAngle = Math.PI * 0.495;
  // controls.minDistance = 4;
  // controls.maxDistance = 200;
  controls = new CustomControls(camera, renderer.domElement);
  window.addEventListener('resize', onWindowResize);
}


// function to move object back and forth
let inc_0 = 0
let inc_1 = 0
let inc_2 = 0
let inc_3 = 0
let inc_4 = 0

function animate() {
  // recursion
  requestAnimationFrame(animate);
  // controls.update()
  // animate stuff down here!!!
  if (objects.length > 0) {
    const object = objects[0]
    object.rotation.x += 0.008;
    // sun_param.azimuth = value
    // let position = sin_func_positive(10, inc_4)
    // sun_param.elevation = position
    // updateSun()

  }

  if (meshes.length > 0) {
    for (let i = 0; i < meshes.length; i++) {
      const torus = meshes[i];
      torus.rotation.x = inc_0 + ((0.5 * Math.PI) / (i + 0.25))
    }
  }

  if (water !== undefined) {
    // console.log('update water');
    water.material.uniforms['time'].value += 1.0 / 60;
  }

  inc_0 += Math.PI * 0.001
  inc_1 += 0.01
  inc_2 += 0.005
  inc_3 += 0.1
  inc_4 += 0.01

  render()
}

animate();

function set_object_position(obj, x, y, z) {
  obj.position.x = x
  obj.position.y = y
  obj.position.z = z
}

function add_object(obj, material, position, texture) {
  console.log('load manager');
  // console.log(obj);

  add_material(obj, material)
  if (texture !== undefined) {
    add_texture(obj, texture);
  }
  obj.scale.setScalar(position.scale);
  set_object_position(obj, position.x, position.y, position.z)
  objects.push(obj)
  scene.add(obj);
  scene_loaded = true
}
/**
 * helper to load a model inside the three.js environment
 * position should be passed as an object {x: val, y: val, z: val}
 * @param {String} url url where 3d file is stored
 * @param {*} material three.js material
 * @param {Object} position Object with x, y, z coordinates
 * @param {*} texture three.js texture
 */
function load_model(url, material, position, texture) {
  function onProgress(xhr) {
    if (xhr.lengthComputable) {
      const percentComplete = xhr.loaded / xhr.total * 100;
      console.log('model ' + Math.round(percentComplete, 2) + '% downloaded');
    }
  }
  function onError(err) {
    console.log('error when loading model');
    console.log(err);
  }
  const loader = new OBJLoader();
  loader.load(url, function (obj) {
    add_object(obj, material, position, texture)
  }, onProgress, onError);
}


function scene_setup() {
  // load camera
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 5000);
  camera.position.y = 10.5;
  camera.position.set(0, 10, -100);
  camera.lookAt(new THREE.Vector3(0, 0, 0))
  // camera.rotation.z = 90
  // load scene
  scene = new THREE.Scene();
  // scene.background = new THREE.Color('rgb(51, 255, 51)');
  // scene.fog = new THREE.FogExp2(0xefd1b5, 0.0025);
  // build ambient light
  const ambientLight = new THREE.AmbientLight('rgb(255, 255, 255)'); // rgb(255, 255, 255)
  scene.add(ambientLight);
  const pointLight = new THREE.PointLight(0xffffff, 15);
  camera.add(pointLight);
  scene.add(camera);
}

function build_renderer() {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

function bloom_pass_composer() {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ReinhardToneMapping;
  document.body.appendChild(renderer.domElement);
  const renderScene = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
  bloomPass.threshold = params.threshold;
  bloomPass.strength = params.strength;
  bloomPass.radius = params.radius;
  const outputPass = new OutputPass();
  composer = new EffectComposer(renderer);
  composer.addPass(renderScene);
  composer.addPass(bloomPass);
  composer.addPass(outputPass);
  postprocessing = true
}


function render_texture() {
  if (renderTarget !== null) {
    renderer.setRenderTarget(renderTarget);
    renderer.render(scene, camera);
    renderer.setRenderTarget(null);
    shader_material.uniforms.feedbackTexture.value = renderTarget.texture;
    renderer.render(scene, camera);
  } else {
    renderer.render(scene, camera);
  }
}

function render() {
  if (!postprocessing) {
    renderer.render(scene, camera);
  } else {
    composer.render()
  }
}


// slider.addEventListener('input', (e) => {
//   const value = parseInt(e.target.value)
//   const material = build_material(value, 1, 0.5);
//   // add_material(object, material)
// })

// slider_azymuth.addEventListener('input', e => {
//   const value = parseInt(e.target.value)
//   sun_param.azimuth = value
//   updateSun()
// })
// slider_elevation.addEventListener('input', e => {
//   const value = parseInt(e.target.value)
//   sun_param.elevation = value
//   updateSun()
// })


/**
 * 
 * @returns 
 */
function build_toon_material() {
  const texture = build_texture('textures/gradientMaps/threeTone.jpg')
  return new THREE.MeshToonMaterial({ color: 0x33ff33, gradientMap: texture });
}

/**
 * Build Matcap material
 * @param {Srting} url path to matcap material
 * @returns 
 */
function build_matcap_material(url) {
  const texture = build_texture(url)
  return new THREE.MeshMatcapMaterial({
    color: 0xffffff,
    matcap: texture
  })
}


// helper functions from here
function build_shader_material() {
  const result = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0.0 },
      resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    },
    vertexShader: document.getElementById('vertexShader').textContent,
    fragmentShader: document.getElementById('fragmentShader').textContent,
  });
  return result
}

function sin_func(boundary, inc) {
  return Math.sin(inc) * boundary
}
function cos_func(boundary, inc) {
  return Math.cos(inc) * boundary
}

function sin_func_positive(boundary, inc) {
  return ((Math.sin(inc) + 1) / 2) * boundary
}


function load_texture(manager, url) {
  const textureLoader = new THREE.TextureLoader(manager);
  const texture = textureLoader.load(url, render);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
/**
 * adds material to three.js model
 * @param {*} obj three.js object
 * @param {*} material three.js material
 */
function add_material(obj, material) {
  obj.traverse(function (child) {
    if (child.isMesh) child.material = material;
  });
}

function random_material(obj) {
  obj.traverse(child => {
    if (child.isMesh) {
      const material = build_material(Math.random() * 360, 1, 0.5)
      child.material = material
    }
  })
}

/**
 * adds texture to three.js model
 * @param {*} obj three.js object
 * @param {*} texture three.js texture
 */
function add_texture(obj, texture) {
  obj.traverse(function (child) {
    if (child.isMesh) child.material.map = texture;
  });
}
/**
 * Builds a texture for three.js
 * @param {String} url path to texture to be loaded
 * @returns 
 */
function build_texture(url) {
  const textureLoader = new THREE.TextureLoader();
  return textureLoader.load(url);
}

/**
 * build a basic material with Color, Metalness and Roughness
 * Color should be an Object {r: val, g: val, b: val}
 * @param {Object} value Object with r, g, b values between 0 - 255
 * @param {Number} metalness values between 0 - 1
 * @param {Number} roughness Values between 0 - 1
 * @returns 
 */
function build_material(value, metalness, roughness) {
  let obj = { r: 0, g: 0, b: 0 }

  const metal = metalness || 0.75;
  const rough = roughness || 0

  if (typeof value === 'object') {
    // console.log('It is an object.');
    obj.r = value.r
    obj.g = value.g
    obj.b = value.b
  } else if (typeof value === 'number') {
    // console.log('It is a number.');
    obj.r = value
    obj.g = value
    obj.b = value
  } else {
    console.log('It is neither an object nor a number.');
  }
  const col = `rgb(${obj.r}, ${obj.g}, ${obj.b})`;
  const material = new THREE.MeshStandardMaterial({
    color: col,
    metalness: metal,
    roughness: rough
  });
  return material;
}

function build_material_emissive(value, metalness, roughness) {
  let obj = { r: 0, g: 0, b: 0 }

  const metal = metalness || 0.75;
  const rough = roughness || 0

  if (typeof value === 'object') {
    console.log('It is an object.');
    obj.r = value.r
    obj.g = value.g
    obj.b = value.b
  } else if (typeof value === 'number') {
    console.log('It is a number.');
    obj.r = value
    obj.g = value
    obj.b = value
  } else {
    console.log('It is neither an object nor a number.');
  }
  const col = `rgb(${obj.r}, ${obj.r}, ${obj.r})`;
  const material = new THREE.MeshStandardMaterial({
    color: col,
    metalness: metal,
    roughness: rough,
    emissive: col
  });
  return material;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function load_skybox(url) {
  new RGBELoader()
    .load(url, function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.background = texture;
      scene.environment = texture;
    });
}

function skybox() {
  sun = new THREE.Vector3();
  const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
  // const waterGeometry = new THREE.BoxGeometry(10, 10, 10);
  water = new Water(
    waterGeometry,
    {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: new THREE.TextureLoader().load('textures/waternormals.jpg', function (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      }),
      sunDirection: new THREE.Vector3(),
      sunColor: 0x000000,
      waterColor: 0x000000,
      distortionScale: 1.7,
      fog: scene.fog !== undefined
    }
  );

  water.rotation.x = - Math.PI / 2;
  water.position.y = -3
  scene.add(water);
  sky = new Sky();
  sky.scale.setScalar(10000);
  scene.add(sky);
  const skyUniforms = sky.material.uniforms;
  skyUniforms['turbidity'].value = 10;
  skyUniforms['rayleigh'].value = 2;
  skyUniforms['mieCoefficient'].value = 0.005;
  skyUniforms['mieDirectionalG'].value = 0.8;

  pmremGenerator = new THREE.PMREMGenerator(renderer);
  sceneEnv = new THREE.Scene();

  updateSun();
}

function updateSun() {

  const phi = THREE.MathUtils.degToRad(90 - sun_param.elevation);
  const theta = THREE.MathUtils.degToRad(sun_param.azimuth);

  sun.setFromSphericalCoords(1, phi, theta);

  sky.material.uniforms['sunPosition'].value.copy(sun);
  water.material.uniforms['sunDirection'].value.copy(sun).normalize();

  if (renderTarget !== undefined) renderTarget.dispose();

  sceneEnv.add(sky);
  renderTarget = pmremGenerator.fromScene(sceneEnv);
  scene.add(sky);

  scene.environment = renderTarget.texture;
}


async function create_gesture_recognizer() {
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
    if (category_name === 'Pointing_Up') {
    }
    if (category_name === 'ILoveYou') {
    }
    debug.textContent = `${category_name} with score: ${category_score}`
    // if(category_name === 'Open_Palm') // HOME WORK SET THE SIZE
  }
  if (webcam_running === true) {
    window.requestAnimationFrame(predict_webcam);
  }
}

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


/* ===
ml5 Example
Sound classification using SpeechCommands18w and p5.js
This example uses a callback pattern to create the classifier
=== */

// Initialize a sound classifier method with SpeechCommands18w model. A callback needs to be passed.
let classifier;
// Options for the SpeechCommands18w model, the default probabilityThreshold is 0
const options = { probabilityThreshold: 0.7 };
// Two variable to hold the label and confidence of the result
let label = document.querySelector('#speech-label');
let confidence = document.querySelector('#speech-confidence');

async function setup() {
  classifier = await ml5.soundClassifier("SpeechCommands18w", options);
  // Create 'label' and 'confidence' div to hold results

  // label = document.createElement("DIV");
  // label.textContent = "label ...";
  // confidence = document.createElement("DIV");
  // confidence.textContent = "Confidence ...";

  // document.body.appendChild(label);
  // document.body.appendChild(confidence);
  // Classify the sound from microphone in real time
  // classifier.classify(gotResult);
}
setup();

// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  }
  // The results are in an array ordered by confidence.
  console.log(results);
  // Show the first label and confidence
  label.textContent = `Label: ${results[0].label}`;
  confidence.textContent = `Confidence: ${results[0].confidence.toFixed(4)}`;
}



