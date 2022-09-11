<script>
  import NoteEditor from "$lib/NoteEditor.svelte";
  import Button from "$lib/Button.svelte";
  import { onMount, getContext } from 'svelte';
  import { contextKey as indexedDBContext } from '$lib/_indexed_db';

  const databaseStartup = getContext(indexedDBContext).load();

  async function getNotebooks() {
    const db = await databaseStartup;
    console.log({ db });
  }


</script>

<Button onClick={getNotebooks}>Get Notebooks</Button>
<!-- <NoteEditor /> -->