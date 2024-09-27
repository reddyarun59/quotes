/* eslint-disable import/extensions */
import { API_BASE_URL } from '@/utils/constants';
import HttpClient from '../utils/http-client';

class Auth {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  login = (data: any) => HttpClient.post(`${API_BASE_URL}/login`, data);
}

const AuthService = new Auth();
export default AuthService;
