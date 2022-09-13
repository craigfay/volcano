<script>
	import { fly } from 'svelte/transition';
  import { flyIn, flyOut } from '$lib/_animations'
  import { backStack } from '$lib/_back_stack';


	export let url;

  let pageDepth;
  let isBack = false;

  backStack.subscribe(stack => {
    if (stack.length < pageDepth) isBack = true;
    else isBack = false;
    pageDepth = stack.length;
  })


  $: pathname = url?.pathname;

</script>

{#key pathname}
	<div
    in:fly={isBack ? flyIn.left : flyIn.right }
    out:fly={isBack ? flyOut.right : flyOut.left}
  >
		<slot />
	</div>
{/key}
