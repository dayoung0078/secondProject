<script>

import OrderReceipt from './views/OrderReceipt.vue';
import ReceiptBG from '@/views/ReceiptBG.vue';

</script>

<template>
  <ReceiptBG/>
  <div id="App">
    
    <OrderReceipt />
  </div>
</template>

<style scoped>

#App{display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;}

</style>

