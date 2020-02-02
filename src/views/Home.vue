<template>
    <div>
<v-content>
 <Header/>
 <div class="board1">
     <!-- <div class="slide_show"></div> -->
   <categories/>
 </div>

 <div class="title">
 <span class="vb"></span>
     <h3>{{ title }}</h3>
     <span class="vb"></span>
     <h5 class="msg">{{ msg }}</h5>
     <hr/>
 </div>

 <div class="board2">
     <div class="window1"></div>

     <div class="window2"></div>

     <div class="window3"></div>

      <div class="window4"></div>

      <div class="window5"></div>
 </div>

 <div class="pub">
     <div class="pub_window1"></div>
     <div class="pub_window2"></div>
 </div>

 <div class="title2">
     <span class="vb"></span>
     <h2>{{ title2 }}</h2>
     <span class="vb"></span>
     <hr/>
 </div>
 
 <div class="board3">
     <div class="superDeal_card">
         <div class="infos">
            <span class="productName"> {{productName}} </span>
            <span class="productDetails">{{productDetails}}</span>
            <span class="productPrice">{{productPrice}}</span>
         </div>
     </div>
 </div>

 <div class="see_more">
     <v-icon class="see_more_icon">mdi-format-list-bulleted</v-icon>
     <p>see more</p>
     <hr/>
 </div>

  <div class="title3">
     <span class="vb"></span>
     <h2>{{ title3 }}</h2>
     <span class="vb"></span>
     <hr/>
 </div>

 <div class="board4">
     <div class="superDeal_card">
         <div class="infos">
            <span class="productName"> {{productName}} </span>
            <span class="productDetails">{{productDetails}}</span>
            <span class="productPrice">{{productPrice}}</span>
         </div>
     </div>
 </div>

  <div class="see_more">
     <v-icon class="see_more_icon">mdi-format-list-bulleted</v-icon>
     <p>see more</p>
     <hr/>
 </div>

   <div class="title4">
     <span class="vb"></span>
     <h2>{{ title4 }}</h2>
     <span class="vb"></span>
     <hr/>
 </div>

 <div class="board5">
     <div class="superDeal_card">
         <div class="infos">
            <span class="productName"> {{productName}} </span>
            <span class="productDetails">{{productDetails}}</span>
            <span class="productPrice">{{productPrice}}</span>
         </div>
     </div>
 </div>

   <div class="see_more">
     <v-icon class="see_more_icon">mdi-format-list-bulleted</v-icon>
     <p>see more</p>
     <hr/>
 </div>

    <div class="title5">
     <span class="vb"></span>
     <h2>{{ title5 }}</h2>
     <span class="vb"></span>
     <hr/>
 </div>

  <div class="board6">
     <div class="superDeal_card">
         <div class="infos">
            <span class="productName"> {{productName}} </span>
            <span class="productDetails">{{productDetails}}</span>
            <span class="productPrice">{{productPrice}}</span>
         </div>
     </div>
 </div>

  <div class="see_more">
     <v-icon class="see_more_icon">mdi-format-list-bulleted</v-icon>
     <p>see more</p>
     <hr/>
 </div>

  <div class="pub2">
     <div class="pub_window3"></div>
     <div class="pub_window4"></div>
 </div>

 <div class="space"></div>

 <div class="last_board">
     <span>Subscribe to our Newsletter</span>

    <div class="subscribe_bar">
    <input type="email" name="subscribe" placeholder="enter your email"/>
    <div class="button">
    <v-icon class="email_icon"
    color="white">mdi-email</v-icon>
    </div>
    
    </div>

    <div class="about">
        <h4>Informations sur la Compagnie</h4>
        <ul>
            <li>A propos de nous</li>
            <li>Politique sur la protection de données </li>
            <li>Termes et conditions</li>
            <li>Nous contacter</li>
            <li>Reporter des problemes sur le site web</li>
            <li>Vendre sur AfeShop</li>
            <li>Politique publicitaire</li>
        </ul>
    </div>

      <div class="services">
        <h4>Service Clientèle </h4>
        <ul>
            <li>Politique de Remboursement et de retour</li>
            <li>Mes points</li>
            <li>Methodes de Paiement </li>
            <li>FAQ et support Technique </li>
            <li>Plan de Navigation </li>
        </ul>
    </div>

     <div class="activities">
        <h4>Activités diverses </h4>
        <ul>
            <li>Programme de partenariat</li>
            <li>Programmes associes</li>
            <li>Offre d'emploi</li>
        </ul>
    </div>
    
    <h2>The best of Africa to the World</h2>

    <div class="social_media">
        <h3>Follow Us:</h3>
        <v-icon class="sm_icons" color="white">mdi-facebook</v-icon>
        <v-icon class="sm_icons" color="white">mdi-twitter-circle</v-icon>
        <v-icon class="sm_icons" color="white">mdi-youtube</v-icon>
         <v-icon class="sm_icons" color="white">mdi-instagram</v-icon>
    </div>

    <div class="mm_icons">
         <img src="../assets/om.png"/>
        <img src="../assets/possa.png"/>
        <img src="../assets/mtn_mm.jpg"/>
    </div>

    <div class="last_script">
    <h5>Afeshop.africa: international-Lingala-English-Chinese-Portuguese-Wollof-French</h5>
    <h5>Product listing policy-Intellectual Property Protection-Privacy Policy-Terms of use</h5>
    <h5>2020-2030 Afeshop.africa all rights reserved</h5>
    </div>
    <div class="logo_darkmode">
        <h2>By</h2>
        <img src="../assets/Nogoutech_darkmode.png"/>
    </div>
 </div>
 </v-content>
    </div>
