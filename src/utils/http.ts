import axios, { AxiosResponse } from 'axios';

axios.defaults.timeout = 20000;
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

/**
 * http request 拦截器
 */
axios.interceptors.request.use(
  (config) => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/json',
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/**
 * http response 拦截器
 */
type responseType = {
  code: number;
  message: string;
  data: any;
};
axios.interceptors.response.use(
  (response: AxiosResponse<responseType>) => {
    return response;
  },
  (error) => {
    alert(error);
    console.log('请求出错：', error);
  },
);

/**
 * 封装get方法
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */
export function get(url: string, params = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url: string, data: any): Promise<any> {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      },
    );
  });
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url: string, data = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    axios.patch(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        errorAlert(err);
        reject(err);
      },
    );
  });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url: string, data = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        errorAlert(err);
        reject(err);
      },
    );
  });
}

//统一接口处理，返回数据
type methodType = 'get' | 'post' | 'patch' | 'put' | 'delete';
export default function (method: methodType | string, url: string, param: any = null) {
  switch (method) {
    case 'get':
      return get(url, param);
    case 'delete':
      return new Promise((resolve, reject) => {
        return axios
          .delete(url, param)
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    case 'post':
      return post(url, param);
    case 'put':
      return new Promise((resolve, reject) => {
        return axios
          .put(url, param)
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    case 'patch':
      return post(url, param);
  }
  return axios.request({
    url: url,
    method: method,
    data: param,
  });
}

//失败提示
function errorAlert(err: any) {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        alert(err.response.data.error.details);
        break;
      case 401:
        alert('未授权，请登录');
        break;

      case 403:
        alert('拒绝访问');
        break;

      case 404:
        alert('请求地址出错');
        break;

      case 408:
        alert('请求超时');
        break;

      case 500:
        alert('服务器内部错误');
        break;

      case 501:
        alert('服务未实现');
        break;

      case 502:
        alert('网关错误');
        break;

      case 503:
        alert('服务不可用');
        break;

      case 504:
        alert('网关超时');
        break;

      case 505:
        alert('HTTP版本不受支持');
        break;
      default:
    }
  }
}
