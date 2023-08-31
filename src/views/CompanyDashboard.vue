<template>
  <div class="company-dashyboard flex">
    <SideMenu class="w-1/6"/>
    <CardBox class="w-5/6" />
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
