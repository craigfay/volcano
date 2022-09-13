<script>
	import { onMount, getContext } from 'svelte';
	import { contextKey as indexedDBContext } from '$lib/_indexed_db';
	import { backStack } from '$lib/_back_stack';
	import { page } from '$app/stores';


	let notebooks = [];
	let isLoaded;
	let pathname;

	page.subscribe(page => {
		pathname = page.url.pathname;
	});

	const databaseStartup = getContext(indexedDBContext);

	function allowBackTracking() {
		backStack.update(stack => [...stack, pathname]);
	}

	async function getNotebooks() {
		const db = await databaseStartup;
		return await db.notebooks.getAll();
	}

	onMount(async () => {
		notebooks = await getNotebooks();
		isLoaded = true;
	});
</script>


<h1 class="text-4xl font-bold text-indigo-900 m-6">Notebooks 📖</h1>

{#if isLoaded && !notebooks.length}
	<p class="text-lg text-indigo-800 m-6 p-4 text-center bg-indigo-50 rounded-md">
		You don't have any notebooks yet...<br />
		<a on:click={allowBackTracking} href="/create-new" class="underline">Create a new one!</a> ✏
	</p>
{/if}

{#each notebooks as notebook}{/each}
