export default {
  install(Vue, options) {
    Vue.prototype.$toast = function () {
      console.log('i am toast')
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor()
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}