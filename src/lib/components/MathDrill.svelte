
<script>
  import DynamicComponent from "./DynamicComponent.svelte";
  import MultipleChoice from "./MultipleChoice.svelte";

  export let intro;
  export let multipleChoice;
</script>

<div class="p-5 mb-10 last:mb-0 bg-gray-100 md:rounded-lg">
  {#each intro as { _type, ...props }}
    <DynamicComponent {_type} props={{ ...props, "class": "mx-0" }} />
  {/each}
  
  <MultipleChoice {...multipleChoice} />
</div>