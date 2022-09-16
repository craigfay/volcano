
<script>
  import { color, styleAttr } from '$lib/style';

  export let disabled = false;
  export let onClick = function() {}

  let style = styleAttr({
    'background-color': color[900],
  });

  const defaultClassAttr = [
    "px-6",
    "py-2",
    "block",
    "rounded-lg",
    "text-white",
    "tracking-wide",
    "font-semibold",
    "transition-colors",
    "duration-300",
  ].join(' ');

  $: classAttr = `${defaultClassAttr} ${$$props.class}`;
</script>

<button on:click={onClick} {style} {disabled} class={classAttr} type="button">
  <slot></slot>
</button>
