<script lang="ts">
	import presets from '$lib/algo/l-systems/presets';
	import { iterate, draw, stopDrawing, isDrawing, speed } from '$lib/algo/l-systems/rules';
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let mounted: boolean = false;

	let height: number = 1400;
	let width: number = 1400;

	let defaults: { [key: string]: number } = {
		startingX: 100,
		startingY: height / 2,
		angle: 45,
		length: 6,
		iterationCount: 4
	};
	let info: { [key: string]: number } = JSON.parse(JSON.stringify(defaults));

	let axiom: string;
	let rules: { [key: string]: string };
	let actions: { [key: string]: Array<string> };

	let preset: string = 'binaryTree';
	let options: Array<string> = Object.keys(presets);

	function changePresetTo(choice: string) {
		let c = presets[choice];

		axiom = c['axiom'];
		rules = c['rules'];
		actions = c['actions'];

		defaults['angle'] = c['defaults']['angle'];
		defaults['length'] = c['defaults']['length'];
		defaults['iterationCount'] = c['defaults']['iterationCount'];

		info = JSON.parse(JSON.stringify(defaults));
		generate();
	}
	$: changePresetTo(preset);

	let iterating: boolean = false;
	async function generate() {
		if (!mounted) return;
		if (isDrawing()) return stopDrawing.set(true);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.beginPath();
		iterating = true;
		const arrangement = await iterate(axiom, rules, info['iterationCount']);
		iterating = false;
		await draw({
			arrangement: arrangement,
			actions: actions,
			ctx: ctx,
			angle: info['angle'] * (Math.PI / 180),
			startingX: info['startingX'],
			startingY: info['startingY'],
			length: info['length']
		});
	}

	stopDrawing.subscribe(async (s: boolean) => {
		if (!s) await generate();
	});

	let ctx: CanvasRenderingContext2D;
	onMount(() => {
		ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
		mounted = true;
		generate();
	});

	let rotateDegrees: number = 0;
	$: if (canvas) canvas.style.transform = `rotate(${rotateDegrees}deg)`;
</script>

{#if iterating}
	<div class="absolute left-1/2 top-1/2 translate-x-1" style="transform: translate(-50%,-50%);">
		<div class="flex items-center justify-center space-x-2">
			<div class="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400" />
			<div class="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400" />
			<div class="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400" />
		</div>
	</div>
{/if}

<div
	class="flex flex-row w-full h-full"
	style={iterating ? 'opacity: 0.5; pointer-events: none;' : ''}
>
	<div class="w-full h-full">
		<div class="overflow-auto">
			<canvas bind:this={canvas} {height} {width} />
		</div>
	</div>

	<div class="w-1/5 bg-gray-400 h-screen p-2 fixed right-0">
		<h1>Choose a preset:</h1>
		<select bind:value={preset}>
			{#each options as value}<option {value}>{value}</option>{/each}
		</select>

		<br />
		<label for="rotate">Rotate:</label>
		<br />
		<input id="rotate" type="number" bind:value={rotateDegrees} />

		<br />
		<label for="height">Canvas Height: </label>
		<br />
		<input id="height" type="number" bind:value={height} on:input={generate} min="1" />

		<br />
		<label for="width">Canvas Width: </label>
		<br />
		<input id="width" type="number" bind:value={width} on:input={generate} min="1" />

		<br />
		<label for="speed">Speed: </label>
		<br />
		<input id="speed" type="number" bind:value={$speed} min="1" />

		<div class="py-1" />
		<hr />

		<form on:submit|preventDefault={generate}>
			{#each Object.entries(info) as [key, value]}
				<div class="py-2">
					<label for={key}>{key.charAt(0).toUpperCase() + key.slice(1) + ': '}</label>
					<br />
					<input id={key} type="number" bind:value={info[key]} required />
					<br />
					{#if value !== defaults[key]}
						<button on:click={() => (info[key] = defaults[key])}>(toDefault?)</button>
					{/if}
				</div>
			{/each}
			<hr />
			<button type="submit">(Submit)</button>
		</form>
	</div>
</div>
