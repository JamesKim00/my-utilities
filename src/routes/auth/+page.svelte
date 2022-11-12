<script lang="ts">
	import { goto } from '$app/navigation';
	import supabase from '$lib/supabase';
	import type { AuthChangeEvent, Session, UserResponse } from '@supabase/supabase-js';
	import Signin from './Signin.svelte';
	import Signup from './Signup.svelte';

	let isCreatingAccount: boolean = true;

	let info: { [key: string]: any } = {
		email: '',
		password: '',
		name: ''
	};

	supabase.auth.onAuthStateChange((authState: AuthChangeEvent, session: Session | null) => {
		if (authState === 'SIGNED_IN') goto('/');
	});
</script>

<a href="/">Go back to home?</a>

{#if isCreatingAccount}
	<Signup {info} />
{:else}
	<Signin {info} />
{/if}

<button
	on:click={() => {
		isCreatingAccount = !isCreatingAccount;
	}}>Change button</button
>
<div />

<!-- 
    Thanks for registering! Now you can check your email for verification.
    If you did not receive an email, there is a chance your account already exists.    
 -->
