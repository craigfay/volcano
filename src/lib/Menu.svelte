
<script>
	import HamburgerIcon from './HamburgerIcon.svelte';
	import ChevronIcon from './ChevronIcon.svelte';
	import Link from '$lib/Link.svelte';
	import { color } from '$lib/style.js'

	export let isOpen = false;
	export let closeBehavior = () => {}; 

	export const menuItems = [
		{ name: 'Home', href: '/', clearHistory: true, },
		{ name: 'Editor', href: '/editor', clearHistory: false, },
		{ name: 'Settings', href: '/settings', clearHistory: false, },
	];

</script>


<!-- Blur Filter (Appears Behind Menu) -->
<div on:click={closeBehavior} class:hidden={!isOpen} class="z-10 bg-gray-900/50 fixed backdrop-blur-sm w-screen h-screen" />

<!-- Menu Container -->
<div
	class="z-10 transition-transform duration-200 right-0 bg-white translate-x-full absolute h-screen w-72 p-6 overflow-y-scroll"
	class:translate-x-0={isOpen}
>
	<!-- Menu Close Button -->
	<button aria-label="close menu" on:click={closeBehavior} class="block ml-auto mb-4">
		<HamburgerIcon isOpen={true} color={color[900]} class="float-right w-8 h-8" />
	</button>

	<!-- Menu Items -->
	{#each menuItems as {name, href, clearHistory }}
		<Link {href} {clearHistory} onClick={closeBehavior} class="flex justify-between items-center">
			<span class="my-3 text-indigo-900 text-xl font-bold block">{name}</span>
			<ChevronIcon color={color[900]} class="w-5 h-5" />
		</Link>
	{/each}
</div>
