import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

class HttpService {
  get<T>(url: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return Axios.get<T>(url, { ...config, withCredentials: true });
  }

  post<T, D = unknown>(url: string, data: D, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return Axios.post<T>(url, data, { ...config, withCredentials: true });
  }

  put<T, D = unknown>(url: string, data: D, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return Axios.put<T>(url, data, { ...config, withCredentials: true });
  }

  delete<T, D = unknown>(url: string, data: D = {} as D, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return Axios.delete<T>(url, { data, ...config, withCredentials: true });
  }
}

const HttpClient = new HttpService();

export default HttpClient;
