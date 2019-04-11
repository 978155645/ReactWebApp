import axios from 'axios';

export default ({ method, url, params }) => {
  return axios({
    method: method ? method : 'get',
    url,
    params
  })
    .then(res => res.data)
    .catch(err => err);
};
