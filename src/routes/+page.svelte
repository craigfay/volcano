<script>
  import Link from '$lib/components/Link.svelte';
  import { indexedDBContext } from '$lib/_indexed_db';
  import { onMount } from 'svelte';
  import { delayedFlyIn, flipParams } from '$lib/_animations';
  import { flip } from 'svelte/animate';
  import { fade } from 'svelte/transition';

	const dbPromise = indexedDBContext();
  let notebooks = [];
  let isLoaded;

  async function getNotebooks() {
    const db = await dbPromise;
    return await db.notebooks.getAll();
  }

  onMount(async () => {
    notebooks = await getNotebooks();
    isLoaded = true;
  });

</script>


<h1 class="text-4xl font-bold text-indigo-900 m-4 my-6">Notebooks 📖</h1>

{#if false && isLoaded && !notebooks.length}
  <p class="text-lg text-indigo-800 m-4 mb-8 p-4 text-center bg-indigo-100 rounded-lg">
    You don't have any notebooks yet...<br />
    <Link href="/create-new" class="underline">Create a new one!</Link> ✏
  </p>
{:else}
  <Link href="/create-new" class="block font-bold text-lg text-indigo-800 m-4 mb-6 p-4 text-center bg-indigo-100 rounded-lg">
    New Notebook ✏
  </Link> 
{/if}

{#each  notebooks as { name, description }, i (i)}
  <div animate:flip={flipParams} in:fade={delayedFlyIn.left(100 * i)} class="p-4 mb-4 mx-4 rounded-lg border-2 border-indigo-200">
    <div class="text-xl font-bold text-indigo-800 truncate whitespace-pre-wrap">{name}</div>
    <div class="text-indigo-700 truncate whitespace-pre-wrap">{description}</div>
  </div>
{/each}
