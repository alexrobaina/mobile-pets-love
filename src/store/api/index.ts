import axios from 'axios';

const baseUrl = 'http://localhost:3000/';

export default (url: string, method: string, data: string, headers: string) =>
  axios({
    baseUrl,
    method, 
    url,
    data,
    headers,
  });
