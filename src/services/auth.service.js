import {axiosClient} from '../plugins/http';

class AuthService {
  async login(user) {
    const response = await axiosClient
          .post('login', {
              email: user.email,
              password: user.password
          });
          console.log(response)
      if (response.data.data.token) {
          localStorage.setItem('token', response.data.data.token);
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