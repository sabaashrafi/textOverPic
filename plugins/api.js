import api from '../store/api.json'

var _this
export default function ({ app }, inject) {
  _this = app
  inject('call', call)
  inject('api', api)
}


const call = (arg) => {
  let method = arg.method || "get",
    url = arg.url,
    data = arg.data || {},
    params = arg.params || {},
    options = arg.options || {}

  return new Promise((resolve, reject) => {

      _this.$axios({
        method: method,
        url: url,
        data: method != "get" ? data : {},
        params: method == "get" ? params : {},
        headers: options && options.headers ? options.headers : {}
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
         reject(err)
        });

  });
}



