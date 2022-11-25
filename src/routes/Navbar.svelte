<script lang="ts">
	import { base } from '$app/paths';
	import { showBars } from '$lib/loadingBars';
	import navIcons from '$lib/navIcons';
	import NavIcon from './NavIcon.svelte';

	const links: Array<string> = ['/auth', '/pwds', '/algo/l-systems'];
	for (let i = 0; i < links.length; i++) links[i] = base + links[i];
</script>

<nav
	class="w-20 h-screen fixed bg-slate-900 shadow-md"
	style={$showBars ? 'pointer-events: none' : ''}
>
	<div class="flex flex-col items-center pt-8">
		{#each Object.entries(navIcons) as [iconName, icon]}
			<NavIcon link={iconName}>
				{@html icon}
			</NavIcon>
		{/each}
	</div>
</nav>
