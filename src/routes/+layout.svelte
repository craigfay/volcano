
<script>
  import '../tailwind.css';
  import HeaderFooter from "$lib/HeaderFooter.svelte";
  import { setContext } from 'svelte';
  import { exposeIndexedDB } from '$lib/_indexed_db';
  exposeIndexedDB(setContext);
</script>



<HeaderFooter>
  <slot></slot>
</HeaderFooter>