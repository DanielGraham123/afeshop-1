<template>
    <div id="nav">
<v-app-bar
      App
      height="40px"
      color="#DB9D35"
      dark
    >
      <div class="d-flex align-center">
      <BaseSelect :options = "countries"/>
      </div>
      <span class="spacer"></span>
    <v-tabs
    slider-color="white"
    color="black"
    event-color="warningprimary"
    background-color="transparent">
      <v-tab to="/">Home</v-tab>
     <span class="spacer1"></span>
      <v-tab to="/MyPage">My page</v-tab>
      <span class="spacer1"></span>
      <v-tab to="/Shops">Shops</v-tab>
      <a class="link">{{ support_serv }}</a>
      <a class="link">{{ open_shop}}</a>
    </v-tabs>
    </v-app-bar>
    <router-view></router-view>
    </div>
</template>

<script>
import BaseSelect from '../components/BaseSelect.vue'
    export default {
        components:{
            BaseSelect
        },
        data(){
            return{
                    countries: ["Cameroon","Congo","Rwanda","RCA"],
                    support_serv:"Support center",
                    open_shop:"Sell on AfeShop!",
            }
        }
    }
</script>

<style scoped>
.spacer{
  width: 400px;
}
.link{
  font-style: none;
  margin-top: 8px;
  padding-left: 50px;
  color: black;
}
.spacer1{
 width: 50px;
}
#nav{
  z-index: 2;
}

</style>