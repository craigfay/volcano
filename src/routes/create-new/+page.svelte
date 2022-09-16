<script>
	import Button from '$components/Button.svelte';
  import BackButton from '$components/BackButton.svelte';
  import { indexedDBContext } from '$lib/_indexed_db';


	const dbPromise = indexedDBContext();
	let name = '';
	let description = '';

	async function save() {
		let db = await dbPromise;

		db.notebooks.add({ name, description })
			.then(success => console.log({ success }))
			.catch(failure => console.log({ failure }))
	}

</script>

<form class="p-4">
  <BackButton />

	<h1 class="text-2xl font-bold text-indigo-900 mb-6">New Notebook</h1>

	<label for="name" class="flex font-bold text-indigo-800 mb-1">Name</label>
	<p class="text-sm text-indigo-700 mb-2">
		Give a unique name to the notebook so you can distinguish it from others.
	</p>
	<input
		name="name" bind:value={name}
		type="text"
		autocomplete="off"
		class="p-2 border-2 border-indigo-200 rounded-lg mb-6 w-full"
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
		class="p-2 border-2 border-indigo-200 rounded-lg mb-6 w-full"
	/>

	<Button class="w-full my-2 py-3" onClick={save}>Save</Button>
</form>
