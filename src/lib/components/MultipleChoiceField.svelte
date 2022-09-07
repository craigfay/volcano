
<script context="module">

  // The class attribute for a single selectable answer
  const baseChoiceClassAttr = [
    "bg-gray-200",
    "py-3",
    "px-5",
    "duration-300",
    "transition-color",
    "last:mb-0",
    "first:rounded-t-lg",
    "last:rounded-b-lg",
    "flex",
    "items-center",
  ].join(' ');
</script>


<script>
  import MathComponent from '$lib/components/MathExpression.svelte'
import { shuffle } from '$lib/util';

  export let choices = [];
  export let name = String(Math.random())
  export let correctChoice;

  export let shuffleChoices = false;
  export let hasAnswered = false;
  export let isCorrect = false;
  export let selectedValue;

  if (shuffleChoices) {
    shuffle(choices)
  }

  export function checkAnswer(_e) {
    isCorrect = selectedValue == correctChoice;
    hasAnswered = true;
    return isCorrect;
  }

  $: handleSelect = function(value) {
    return hasAnswered ? _e => null : _e => selectedValue = value;
  }

  $: choiceClassAttr = function(value) {
    if (value == selectedValue) return `${baseChoiceClassAttr} bg-gray-300`
    return baseChoiceClassAttr
  }
</script>


<div class="mb-5">
  {#each choices as value, idx}
    <div on:click={handleSelect(value)} class={choiceClassAttr(value)}>

      <input type="radio"
        class="h-8 mr-6"
        bind:group={selectedValue}
        disabled={hasAnswered}
        name={name}
        {value}
      />

      <label for={name}>
        <MathComponent inline tex={value}/>
      </label>

    </div>
  {/each}
</div>
