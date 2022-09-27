<script>
  import BackButton from '$components/BackButton.svelte';
  import NotebookEditor from '$components/NotebookEditor.svelte';

  let title = "New Notebook"
</script>

<div class="p-4">
  <BackButton />

  <h1 class="text-2xl font-bold text-indigo-900 mb-6">{title}</h1>
  <NotebookEditor />
</div>
