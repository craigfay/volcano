<script>
	import katex from "katex";
	export let inline = false;
	export let tex = "";

  import '../../../node_modules/katex/dist/katex.min.css'
	
	const options = {
		displayMode: !inline,
		throwOnError: false
	}

	$: katexString = katex.renderToString(tex, options);
</script>

{#if inline}
	<span class={$$props.class}>
		{@html katexString}
	</span>
{:else}
	<div class={`mb-5 ${$$props.class}`}>
		{@html katexString}
	</div>
{/if}