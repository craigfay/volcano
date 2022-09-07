
<!--
  This component imports renders another component dynamically
  based on props given. This is helpful when UI depends on
  data that isn't known at build time.

  Because of the relative import, only components in the 
  same top level directory as this one should be imported.
-->

<script>
  import { onMount } from 'svelte';
  export let _type = "";
  export let props = {};

  let ChosenComponent;

  onMount(async () => {
		ChosenComponent = (await import(`./${_type}.svelte`)).default;
	});

</script>

<svelte:component this={ChosenComponent} {...props}/>
