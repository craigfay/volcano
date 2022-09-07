
<script>
  import Button from "./Button.svelte";
  import DynamicComponent from "./DynamicComponent.svelte";
  import MultipleChoiceField from "./MultipleChoiceField.svelte";

  export let prompt;
  export let multipleChoice;

  let hasAnswered;
  let checkAnswer;
  let isCorrect;

  const correctButtonClassAttr = "disabled:bg-blue-300 disabled:text-blue-800";
  const incorrectButtonClassAttr = "disabled:bg-orange-300 disabled:text-orange-800";

  $: buttonText = !hasAnswered ? "Check" : isCorrect ? "Correct" : "Incorrect";
  $: buttonClassAttr = !hasAnswered ? "" : isCorrect ? correctButtonClassAttr : incorrectButtonClassAttr;

</script>

<div class="p-5 mb-10 last:mb-0 bg-gray-100 md:rounded-lg">
  {#each prompt as { _type, ...props }}
    <DynamicComponent {_type} props={{ ...props, "class": "mx-0" }} />
  {/each}
  
  <MultipleChoiceField
    bind:checkAnswer={checkAnswer}
    bind:hasAnswered={hasAnswered}
    bind:isCorrect={isCorrect}
    {...multipleChoice}
  />

  <Button
    disabled={hasAnswered}
    class={buttonClassAttr}
    onClick={checkAnswer}
  >{buttonText}</Button>

</div>
