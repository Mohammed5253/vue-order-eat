import '@babel/polyfill';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import firebase from 'firebase';


// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyBsy_RHxQE7LCRtWqKottAUSpyqfpUFtqs",
authDomain: "order-eat-8adfc.firebaseapp.com",
databaseURL: "https://order-eat-8adfc.firebaseio.com",
projectId: "order-eat-8adfc",
storageBucket: "order-eat-8adfc.appspot.com",
messagingSenderId: "911781941674",
appId: "1:911781941674:web:eb9a8ea679afe316d9dbd3",
measurementId: "G-8S40M161S8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();




Vue.config.productionTip = false;
new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
