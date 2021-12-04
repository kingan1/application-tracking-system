import axios from 'axios';

export default function fetch(options) {
  return new Promise((resolve, reject) => {
    axios({
      url: process.env.REACT_APP_API_ROOT + options.url,
      method: options.method,
      params: options.params,
      data: options.body,
    }).then((response) => {
      resolve(response.data)
    }).catch((e) => {
      if (e.status === 401) {
        window.location.href = "/";
      }
      reject(e);
    })
  })
}