<script lang="ts">
	import { validatePassword } from '$lib/auth/validate';
	import { onMount } from 'svelte';
	import ErrorText from './ErrorText.svelte';

	export let is: string;
	export let info: { [key: string]: string };
	export let doPasswordValidation: boolean = false;

	const isPassword = is === 'password';
	const type: string = isPassword ? is : 'text';
	const placeholder: string = is.charAt(0).toUpperCase() + is.slice(1);

	let input: HTMLInputElement;
	onMount(() => (input = document.getElementById(is) as HTMLInputElement));

	let messages: string[] =
		isPassword && doPasswordValidation ? ['Need at least 2 uppercase characters'] : [];

	const handleInput = (e: any) => {
		info[is] = e.target.value;

		if (isPassword && doPasswordValidation) {
			messages = validatePassword(info['password']);
			if (messages.length !== 0) input.setCustomValidity('Please meet all the requirements');
			else input.setCustomValidity('');
		}
	};
</script>

<div class="flex flex-row justify-between min-w-fit max-w-[17rem] pt-1 pr-1 relative">
	{placeholder + ': '}
	<input
		id={is}
		{type}
		{placeholder}
		on:input={handleInput}
		class="rounded pl-1 focus:outline-none"
		required
	/>
	{#if isPassword}
		<div
			class="absolute left-full cursor-pointer"
			on:pointerdown={() => (isPassword ? (input.type = 'text') : '')}
			on:pointerup={() => (isPassword ? (input.type = 'password') : '')}
		>
			(i)
		</div>
	{/if}
</div>
<ErrorText showIf={isPassword && messages.length !== 0} text={messages[0]} />
