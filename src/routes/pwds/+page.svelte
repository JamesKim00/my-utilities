<script lang="ts">
	// import { argon2Loaded, argon2NotLoaded } from '$lib/pwds/utils';
	import AddPassword from './AddPassword.svelte';
	import SeePasswords from './SeePasswords.svelte';

	// const loaded = async () => {
	// 	console.log('LOADED!');
	// 	// @ts-ignore
	// 	// @ts-ignore
	// 	// console.log(JSON.stringify(argon2));
	// const hashed = await argon2.hash({
	// 	pass: 'Password',
	// 	salt: 'sale',
	// 	type: 2,
	// 	hashLen: 16,
	// 	time: 2,
	// 	mem: 1024
	// });
	// 	// console.log(hashed);
	// 	// // @ts-ignore
	// 	// argon2Loaded(argon2);
	// };
</script>

<svelte:head>
	<!-- {#if argon2NotLoaded()}
		<script src="../node_modules/argon2-browser/lib/argon2.js" on:load={loaded}>
			// <script>
			// const argon2 = require('argon2-browser');
			// import argon2 from 'argon2-browser';
		</script>
	{/if} -->
</svelte:head>

<a href="/">Back to home</a>
<h1>Passwords!</h1>
<AddPassword />

<h1>See passwords:</h1>
<SeePasswords />
