<script>
  import Button from '$lib/Button.svelte';
  import showdown from 'showdown';

  export let editorContent = '## Title\n\n_Enter some text here_';

  const converter = new showdown.Converter();

  let editor;
  let mode = 'edit';

  $: buttonText = mode == 'edit' ? 'Preview' : 'Edit';
  $: previewContent = converter.makeHtml(editorContent);

  function toggleMode() {
    mode = mode == 'edit' ? 'preview' : 'edit';
  };

  function resizeEditor() {
    editor.style.height = editor.scrollHeight + 'px';
  }

</script>


<div class="m-4 flex flex-col max-w-full border-box">
  <Button onClick={toggleMode} class="mb-4">{buttonText}</Button>

  {#if mode == 'edit'}
    <textarea
      data-editor
      bind:this={editor}
      class="p-2 font-mono resize-none focus:outline-none"
      style={`height:${editor?.scrollHeight}px`}
      on:input={resizeEditor}
      bind:value={editorContent}
    />
  {/if}

  {#if mode == 'preview'}
    <div data-preview="">{@html previewContent}</div>
  {/if}

</div>

<style>
  :global([data-preview=''] *) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    margin-bottom: .5rem;
    font-weight: revert;
    font-size: revert;
  }
</style>