</template>

<script>
import Header from "../views/Header.vue"
import Categories from "../views/Categories.vue"
    export default {
      components:{
          Header,
          Categories
      },
      data(){
          return{
        title: 'AFESHOP BRANDS',
        msg: 'BEST OF 2020',
        title2: 'SUPER DEALS',
        productName: 'Product name',
        productDetails: 'product details',
        productPrice: 'price',
        title3: 'NEW PRODUCTS',
        title4: 'HOT CATEGORIES',
        title5: 'RECOMMANDED FOR YOU'
          }
      },
    }
</script>

<style scoped>
.board1{
    height: 450px;
    width: 1200px;
    display: block;
    z-index: 1;
    background-color: beige;
    margin: 0 auto;
}
/* .slide_show{
    height: inherit;
    width: inherit;
    z-index: 1;
    display: block;
    background-color: aquamarine;
} */

.board2{
    height: 500px;
    width: 1200px;
    display: block;
    z-index: 1;
    background-color: gainsboro;
    position: relative;
    margin: 0 auto;
}

.title{
    height: 90px;
    width: 1200px;
    margin: 0 auto;
    text-align: center;
}
.title h3{
    display: inline-block;
    padding-left: 20px;
    padding-right: 20px;
}
.vb{
  border-left: 4px solid #DB9D35;
  height: 28px;
  display: inline-block;
  margin-top: 5px;
}
.title hr{
   height: 10px;
   width: 255px;
   background-color: #4995D1;
   border: none;
   display: block;
   margin-left: 472px; 
}
.msg{
    display: inline;
}
.msg:before{
 content: '\a' ; 
 white-space: pre;  
}
.window1{
    width: 250px;
    height: inherit;
    display: inline-block;
    border-right: 2px solid  #DB9D35;
    z-index: 2;
}
.window2{
    width: 300px;
    height: 250px;
    display: inline-block;
    border-bottom: 2px solid #DB9D35;
    position: absolute;
    top: 0px;
    z-index: 2;
}
.window3{
    width: 650px;
    height: 250px;
    display: inline-block;
    position: absolute;
    top: 0px;
    right:0px;
    border-left: 2px solid  #DB9D35;
    border-bottom: 2px solid  #DB9D35;
    z-index: 2;
}
.window4{
    height:250px;
    width: 650px;
    border-right: 2px solid  #DB9D35;
    bottom: 0px;
    display: inline-block;
    z-index: 5;
}
.window5{ 
    width: 300px;
    height: 250px;
    display: inline-block;
    position: absolute;
    bottom: 0px;
    right: 0px;
    z-index: 5;
}
.pub{
    width: 1200px;
    height: 250px;
    position: relative;
    margin: 0 auto;
    z-index: 5;
}
.pub_window1{
    width: 595px;
    height: 245px;
    position: absolute;
    background-color: gainsboro;
    bottom: 0px;
    left: 0px;
    z-index: 5;
}
.pub_window2{
    width: 595px;
    height: 245px;
    position: absolute;
    background-color: gainsboro;
    bottom: 0px;
    right: 0px;
    z-index: 5;
}
.board3{
    width: 1200px;
    height: 580px;
    display: block;
    margin: 0 auto ;
    background-color: azure;
}
.title2{
    height: 70px;
    width: 1200px;
    margin: 0 auto;
    text-align: center;
}
.title2 h2{
    display: inline-block;
    padding-left: 20px;
    padding-right: 20px;
}
.title2 hr{
   height: 10px;
   width: 205px;
   background-color: #4995D1;
   border: none;
   display: block;
   margin-left: 498px;
}
.superDeal_card{
    width: 200px;
    height:280px ;
    border-radius: 18px;
    display: block;
    margin-left: 20px;
    background-color: bisque;
    position: relative;
}
.infos{
    height: 80px;
    width: inherit;
    display: block;
    position: absolute;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    background-color: rgba(255,255,255,0.7);
    bottom: 0px;
    z-index: 5;
}
.productName{
    height: 25px;
    width: inherit;
    display: block;
    text-align: center;
    
}
.productDetails{
    height: 25px;
    width: inherit;
    display: block;
    text-align: center;
}
.productPrice{
    height: 27px;
    width: inherit;
    display: block;
    text-align: center;
}
.see_more{
    width:1200px;
    height: 32px;
    display: block;
    margin: 0 auto;
    position: relative;
}
.see_more p{
     display: inline-block;
     margin-left: 10px;
}
.see_more_icon{
    display: inline-block;
    vertical-align: middle;
    line-height: 32px;
}
.see_more hr{
   height: 6px;
   width: 1069px;
   background-color:#DB9D35;
   border: none;
   display: inline-block;
   margin-left: 30px;
}
.pub2{
    width: 1200px;
    height: 250px;
    position: relative;
    margin: 0 auto;
    z-index: 5;
}
.pub_window3{
    width: 595px;
    height: 245px;
    position: absolute;
    background-color: gainsboro;
    bottom: 0px;
    left: 0px;
    z-index: 5;
}
.pub_window4{
    width: 595px;
    height: 245px;
    position: absolute;
    background-color: gainsboro;
    bottom: 0px;
    right: 0px;
    z-index: 5;
}
.title3{
    height: 70px;
    width: 1200px;
    margin: 0 auto;
    text-align: center;
}
.title3 h2{
    display: inline-block;
    padding-left: 20px;
    padding-right: 20px;
}
.title3 hr{
   height: 10px;
   width: 235px;
   background-color: #4995D1;
   border: none;
   display: block;
   margin-left: 482px; 
}
.board4{
    width: 1200px;
    height: 580px;
    display: block;
    margin: 0 auto ;
    background-color: azure;
}
.title4{
    height: 70px;
    width: 1200px;
    margin: 0 auto;
    text-align: center;
}
.title4 h2{
    display: inline-block;
    padding-left: 20px;
    padding-right: 20px;
}
.title4 hr{
   height: 10px;
   width: 245px;
   background-color: #4995D1;
   border: none;
   display: block;
   margin-left: 478px; 
}
.board5{
    width: 1200px;
    height: 580px;
    display: block;
    margin: 0 auto ;
    background-color: azure;
}
.board6{
    width: 1200px;
    height: 580px;
    display: block;
    margin: 0 auto ;
    background-color: azure;
}
.title5{
    height: 70px;
    width: 1200px;
    margin: 0 auto;
    text-align: center;
}
.title5 h2{
    display: inline-block;
    padding-left: 20px;
    padding-right: 20px;
}
.title5 hr{
   height: 10px;
   width: 337px;
   background-color: #4995D1;
   border: none;
   display: block;
   margin-left: 432px; 
}
.last_board{
    width: 100%;
    height: 560px;
    display: block;
    position: relative;
    margin: 0 auto;
    overflow: hidden;
    background-color: black;
}
.last_board span{
    color: #DB9D35;
    display: block;
    padding-top: 30px; 
    text-align: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 30px;
}
.subscribe_bar{
    width: 470px;
    height: 40px;
    left: 480px;
    position: absolute;
    display: block;
    margin-top: 10px;
    float:left;
}
.subscribe_bar input[type=email] {
    width: 400px;
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
    width: 70px;
    border-top-right-radius: 22px;
    border-bottom-right-radius: 22px;
    background-color:#DB9D35;
    border-top:1px solid gray;
    border-bottom: 1px solid gray;
    border-right:1px solid gray;
    float: right;
}
.email_icon{
   vertical-align: middle;
   line-height: 40px;
   margin-left: 20px;
}
.about{
    width: 320px;
    height: 200px;
    display: block;
    top: 180px;
    left: 150px;
    position: absolute;
}
.about h4{
    margin-left: 20px;
    color: white;
}
/* .about ul{
    list-style: none;
} */
.about ul li{
    color: white;
    margin-left: 15px;
    cursor: pointer;
}
.services{
    width: 350px;
    height: 170px;
    display: block;
    top: 180px;
    left: 520px;
    position: absolute;
}
.services h4{
    margin-left: 20px;
    color: white;
}
.services ul li{
    color: white;
    margin-left: 15px;
    cursor: pointer;
}
.activities{
    width: 240px;
    height: 130px;
    display: block;
    top: 180px;
    left: 900px;
    position: absolute;
}
.activities h4{
    margin-left: 20px;
    color: white;
}
.activities ul li{
    color: white;
    margin-left: 15px;
    cursor: pointer;
}
.last_board h2{
    color: white;
    position: absolute;
    top: 410px;
    left: 130px;;
}
.space{
    width: 100%;
    height: 70px;
}
.social_media{
    width: 300px;
    height: 40px;
    display: block;
    position: absolute;
    top: 410px;
    left: 540px;
}
.social_media h3{
    color: white;
    display: inline-block;
    vertical-align: middle;
    line-height: 40px;
}
.sm_icons{
    display: inline-block; 
    margin-left: 10px;
}
.mm_icons{
    width: 235px;
    height: 60px;
    display: block;
    position: absolute;
    top: 385px;
    left: 900px;
}
.mm_icons img{
    margin-left: 5px;
}
.last_board h5{
    color: white;
}
.last_script{
    width: 600px;
    height: 60px;
    display: block;
    position: absolute;
    text-align: center;
    top: 480px;
    left: 400px;
}
.logo_darkmode{
    width: 55px;
    height: 48px;
    display: block;
    position: absolute;
    top: 385px;
    left: 1200px;
}
.logo_darkmode h2{
    color: white;
}
</style>