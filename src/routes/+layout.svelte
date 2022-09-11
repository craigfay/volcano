
<script>
  import '../tailwind.css';
  import HeaderFooter from "$lib/HeaderFooter.svelte";
  import { onMount, setContext } from 'svelte';
  import { browser } from '$app/environment';


  let loadedDB = null;

  setContext('indexed_db', {
    get: () => new Promise(async (res, rej) => {
      const tryAgain = () => loadedDB ? res(loadedDB) : setTimeout(tryAgain);
      tryAgain();
    }),
  })

  onMount(async () => loadedDB = await initializeIndexedDB());



  async function upgradeIndexedDBv1(event) {
    const stores = [
      ["notebooks", { keyPath: "name" }],
      ["notes", { keyPath: "name" }],
    ];

    const db = event.target.result;
    stores.map((...args) => db.createObjectStore(...args));
  }

  async function initializeIndexedDB() {
    return new Promise(async (res, rej) => {
      const openRequest = indexedDB.open('volcano', 1);
      openRequest.onupgradeneeded = upgradeIndexedDBv1;
      openRequest.onsuccess = e => res(e.target.result);
      openRequest.onerror = rej;
    })
  }


</script>



<HeaderFooter>
  <slot></slot>
</HeaderFooter>