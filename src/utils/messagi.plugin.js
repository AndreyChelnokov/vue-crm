export default {
    install(Vue, options) {
        Vue.prototype.$messagi = function(html) {
            console.log(html);
        }

        Vue.prototype.$error = function(html) {
            console.log(`[Ошибка]: ${html}`);
        }
    }
}
