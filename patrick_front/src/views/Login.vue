<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Login</h1>
      <hr>
      <form class="form-horizontal" >
        <fieldset>
        <div class="field">
          <label class="label" for="password">Wachtwoord</label>
          <div class="control"><input id="password" name="password" type="password" placeholder="Voer je wachtwoord in..." class="input is-medium" v-model="password"></div>
        </div>
        <div class="field">
          <input class="button is-medium is-info" v-on:click="login" value="Login" type="button"/>
        </div>
        </fieldset>
      </form>

    </div>
  </section>
</template>

<script>
import { apiUrl } from '../variables.js';
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      password: ""
    }
  },
  methods: {
    login() {
      var url = apiUrl + '/auth';
      axios.post(url, {
        password: this.password
      }).then(res => {
        var result = res.data;
        if (result) {
          this.$store.commit('SET_AUTH', true);
          this.$router.push('/dashboard');
          this.$toast.open({
            type: 'is-success',
            message: 'Je bent ingelogged',
            queue: false
          });
        } else {
          this.wrongPasswordMessage();
        }
      }).catch(err => {
        console.log(err);
      })
    },
    wrongPasswordMessage() {
      this.$snackbar.open({
          message: 'Oeps! Verkeerd wachtwoord...',
          type: 'is-danger',
          position: 'is-top',
          indefinite: true
      });
    }
  }
}
</script>