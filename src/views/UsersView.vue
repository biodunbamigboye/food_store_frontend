<template>
  <div class="company-dashyboard flex">
    <SideMenu class="w-1/6"/>
    <users-board class="w-5/6"/>
  </div>
</template>
<script>
import SideMenu from "../components/AsideMenu.vue";
import UsersBoard from '../components/UsersBoard.vue';

export default {
  name: 'CompanyDashboard',
  components: {
    SideMenu,
    UsersBoard
  }
}

</script>
