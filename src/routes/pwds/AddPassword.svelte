<script lang="ts">
	const info: { email: string; password: string; description: string } = {
		email: '',
		password: '',
		description: ''
	};

	function changeVisibility() {
		// const p = e.event.target as HTMLFormElement;
		const p = document.getElementById('pwd') as HTMLFormElement;
		if (p.type === 'password') p.type = 'text';
		else p.type = 'password';
	}

	async function submit() {
		alert(JSON.stringify(info));
	}
</script>

<p>Add password:</p>
<form on:submit|preventDefault={submit}>
	<label for="email">Email: </label>
	<input id="email" type="email" bind:value={info['email']} placeholder="Email" required />

	<label for="password">Password: </label>
	<input id="pwd" type="password" bind:value={info['password']} placeholder="Password" required />
	<button on:click={changeVisibility} type="button">(show password)?</button>

	<label for="description">description: </label>
	<input type="text" bind:value={info['description']} placeholder="description" required />

	<button type="submit">Submit</button>
</form>
