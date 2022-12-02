<script lang="ts">
	import '../app.css';
	import { inFirstHalfOfTransition } from '$lib/nav/loadingBars';
	import { fade } from 'svelte/transition';
	import Loading from './Loading.svelte';
	import Navbar from './Navbar.svelte';
</script>

{#if !$inFirstHalfOfTransition}
	<div out:fade>
		<div class="font-mono text-base">
			<div class="ml-20">
				<slot />
			</div>
		</div>
	</div>
{/if}
<Navbar />
<Loading />
