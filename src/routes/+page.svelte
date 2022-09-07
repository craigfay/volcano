<script>
  import Button from '$lib/Button.svelte';
  import showdown  from 'showdown';
  const converter = new showdown.Converter();

  let mode = 'preview';
  let editorContent = '## Hello!\n\n_How are you?_';

  $: htmlContent = converter.makeHtml(editorContent);
  $: buttonText = mode == 'edit' ? 'Preview' : 'Edit';

  const toggleMode = () => mode = mode == 'edit' ? 'preview' : 'edit';

</script>

<div class="m-4 flex flex-col max-w-full border-box">
  <Button onClick={toggleMode} class="mb-4">{buttonText}</Button>

  {#if mode == 'edit'}
    <div data-editor class="p-2 font-mono border border-box border-gray-200" contenteditable bind:innerHTML={editorContent}></div>
  {/if}

  {#if mode == 'preview'}
    <div data-preview="">{@html htmlContent}</div>
  {/if}

</div>

<style>
  :global([data-preview=''] *) {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    font-weight: revert;
    font-size: revert;
  }

</style>