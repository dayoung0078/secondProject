<script>
import ReceiptBG from '/views/ReceiptBG.vue'
import { ref, computed } from 'vue';
// 넘버도 데이터로 받아와야함

export default {
  name: 'OrderReceipt',
  components: {
        ReceiptBG
        },
        setup() {
        const orderNumber = ref('123');
        const orderDate = ref(new Date().toLocaleDateString());
        const items = ref([
          { id: 1, name: '아이스 아메리카노', quantity: 2, price: 8000 }, 
          { id: 2, name: '따뜻한 카페라떼', quantity: 1, price: 4500 },
          { id: 3, name: '콜드브루', quantity: 3, price: 15000 },
        ]);

        const totalPrice = computed(() => items.value.reduce((acc, item) => acc + item.price, 0));
        const Number = ref('253');

        }
  props: {
    orderNumber,
    orderDate,
    items: Array,
    totalPrice,
    totalNumber
    //부모에서 자식으로 데이터를 전달하는 경우 props

    return {
      orderNumber,
      orderDate,
      items,
      totalPrice,
      totalNumber
    };
  }
};
</script>



<template>

  <ReceiptBG>
    <div class="order-details">
      <div>주문서 #</div> {{ orderNumber }}
    <div class="order-date">
      <div>2024</div>  {{ orderDate }}

    <div class="items">
      <ul>
        <li v-for="item in items" :key="item.id">
          <span>{{item.number}}.{{ item.name }} - {{ item.quantity }} x ${{ item.price }}</span>
        </li>
      </ul>
    </div>
    <div class="total">
      <p><strong>TOTAL</strong> <div class="price">${{ totalPrice }}</div></p>
    </div>
    <div class="ReceiptBox">
    </div>
    <div class="Number">
      <h4 class= {{ Number }}> </h4>    
      </div>
  </div>
  </div>
  </ReceiptBG>
</template>



<style scoped>

.ReceiptBox {   
  position: absolute;
width: 700px;
height: auto;
background: linear-gradient
(180deg, rgba(219, 219, 219, 0.5) 0%, rgba(245, 245, 245, 0.783332) 25.53%, rgba(247, 247, 247, 0.8) 66.86%, rgba(183, 183, 183, 0.4) 100%);
}

.order-details{
  position: absolute;
width: auto;
height: 36px;
font-family: 'BM JUA_TTF';
font-style: normal;
font-weight: 400;
font-size: 35px;
line-height: 36px;
display: flex;
align-items: center;
text-align: center;
color: #494949;
}

.order-date{
  position: absolute;
width: auto;
height: 36px;
font-family: 'BM JUA_TTF';
font-style: normal;
font-weight: 400;
font-size: 35px;
line-height: 36px;
display: flex;
align-items: center;
text-align: right;

color: #949494;
}


.items{
position: absolute;
width: auto;
height: 31px;
font-family: 'BM JUA_TTF';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 31px;
display: flex;
align-items: center;
color: #747474;}

.total{
position: absolute;
width: 147px;
height: 52px;
font-family: 'BM JUA_TTF';
font-style: normal;
font-weight: 400;
font-size: 50px;
line-height: 52px;
display: flex;
align-items: center;
text-align: center;
color: #949494;
}

.price{
position: absolute;
width: 165px;
height: 41px;
font-family: 'BM JUA_TTF';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 41px;
text-align: right;
color: #4E4E4E;}

.totalNumber{
position: absolute;
width: 306px;
height: 124px;
font-family: 'BM JUA_TTF';
font-style: normal;
font-weight: 400;
font-size: 120px;
line-height: 124px;
display: flex;
align-items: center;
text-align: center;

color: #282808;}



.items ul {
  list-style-type: none;
}

.items li {
  margin-bottom: 5px;
}

.total p {
  font-size: 18px;
  font-weight: bold;
}
</style> 