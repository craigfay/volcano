
export function RestClient({ PAT = '' }) {
  const baseURL = "https://api.github.com"

  const headers = {
    "Accept": "application/vnd.github+json",
    "Authorization": `Bearer ${PAT}`
  }

  return {
    repo(org = '', name = '') {
      const url = `${baseURL}/repos/${org}/${name}`;
      return fetch(url, { headers })
    }
  }
}
