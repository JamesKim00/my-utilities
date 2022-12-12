<script lang="ts">
	import { detect, initialize } from '$lib/ai/snake-game/handDetector';
	import { drawSnake } from '$lib/ai/snake-game/snake';
	import { onMount } from 'svelte';

	let videoSource: HTMLVideoElement;
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;

	let pos = { x: 0, y: 0, z: 0 };

	onMount(async () => {
		// Initialize model and get camera
		ctx = canvas.getContext('2d')!;
		ctx.fillStyle = 'black';
		await initialize();
		videoSource.srcObject = await navigator.mediaDevices.getUserMedia({ video: true });
		await videoSource.play();

		// Draw, get detector, etc...
		while (true) {
			await new Promise((r) => setTimeout(r, 10));
			pos = await detect(videoSource);
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			await drawSnake(ctx, pos);
		}
	});
	let posText: string;
	const f = Math.floor;
	$: posText = `Index finger position:  x ${f(pos.x)}  y ${f(pos.y)}  z ${f(pos.z)}`;
</script>

<div class="text-center text-4xl pt-3">Snake Game</div>
<div class="max-w-fit mx-auto mt-6 ">
	<div class="border-8 border-slate-800 -scale-x-100 relative">
		<video bind:this={videoSource} height="480px" width="640px">
			<track kind="captions" />
		</video>
		<canvas class="absolute left-0 top-0" bind:this={canvas} height="480px" width="640px" />
	</div>
	<div class="m-1">
		{posText}
	</div>
</div>
