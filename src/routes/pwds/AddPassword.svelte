<script lang="ts">
	import { addPassword } from '$lib/pwds/passwords';

	const info: { email: string; password: string; description: string; site: string } = {
		email: '',
		password: '',
		description: '',
		site: ''
	};

	function changeVisibility() {
		const p = document.getElementById('pwd') as HTMLFormElement;
		p.type === 'password' ? (p.type = 'text') : (p.type = 'password');
	}

	async function submit() {
		// alert(JSON.stringify(info));
		// try {
		await addPassword(info);
		// await getVaultKey();
		// await addPassword(info);
		// await addPassword(info);
		// } catch (e) {
		// alert(e);
		// }
	}
</script>

<svelte:head>
	<script></script>
</svelte:head>

<p>Add password:</p>
<form on:submit|preventDefault={submit}>
	<label for="email">Email: </label>
	<input id="email" type="email" bind:value={info['email']} placeholder="Email" required />

	<label for="password">Password: </label>
	<input id="pwd" type="password" bind:value={info['password']} placeholder="Password" required />
	<button on:click={changeVisibility} type="button">(show password)?</button>

	<label for="description">description: </label>
	<input type="text" bind:value={info['description']} placeholder="description" required />

	<label for="site">Site: (don't need to add https://, can leave empty)</label>
	<input type="text" bind:value={info['site']} placeholder="google.com" />

	<button type="submit">Submit</button>
</form>
