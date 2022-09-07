
<script>
  import { pitchUp } from './_util'
  export let tuning = ['e', 'a', 'd', 'g', 'b', 'e']

  function adjust(stringIdx, distance) {
    const newTuning = [...tuning];
    newTuning[stringIdx] = pitchUp(tuning[stringIdx], distance)
    tuning = newTuning;
  }

</script>

<div class="grid grid-cols-6 gap-4">
  {#each tuning as note, stringIdx}
    <div>
      <button on:click={_e => adjust(stringIdx, 1)} class="bg-gray-200 w-full p-4 rounded-t-lg">
        <svg class="fill-gray-400 w-4 mx-auto" viewBox="0 0 6 4">
          <polygon points="3,0 0,4 6,4" class="triangle" />
        </svg>
      </button>

      <div class="bg-gray-200 text-gray-500 font-bold py-1 text-center">{note?.toUpperCase()}</div>

      <button on:click={_e => adjust(stringIdx, -1)} class="bg-gray-200 w-full p-4 rounded-b-lg">
        <svg class="fill-gray-400 w-4 mx-auto" viewBox="0 0 6 4">
          <polygon points="3,4 0,0 6,0" class="triangle" />
        </svg>
      </button>
    </div>
  {/each}
</div>