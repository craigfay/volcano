

let json = localStorage.getItem('notebooks') ?? '{}';
let data = JSON.parse(json)

export function getAll() {
  return data;
}

export function save() {
  return list;
}

