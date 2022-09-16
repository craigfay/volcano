
<script>
  import HamburgerIcon from '$components/HamburgerIcon.svelte';
  import SearchIcon from '$components/SearchIcon.svelte';
  import { color, styleAttr } from '$lib/style';

  export let isOpen = false;
  export let toggleMenu = () => isOpen = !isOpen;

  let style = styleAttr({
    'border-color': color[100],
  });

</script>


<nav {style} class="bg-white p-2 px-4 border-b text-white flex w-screen justify-between items-center">

  <!-- Left Side Items -->
  <span class="font-bold"></span>

  <!-- Right Side Items -->
  <div class="flex">
    <button aria-label="search" on:click={toggleMenu} class="w-10 mr-2">
      <SearchIcon color={color[800]} class="p-2"/>
    </button>

    <button aria-label="open menu" on:click={toggleMenu} class="w-10">
      <HamburgerIcon color={color[800]} class="p-2"/>
    </button>
  </div>
</nav>
