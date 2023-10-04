<template>
  <div class="company-dashyboard flex">
    <SideMenu class="w-1/6"/>
    <SalesBoard  class="w-5/6"/>
  </div>
</template>
<script>
import SideMenu from "../components/AsideMenu.vue";
import SalesBoard from '../components/SalesBoard.vue';

export default {
  name: 'CompanyDashboard',
  components: {
    SideMenu,
    SalesBoard
   
  }
}

</script>
