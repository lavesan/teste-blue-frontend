<template>
  <div id="app">
    <RegiterUserComponent />
  </div>
</template>

<script>
import { RegiterUserComponent } from './components/register-user';
import axios from 'axios';
import Vuelidate from 'vuelidate';
import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

Vue.use(Vuelidate);
Vue.use(VueToast, { position: 'top' });

export default {
  name: 'App',
  components: {
    RegiterUserComponent,
  }
}
</script>

<style lang="scss">
  @import "@coreui/coreui/scss/coreui.scss";

  body {
    min-height: 100vh;
  }

  #app {
    min-height: 100vh;
  }
</style>
