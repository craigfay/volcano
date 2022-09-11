<script>
  import Button from "$lib/Button.svelte";
  import NoteEditor from "$lib/NoteEditor.svelte";
  import { onMount, getContext } from 'svelte';
  import * as IDB from '$lib/_indexed_db';

  const loadingIDB = getContext(IDB.contextKey).load();

  async function getNotebooks() {
    const idb = await loadingIDB;
    console.log({ idb });
  }


</script>

<Button onClick={getNotebooks}>Get Notebooks</Button>
<!-- <NoteEditor /> -->