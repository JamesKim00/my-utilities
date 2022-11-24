<script lang="ts">
	import { signout } from '$lib/auth/authentication';
	import { getUser } from '$lib/supabase';
	import Link from './Link.svelte';

	const getUserHere = getUser();
</script>

DO APPCHECK
<div>Hello, there!</div>
This is the main screen!!
<Link to="/auth" />
<Link to="/pwds" />
<Link to="/algo/l_systems" />
<button on:click={signout}>Signout</button>
{#await getUserHere}
	<p>Waiting!</p>
{:then userResponse}
	{#if userResponse['data']['user']}
		<h1>User data: {userResponse['data']['user']}</h1>
	{:else}
		<h1>[No user data]</h1>
	{/if}
{/await}
