

// Defining a symbol to use as a svelte context key
// to prevent naming collisions when using `svelte.getContext`
export const contextKey = Symbol();


// A value that a high level component can pass to `svelte.setContext`
export const contextValue = (isBrowser)  => ({
  load: () => new Promise((resolve, _rej) => {
    if (!isBrowser) return;
    loadIndexedDB().then(resolve)
  }),
})


export async function loadIndexedDB() {
  return new Promise(async (res, rej) => {
    const openRequest = indexedDB.open('volcano', 1);
    openRequest.onupgradeneeded = upgradeIndexedDBv1;
    openRequest.onsuccess = e => res(e.target.result);
    openRequest.onerror = rej;
  })
}


export async function upgradeIndexedDBv1(event) {
  const stores = [
    ["notebooks", { keyPath: "name" }],
    ["notes", { keyPath: "name" }],
  ];

  const db = event.target.result;
  stores.map((...args) => db.createObjectStore(...args));
}
