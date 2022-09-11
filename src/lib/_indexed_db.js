
import { browser } from '$app/environment'

// Make the indexed db instance available as svelte context
export function exposeIndexedDB(setContext) {
  setContext(contextKey, contextValue)
}

// Defining a symbol to use as a svelte context key
// to prevent naming collisions when using `svelte.getContext`
export const contextKey = Symbol();


// A value that a high level component can pass to `svelte.setContext`
const contextValue = new Promise((resolve, _rej) => {
  if (browser) loadIndexedDB().then(resolve)
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
