
<script>
	import { pageHistory } from '$lib/_page_history';
	import { page } from '$app/stores';

  export let onClick = Function.prototype;
  export let href;
	let pathname;

	page.subscribe(page => {
    pathname = page.url.pathname;
  });

	function allowBackTracking() {
		pageHistory.update(stack => [...stack, pathname]);
	}

  function handleClick() {
    allowBackTracking();
    onClick();
  }

</script>

<a {...$$props} {href} on:click={handleClick}><slot/></a>
