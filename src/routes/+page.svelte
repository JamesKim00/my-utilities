<script lang="ts">
	import { goto } from '$app/navigation';
	import supabase from '$lib/supabase';
	import type { UserResponse } from '@supabase/supabase-js';

	function checkUserResponse(userResponse: UserResponse) {
		const { data, error } = userResponse;
		if (error) console.log('Error: ' + error);

		console.log(JSON.stringify(data['user']));
		if (!data['user']) goto('/auth');
		else return data['user'];
	}

	const getUser = supabase.auth.getUser();
</script>

DO APPCHECK
<div>Hello, there!</div>
This is the main screen!!
<a href="/auth">Authentication Screen</a>
<a href="/pwds">Passwords Screen</a>
{#await getUser}
	<p>Waiting!</p>
{:then userResponse}
	<p>{checkUserResponse(userResponse)}</p>
{:catch error}
	<p>There is an error!: {error}</p>
{/await}
