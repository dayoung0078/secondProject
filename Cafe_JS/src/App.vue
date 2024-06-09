<script setup>

import ReceiptBG from '@/views/ReceiptBG.vue';

// export default {
//   name: 'App',
// components: {
//   OrderReceipt,
//   ReceiptBG
// }
// }

</script>

<template>

  <!-- template 태그는 기본 템플릿 영역임! -->
  <div id="app">
    <OrderReceipt/>
    <ReceiptBG/>


  </div>

</template>

<style scoped>

#App{display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;}

</style>

