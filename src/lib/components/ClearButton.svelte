<script lang="ts">
	export let text: string;
	export let click: () => any = () => {};
</script>

<div class="border-2 border-black py-1 px-3 max-w-fit text-sm cursor-pointer" on:pointerup={click}>
	{text}
</div>
