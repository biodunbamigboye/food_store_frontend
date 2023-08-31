<template>
  <div class="">
    <header-nav />
    <div class="p-12">
      <div class="grid grid-rows-4 grid-flow-col gap-4">
        <div>01</div>
        <!-- ... -->
        <div>09</div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from './HeaderNav.vue'
export default {
  components: { HeaderNav },
  name: 'CardBox'
}
</script>

<style></style>
