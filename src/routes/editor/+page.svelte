<script>
	import BackButton from "$lib/BackButton.svelte";
</script>

{#await import("$lib/NoteEditor.svelte") then Module}
	<BackButton />
	<Module.default />
{/await}