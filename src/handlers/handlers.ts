/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthService from '@/services/auth.service';
import QuoteService from '@/services/quote.service';

export const login = async (loginData: { username: string; otp: string }) => {
  const response: { data: any } = await AuthService.login(loginData);
  const data = response.data;
  return data;
};

export const uploadImage = async (file: FormData) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response: { data: any } = await QuoteService.uploadImage(file);
  const data = response?.[0];
  return data;
};

export const createQuote = async (text: string, mediaUrl: string, token: string) => {
  const response: { data: any } = await QuoteService.createQuote(text, mediaUrl, token);

  const data = response.data;
  return data;
};

export const getQuotes = async (limit: number, offset: number, token: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response: { data: any } = await QuoteService.getQuotes(limit, offset, token);
  const data = response.data;
  return data;
};
