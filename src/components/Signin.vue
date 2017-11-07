<template>
  <div>
    <form v-on:submit='signin'>
      <div class='signin-title-container'>
        <h1 class='signin-title'>Sign In</h1>
      </div>
      <div class='form-group'>
        <input class='form-control'
          type='text'
          v-model='user.email'
          v-on:keyup='check'
          placeholder='Enter Your Email'
        />
        <small id='emailHelp'
          class='form-text text-muted'
        >
          {{user.hint.email}}
        </small>
      </div>
      <div class='form-group'>
        <input class='form-control'
          type='text'
          v-model='user.password'
          v-on:keyup='check'
          placeholder='Password'
        />
        <small id='emailHelp'
          class='form-text text-muted'
        >
          {{user.hint.password}}
        </small>
      </div>
      <button class='btn btn-primary'
        type='submit'
        v-bind:disabled='submitDisable'
      >
        Sign In
      </button>
    </form>
  </div>
</template>

<script>
import check from '../models/Check';
import signinSubmit from '../models/SigninSubmit';


export default {
  name: 'Signin',
  data () {
    return {
      user: {
        email: '',
        password: '',
        hint: {
          email: '',
          password: ''
        }
      },
      submitDisable: true,
    }
  },
  methods: {
    signin: function(e) {
      e.preventDefault();
      signinSubmit();
    },
    check: function() {
      var result = check(this.user.email, this.user.password);
      this.user.hint = result;
      if (this.user.hint.email === '' && this.user.hint.password === '') {
        console.log('should false')
        this.submitDisable = false;
      }
      else {
        this.submitDisable = true;
      }
    },
  },
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>
#app {
  margin-top: 15%;
  width: 100%;
}


</style>
