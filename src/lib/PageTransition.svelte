<script>
	import { fly } from 'svelte/transition';
  import { flyIn, flyOut } from '$lib/_animations'

	export let pageData;
  $: pathname = pageData.pathname;
  $: searchParams = pageData.searchParams;
  $: back = searchParams.get('back');

</script>

{#key pathname}
	<div
    in:fly={back ? flyIn.left : flyIn.right }
    out:fly={back ? flyOut.right : flyOut.left}
  >
		<slot />
	</div>
{/key}
