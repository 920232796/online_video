<template>
  <div class="user">
      <UserId/>
      <UserInfo/>
  </div>
</template>

<style scoped>
   
</style>

<script>

import UserId from "@/components/UserId.vue"
import UserInfo from "@/components/UserInfo.vue"

export default {

  name: 'user',
  components: {
      UserId,
      UserInfo,
  }
}

</script>
