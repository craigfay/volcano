
<script>
  import { pageHistory } from '$lib/_page_history';
  import { page } from '$app/stores';

  export let clearHistory = false;
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
    if (clearHistory) pageHistory.set([]);

    allowBackTracking();
    onClick();
  }

</script>

<a {...$$props} {href} on:click={handleClick}><slot/></a>
