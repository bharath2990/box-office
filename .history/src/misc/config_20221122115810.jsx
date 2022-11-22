const API_BASE_URL = 'https://api.tvmaze.com/';

export async function apiGet(queryString) {
  const response = fetch(`${API_BASE_URL}${queryString}`).then(r => r.json());
  return response;

  fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    .then(r => r.json())
    .then(result => {
      setResults(result);
      console.log(result);
    });
}
