
<script>
  export let spans = [];

  const defaultClassAttr = "m-5";
  const classAttr = `${defaultClassAttr} ${$$props.class}`
</script>

<p class={classAttr}>
  {#each spans as { bold, italic, underline, text } }
    {#if !bold && !italic && !underline }
      { @html text }
    {:else} 
      <span
        class:font-bold={bold}
        class:italic={italic}
        class:underline={underline}>
        { @html text }
      </span>
    {/if}
  {/each}
</p>