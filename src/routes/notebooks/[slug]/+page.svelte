<script>
  /** @type {import('./$types').PageData} */
  export let data;

  let slug = data?.params?.slug;

  import NotebookEditor from '$components/NotebookEditor.svelte';
</script>

<!-- <h1>Notebook</h1> -->
<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->

<NotebookEditor {slug}/>