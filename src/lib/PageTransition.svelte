<script>
	import { fly } from 'svelte/transition';
  import { flyIn, flyOut } from '$lib/_animations'
	export let pathname = '';
</script>

{#key pathname}
	<div in:fly={flyIn.right} out:fly={flyOut.left}>
		<slot />
	</div>
{/key}
