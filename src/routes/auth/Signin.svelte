<script lang="ts">
	import { signin } from '$lib/auth/authentication';
	import Alert from '$lib/components/Alert.svelte';
	import Button from '$lib/components/Button.svelte';
	import Field from '$lib/components/Field.svelte';
	export let info: { email: string; password: string };

	let isLoading: boolean = false;
	let showAlert: boolean = false;

	let title: string;
	let body: string;

	async function submit() {
		isLoading = true;
		try {
			const user = await signin(info);
			title = `Hello ${user.user_metadata['name']}`;
			body = 'Welcome back!';
		} catch (e: any) {
			title = 'Error';
			body = e.message;
		}
		showAlert = false;
		showAlert = true;
		isLoading = false;
	}
</script>

<form on:submit|preventDefault={submit}>
	<Field is="email" {info} />
	<Field is="password" {info} />
	<div class="h-3" />
	<Button text="login" {isLoading} />
</form>

<Alert showIf={showAlert} {title} {body} />
