<script>
	export let value = '';
	export let label = '';
	export let classes = '';
	export let name = label.toLowerCase().replace(' ', '-');
	export let onInput = function (e) {};
	export let autocomplete = 'off';
</script>

<label for={name} class="p-1">{label}</label>
<input
	class={'p-2 bg-gray-100 rounded-md ' + classes}
	on:input={onInput}
	{autocomplete}
	{value}
	{name}
/>
