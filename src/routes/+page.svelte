<script>
  import Button from "$lib/Button.svelte";
  import NoteEditor from "$lib/NoteEditor.svelte";
  import { onMount, getContext } from 'svelte';

  const dbLoading = getContext('indexed_db').load();


  async function getNotebooks() {
    const db = await dbLoading;
    console.log({ db });

  }


</script>

<Button onClick={getNotebooks}>Get Notebooks</Button>

<!-- <NoteEditor /> -->