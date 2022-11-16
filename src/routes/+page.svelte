<script lang="ts">
	import { goto } from '$app/navigation';
	import { signout } from '$lib/auth/authentication';
	import { getUser } from '$lib/supabase';
	import type { UserResponse } from '@supabase/supabase-js';
	// import { argon2Loaded, argon2NotLoaded } from '$lib/pwds/utils';

	function checkUserResponse(userResponse: UserResponse) {
		const { data, error } = userResponse;
		if (error) console.log('Error: ' + error);

		console.log(JSON.stringify(data['user']));
		if (!data['user']) goto('/auth');
		else return data['user'];
	}

	const getUserHere = getUser();
	// const loaded = async () => {
	// 	// @ts-ignore
	// 	const hashed = (
	// 		await argon2.hash({
	// 			pass: 'passwordYAY',
	// 			salt: 'saltsalt',
	// 			type: 2,
	// 			hashLen: 16,
	// 			time: 2,
	// 			mem: 1024
	// 		})
	// 	).hashHex;
	// 	console.log(hashed);

	// 	// console.log(hashed);
	// };
</script>

<svelte:head>
	<!-- <script src="node_modules/argon2-browser/dist/argon2-bundled.min.js" on:load={loaded}></script> -->
</svelte:head>

DO APPCHECK
<div>Hello, there!</div>
This is the main screen!!
<a href="/auth">Authentication Screen</a>
<a href="/pwds">Passwords Screen</a>
<button on:click={signout}>Signout</button>
{#await getUserHere}
	<p>Waiting!</p>
{:then userResponse}
	<p>{checkUserResponse(userResponse)}</p>
{:catch error}
	<p>There is an error!: {error}</p>
{/await}
