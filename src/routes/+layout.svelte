<script lang="ts">
	import '../app.css';
	import { inFirstHalfOfTransition } from '$lib/nav/loadingBars';
	import { fade } from 'svelte/transition';
	import Loading from './Loading.svelte';
	import Navbar from './Navbar.svelte';
</script>

{#if !$inFirstHalfOfTransition}
	<div out:fade class="font-mono text-base ml-20 relative">
		<slot />
	</div>
{/if}
<Navbar />
<Loading />
