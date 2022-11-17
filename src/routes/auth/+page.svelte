<script lang="ts">
	import Link from '../Link.svelte';
	import Signin from './Signin.svelte';
	import Signup from './Signup.svelte';

	let isCreatingAccount: boolean = true;

	let info: { name: string; email: string; password: string } = {
		email: '',
		password: '',
		name: ''
	};

	// supabase.auth.onAuthStateChange((authState: AuthChangeEvent, session: Session | null) => {
	// 	if (authState === 'SIGNED_IN') goto('/');
	// });
</script>

<Link to="/" />
aaaAA00!
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
