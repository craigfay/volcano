
<script>
  import '../tailwind.css';
  import HeaderFooter from "$lib/HeaderFooter.svelte";
  import { onMount, setContext } from 'svelte';
  import { initializeIndexedDB } from '$lib/_indexed_db';


  let loadedDB = null;

  setContext('indexed_db', {
    load: () => new Promise((res, _rej) => {
      const tryAgain = () => loadedDB ? res(loadedDB) : setTimeout(tryAgain);
      tryAgain();
    }),
  })

  onMount(async () => loadedDB = await initializeIndexedDB());

</script>



<HeaderFooter>
  <slot></slot>
</HeaderFooter>