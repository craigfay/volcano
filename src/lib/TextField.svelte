<script>
  export let name = '[Form Name]'
  export let value = '';
  export let isPassword = false;
</script>

<label for="githubPAT" class="flex font-bold text-indigo-800 mb-2">Personal Access Token</label>

<p class="text-sm text-indigo-700 mb-2">
	For more information about Github personal access tokens (PAT), refer to the<a
		href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"
		>official documentation</a
	>.
</p>

<input
	{name}
	bind:value={value}
  type='text'
	class="p-2 border-2 border-indigo-200 rounded-md mb-6 w-full"
/>
