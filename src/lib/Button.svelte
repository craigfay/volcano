
<script>
  export let disabled = false;
  export let onClick = function() {}

  const defaultClassAttr = [
    "px-6",
    "py-2",
    "block",
    "rounded-md",
    "bg-gray-900",
    "text-white",
    "tracking-wide",
    "font-semibold",
    "transition-colors",
    "duration-300",
    "disabled:bg-gray-300",
  ].join(' ');

  $: classAttr = `${defaultClassAttr} ${$$props.class}`;
</script>

<button on:click={onClick} {disabled} class={classAttr}>
  <slot></slot>
</button>
