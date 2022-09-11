
<script>
  import Button from "$lib/Button.svelte";
  import ChevronIcon from '$lib/ChevronIcon.svelte';
  import { afterNavigate } from '$app/navigation'
  import { onMount } from 'svelte';
  import { color } from '$lib/style';

  export let lastPageURL = null;

  // Getting a URL to navigate back to the last page, if possible
  afterNavigate((navigaton) => {
    lastPageURL = navigaton?.from?.url?.pathname;
  });

  // Personal Access Token
  let githubToken= ''

  onMount(() => {
    githubToken = localStorage.getItem('github_token');
  });

  function saveCredentials() {
    localStorage.setItem('github_token', githubToken);
  }

</script>



<form class="p-4">

  {#if lastPageURL}
    <div class="flex mb-4 items-center">
      <ChevronIcon color={color[700]} class="w-3 h-3 rotate-180 mr-1" />
      <a href={lastPageURL} class="text-indigo-700 font-bold">Back</a>
    </div>
  {/if}

  <h1 class="text-2xl font-bold text-indigo-900 mb-6">Github Settings</h1>

  <label for="githubPAT" class="flex font-bold text-indigo-800 mb-2">Personal Access Token</label>

  <p class="text-sm text-indigo-700 mb-1">
    For more information about Github personal access tokens (PAT),
    refer to the<a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token">official documentation</a>.
  </p>

  <input name="githubPAT" bind:value={githubToken} type="password" class="p-2 border-2 border-indigo-200 rounded-md mb-6 w-full"/>

  <Button class="w-full my-2 py-3" onClick={saveCredentials}>Save</Button>
</form>