<template>
  <div class="index">
    <UserId/>
    <Card/>
    <GroupRecommend/>
  </div>
</template>

<style scoped>
   
</style>

<script>
import Card from '@/components/Card.vue'
import UserId from "@/components/UserId.vue"
import GroupRecommend from "@/components/GroupRecommend.vue"

export default {
  name: 'index',
  components: {
    UserId,
    Card,
    GroupRecommend,
  }
}

</script>
