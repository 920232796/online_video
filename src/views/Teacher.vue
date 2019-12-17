<template>
  <div class="teacher">
      <ManagerId/>
      <ManageNavi class="manage_navi"/>
      <Search/>
      
  </div>
</template>

<style scoped>
   
</style>

<script>

import UserId from "@/components/UserId.vue"
import ManageNavi from "@/components/ManageNavi.vue"
import Search from "@/components/Search.vue"
import ManagerId from "@/components/ManagerId.vue"

export default {

  name: 'teacher',
  components: {
      UserId,
      ManageNavi,
      Search,
      ManagerId,
  }
}

</script>


<style scoped>
    .manage_navi {
        float: left;
    }
    
</style>
