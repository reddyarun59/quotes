import AuthService from '@/services/auth.service';

export const login = async (loginData: { username: string; otp: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response: { data: any } = await AuthService.login(loginData);
  const { data } = response.data;
  return data;
};
