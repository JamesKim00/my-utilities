<script lang="ts">
	import { goto } from '$app/navigation';
	import { signout } from '$lib/auth/authentication';
	import { getUser } from '$lib/supabase';
	import type { UserResponse } from '@supabase/supabase-js';
	import Link from './Link.svelte';
	// import { argon2Loaded, argon2NotLoaded } from '$lib/pwds/utils';

	function checkUserResponse(userResponse: UserResponse) {
		const { data, error } = userResponse;

		if (!data['user']) goto('/auth');
		else return data['user'];
	}

	const getUserHere = getUser();
</script>

DO APPCHECK
<div>Hello, there!</div>
This is the main screen!!
<Link to="/auth" />
<Link to="/pwds" />
<button on:click={signout}>Signout</button>
{#await getUserHere}
	<p>Waiting!</p>
{:then userResponse}
	<p>{checkUserResponse(userResponse)}</p>
{:catch error}
	<p>There is an error!: {error}</p>
{/await}
