import axios from 'axios';
import { SERVER_URL } from 'services/config';

class AuthService {
  login = (data) => {
    return axios
      .post(`http://localhost:3000/api/user/login`, data)
      .then((response) => response.data);
  };
}

export default AuthService;
