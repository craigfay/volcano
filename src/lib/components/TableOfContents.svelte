
<script>
  export let title = "[Title Goes Here]"
  export let items = [];

</script>

<h1 class="text-3xl font-bold mb-2">{title}</h1>
<div class="flex flex-col">
  {#each items as { href, name }}
    <a href={href} class="underline">{name}</a>
  {/each}
</div>