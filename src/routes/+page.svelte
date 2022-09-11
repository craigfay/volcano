<script>
  import Button from "$lib/Button.svelte";
  import NoteEditor from "$lib/NoteEditor.svelte";
  import { onMount, getContext } from 'svelte';

  const dbPromise = getContext('indexed_db').get();


  async function getNotebooks() {
    const db = await dbPromise;
    console.log({ db });

  }


</script>

<Button onClick={getNotebooks}>Get Notebooks</Button>

<!-- <NoteEditor /> -->