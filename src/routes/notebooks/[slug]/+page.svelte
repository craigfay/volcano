<script>
  /** @type {import('./$types').PageData} */
  import NotebookEditor from '$components/NotebookEditor.svelte';
  import BackButton from '$components/BackButton.svelte';
  import ChevronIcon from '$components/ChevronIcon.svelte';
	import { color } from '$lib/style'

  import { indexedDBContext } from '$lib/indexed_db';
  import { onMount } from 'svelte';

  export let data;

  const dbPromise = indexedDBContext();
  let slug = data?.params?.slug;
  let notebook;

  let fileList = [
    {
      path: 'Owen Barfield - Poetic Diction.md',
      isDir: false
    },
    {
      path: 'Awakening from the Meaning Crisis by John Vervaeke.md',
      isDir: false
    },
    {
      path: 'Music',
      isDir: true
    },
  ];

  onMount(async () => {
    let db = await dbPromise;
    notebook = await db.notebooks.get(slug);
  })

  function filename(fileObj) {
    return fileObj.path.split('/').pop()
  }


</script>


<div class="p-4">
  <BackButton />

  <h1 class:bg-indigo-50={!notebook?.name} class="rounded-md text-2xl font-bold text-indigo-900 mb-6">{notebook?.name}</h1>

  <div class="flex flex-col mb-4 rounded-lg border-2 border-indigo-200" >

    <button class="bg-indigo-50 rounded-tl-md rounded-tr-md text-indigo-800 font-bold p-2 border-b border-indigo-200 last:border-none text-left">New File</button>
    
    {#each fileList as fileObj}
      <div class="flex items-center text-indigo-800 p-2 border-b border-indigo-200 last:border-none">
        {#if fileObj.isDir}
          <ChevronIcon class="w-3 h-3 mr-1" color={color[400]}/>
        {/if}

        {filename(fileObj)}
      </div>
    {/each}
  </div>

  <!--
  <h1 class="text-2xl font-bold text-indigo-900 mb-6">Edit Notebook</h1>
  <NotebookEditor {slug}/>
  -->
</div>
