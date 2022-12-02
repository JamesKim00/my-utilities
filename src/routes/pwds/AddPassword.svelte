<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Field from '$lib/components/Field.svelte';
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

	let isLoading: boolean = false;
	const submit = async () => {
		isLoading = true;
		await addPassword(info);
		isLoading = false;
	};
</script>

<svelte:head>
	<script></script>
</svelte:head>

<h1 class="text-2xl">Add a Password:</h1>
<form on:submit|preventDefault={submit}>
	<Field is="email" {info} />
	<Field is="password" {info} />
	<Field is="description" {info} />
	<Field is="site" {info} />
	<div class="h-3" />
	<Button text="Add Password" {isLoading} />
</form>
