<template>
  <div class="company-dashyboard flex">
    <SideMenu class="w-1/6"/>
    <company-form class="w-5/6" />
  </div>
</template>
<script>
import SideMenu from "../components/AsideMenu.vue";
import CompanyForm from '../components/CompanyForm.vue';

export default {
  name: 'CompanyDashboard',
  components: {
    SideMenu,
    CompanyForm
  }
}

</script>
