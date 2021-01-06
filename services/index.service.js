
var _this

export default function ({ app }, inject) {
  _this = app
  inject('main', methods)
}

const methods = {
  getPhoto(data) {
    return _this.$call({
      url: _this.$api.main,
      params:data
    });
  },

}