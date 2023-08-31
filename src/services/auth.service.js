import {axiosClient} from '../plugins/http';

class AuthService {
  async login(user) {
    const response = await axiosClient
          .post('login', {
              email: user.email,
              password: user.password
          });
      if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
  }

  logout() {
    localStorage.removeItem('user');
  }

//   register(user) {
//     return axios.post(API_URL + 'signup', {
//       email: user.email,
//       password: user.password
//     });
//   }
}

export default new AuthService();