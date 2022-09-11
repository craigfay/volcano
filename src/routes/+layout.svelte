<script>
  import '../tailwind.css';
  import HeaderFooter from "$lib/HeaderFooter.svelte";
  import PageTransition from '$lib/PageTransition.svelte';
  import { setContext } from 'svelte';
  import { exposeIndexedDB } from '$lib/_indexed_db';

  /** @type {import('./$types').LayoutData} */
	export let data;

  exposeIndexedDB(setContext);
</script>


<HeaderFooter>
  <PageTransition pageData={data}>
    <slot></slot>
  </PageTransition>
</HeaderFooter>

