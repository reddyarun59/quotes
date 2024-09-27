import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

class HttpService {
  get<T>(url: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return Axios.get<T>(url, { ...config });
  }

  post<T, D = unknown>(url: string, data: D, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return Axios.post<T>(url, data, { ...config });
  }

  put<T, D = unknown>(url: string, data: D, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return Axios.put<T>(url, data, { ...config });
  }

  delete<T, D = unknown>(url: string, data: D = {} as D, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return Axios.delete<T>(url, { data, ...config });
  }
}

const HttpClient = new HttpService();

export default HttpClient;
