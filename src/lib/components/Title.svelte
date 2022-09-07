<script>
  export let text = ""

  const defaultClassAttr = "text-4xl font-bold m-5";
  const classAttr = `${defaultClassAttr} ${$$props.class}`
</script>

<h1 class={classAttr}>{text}</h1>