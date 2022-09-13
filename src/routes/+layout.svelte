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


<svelte:head>
  <title>Notebooks</title>
  <meta
    name="description"
    content="Manage your notes using
    the editor that supports markdown
    and LaTeX syntax."
  >
</svelte:head>

<HeaderFooter>
  <PageTransition url={data.url}>
    <slot></slot>
  </PageTransition>
</HeaderFooter>

