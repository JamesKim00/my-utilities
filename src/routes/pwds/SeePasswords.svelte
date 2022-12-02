<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { seePasswords } from '$lib/pwds/passwords';

	const getPasswords = async () => (await seePasswords()) as string[];
	let awaitPasswords: Promise<string[]>;
</script>

<h1 class="text-2xl">See the Passwords:</h1>
<Button text="load" click={() => (awaitPasswords = getPasswords())} />
{#if awaitPasswords}
	{#await awaitPasswords}
		Loading...
	{:then passwords}
		{#each passwords as p}
			{#each Object.entries(JSON.parse(p)) as [field, about]}
				<div class="flex flex-row">
					<div class="w-[8rem]">{field.charAt(0).toUpperCase() + field.slice(1) + ': '}</div>
					<div class="">{about}</div>
				</div>
			{/each}
			<div class="h-4" />
		{/each}
	{/await}
{/if}
