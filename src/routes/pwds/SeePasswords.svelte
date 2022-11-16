<script lang="ts">
	import { seePasswords } from '$lib/pwds/passwords';

	let passwords: string = 'NOT HERE YET';
	async function showPasswords() {
		passwords = JSON.stringify(await seePasswords());
	}
</script>

<h1>The passwords!!!!!!!</h1>
<button on:click={showPasswords}>Show the passwords</button>
{passwords}
