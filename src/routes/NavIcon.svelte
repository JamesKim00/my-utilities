<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	export let link: string;
	if (link === 'home') link = '';
	if (link === 'algo') link = 'algo/l-systems';

	const getLink = (): string => {
		if (link === '') return base;
		return `${base}/${link}`;
	};

	let svg: SVGElement;
	let isFocused: boolean = getLink() === $page.url.pathname;
	page.subscribe((page) => (isFocused = getLink() === page.url.pathname));

	const focusColor: string = '#A8DADC';
	const originalColor: string = '#004366';

	const clickNavIcon = () => {
		if (!isFocused) {
			isFocused = true;
			goto(getLink());
		}
	};

	let iconColor: string;
	$: iconColor = isFocused ? focusColor : originalColor;
</script>

<div class="relative group">
	<div
		class="transition-all cursor-pointer hover:bg-slate-700 rounded-xl"
		on:mouseenter={() => svg.setAttribute('fill', focusColor)}
		on:mouseleave={() => (isFocused ? '' : svg.setAttribute('fill', originalColor))}
		on:pointerup={clickNavIcon}
	>
		<div class="p-4">
			<!-- (16 + 4 = 1rem) x 2 -->
			<!-- 32 = 8 = 2rem -->
			<svg bind:this={svg} width="32" height="32" fill={iconColor} class="transition-all">
				<slot />
			</svg>
		</div>
		<!-- Icon height = 8 + 8, Info height = 6 + 2 -->
		<!-- between 4 and 5 === (16, 20) -->
		<div class="transition-all scale-0 group-hover:scale-100 origin-right ">
			<div class="absolute left-20 bottom-[18px] shadow-xl bg-black rounded-md py-1 px-2">
				<div class="w-auto min-w-max text-white font-bold text-sm">(i) {link}</div>
			</div>
		</div>
	</div>
</div>
