<script>
  import ChevronIcon from '$components/ChevronIcon.svelte';
  import { pageHistory } from '$lib/_page_history';
	import { color } from '$lib/style';

  let lastPageURL;

  pageHistory.subscribe(stack => {
    if (!lastPageURL && stack.length) {
      lastPageURL = stack[stack.length - 1];
    }
  })

  function backTrack() {
    pageHistory.update(stack => stack.slice(0, -1))
  }

</script>


{#if lastPageURL}
	<div class="flex mb-4 items-center">
		<ChevronIcon color={color[700]} class="w-3 h-3 rotate-180 mr-1" />
		<a on:click={backTrack} href={lastPageURL} class="text-indigo-700 font-bold">Back</a>
	</div>
{/if}
