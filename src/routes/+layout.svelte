<script>
  import '../tailwind.css';
  import HeaderFooter from "$components/HeaderFooter.svelte";
  import PageTransition from '$components/PageTransition.svelte';
  import { openIndexedDB } from '$lib/indexed_db';
  import { onMount } from 'svelte';
  import { RestClient } from '$lib/github';

  /** @type {import('./$types').LayoutData} */
	export let data;

  openIndexedDB();

  onMount(async () => {
    const github = RestClient({
      PAT: localStorage.getItem('github_token'),
    })

    // const data = await github.repo('craigfay/brain_forest')
    //   .then(res => res.json())

    // console.log(data)

  })
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
