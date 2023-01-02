<script>
  import Link from '$components/Link.svelte';
  import { indexedDBContext } from '$lib/indexed_db';
  import { onMount } from 'svelte';
  import { delayedFlyIn, flipParams } from '$lib/animations';
  import { flip } from 'svelte/animate';
  import { fly } from 'svelte/transition';
  import { stringify } from 'postcss';

  const dbPromise = indexedDBContext();
  let notebooks = [];
  let isLoaded;

  async function getNotebooks() {
    const db = await dbPromise;
    return await db.notebooks.getAll();
  }

  onMount(async () => {
    // let githubClient = new Octokit({
    //   auth: localStorage.getItem('github_token'),
    // })

    // console.log({ githubClient })

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

{#each notebooks as { slug, name, description }, i (i)}
  <div animate:flip={flipParams} in:fly={delayedFlyIn.bottom(100 * i)} class="p-4 mb-4 mx-4 rounded-lg border-2 border-indigo-200">
    <Link href="/notebooks/{slug}" class="text-xl font-bold text-indigo-800 truncate whitespace-pre-wrap">{name}</Link>
    <div class="text-indigo-700 truncate whitespace-pre-wrap">{description}</div>
  </div>
{/each}

