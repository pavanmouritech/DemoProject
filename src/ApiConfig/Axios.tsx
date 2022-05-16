import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post.Accept = 'application/json';
const config: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: 3000,
};

const instance = axios.create(config);

const requestInterceptorId: number = instance.interceptors.request.use(
  (config: AxiosRequestConfig) => config,
  (error: any) => Promise.reject(error),
);


instance.interceptors.request.eject(requestInterceptorId);

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => Promise.resolve(config),
  (error: any) => Promise.reject(error),
);

instance.interceptors.response.use(
  response => response,
  async (error: any) => {

    return Promise.reject(error);
  },
);

instance.interceptors.request.use((config: AxiosRequestConfig) => config);
instance.interceptors.request.use((config: AxiosRequestConfig) =>
  Promise.resolve(config),
);

const responseInterceptorId: number = axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: any) => Promise.reject(error),
);

instance.interceptors.response.eject(responseInterceptorId);

instance.interceptors.response.use(
  (response: AxiosResponse) => Promise.resolve(response),
  (error: any) => Promise.reject(error),
);

instance.interceptors.response.use((response: AxiosResponse) => response);
instance.interceptors.response.use((response: AxiosResponse) =>
  Promise.resolve(response),
);

export interface AxiosProps {
  type: any;
  url: any;
  params?: any;
  headers?: any;
}

export const requestApi = ({
  type,
  url,
  params,
  headers,
}: AxiosProps): Promise<AxiosResponse> => {
  return instance.request({
    method: type,
    url: url,
    data: params,
    headers: headers,
  });
};

export default instance;
