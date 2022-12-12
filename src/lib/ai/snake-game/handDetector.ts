// import * as handDetection from '@tensorflow-models/hand-pose-detection';
import { SupportedModels, createDetector } from '@tensorflow-models/hand-pose-detection';
import type { HandDetector } from '@tensorflow-models/hand-pose-detection';

let detector: HandDetector;
async function initialize() {
	const model = SupportedModels.MediaPipeHands;
	const detectorConfig: any = {
		runtime: 'mediapipe', // or 'tfjs',
		solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/hands',
		modelType: 'lite'
	};
	detector = await createDetector(model, detectorConfig);
}

const detect = async (
	videoSource: HTMLVideoElement
): Promise<{ x: number; y: number; z: number }> => {
	const hands = await detector.estimateHands(videoSource);
	if (hands && hands[0] && hands[0].keypoints3D) {
		const z = hands[0].keypoints3D[8].z!;
		const p2d = hands[0].keypoints[8];
		return { x: p2d.x, y: p2d.y, z: z };
	}
	return { x: 0, y: 0, z: 0 };
};

export { initialize, detect };
