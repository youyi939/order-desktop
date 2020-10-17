<template>
    <div>
        <h1>订单页面查询</h1>
        <li v-for="item in list" :key="item.id">
            {{"订单ID："+item.id+ "，订单信息："+item.message}}
        </li>

    </div>
</template>

<script>
    export default {
        name: "OrderFind",
        data(){
          return{
              list:[]
          }
        },

        methods:{
            getData(){
                fetch('http://127.0.0.1:7001/findAll',{method:'GET'})
                    .then(resp=>resp.json())
                    .then(albums=> this.list = albums)
            }
         }

        ,
        mounted() {
            this.getData();
        }
    }
</script>

<style scoped>

</style>
