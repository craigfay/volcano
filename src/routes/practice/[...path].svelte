
<script context="module">
  // Dynamically load a JSON module based on the URL path
  // and treat its contents as page props
  export async function load(ctx) {
    return { props: (await import(`../${ctx.params.path}.practice.json`)).default }
  }
</script>

<script>
  import DynamicComponent from '$lib/components/DynamicComponent.svelte';
  export let problems;
</script>

<div class="py-5">
  {#each problems as { _type, ...props }}
    <DynamicComponent {_type} {props} />
  {/each}
</div>
