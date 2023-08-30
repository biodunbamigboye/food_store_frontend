<template>
  <div class="company-dashyboard flex-1">
    <SideMenu/>
    <card-box/>
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
