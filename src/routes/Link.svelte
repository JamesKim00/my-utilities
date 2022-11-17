<script lang="ts">
	import { base } from '$app/paths';

	export let to: string;

	let link: string;
	if (to.charAt(0) !== '/') link = base + '/' + to;
	else link = base + to;
	console.log(link);
</script>

<a href={link} class="underline decoration-indigo-500">
	<slot>
		{link}
	</slot>
</a>
