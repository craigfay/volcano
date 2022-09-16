
<script>
  export let isOpen = false;
  export let color = 'black';
</script>

<svg viewBox="0 0 100 100" class={$$props.class}>
  <g class="lines" class:open={isOpen} stroke={color} stroke-width="10" stroke-linecap="round">
    <path d="M 10 20 l 80 0" />
    <path d="M 10 50 l 80 0" />
    <path d="M 10 80 l 80 0" />
  </g>
</svg>

<style>
  path {
    transition: all 0.2s;
  }

  .lines.open path:nth-child(1) {
    transform-origin: 17% 12%;
    transform: rotate(45deg) translateX(17%) translateY(-5%);
  }

  .lines.open path:nth-child(2) {
    opacity: 0;
  }

  .lines.open path:nth-child(3) {
    transform-origin: 17% 88%;
    transform: rotate(-45deg) translateX(17%) translateY(5%);
  }
</style>
