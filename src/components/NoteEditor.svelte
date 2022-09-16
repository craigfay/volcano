<script>
  import Button from '$components/Button.svelte';
  import { color, styleAttr } from '$lib/style';
  import { onMount } from 'svelte';

  export let editorContent = '# Section 1\n\n'
    + '_Enter some text here_\n\n'
    + '$$lim_{x \\to \\infty} = \\frac{1}{2}$$\n\n'
    + '[My Github Page](https://github.com/craigfay)\n\n'
    + '## Section 2\n\n'
    + 'This is a really, really, really, really, really, really, really, loooong line.\n\n'
    + '$\\sum_{n=1}^{\\infty} 2^{-n} = 1$\n\n'
    + '$f\'(x) = \\frac{\\cos(\\theta)}{\\sin(x)}$\n\n'
    + '`<head></head>`\n\n'
    + '## Section 3\n\n'
    + '```\n'
    + 'git clone git@github.com:craigfay/open_ui.git && cd open_ui\n'
    + 'cargo run\n'
    + '```\n'
    + 'Some text\n\n'
    + ' - Item 1 and a lot of **unecessary** super long extra annoying text to display.\n'
    + ' - Item 2\n'
    + ' - Item 3\n\n'
    + 'Some more text\n\n'
    + ' 1. Item 1 and a lot of **unecessary** super long extra annoying text to display.\n'
    + ' 2. Item 2\n'
    + ' 3. Item 3\n'


  let editor;
  let mode = 'view';
  let previewHTML = mode == 'view' ? generatePreview() : '';
  $: buttonText = mode == 'edit' ? 'View' : 'Edit';



  async function generatePreview() {
    import('katex/dist/katex.min.css');
    const katex = (await import('katex')).default;
    const showdown = await import('showdown');

    const markdown = new showdown.Converter();

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
    return html;
  }

  function toggleMode() {
    mode = mode == 'edit' ? 'view' : 'edit';
    generatePreview();
  };

  function resizeEditor() {
    editor.style.height = editor.scrollHeight + 'px';
  }

  const cssVars = {
    '--text-color': color[900],
    '--link-color': color[600],
    '--code-bg-color': color[50],
    '--code-color': color[700],
  }

  const style = styleAttr(cssVars)

</script>


<div class="m-4 mt-0 flex justify-between max-h-full flex-col h-full max-w-full border-box" {style}>

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

  {#if mode == 'view'}
    <div
      data-preview class="overflow-x-hidden" {style}>{@html previewHTML}
    </div>
  {/if}

  <Button onClick={toggleMode} class="fixed bottom-0 right-0 mr-4 mb-4">{buttonText}</Button>
</div>


<style>
  textarea {
    color: var(--text-color);
  }

  /* Attepting to solve katex top layer bug */
  :global(.katex * ) {
    z-index: -1;
  }

  /* Setting sensible defaults for top-level preview elements */
  :global([data-preview=''] *) {
    all: revert;
    color: var(--text-color);
  }

  /* Preventing x-overflow with line wrapping */
  :global([data-preview=''] > :is(:not(ul, ol))) {
    white-space: pre-wrap;
  }

  :global([data-preview=''] a) {
    color: var(--link-color);
  }

  /* Styling code blocks */
  :global([data-preview=''] :is(pre, code)) {
    background-color: var(--code-bg-color);
    border-radius: .4rem;
  }

  :global([data-preview=''] pre) {
    padding: .75rem;
  }

  :global([data-preview=''] code) {
    padding: .25rem;
    color: var(--code-color);
  }
</style>
