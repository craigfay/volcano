<script>
  let mode = 'edit';

  let editorContent = ''
</script>

<div class="m-4 flex flex-col max-w-full border-box">

  {#if mode == 'edit'}
    <div class="p-2 font-mono border border-box border-gray-200" contenteditable bind:innerHTML={editorContent}></div>
  {/if}

  {#if mode == 'preview'}
    <div>

    </div>
  {/if}

</div>