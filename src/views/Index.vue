<template>
  <div class="index">
    <UserId/>
    <div class="search" >
      <Search/>
    </div>
    <Card/>
    <GroupRecommend/>
  </div>
</template>

<style scoped>
   .search {
     margin-left: 150px;
     margin-top: 2px;
     margin-bottom: 10px;
   }
</style>

<script>
import Card from '@/components/Card.vue'
import UserId from "@/components/UserId.vue"
import GroupRecommend from "@/components/GroupRecommend.vue"
import Search from "@/components/Search.vue"
export default {
  name: 'index',
  components: {
    UserId,
    Card,
    GroupRecommend,
    Search,
  }
}

</script>
