<script lang="ts">
	import '../app.css';
	import { inFirstHalfOfTransition } from '$lib/loadingBars';
	import { fade } from 'svelte/transition';
	import Loading from './Loading.svelte';
	import Navbar from './Navbar.svelte';
</script>

<Navbar />
{#if !$inFirstHalfOfTransition}
	<div out:fade>
		<div class="font-mono text-base">
			<div class="ml-20 p-4">
				<slot />
			</div>
		</div>
	</div>
{/if}
<Loading />
