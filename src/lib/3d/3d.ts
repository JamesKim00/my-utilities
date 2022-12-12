import { PerspectiveCamera, PointLight, Scene, WebGLRenderer } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

let scene: Scene;
let camera: PerspectiveCamera;
let renderer: WebGLRenderer;

let canvas: HTMLCanvasElement;
let width: number;
let height: number;

const initialize3d = async (canvas3d: HTMLCanvasElement) => {
	canvas = canvas3d;
	width = canvas.clientWidth;
	height = canvas.clientHeight;

	scene = new Scene();

	camera = new PerspectiveCamera(75, width / height, 0.1, 1000);
	camera.position.set(0, 16, 35);

	renderer = new WebGLRenderer({ canvas: canvas });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(width, height);

	const pointLight = new PointLight(0xd7e5f0);
	pointLight.position.set(0, 23, 0);
	scene.add(pointLight);

	new GLTFLoader().load('/3d/glow_export3.glb', (gltf) => {
		scene.add(gltf.scene);
		renderer.render(scene, camera);
	});
};

export { initialize3d };
