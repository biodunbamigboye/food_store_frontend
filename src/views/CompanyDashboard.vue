<template>
  <div class="company-dashyboard flex-1">
    <SideMenu class="w-1/4"/>
    <CardBox class="w-3/4" />
  </div>
</template>
<script>
import SideMenu from "../components/AsideMenu.vue";
import CardBox from '../components/CardBox.vue';

export default {
  name: 'CompanyDashboard',
  components: {
    SideMenu,
    CardBox
  }
}

</script>
