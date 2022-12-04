<script lang="ts">
	import { moveToLink } from '$lib/nav/links';
	export let to: string;
	export let text: string;
</script>

<div
	class="border-2 max-w-fit border-slate-700 p-1 cursor-pointer"
	on:pointerup={() => moveToLink(to)}
>
	{text}
</div>
