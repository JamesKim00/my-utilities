<script lang="ts">
	import ClearButton from '$lib/components/ClearButton.svelte';
	import Signin from './Signin.svelte';
	import Signup from './Signup.svelte';

	let info: { name: string; email: string; password: string } = {
		email: '',
		password: '',
		name: ''
	};

	let isCreatingAccount: boolean = true;
	let title: string;
	let changeText: string;
	$: title = isCreatingAccount ? 'Make an account' : 'Login with an existing account';
	$: changeText = isCreatingAccount ? 'Login instead' : 'Create an account instead';
</script>

<div class="text-2xl">{title}</div>
<div class="text-gray-500 mb-4">Please fill out the following fields:</div>

{#if isCreatingAccount}
	<Signup {info} />
{:else}
	<Signin {info} />
{/if}

<!-- <div
	class="border-2 border-black py-1 px-3 mt-6 max-w-fit text-sm cursor-pointer"
	on:pointerup={() => (isCreatingAccount = !isCreatingAccount)}
>
	{changeText + '   ❯'}
</div> -->
<div class="h-6" />
<ClearButton click={() => (isCreatingAccount = !isCreatingAccount)} text={changeText + '   ❯'} />

<!-- 
    Thanks for registering! Now you can check your email for verification.
    If you did not receive an email, there is a chance your account already exists.    
 -->
