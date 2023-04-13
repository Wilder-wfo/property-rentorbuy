import { TOKEN_KEY } from '../config';
import apiFetch from './apiFetch';

const Auth = {
  async login(credentials) {
    try {
      const response = await apiFetch('/login', { body: credentials });
      const { token, ...user } = response;
      sessionStorage.setItem(TOKEN_KEY, token);
      return user;
    } catch (error) {
      console.error(error);
    }
  },

  async logout() {
    try {
      const response = apiFetch('/logout', { method: 'DELETE' });
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};

export default Auth;
