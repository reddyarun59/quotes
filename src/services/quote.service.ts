import { MEDIA_UPLOAD_URL, API_BASE_URL } from '@/utils/constants';
import HttpClient from '../utils/http-client';

class Quote {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  uploadImage = async (data: any) => {
    const response = await HttpClient.post(`${MEDIA_UPLOAD_URL}`, data, { headers: { 'Content-Type': 'multipart/form-data' } });
    return response.data;
  };

  createQuote = async (text: string, mediaUrl: string, token: string) => {
    const response = await HttpClient.post(`${API_BASE_URL}/postQuote`, { text, mediaUrl }, { headers: { Authorization: token } });
    return response.data;
  };

  getQuotes = async (limit: number, offset: number, token: string) => {
    const response = await HttpClient.get(`${API_BASE_URL}/getQuotes`, {
      params: { limit, offset },
      headers: { Authorization: token },
    });
    return response.data;
  };
}

const QuoteService = new Quote();
export default QuoteService;
