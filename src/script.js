import './style.css';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import GUI from 'lil-gui'
//  import gsap from 'gsap';


/**
 * Debug
 */
const gui = new GUI({
    width: 300,
    title: 'Debug UI',
    closeFolders: false,
});

// Press H to hide GUI
window.addEventListener('keydown', (event) => {
    if(event.key == 'h')
    gui.show(gui._hidden)
});

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();


/**
 * Sizes 
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(
    45, // Fiel Of View
    window.innerWidth / window.innerHeight, // Aspect Ratio
    0.1, // Angle for Near
    100 // Angle for Far
    );
camera.position.set(0, 0, 5); // Position of the Camera in Z Axis (x,y,z)
scene.add(camera);

// Orbit Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDumping = true;

// GLTF Loader
// Instantiate a loader
const gltfLoader = new GLTFLoader()

gltfLoader.load(
    '/models/museum/scene.gltf',
    (gltf) => {
        // console.log('success')
        console.log(gltf)
        scene.add(gltf.scene.children[0])
    },
    () => {
        console.log('progress')
    },
    () => {
        console.log('error')
    },
)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene, camera)





// Animations
const tick = () => {

    // Clock
    

    // Time
    

    // Update objects


    // Update Controls
    controls.update()
    

    // Render
    renderer.render(scene, camera)

    /* window.requestAnimationFrame(tick) */
};

// VR / XR
//renderer.setAnimationLoop(tick)


tick();

// Model from: (https://sketchfab.com/3d-models/bali-villa-modern-house-with-pool-2-bedroom-35c6623880304df1adb10177a31dcc21) 
// credits: (MarMel-Bali)