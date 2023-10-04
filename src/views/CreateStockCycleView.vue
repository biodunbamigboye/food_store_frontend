<template>
  <div class="company-dashyboard flex">
    <SideMenu class="w-1/6"/>
    <StockCycle class="w-5/6"/>
  </div>
</template>
<script>
import SideMenu from "../components/AsideMenu.vue";
import StockCycle from '../components/StockCycle.vue';

export default {
  name: 'CompanyDashboard',
  components: {
    SideMenu,
    StockCycle
  }
}

</script>
