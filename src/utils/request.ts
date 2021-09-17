import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

declare class Request {
  constructor(method: MethodType, config: RequestConfig);
}

export type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type RequestConfig = {
  url: string;
  method: MethodType;
  data?: any;
  params?: any;
  headers?: any;
  getWay?: string;
};

function Request(method: MethodType, reqConfig: RequestConfig) {
  const baseUrl = import.meta.env.VITE_APP_BASE_API as string;

  const instance: AxiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    method: method,
  });

  instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      // token 处理
      // headers 设置
      // loading 处理
      return config;
    },
    (error: any) => {
      // loading 关闭
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (res: any) => {
      // loading 关闭
      // 错误处理
      return res;
    },
    (error: any) => {
      // loading 关闭
      // error 状态处理
      if (error && error.response) {
        const status = error.response.status;
        switch (status) {
          case 400:
            break;
          case 401:
            break;
          case 404:
            break;
        }
      }
      return Promise.reject(error);
    },
  );

  return axios(reqConfig);
}

export const post = (config: RequestConfig) => new Request('POST', config);

export const get = (config: RequestConfig) => new Request('GET', config);

export const del = (config: RequestConfig) => new Request('DELETE', config);

export const put = (config: RequestConfig) => new Request('PUT', config);
