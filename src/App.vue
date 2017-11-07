<template>
  <div class='container' id='app'>
    <div class='row'>
      <div class='col-sm'>
      </div>
      <div class='col-sm'>
        <Signin/>
      </div>
      <div class='col-sm'>
      </div>
    </div>
  </div>
</template>

<script>
import Signin from './components/Signin';

export default {
  name: 'app',
  components: {
    Signin
  }
}
</script>




