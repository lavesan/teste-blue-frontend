<template>
  <div id="app">
    <RegiterUserComponent />
  </div>
</template>

<script>
import { RegiterUserComponent } from './components/register-user';
import axios from 'axios';

axios.defaults.baseURL = environment.API_URL;

export default {
  name: 'App',
  components: {
    RegiterUserComponent,
  }
}
</script>

<style>
#app {}
</style>
