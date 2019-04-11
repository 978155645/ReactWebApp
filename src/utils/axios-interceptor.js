import axios from 'axios';
import { Toast } from 'antd-mobile';

axios.interceptors.request.use(
  function(config) {
    Toast.loading('加载中...', null, () => {
      console.log('加载完成!!!');
    });
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function(response) {
    Toast.hide();
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);
