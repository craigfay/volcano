
<script>
  export const ssr = false;

  import { onMount } from 'svelte';
  import git from 'isomorphic-git'
  import http from 'isomorphic-git/http/web'
  import FileSystem from '@isomorphic-git/lightning-fs'
  import Button from '$lib/Button.svelte';

  
  onMount(async () => {
    const fs = new FileSystem('fs').promises;
    const dir = '/1';
    // await fs.mkdir(dir);
    // await fs.mkdir(`${dir}/.git/config`);

    const url = 'https://github.com/craigfay/string_compressor';
    const corsProxy = 'https://cors.isomorphic-git.org';
    await git.clone({ fs, http, dir, url }).then(console.log)

    let contents = await fs.readdir(dir);
    console.log(contents)
  })



</script>


