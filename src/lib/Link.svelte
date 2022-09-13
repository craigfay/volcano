
<script>
  export let href;
  export let onClick = Function.prototype;
	import { backStack } from '$lib/_back_stack';
	import { page } from '$app/stores';

	let pathname;

	page.subscribe(page => {
    pathname = page.url.pathname;
  });

	function allowBackTracking() {
		backStack.update(stack => [...stack, pathname]);
	}

  function handleClick() {
    allowBackTracking();
    onClick();
  }

</script>

<a {...$$props} {href} on:click={handleClick}><slot/></a>