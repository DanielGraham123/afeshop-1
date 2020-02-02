<template>
    <div>
            <div id="block">

    <div class="afeshop_logo">
      <!-- <img src="../assets/Logo_afeshop.png"/> -->

        </div>

    <div class="search_bar">
    <input type="text" name="search" placeholder=""/>
    <div class="button">
      
       <SearchIcon class="search_logo"/>
        <a>search</a>
    </div>
    
    </div>
   <span @click="isOpen=!isOpen" 
    class="sign_in" 
    v-if="!loggedIn">
       <SignInIcon/>
      <h5>SignIn</h5>
   </span>

   <span @click="registerOpen=!registerOpen" 
    v-if="!loggedIn">
       <div class="register">
         <h5>Register For Free!</h5>
       </div>
   </span>
   
   <div class="cart">
    <v-badge 
    color="red"
    content="0">
   <Cart/>
    </v-badge>
   <h5>Cart</h5>
   </div>

   <transition 
     @before-enter = "beforeEnter"
     @enter = "enter"
     @leave = "leave"
     :css="false">
     <LogIn v-if="isOpen"/>
   </transition>

   <transition
     @before-enter = "beforeEnter"
     @enter = "enter"
     @leave = "leave"
     :css="false">
    <Register v-if="registerOpen"
         />

   </transition>
   
 </div>

    </div>
</template>

<script>
import SearchIcon from '../components/svgFile/search.svg'
import Cart from '../components/svgFile/shopping_cart.svg'
import SignInIcon from '../components/svgFile/signIn.svg'
import { authComputed } from '../store/helpers.js'

import LogIn from '../views/LogIn.vue'
import Register from '../views/Register.vue'
import Velocity from 'velocity-animate'
    export default {
        components:{
            SearchIcon,
            Cart,
            SignInIcon,
            LogIn,
            Register
        },
        methods:{
            beforeEnter(el){
               el.style.opacity = 0
               el.style.height = '0px'
              },
              enter(el, done){
                 Velocity(
                     el,
                     {opacity:1, height:'450px'},
                     {duration:1000, easing:'easeOutCubic', complete: done}
                 )
              },
              leave(el, done){
                  Velocity(
                      el,
                       {opacity:0, height:'0px'},
                       {duration:500, easing:'easeOutIn', complete: done}
                  )
              }
        },
        data(){
            return{
                isOpen: false,
                registerOpen: false
            }
        },
          computed:{
        ...authComputed
      }  
    }
</script>

<style scoped>
#block{
    width: 100%;
    height: 120px;
    position: relative;
    padding-left: 40px;
    z-index: 1;
}
.afeshop_logo{
    width: 200px;
    height:100px;
    float: left;
    margin-top: 10px;
}
.search_bar{
    width: 600px;
    height: 40px;
    margin-left: 100px;
    margin-top: 40px;
    float:left;
}
.search_bar input[type=text] {
    width: 500px;
    height: 40px;
    background-color:white;
    outline: none;
    border-top-left-radius: 22px;
    border-bottom-left-radius: 22px;
    border-top:1px solid gray;
    border-bottom: 1px solid gray;
    border-left: 1px solid gray;
    border-right-style: none; 
    text-align: center;
}

.button {
    height: 40px;
    width: 100px;
    border-top-right-radius: 22px;
    border-bottom-right-radius: 22px;
    background-color:#DB9D35;
    border-top:1px solid gray;
    border-bottom: 1px solid gray;
    border-right:1px solid gray;
    float: right;
    cursor: pointer;
}
.button a{
    color: black;
    font-style: none;
    float: right;
    padding-top: 8px;
    padding-right: 15px;
}

.search_logo{
    padding-top: 9px;
    padding-left: 15px;
}
.sign_in{
    width: 70px;
    height: 30px;
    margin-left: 50px;
    margin-top: 45px;
    float:left;
    background-color: transparent;
    outline: none;
    cursor: pointer;
}

.sign_in h5{
  float: right;
  padding-top: 2px;
}

.cart{
    width: 70px;
    height: 50px;
    float:left;
    margin-left: 40px;
    margin-top: 45px;
}
.cart h5{
     float: right;
     padding-right: 10px;
     padding-top: 2px;
}
.register{
    width: 110px;
    height: 30px;
    margin-left: 20px;
    margin-top: 45px;
    float:left;
    background-color:transparent;
    outline: none;
    cursor: pointer;
}
.register h5{
  padding-top: 2px;
  color: #DB9D35;
  text-decoration: underline;
  
}
</style>