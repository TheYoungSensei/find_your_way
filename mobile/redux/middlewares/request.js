import axios from 'axios';

const URL = 'http://192.168.1.29:8888';

export function get(endpoint, headers) {
  return axios.get(
    URL + endpoint,
    {
      withCredentials: true,
      headers: {
        ...headers,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Acces-Control-Allow-Origin': '*',
      },
    },
  );
}
