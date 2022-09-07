
<script>
  import TableOfContents from "$lib/components/TableOfContents.svelte";

  let items = [
    { name: "Algebra 1", href: "/algebra-1" },
    { name: "Algebra 2", href: "/algebra-2" },
  ]
</script>

<div class="p-4">
  <TableOfContents title="Topics" {items} />
</div>