
<script>
	import HamburgerIcon from './HamburgerIcon.svelte';
	import ChevronIcon from './ChevronIcon.svelte';

	export let isOpen = false;
	export let closeBehavior = () => {}; 

	export const menuItems = [
		['Home', '/'],
		['Products', '/'],
		['Account', '/'],
		['Settings', '/']
	];
</script>


<!-- Blur Filter (Appears Behind Menu) -->
<div on:click={closeBehavior} class:hidden={!isOpen} class="bg-gray-900/50 fixed backdrop-blur-sm w-screen h-screen" />

<!-- Menu Container -->
<div
	class="transition-transform right-0 bg-white translate-x-full absolute h-full w-72 p-6 overflow-y-scroll"
	class:translate-x-0={isOpen}
>
	<!-- Menu Close Button -->
	<button on:click={closeBehavior} class="block ml-auto mb-4">
		<HamburgerIcon isOpen={true} color="#444" class="float-right w-8 h-8" />
	</button>

	<!-- Menu Items -->
	{#each menuItems as [name, href]}
		<a {href} class="flex justify-between items-center">
			<span class="my-3 text-xl font-bold block">{name}</span>
			<ChevronIcon color="#666" class="w-5 h-5" />
		</a>
	{/each}
</div>
