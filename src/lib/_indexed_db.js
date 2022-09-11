

export async function initializeIndexedDB() {
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
