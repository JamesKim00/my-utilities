<script lang="ts">
	import '../app.css';
	import { inFirstHalfOfTransition } from '$lib/loadingBars';
	import Sample from './Loading.svelte';
	import { fade } from 'svelte/transition';
</script>

{#if !$inFirstHalfOfTransition}
	<div out:fade>
		<div class="grid place-items-center m-10">
			<slot />
		</div>
	</div>
{/if}
<Sample />
