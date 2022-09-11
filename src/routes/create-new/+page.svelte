<script>
	import Button from '$lib/Button.svelte';
	import ChevronIcon from '$lib/ChevronIcon.svelte';
	import { afterNavigate } from '$app/navigation';
	import { color } from '$lib/style';

	export let lastPageURL = null;

	// Getting a URL to navigate back to the last page, if possible
	afterNavigate((navigaton) => {
    let pathname = navigaton?.from?.url?.pathname;
    if (pathname) {
      let search = new URLSearchParams({ back: '1' }).toString();
  		lastPageURL = `${pathname}?${search}`;
    }
	});

	let name = '';
	let description = '';

	function save() {}
</script>

<form class="p-4">
	{#if lastPageURL}
		<div class="flex mb-4 items-center">
			<ChevronIcon color={color[700]} class="w-3 h-3 rotate-180 mr-1" />
			<a href={lastPageURL} class="text-indigo-700 font-bold">Back</a>
		</div>
	{/if}

	<h1 class="text-2xl font-bold text-indigo-900 mb-6">New Notebook</h1>

	<label for="name" class="flex font-bold text-indigo-800 mb-1">Name</label>
	<p class="text-sm text-indigo-700 mb-2">
		Give a unique name to the notebook so you can distinguish it from others.
	</p>
	<input
		name="name" bind:value={name}
		type="text"
		autocomplete="off"
		class="p-2 border-2 border-indigo-200 rounded-md mb-6 w-full"
	/>

	<label for="description" class="flex font-bold text-indigo-800 mb-1">Description</label>
	<p class="text-sm text-indigo-700 mb-2">
		Optionally, provide a brief description of what this notebook is used for.
	</p>
	<input
		name="description"
		bind:value={description}
		autocomplete="off"
		type="text"
		class="p-2 border-2 border-indigo-200 rounded-md mb-6 w-full"
	/>

	<Button class="w-full my-2 py-3" onClick={save}>Save</Button>
</form>
