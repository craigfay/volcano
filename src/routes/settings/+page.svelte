<script>
	import Button from '$lib/Button.svelte';
  import BackButton from '$lib/BackButton.svelte';
	import { onMount } from 'svelte';
	import { pageHistory } from '$lib/_page_history';
	import { page } from '$app/stores';

	// Personal Access Token
	let githubToken = '';
	let pathname;

	onMount(() => {
		githubToken = localStorage.getItem('github_token');
	});


	function saveCredentials() {
		localStorage.setItem('github_token', githubToken);
	}

	page.subscribe(page => {
    pathname = page.url.pathname;
  });

	function allowBackTracking() {
		pageHistory.update(stack => [...stack, pathname]);
	}

</script>

<form class="p-4">
  <BackButton />

	<h1 class="text-2xl font-bold text-indigo-900 mb-6">Github Settings</h1>

	<label for="githubPAT" class="flex font-bold text-indigo-800 mb-2">Personal Access Token</label>

	<p class="text-sm text-indigo-700 mb-1">
		For more information about Github personal access tokens (PAT), refer to the<a
			href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"
			>official documentation</a
		>.
	</p>

	<input
		name="githubPAT"
		bind:value={githubToken}
		type="password"
		class="p-2 border-2 border-indigo-200 rounded-md mb-6 w-full"
	/>

	<Button class="w-full my-2 py-3" onClick={saveCredentials}>Save</Button>
</form>
