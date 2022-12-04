// import * as tf from '@tensorflow/tfjs';
import {
	loadLayersModel,
	LayersModel,
	tidy,
	browser,
	scalar,
	Tensor,
	image
} from '@tensorflow/tfjs';
import classes from './classes';

function preprocess(imgData: ImageData) {
	return tidy(() => {
		let tensor = browser.fromPixels(imgData, 1).toFloat();
		const resized = image.resizeBilinear(tensor, [28, 28]).toFloat();
		const offset = scalar(255.0);
		const normalized = scalar(1.0).sub(resized.div(offset));
		const batched = normalized.expandDims(0);
		return batched;
	});
}

let model: LayersModel = await loadLayersModel('/ai/doodle-recognition/model.json');
async function predict(imgData: ImageData): Promise<any> {
	const preprocessed = preprocess(imgData);

	const p: Tensor = model.predict(preprocessed) as Tensor;
	const data = await p.data();
	console.log(data);
	// const data: any[] = [];

	const probs: number[] = [0.0];
	const names: string[] = [''];
	for (let i = 0; i < data.length; i++) {
		const dataProb: number = data[i];

		// for (const prob of probs) {
		for (let j = 0; j < probs.length; j++) {
			if (dataProb > probs[j]) {
				// Add to probs
				probs.splice(j, 0, dataProb);
				names.splice(j, 0, classes[i]);

				break;
			}
		}
	}
	console.log('Probs and name');
	console.log(probs);
	console.log(names);

	console.log('That is all');
	return names;
}

export { predict };
