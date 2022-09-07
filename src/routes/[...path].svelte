
<script context="module">
  // Dynamically load a JSON module based on the URL path
  // and treat its contents as page props
  export async function load(ctx) {
    return { props: (await import(`./${ctx.params.path}.lesson.json`)).default }
  }
</script>

<script>
  import DynamicComponent from '$lib/components/DynamicComponent.svelte';
  export let components;
</script>

<div class="py-5">
  {#each components as { _type, ...props }}
    <DynamicComponent {_type} {props} />
  {/each}
</div>
