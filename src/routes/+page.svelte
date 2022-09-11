<script>
  import NoteEditor from "$lib/NoteEditor.svelte";
  import Button from "$lib/Button.svelte";
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
  })


</script>

<!-- <NoteEditor /> -->

<h1 class="text-4xl font-bold text-indigo-900 m-6">Notebooks 📖</h1>

{#if isLoaded && !notebooks.length}
  <p class="text-lg text-indigo-800 m-6 p-4 text-center bg-indigo-50 rounded-md">
    You don't have any notebooks yet...<br />
    <button class="underline">Create a new one!</button> ✏
  </p>
{/if}


{#each notebooks as notebook}

{/each}

