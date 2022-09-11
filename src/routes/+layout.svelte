
<script>
  import '../tailwind.css';
  import HeaderFooter from "$lib/HeaderFooter.svelte";
  import { setContext } from 'svelte';
  import * as IDB from '$lib/_indexed_db';
  import { browser } from '$app/environment'

  setContext(IDB.contextKey, IDB.contextValue(browser))
</script>



<HeaderFooter>
  <slot></slot>
</HeaderFooter>