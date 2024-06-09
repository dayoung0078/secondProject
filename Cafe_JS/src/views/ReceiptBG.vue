
<!-- 얘가 부모 -->

<script setup>
import { provide } from "vue";
// import OrderReceipt from "./OrderReceipt.vue";

// export default {
//   components: {
//     OrderReceipt
//   }}

</script>

<template>



  <div class="container">
    
    <div class="logo1">
      <h1>cafe.js</h1>
    </div>

    <div class="logo2">
      <h1>cafe.js</h1>
    </div>

    <div class="orderEnd">
      <h2>주문이 완료 되었습니다!</h2>
    </div>

    <div class="orderSecond">
      <h3>
        신용카드를 뽑은 후 <br />
        출력된 영수증을 받아가세요!
      </h3>
    </div>

    <div class="orderNumber">
      <h4>주문번호</h4>
    </div>

    <div class="bun">
      <h4>번</h4>
    </div>

    
    <div>
    <h1 class="receipt">RECEIPT</h1>
  </div>

    <div class="order-details">
      <div>주문서 # 345</div>

    <div class="order-date">
      <div>2024</div>

    <div class="items">
      <ul>
        <li>
          <span>1.아메 - 1 x $0000</span>
        </li>
      </ul>
    </div>
    <div class="total">
      <p><strong>TOTAL</strong> <div class="price">$0000</div></p>
    </div>
   
    <div class="Number">
      <h4> </h4>    
      </div>
  </div>
  </div>
  </div>
  <div class="ReceiptBox"> </div>



</template>





<style scoped>

.container {
  position: relative;
  width: 1080px;
  height: 1920px;
  margin: auto;
  background: linear-gradient(
    180deg,
    #5e7153 20%,
    #af9544 50%,
    #d7a63c 75%,
    #ffb834 100%
  );
}

.ReceiptBox {   
    position: relative;
    width: 700px;
    height: 300px;
    background: linear-gradient
    (180deg, rgba(219, 219, 219, 0.5) 0%, rgba(245, 245, 245, 0.783332) 25.53%, rgba(247, 247, 247, 0.8) 66.86%, rgba(183, 183, 183, 0.4) 100%);
    }

    

@font-face {
  font-family: "DNFBitBitv2";
  font-style: normal;
  font-weight: 400;
  src: url("//cdn.df.nexon.com/img/common/font/DNFBitBitv2.otf")
    format("opentype");
}

@font-face {
  font-family: "BMJUA";
  src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

.logo2 {
  position: relative;
  top:-165px;
  left:320px;
  /* right:50px; */
  /* bottom:1729px; */
  margin: center;
  width: 394px;
  height: 146px;
  font-family: "DNF Bit Bit v2";
  font-style: normal;
  font-weight: 100;
  font-size: 60px;
  line-height: 146px;
  text-align: center;

  color: #ffb834;
}

.logo1 {
  position: relative;
  top: 80px;
  left:310px;
  margin: center;
  width: 394px;
  height: 146px;
  font-family: "DNF Bit Bit v2";
  font-style: normal;
  font-weight: 100;
  font-size: 60px;
  line-height: 146px;
  text-align: center;

  color: #783e19;
}

.orderEnd {
  position: relative;
  top:-150px;
  /* left:165px; */
  /* right:50px; */
  /* bottom:1729px; */
  width: flex;
  height: 82px;
  margin: center;
  font-family: "BM JUA_TTF";
  letter-spacing: 3px;
  font-style: normal;
  font-size: 55px;
  line-height: 82px;
  text-align: center;

  color: #ffb834;
}

.orderSecond {
  position: relative;
  top:-160px;
  width: flex;
  height: flex;
  font-family: "BM JUA_TTF";
  letter-spacing: 4px;    
  font-size: 40px;
  line-height: 70px;
  font-weight: 0;
  text-align: center;
  font-stretch:extra-expanded;

  color: #ffb834;
}

.orderNumber {
  position: relative;
  top: -170px;
  left: 330px;  
  width: flex;
  height: 52px;
  margin: center;
  padding-left: 100px;   
  font-family: "BM JUA_TTF";
  letter-spacing: 4px;
  font-style: normal;
  font-size: 55px;
  line-height: 52px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #282808;
}

.bun {
  position: relative;
  top: -140px;
  left: 630px; 
  width: 306px;
  height: 124px;
  font-family: "BM JUA_TTF";
  font-style: normal;
  font-weight: 400;
  font-size: 120px;
  line-height: 124px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #282808;
}



</style>
