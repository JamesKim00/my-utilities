<script lang="ts">
	import { signup } from '$lib/auth/authentication';
	import Alert from '$lib/components/Alert.svelte';
	import Button from '$lib/components/Button.svelte';
	import Field from '$lib/components/Field.svelte';
	export let info: { name: string; email: string; password: string };

	let isLoading: boolean = false;
	let showAlert: boolean = false;

	let title: string;
	let body: string;

	async function submit() {
		isLoading = true;
		try {
			await signup(info);
			title = `Hello, ${info['name']}!`;
			body = `We sent an email to ${info['email']}. Please follow the link in the email to finish the registration process. If you did not receive the email, the email my already be in use.`;
		} catch (e: any) {
			title = 'Error';
			body = e.message;
		}
		showAlert = false;
		showAlert = true;
		isLoading = false;
	}
</script>

<form on:submit|preventDefault={submit} id="form">
	<Field is="name" {info} />
	<Field is="email" {info} />
	<Field is="password" {info} doPasswordValidation={true} />
	<div class="h-3" />
	<Button text="create" {isLoading} />
</form>

<Alert showIf={showAlert} {title} {body} />
