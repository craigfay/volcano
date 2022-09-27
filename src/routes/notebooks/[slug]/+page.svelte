<script>
  /** @type {import('./$types').PageData} */
  export let data;

  let slug = data?.params?.slug;

  import NotebookEditor from '$components/NotebookEditor.svelte';
  import BackButton from '$components/BackButton.svelte';
</script>


<div class="p-4">
  <BackButton />

  <h1 class="text-2xl font-bold text-indigo-900 mb-6">Edit Notebook</h1>
  <NotebookEditor {slug}/>
</div>