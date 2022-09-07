
// A wrapper class for interacting with REST API created
// using Django Instant Rest
export default class RestResource {
  baseURL
  useCamelCase;

  constructor({ baseURL = '', useCamelCase = false }) {
    this.baseURL = baseURL;
    this.useCamelCase = useCamelCase;
  }

  // Create a new record
  create = async (fields = {}) => {
    let body = JSON.stringify(fields);
    return fetch(this.baseURL, { method: 'POST', body }).then(r => r.json());
  }

  // Update a single existing record
  update = async (id, changes = {}) => {
    let url = `${this.baseURL}/${id}`;
    let body = JSON.stringify(changes);
    return await fetch(url, { method: 'PUT', body }).then(r => r.json())
  }

 // Delete a single existing record
  delete = async (id) => {
    let url = `${this.baseURL}/${id}`;
    return await fetch(url, { method: 'DELETE' }).then(r => r.json())
  }

  // Retrieve a single existing record
  read = async (id) => {
    return fetch(`${this.baseURL}/${id}`).then(r => r.json());
  }

  // Retrieve a paginated list of records
  filter = async (filters = {}, pagination = {}) => {
    let params = { ...filters, ...pagination };
    let querystring = new URLSearchParams(Object.entries(params)).toString();
    let url = `${this.baseURL}?${querystring}`

    // Fetch and parse results
    let res = await fetch(url).then(r => r.json());
    let lastCursor = this.useCamelCase ? res.lastCursor : res['last_cursor'];
    let firstCursor = this.useCamelCase ? res.firstCursor : res['first_cursor'];
    let hasNextPage = this.useCamelCase ? res.hasNextPage : res['has_next_page'];
    let { data, errors } = res;
    
    // Return the data, and functions to retrieve the next and previous pages
    let next = async () => this.filter(filters, { after: lastCursor });
    let prev = async () => this.filter(filters, { before: firstCursor });
    return { data, errors, hasNextPage, next, prev }
  }

  // Return a list of every record
  all = async (params = {}) => {
    let getNextPage = async () => this.filter(params);
    let results = [];

    while (true) {
      let { data, errors, next, hasNextPage } = await getNextPage();
      if (errors?.length) return { errors, data: null }
      results.push(...data);
      if (!hasNextPage) return { data: results, errors: [] }
      getNextPage = next;
    }
  }
}