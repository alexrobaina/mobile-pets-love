import axios from 'axios';
import { SERVER_URL } from 'services/config';

interface ILogin {
  email: string;
  password: string;
}

export const login = (data: ILogin) => {
  return axios
    .post(`http://localhost:3000/api/user/login`, data)
    .then((response) => console.log(response.data));
};
