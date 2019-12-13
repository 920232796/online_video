<template>
  <div class="login">
    <LogIn/>
  </div>
</template>

<style scoped>
    .login {
        width: 100%;
        height: 850px;
        border: 1px solid grey;
        background-image: url("~@/assets/background.jpg");
        background-size: 100%;
    }
</style>

<script>
import LogIn from '@/components/LogIn.vue'

export default {
  name: 'login',
  components: {
    LogIn,
  }
}

</script>
