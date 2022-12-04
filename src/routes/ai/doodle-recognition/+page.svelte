<script lang="ts">
	import { predict } from '$lib/ai/doodle-recognition/recognizer';
	import ClearButton from '$lib/components/ClearButton.svelte';
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;

	let smallCanvas: HTMLCanvasElement;
	let smallCtx: CanvasRenderingContext2D;

	const r: number = 28 / 400;
	onMount(() => {
		ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
		smallCtx = smallCanvas.getContext('2d') as CanvasRenderingContext2D;

		ctx.strokeStyle = '#004366';
		ctx.lineWidth = 10;
		ctx.lineCap = 'round';

		smallCtx.strokeStyle = '#FF4366';
		smallCtx.lineWidth = 3;
		smallCtx.lineCap = 'round';
	});

	let pos = {
		prevX: 0,
		prevY: 0,
		currX: 0,
		currY: 0
	};

	function setPosition(e: any) {
		let rect = e.target.getBoundingClientRect();
		pos.prevX = pos.currX;
		pos.prevY = pos.currY;
		pos.currX = e.clientX - rect.left;
		pos.currY = e.clientY - rect.top;
	}

	async function guess() {
		// const imgData: ImageData = smallCtx.getImageData(0, 0, 28, 28);
		const img = smallCtx.getImageData(0, 0, 28, 28);
		console.log(img);
		let d = img.data.slice(0, 784);
		let currentRow = [];

		for (let i = 0; i < d.length; i++) {
			currentRow.push(d[i]);
			if (currentRow.length == 28) {
				console.log(currentRow);
				currentRow = [];
			}
		}

		pred = await predict(img);
	}
	let pred: any[] = [];
</script>

<div class="text-center text-4xl pt-3">Doodle Recognition</div>
<div class="ml-7 mt-6 relative ">
	<div class="border absolute mt-2 ml-2">
		<canvas bind:this={smallCanvas} height="28px" width="28px" />
	</div>
	<div
		class="border-8 border-black h-[399px] w-[399px] cursor-crosshair box-content"
		on:mousemove={(e) => {
			setPosition(e);
			if (e.buttons !== 1) return;

			ctx.beginPath();
			ctx.moveTo(pos.prevX, pos.prevY);
			ctx.lineTo(pos.currX, pos.currY);
			ctx.stroke();

			ctx.closePath();

			const s = {
				cx: pos.currX * r,
				cy: pos.currY * r,
				px: pos.prevX * r,
				py: pos.prevY * r
			};

			smallCtx.beginPath();
			smallCtx.moveTo(s.px, s.py);
			smallCtx.lineTo(s.cx, s.cy);
			smallCtx.stroke();
			smallCtx.closePath();
		}}
		on:mouseenter={setPosition}
	>
		<canvas bind:this={canvas} height="400px" width="400px" />
	</div>
	<div class="h-2" />
	<ClearButton
		click={() => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			smallCtx.clearRect(0, 0, smallCanvas.width, smallCanvas.height);
		}}
		text="Clear Canvas"
	/>
	<div class="h-2" />
	<ClearButton click={guess} text="Guess" />
	{pred}
</div>
