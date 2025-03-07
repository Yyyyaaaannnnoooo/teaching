import * as THREE from 'three';

class CustomControls {
  constructor(camera, domElement) {
    this.camera = camera;
    this.domElement = domElement;

    // Additional properties for rotation
    this.rotateStartX = 0;
    this.rotateStartY = 0;
    this.rotateEndX = 0;
    this.rotateEndY = 0;
    this.rotateDeltaX = 0;
    this.rotateDeltaY = 0;
    this.rotateSpeed = 0.01;
    this.isRotating = false;
    this.pivot = new THREE.Vector3(0, 0, 0);

    // Initialize event listeners
    this.domElement.addEventListener('mousedown', this.onMouseDown.bind(this), false);
    this.domElement.addEventListener('mousemove', this.onMouseMove.bind(this), false);
    this.domElement.addEventListener('mouseup', this.onMouseUp.bind(this), false);
  }

  onMouseDown(event) {
    this.isRotating = true
    // Start rotation
    this.rotateStartX = event.clientX;
    this.rotateStartY = event.clientY;

  }

  onMouseMove(event) {
    // Handle rotation
    if (this.isRotating) {
      // this.rotateEndX = event.clientX;
      // this.rotateEndY = event.clientY;

      // this.rotateDeltaX = (this.rotateEndX - this.rotateStartX) * this.rotateSpeed;
      // this.rotateDeltaY = (this.rotateEndY - this.rotateStartY) * this.rotateSpeed;

      // // Rotate around the center on the x-axis
      // this.camera.position.applyAxisAngle(new THREE.Vector3(1, 0, 0), this.rotateDeltaY);
      // this.camera.up.applyAxisAngle(new THREE.Vector3(1, 0, 0), this.rotateDeltaY);

      // // Rotate around the center on the y-axis
      // this.camera.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.rotateDeltaX);
      // this.camera.up.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.rotateDeltaX);

      // // Look at the center
      // const center = new THREE.Vector3(0, 0, 0);
      // this.camera.lookAt(center);

      // this.rotateStartX = this.rotateEndX;
      // this.rotateStartY = this.rotateEndY;
      // Handle rotation
      this.rotateEndX = event.clientX;
      this.rotateEndY = event.clientY;

      this.rotateDeltaX = (this.rotateEndX - this.rotateStartX) * this.rotateSpeed;
      this.rotateDeltaY = (this.rotateEndY - this.rotateStartY) * this.rotateSpeed;

      // Rotate the camera around the pivot point
      this.camera.position.sub(this.pivot);
      this.camera.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.rotateDeltaX);
      this.camera.position.applyAxisAngle(new THREE.Vector3(1, 0, 0), this.rotateDeltaY);
      this.camera.position.add(this.pivot);

      // Look at the pivot point
      this.camera.lookAt(this.pivot);

      this.rotateStartX = this.rotateEndX;
      this.rotateStartY = this.rotateEndY;
    }
  }

  onMouseUp(event) {
    this.isRotating = false
    // Stop rotation
  }

  update() {
    // Reset camera rotation to prevent accumulation
    // this.camera.rotation.set(0, 0, 0);

    // Add any other update logic here

    /**
     * const pinchDistance = finger_distance(); // Assuming finger_distance() returns the distance

      // Adjust the camera position based on the pinch zoom speed
      const zoomFactor = 1 + pinchDistance * this.pinchZoomSpeed;
      this.camera.position.z /= zoomFactor;

      // Ensure the camera doesn't go too close or too far
      this.camera.position.z = Math.max(this.minZoom, Math.min(this.maxZoom, this.camera.position.z));
     */
  }
}

export { CustomControls }