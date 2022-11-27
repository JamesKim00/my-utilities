<script lang="ts">
	export let text: string;
	export let showIf: boolean;
</script>

{#if showIf}
	<div class="text-sm mb-1 italic" style="color: #ee964b;">
		{text}
	</div>
{/if}
