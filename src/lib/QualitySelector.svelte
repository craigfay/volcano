
<script>
  const defaultClassAttr = "bg-gray-200 text-gray-500 font-bold rounded-lg text-center py-2 transition"
  const selectedClassAttr = "bg-orange-300 text-orange-800"

  export let qualities = []
  export let selectedIdx = 0

  $: classAttr = function(idx) {
    if (idx == selectedIdx) return `${defaultClassAttr} + ${selectedClassAttr}`
    return defaultClassAttr
  }
</script>

<div class="grid grid-cols-2 gap-4">
  {#each qualities as quality, idx}
    <button class={classAttr(idx)} on:click={_e => selectedIdx = idx}>
      {quality.longName}
    </button>
  {/each}
</div>