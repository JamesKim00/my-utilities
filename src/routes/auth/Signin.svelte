<script lang="ts">
	import { signin } from '$lib/auth/authentication';
	export let info: { email: string; password: string };

	let isLoading: boolean = false;

	async function submit() {
		isLoading = true;
		await signin(info);

		// const { data, error } = await supabase.auth.signInWithPassword({
		// 	email: info['email'] as string,
		// 	password: info['password'] as string
		// });

		// if (error) console.log(error);

		// console.log(JSON.stringify(data));
		isLoading = false;
	}
</script>

<form on:submit|preventDefault={submit}>
	<label for="email">Email: </label>
	<input id="email" type="email" bind:value={info['email']} placeholder="Email" required />
	<label for="password">Password: </label>
	<input
		id="password"
		type="password"
		bind:value={info['password']}
		placeholder="Master Password"
		required
	/>
	<button type="submit">Submit</button>
</form>
<p>
	{'currently loading: ' + isLoading}
</p>
