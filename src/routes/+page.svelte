<script lang="ts">
	import { goto } from '$app/navigation';
	import supabase from '$lib/supabase';
	import type { UserResponse } from '@supabase/supabase-js';

	function checkUserResponse(userResponse: UserResponse) {
		const { data, error } = userResponse;
		if (error) console.log('Error: ' + error);

		if (!data['user']) goto('/auth');
		else return JSON.stringify(data['user']);
	}

	const getUser = supabase.auth.getUser();
</script>

<div>Hello, there!</div>
This is the main screen!!
<a href="/auth">Authentication Screen</a>
{#await getUser}
	<p>Waiting!</p>
{:then userResponse}
	<p>{checkUserResponse(userResponse)}</p>
{:catch error}
	<p>There is an error!: {error}</p>
{/await}
