<script>
  import Button from '$components/Button.svelte';
  import { indexedDBContext } from '$lib/indexed_db';
  import { onMount } from 'svelte';

  export let slug = null;
  export let isAlreadySaved = Boolean(slug);

  const dbPromise = indexedDBContext();

  let name = '';
  let description = '';
  let githubRepo = null;

  let githubRepoErrMessage = null;

  async function loadNotebook() {
    if (!slug) return;
    let db = await dbPromise;
    const notebook = await db.notebooks.get(slug);

    if (notebook) {
      name = notebook.name;
      description = notebook.description;
      slug = notebook.slug;
      githubRepo = notebook.githubRepo;
    }
  }

  onMount(loadNotebook);



  async function save() {
    let db = await dbPromise;

    const saveChanges = isAlreadySaved
      ? db.notebooks.put
      : db.notebooks.add;

    if (!isAlreadySaved) slug = name.toLowerCase().replace(/\s/g, '-');
    if (githubRepo === '') githubRepo = null;

    if (githubRepo && false == /^.*\/.*$/.test(githubRepo)) {
      githubRepoErrMessage = 'Must match the pattern [org-name]/[repo-name]'
      return;
    }

    saveChanges({ slug, name, description, githubRepo })
      .then(success => console.log({ success }))
      .catch(failure => console.log({ failure }))
  }



</script>

<form>
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

  <label for="description" class="flex font-bold text-indigo-800 mb-1">GitHub Repository</label>
  <p class="text-sm text-indigo-700 mb-2">
    Optionally, provide the full name of a GitHub repository that the notebook should be synced with.
  </p>

  {#if githubRepoErrMessage}
    <p class="text-sm font-bold text-red-500 mb-2">{githubRepoErrMessage}</p>
  {/if}

  <input
    name="github-repo"
    bind:value={githubRepo}
    autocomplete="off"
    type="text"
    class="p-2 border-2 border-indigo-200 rounded-lg mb-6 w-full"
  />



  <Button class="w-full my-2 py-3" onClick={save}>Save</Button>
</form>
