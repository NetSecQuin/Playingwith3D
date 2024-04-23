import * as THREE from "https://cdn.skypack.dev/three@0.148.0";
import openSimplexNoise from 'https://cdn.skypack.dev/open-simplex-noise';
import { GLTFLoader } from 'https://cdn.skypack.dev/three-gltf-loader';

// Initialize Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load GLB object
const loader = new GLTFLoader();
loader.load(
    '/models/Parrot.glb',
    (gltf) => {
        const object = gltf.scene;
        scene.add(object);
    },
    undefined,
    (error) => {
        console.error(error);
    }
);

// Add lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);

// Set camera position
camera.position.z = 5;

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
