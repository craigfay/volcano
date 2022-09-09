<script>
  import Button from '$lib/Button.svelte';
  import showdown from 'showdown';
	import katex from "katex";

  const markdown = new showdown.Converter();

  export let editorContent = '# Section 1\n\n'
    + '_Enter some text here_\n\n'
    + '$$lim_{x \\to \\infty} = \\frac{1}{2}$$\n\n'
    + '[My Github Page](https://github.com/craigfay)\n\n'
    + '## Section 2\n\n'
    + 'This is a really, really, really, really, really, really, really, loooong line.\n\n'
    + '$\\cos(\\theta) + \\sin(x)$\n\n'
    + '## Section 3\n\n'
    + '```\n'
    + 'git clone git@github.com:craigfay/open_ui.git && cd open_ui\n'
    + 'cargo run\n'
    + '```\n'
    + 'Some text\n\n'
    + ' - Item 1 and a lot of unecessary super long extra annoying text to display.\n'
    + ' - Item 2\n'
    + ' - Item 3\n'


  let editor;

  let mode = 'edit';

  $: buttonText = mode == 'edit' ? 'Preview' : 'Edit';

  let previewHTML = '';

  function generatePreview() {
    // Converting markdown to html
    let html = markdown.makeHtml(editorContent);

    // Handling latex block expressions
    html = html.replace(/\$\$(.*)\$\$/g, (_match, p1) => {
      return katex.renderToString(p1, { displayMode: true, throwOnError: false })
    })

    // Handling latex inline expressions
    html = html.replace(/\$(.*)\$/g, (_match, p1) => {
      return katex.renderToString(p1, { displayMode: false, throwOnError: false })
    })

    previewHTML = html;
  }

  function toggleMode() {
    mode = mode == 'edit' ? 'preview' : 'edit';
    generatePreview();
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
    <div data-preview class="overflow-x-hidden">{@html previewHTML}</div>
  {/if}

</div>

<style>
  /* Preventing x-overflow with line wrapping */
  :global([data-preview=''] > :is(:not(ul))) {
    white-space: pre-wrap;
  }

  /* Setting sensible defaults for top-level preview elements */
  :global([data-preview=''] *) {
    all: revert;
  }

  /* Styling code blocks */
  :global([data-preview=''] pre) {
    padding: 1rem;
    background-color: #eee;
    border-radius: .4rem;
  }
</style>
