
<script>
  import { onMount } from 'svelte';
  import Button from "$lib/Button.svelte";

  let username = ''
  let password = ''

  onMount(() => {
    username = localStorage.getItem('username');
    password = localStorage.getItem('password');
  });

  function storeCredentials() {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  }

</script>

<form class="p-4">
  <h1 class="text-2xl font-bold text-indigo-900 mb-4">Store Github Credentials</h1>

  <label for="username" class="font-bold text-indigo-800">Username</label>
  <input name="username" bind:value={username} class="p-2 border-2 border-indigo-200 rounded-md mb-4 w-full"/>

  <label for="password" class="font-bold text-indigo-800">Password</label>
  <input name="password" bind:value={password} type="password" class="p-2 border-2 border-indigo-200 rounded-md mb-4 w-full"/>

  <Button class="w-full my-2 py-3" onClick={storeCredentials}>Store</Button>
</form>