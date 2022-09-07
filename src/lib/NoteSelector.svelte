
<script>
  import { chromaticScale as notes } from './_util';
  const defaultNoteClassAttr = "bg-gray-200 text-gray-500 font-bold rounded-lg uppercase text-center py-2 transition"
  const selectedNoteClassAttr = "bg-orange-300 text-orange-800"

  export let selectedIdx = 0

  $: noteClassAttr = function(idx) {
    if (idx == selectedIdx) return `${defaultNoteClassAttr} + ${selectedNoteClassAttr}`
    return defaultNoteClassAttr
  }
</script>

<div class="grid grid-cols-6 gap-4">
  {#each notes as note, idx}
    <button class={noteClassAttr(idx)} on:click={_e => selectedIdx = idx}>{note}</button>
  {/each}
</div>