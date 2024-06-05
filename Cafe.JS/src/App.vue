<script>
import ReceiptBG from './views/ReceiptBG.vue';
import OrderReceipt from './views/OrderReceipt.vue';

export default {
  name: 'App',
  components: {
    ReceiptBG,OrderReceipt
  },
  data() {
    return {
      order: {
        orderNumber: '253',
        orderDate: '2024-06-05',
        items: [
          { id: 1, name: 'Product 1', quantity: 2, price: 10 },
          { id: 2, name: 'Product 2', quantity: 1, price: 20 },
          { id: 3, name: 'Product 3', quantity: 3, price: 15 }
        ],
        totalAmount: 85
      }
    };
  }
}
</script>

<template>
  <div id="App">
    <OrderReceipt
      :orderNumber="order.orderNumber"
      :orderDate="order.orderDate"
      :items="order.items"
      :totalAmount="order.totalAmount"
    />
  </div>
</template>

<style scoped>
.container{color: linear-gradient (180deg, #5E7153 20%, #AF9544 50%, #D7A63C 75%, #FFB834 100%)};

</style>

