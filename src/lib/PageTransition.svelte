<script>
	import { fly } from 'svelte/transition';
  import { flyIn, flyOut } from '$lib/_animations'

	export let url;
  $: pathname = url?.pathname;
  $: back = false;

</script>

{#key pathname}
	<div
    in:fly={back ? flyIn.left : flyIn.right }
    out:fly={back ? flyOut.right : flyOut.left}
  >
		<slot />
	</div>
{/key}
