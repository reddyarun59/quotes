import { API_BASE_URL } from '@/utils/constants';
import HttpClient from '../utils/http-client';

class Auth {
  login = (data: { username: string; otp: string }) => HttpClient.post(`${API_BASE_URL}/login`, data);
}

const AuthService = new Auth();
export default AuthService;
