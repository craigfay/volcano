
export function RestClient({ PAT = '' }) {
  const baseURL = "https://api.github.com"

  const headers = {
    "Accept": "application/vnd.github+json",
    "Authorization": `Bearer ${PAT}`
  }

  return {

    repo(name = '') {
      const url = `${baseURL}/repos/${name}/contents`;
      return fetch(url, { headers })
    },

  }
}
