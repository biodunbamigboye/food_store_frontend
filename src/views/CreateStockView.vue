<template>
  <div class="company-dashyboard flex">
    <SideMenu class="w-1/6"/>
    <stock-board class="w-5/6"/>
  </div>
</template>
<script>
import SideMenu from "../components/AsideMenu.vue";
import StockBoard from '../components/StockBoard.vue';

export default {
  name: 'CompanyDashboard',
  components: {
    SideMenu,
    StockBoard
  }
}

</script>
