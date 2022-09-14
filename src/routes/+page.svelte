<script>
  import Link from '$lib/Link.svelte';
  import { onMount, getContext } from 'svelte';
  import { contextKey as indexedDBContext } from '$lib/_indexed_db';

  let notebooks = [];
  let isLoaded;

  const databaseStartup = getContext(indexedDBContext);


  async function getNotebooks() {
    const db = await databaseStartup;
    return await db.notebooks.getAll();
  }

  onMount(async () => {
    notebooks = await getNotebooks();
    isLoaded = true;
  });
</script>


<h1 class="text-4xl font-bold text-indigo-900 m-4 my-6">Notebooks 📖</h1>

{#if isLoaded && !notebooks.length}
  <p class="text-lg text-indigo-800 m-4 mb-8 p-4 text-center bg-indigo-100 rounded-lg">
    You don't have any notebooks yet...<br />
    <Link href="/create-new" class="underline">Create a new one!</Link> ✏
  </p>
{:else}
  <p class="text-lg text-indigo-800 m-4 mb-6 p-4 text-center bg-indigo-100 rounded-lg">
    <Link href="/create-new" class="font-bold">New Notebook</Link> ✏
  </p>
{/if}

{#each notebooks as notebook}
  <div class="p-4 mb-4 mx-4 rounded-lg border-2 border-indigo-200">
    <div class="text-xl font-bold text-indigo-800 truncate whitespace-pre-wrap">{notebook.name}</div>
    <div class="text-indigo-700 truncate whitespace-pre-wrap">{notebook.description}</div>
  </div>
{/each}
