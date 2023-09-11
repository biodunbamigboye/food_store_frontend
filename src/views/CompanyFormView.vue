<template>
  <div class="company-dashyboard flex">
    <SideMenu class="w-1/6"/>
    <DashBoard class="w-5/6" />
  </div>
</template>
<script>
import SideMenu from "../components/AsideMenu.vue";
import DashBoard from '../components/DashBoard.vue';

export default {
  name: 'CompanyDashboard',
  components: {
    SideMenu,
    DashBoard
  }
}

</script>
