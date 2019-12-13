<template>
  <div class="view">
      <UserId/>
    <Video/>
  </div>
</template>

<style scoped>
   
</style>

<script>

import Video from "@/components/Video.vue"
import UserId from "@/components/UserId.vue"

export default {

  name: 'view',
  components: {
      UserId,
      Video,
  }
}

</script>
