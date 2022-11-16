<script lang="ts">
	import { signup } from '$lib/auth/authentication';
	export let info: { name: string; email: string; password: string };

	let messages: string[] = [];
	let isLoading: boolean = false;
	let hasSubmitted: boolean = false;

	function validate() {
		function test(r: string, m: string = '') {
			if (m) return !new RegExp(r, m).test(info['password'] as string);
			return !new RegExp(r).test(info['password'] as string);
		}

		messages = [];

		if (test('.*[A-Z].*[A-Z]')) messages.push('Need at least 2 uppercase characters');
		if (test('.*[a-z].*[a-z].*[a-z]')) messages.push('Need at least 3 lowercase characters');
		if (test('.*[0-9].*[0-9]')) messages.push('Need at least 2 numerals');
		if (test('.{8,}')) messages.push('Needs to be of length at least 8');
		if (test('[^a-z0-9 ]', 'i')) messages.push('Need at least 1 special character');

		try {
			const pwd = <HTMLInputElement>document.getElementById('pwd');
			if (messages.length !== 0) pwd.setCustomValidity('Please meet all the requirements');
			else pwd.setCustomValidity('');
		} catch (e) {}

		messages = messages;
	}
	validate();

	async function submit() {
		isLoading = true;
		await signup(info);
		// const { data, error } = await supabase.auth.signUp({
		// 	email: info['email'] as string,
		// 	password: info['password'] as string,
		// 	options: {
		// 		data: {
		// 			name: info['name'] as string
		// 		}
		// 	}
		// });
		// if (error) console.log(error);

		// console.log(JSON.stringify(data));
		isLoading = false;
		hasSubmitted = true;
	}

	function changeVisibility() {
		const p = document.getElementById('pwd') as HTMLFormElement;
		if (p.type === 'password') p.type = 'text';
		else p.type = 'password';
	}
</script>

<form on:submit|preventDefault={submit}>
	<label for="name">Name: </label>
	<input type="text" bind:value={info['name']} placeholder="Name" required />
	<label for="email">Email: </label>
	<input type="email" bind:value={info['email']} placeholder="Email" required />
	<label for="password">Password: </label>
	<input
		id="pwd"
		type="password"
		placeholder="Master Password"
		required
		bind:value={info['password']}
		on:input={validate}
	/>
	<button on:click={changeVisibility} type="button">(show password)?</button>
	<button type="submit">Submit</button>
</form>
<div>
	{#each messages as m}
		<div>
			{m}
		</div>
	{/each}
</div>
<p>
	{'currently loading: ' + isLoading}
</p>
{#if hasSubmitted}
	<p>Sent an email. now confirm it</p>
{/if}
