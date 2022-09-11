
import { browser } from '$app/environment'

// Make the indexed db instance available as svelte context
export function exposeIndexedDB(setContext) {
  setContext(contextKey, contextValue)
}

// Defining a symbol to use as a svelte context key
// to prevent naming collisions when using `svelte.getContext`
export const contextKey = Symbol();

// A value that a high level component can pass to `svelte.setContext`
const contextValue = new Promise(async (resolve, _rej) => {
  if (browser) loadIndexedDB()
    .then(wrapWithHelperFns)
    .then(resolve)
})


// Given an `IDBDatabase`, return an object that wraps common behavior
// with async functions for ease of use.
async function wrapWithHelperFns(db) {
  return {
    getAll(storeName) {
      return new Promise((resolve, reject) => {
        const objectStore = db.transaction(storeName).objectStore(storeName);
        const request = objectStore.getAll()
        request.onsuccess = event => resolve(event.target.result);
        request.onerror = event => reject(event);
      })
    }
  }
}


export async function loadIndexedDB() {
  return new Promise(async (resolve, reject) => {
    const openRequest = indexedDB.open('volcano', 1);
    openRequest.onupgradeneeded = e => upgradeIndexedDBv1(e).then(resolve)
    openRequest.onsuccess = e => resolve(e.target.result);
    openRequest.onerror = reject;
  })
}


export function upgradeIndexedDBv1(event) {
  return new Promise((resolve, reject) => {

    const stores = [
      ["notebooks", { keyPath: "name" }],
      ["notes", { keyPath: "name" }],
    ];

    let db = event.target.result;

    stores.map((args) => {
      const store = db.createObjectStore(...args);
      store.transaction.onerror = reject;
      db = store.transaction.db;
    });

    resolve(db)
  })
}
