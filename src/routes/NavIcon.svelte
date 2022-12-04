<script lang="ts">
	import { page } from '$app/stores';
	import { moveToLink, containsLink } from '$lib/nav/links';

	export let link: string;
	if (link === 'home') link = '';

	let svg: SVGElement;
	let isFocused: boolean = containsLink($page.url.pathname, link);
	page.subscribe((page) => (isFocused = containsLink(page.url.pathname, link)));

	const focusColor: string = '#A8DADC';
	const originalColor: string = '#004366';

	let iconColor: string;
	$: iconColor = isFocused ? focusColor : originalColor;
</script>

<div class="relative group">
	<div
		class="transition-all cursor-pointer hover:bg-slate-700 rounded-xl"
		on:mouseenter={() => svg.setAttribute('fill', focusColor)}
		on:mouseleave={() => (isFocused ? '' : svg.setAttribute('fill', originalColor))}
		on:pointerup={() => {
			if (!isFocused) {
				isFocused = true;
				moveToLink(link);
			}
		}}
	>
		<div class="p-4">
			<svg bind:this={svg} width="32" height="32" fill={iconColor} class="transition-all">
				<slot />
			</svg>
		</div>
		<div class="transition-all scale-0 group-hover:scale-100 origin-right ">
			<div class="absolute left-20 bottom-[18px] shadow-xl bg-black rounded-md py-1 px-2">
				<div class="w-auto min-w-max text-white font-bold text-sm">(i) {link}</div>
			</div>
		</div>
	</div>
</div>
