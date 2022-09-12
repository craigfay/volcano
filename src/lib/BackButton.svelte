<script>
  import ChevronIcon from '$lib/ChevronIcon.svelte';
	import { afterNavigate } from '$app/navigation';
	import { color } from '$lib/style';

  let lastPageURL = null;

  // Getting a URL to navigate back to the last page, if possible
  afterNavigate((navigaton) => {
    let pathname = navigaton?.from?.url?.pathname;
    if (pathname) {
      let search = new URLSearchParams({ back: '1' }).toString();
      lastPageURL = `${pathname}?${search}`;
    }
  });

</script>


{#if lastPageURL}
	<div class="flex mb-4 items-center">
		<ChevronIcon color={color[700]} class="w-3 h-3 rotate-180 mr-1" />
		<a href={lastPageURL} class="text-indigo-700 font-bold">Back</a>
	</div>
{/if}
