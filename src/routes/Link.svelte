<script lang="ts">
	import { base } from '$app/paths';

	export let to: string;

	let link: string;
	if (to.charAt(0) !== '/') link = base + '/' + to;
	else link = base + to;
</script>

<div>
	{'Link to: '}
	<a href={link} class="underline decoration-indigo-500 decoration-2 italic">
		<slot>
			{link.slice(1) === '' ? 'Home' : link.slice(1)}
		</slot>
	</a>
	<br />
</div>
