<script lang="ts">
	export let showIf: boolean = false;
	export let title: string;
	export let body: string;
	export let showCheckout: boolean = true;
</script>

{#if showIf}
	<div class="absolute ml-20 left-0 right-0 top-0 bottom-0 backdrop-blur-sm " />
	<div class="absolute ml-10 left-1/2 top-1/3" style="transform: translate(-50%,-50%);">
		<div class="w-96 min-h-[15rem] rounded-xl shadow-2xl flex flex-col">
			<div class="bg-slate-700 text-white rounded-t-xl text-center py-2 text-xl">
				{title || 'Alert'}
			</div>
			<div class="p-4">
				{#if body}
					{body}
				{:else}
					<slot />
				{/if}
			</div>
			{#if showCheckout}
				<div class="mt-auto ml-auto mr-4 mb-4 border-2 border-black">
					<button class="px-2 py-1 text-sm" on:pointerup={() => (showIf = false)}>
						I understand
					</button>
				</div>
			{/if}
		</div>
	</div>
{/if}
