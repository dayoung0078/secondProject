<script>
export default {
  name: 'OrderReceipt',
  props: {
    orderNumber: String,
    orderDate: String,
    items: Array,
    totalAmount: Number
  }
}
</script>


<template>

  <div class="receipt">
    <div>RECEIPT</div>
  </div>
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
      <p><strong>TOTAL</strong> ${{ totalAmount }}</p>
    </div>
  </div>
  </div>
</template>



<style scoped>
.receipt {
position: absolute;
width: 456px;
height: 102px;
font-family: 'DNF Bit Bit v2';
font-style: normal;
font-weight: 400;
font-size: 70px;
line-height: 102px;
text-align: center;
letter-spacing: 0.1em;
color: #828282;
}

.order-details{
position: absolute;
width: 207px;
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
width: 227.11px;
height: 36px;

font-family: 'BM JUA_TTF';
font-style: normal;
font-weight: 400;
font-size: 35px;
line-height: 36px;
/* identical to box height */
display: flex;
align-items: center;
text-align: right;

color: #949494;  
}


.items{
position: absolute;
width: 13.79px;
height: 35.9px;

font-family: 'BM JUA_TTF';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 31px;
text-align: right;

color: #747474;}

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