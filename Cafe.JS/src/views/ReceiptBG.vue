    <script setup>
    console.log('cafe.js');
    </script>

    <script>
    export default {
    name: 'ReceiptBG',
    props: {
        container: Object,
        logo: Object,
        orderEnd: Object,
        orderSecond: Object,
        orderNumber: Object
    }
    }
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
            <h3>신용카드를 뽑은 후 <br> 출력된 영수증을 받아가세요!</h3>
            </div>
            <div class="orderNumber">
            <h4>주문번호</h4>
            </div>
        </div>
                    </template>

                    <style scoped>

            .container {
            position: absolute;
            width: 1080px;
            height: 1920px;

            background: linear-gradient(180deg, #5E7153 20%, #AF9544 50%, #D7A63C 75%, #FFB834 100%);}


            .logo2 {
            position: absolute;
            width: 394px;
            height: 146px;

            font-family: 'DNF Bit Bit v2';
            font-style: normal;
            font-weight: 400;
            font-size: 100px;
            line-height: 146px;
            text-align: center;

            color: #FFB834; }

            .logo1 {
            position: absolute;
            width: 394px;
            height: 146px;

            font-family: 'DNF Bit Bit v2';
            font-style: normal;
            font-weight: 400;
            font-size: 100px;
            line-height: 146px;
            text-align: center;

            color: #783E19; }

            .orderEnd {
            position: absolute;
            width: 713px;
            height: 82px;

            font-family: 'BM JUA_TTF';
            font-style: normal;
            font-weight: 400;
            font-size: 80px;
            line-height: 82px;
            text-align: center;

            color: #FFB834; }


            .orderSecond {

            position: absolute;
            width: 530px;
            height: 119px;

            font-family: 'BM JUA_TTF';
            font-style: normal;
            font-weight: 400;
            font-size: 50px;
            line-height: 52px;
            text-align: center;

            color: #FFB834; }


            .orderNumber {
                position: absolute;
        width: 163px;
        height: 52px;

        font-family: 'BM JUA_TTF';
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        line-height: 52px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #282808; }



                    </style>

