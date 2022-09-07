
<script>
  import HamburgerIcon from './HamburgerIcon.svelte';
  import SearchIcon from './SearchIcon.svelte';

  export let isOpen = false;
  export let toggleMenu = () => isOpen = !isOpen;
</script>


<div class="bg-gray-700 p-2 px-4 text-white flex w-screen justify-between items-center">

  <!-- Left Side Items -->
  <span class="font-bold">Logo Here</span>

  <!-- Right Side Items -->
  <div class="flex">
    <button on:click={toggleMenu} class="w-10 mr-2">
      <SearchIcon color="white" class="p-2"/>
    </button>

    <button on:click={toggleMenu} class="w-10">
      <HamburgerIcon color="white" class="p-2"/>
    </button>
  </div>

</div>
