<script lang="ts">
	import { loading, inFirstHalfOfTransition, showBars } from '$lib/nav/loadingBars';
	import { afterUpdate } from 'svelte';
	import { navigating } from '$app/stores';

	$: loading.set(!!$navigating);

	const bars: HTMLDivElement[] = [];
	let transitionIsLoading: boolean = false;
	// let showBars: boolean = false;

	const startTransition = async () => {
		transitionIsLoading = true;

		for (const bar of bars) {
			await new Promise((r) => setTimeout(r, 70));
			bar.classList.toggle('show');
			// bar.classList.toggle('scale-100');
		}
		// inLoadingScreen.update((v) => !v);
		await new Promise((r) => setTimeout(r, 400)); // bar-moving time

		transitionIsLoading = false;
	};

	loading.subscribe(async (loading: boolean) => {
		if (loading) showBars.set(true);
		else {
			if (transitionIsLoading || !$showBars) return;
			await startTransition();
			showBars.set(false);
		}
	});

	afterUpdate(async () => {
		if (transitionIsLoading || !$showBars) return;

		inFirstHalfOfTransition.set(true);
		await startTransition();
		inFirstHalfOfTransition.set(false);

		if ($loading) return;
		await startTransition();
		showBars.set(false);
	});
</script>

{#if $showBars}
	<div class="left-20 h-screen absolute overflow-hidden top-0 right-0">
		{#each { length: 5 } as _, i}
			<div
				bind:this={bars[i]}
				class={`bar bg-slate-800 box-content p-[1px] absolute h-1/5 w-full top-[${i * 20}%]`}
			/>
		{/each}
	</div>
{/if}

<style>
	.bar {
		transform: scale(0, 1) translate3d(0, 0, 0);
		transform-origin: 100% 100%;
		transition: transform 0.4s ease-in-out;
	}

	.show {
		transform: scale(1, 1) translate3d(0, 0, 0);
		transform-origin: 0 0;
	}
</style>
