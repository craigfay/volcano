
<script>
  import '../tailwind.css';
  import HeaderFooter from "$lib/HeaderFooter.svelte";
  import { onMount, setContext } from 'svelte';
  import { initializeIndexedDB, ContextKey as IDBContext} from '$lib/_indexed_db';


  let db = null;

  setContext(IDBContext, {
    load: () => new Promise((res, _rej) => {
      const tryAgain = () => db ? res(db) : setTimeout(tryAgain);
      tryAgain();
    }),
  })

  onMount(async () => db = await initializeIndexedDB());

</script>



<HeaderFooter>
  <slot></slot>
</HeaderFooter>