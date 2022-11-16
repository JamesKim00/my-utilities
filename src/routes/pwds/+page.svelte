<script lang="ts">
	import { argon2Loaded, argon2NotLoaded } from '$lib/pwds/utils';
	import AddPassword from './AddPassword.svelte';
	import SeePasswords from './SeePasswords.svelte';

	const loaded = () => {
		console.log('LOADED!');
		// @ts-ignore
		argon2Loaded(argon2);
	};
</script>

<svelte:head>
	{#if argon2NotLoaded()}
		<script src="node_modules/argon2-browser/dist/argon2-bundled.min.js" on:load={loaded}></script>
	{/if}
</svelte:head>

<a href="/">Back to home</a>
<h1>Passwords!</h1>
<AddPassword />

<h1>See passwords:</h1>
<SeePasswords />
