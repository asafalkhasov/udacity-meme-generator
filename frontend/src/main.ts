import Axios from 'axios';
import Vue from 'vue';
import App from './App.vue';
import { Auth0Plugin } from './auth';
import router from './router';
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false;

Axios.interceptors.request.use((config) => {
    if(store.state.accessToken){
        config.headers["Authorization"] = `Bearer ${store.state.accessToken}`;
    }
    return config;
});

Vue.use(Auth0Plugin, {
    domain: "dev-awrp7z2o.eu.auth0.com",
    clientId: "MAFgVKZkSd7a65Y32yyJHi3Wo2gA2lKl",
    onRedirectCallback: (appState: any) => {
        router.push(
            appState && appState.targetUrl
                ? appState.targetUrl
                : window.location.pathname
        )
    }
})


new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
