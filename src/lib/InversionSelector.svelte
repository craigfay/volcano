

<script>
  const defaultClassAttr = "bg-gray-200 text-gray-500 font-bold rounded-lg uppercase text-center py-2 transition"
  const selectedClassAttr = "bg-orange-300 text-orange-800"

  export let selectedIdx = 0

  $: noteClassAttr = function(idx) {
    if (idx == selectedIdx) return `${defaultClassAttr} + ${selectedClassAttr}`
    return defaultClassAttr
  }
</script>

<div class="grid grid-cols-4 gap-4">
  {#each [1, 2, 3, 4] as n, idx}
    <button class={noteClassAttr(idx)} on:click={_e => selectedIdx = idx}>{n}</button>
  {/each}
</div>