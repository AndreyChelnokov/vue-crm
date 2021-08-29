import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import store from './store';
import messagiPlupin from '@/utils/messagi.plugin';
import dateFilter from '@/filters/date.filters.ts';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';

import firebase from "firebase";
// import 'firebase/';

Vue.config.productionTip = false
Vue.filter('date', dateFilter);
Vue.use(Vuelidate);
Vue.use(messagiPlupin);

firebase.initializeApp({
  apiKey: "AIzaSyDCHno2Zh94u1otSlzzMHD_m_tDFlEUvXM",
  authDomain: "cam-vue.firebaseapp.com",
  projectId: "cam-vue",
  storageBucket: "cam-vue.appspot.com",
  messagingSenderId: "1072493650361",
  appId: "1:1072493650361:web:9618755235964e71a75668",
  measurementId: "G-3CJ3FS0V28"
});

let app: any;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
