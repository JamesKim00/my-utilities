<!-- <script lang="ts">
	import { onMount } from 'svelte';
	import { initialize3d } from '$lib/3d/3d';

	let canvas: HTMLCanvasElement;
	onMount(async () => await initialize3d(canvas));
</script>

<canvas class="w-full h-full -z-10 fixed" bind:this={canvas} />
<div class="absolute w-full top-0 text-center text-white">
	<div class="text-5xl pt-6">My 3D Blender Model</div>
</div> -->
<script lang="ts">
	import { onMount } from 'svelte';

	// Set up canvas and grid size
	let canvas: any;
	onMount(() => {
		const ctx = canvas.getContext('2d');
		const gridSize = 50;

		// Create grid of cells with random initial state
		let grid = new Array(gridSize);
		for (let i = 0; i < gridSize; i++) {
			grid[i] = new Array(gridSize);
			for (let j = 0; j < gridSize; j++) {
				grid[i][j] = Math.random() < 0.5;
			}
		}

		// Function to draw grid on canvas
		function draw() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			for (let i = 0; i < gridSize; i++) {
				for (let j = 0; j < gridSize; j++) {
					if (grid[i][j]) {
						ctx.fillRect(i * 10, j * 10, 10, 10);
					}
				}
			}
		}

		// Function to update grid state based on Conway's rules
		function update() {
			const newGrid = new Array(gridSize);
			for (let i = 0; i < gridSize; i++) {
				newGrid[i] = new Array(gridSize);
				for (let j = 0; j < gridSize; j++) {
					const neighbors = [
						grid[i - 1] && grid[i - 1][j - 1],
						grid[i - 1] && grid[i - 1][j],
						grid[i - 1] && grid[i - 1][j + 1],
						grid[i][j - 1],
						grid[i][j + 1],
						grid[i + 1] && grid[i + 1][j - 1],
						grid[i + 1] && grid[i + 1][j],
						grid[i + 1] && grid[i + 1][j + 1]
					].filter(Boolean).length;

					if (grid[i][j] && (neighbors < 2 || neighbors > 3)) {
						newGrid[i][j] = false;
					} else if (!grid[i][j] && neighbors === 3) {
						newGrid[i][j] = true;
					} else {
						newGrid[i][j] = grid[i][j];
					}
				}
			}
			grid = newGrid;
		}

		// Main game loop
		function gameLoop() {
			update();
			draw();
			requestAnimationFrame(gameLoop);
		}

		requestAnimationFrame(gameLoop);
	});
</script>

<canvas bind:this={canvas} />
