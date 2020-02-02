<template>
    <div class="categories">
    <div class="contenair"
    @mouseover ="toggleCategories()"
    @mousedown ="toggleCategories()">
        <div class="el" v-for="(category, id) in categories"
             :key="id"
             :src="category.src"> 
             <v-icon>{{ category.icon}}</v-icon>
             <span>{{ category.text }}</span>
             </div>
    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                category:0,
                categories:[
                    {text:"Catégories", icon: 'mdi-format-align-justify'},
                    {text:"Téléphones et Accessoires", icon: 'mdi-cellphone-iphone'},
                    {text:'Ordinateurs, Tablettes et gadgets', icon:'mdi-laptop'},
                    {text:'Jouets et Passions', icon: 'mdi-gamepad-variant-outline'},
                    {text:'Cosmétiques et soins', icon: 'mdi-bottle-tonic-plus-outline'},
                    {text:'Mobilier',icon:'mdi-home-outline'},
                    {text:'Industriel et Scientifique',icon:'mdi-factory'},
                    {text:'Sport et Fitness',icon:'mdi-dumbbell'},
                    {text:'Chaussures et Vêtements',icon:'mdi-shoe-heel'},
                    {text:'Montres et bijoux',icon:'mdi-watch'},
                    {text:'Afeshop seconde-main',icon:'mdi-handshake'},
                    {text:'Afeshop International',icon:'mdi-earth'}
                    

                ],
                close: false
            }
        },
        methods:{
            toggleCategories(){
                // console.log("you're hoving on")
                if(close){
                 document.getElementsByClassName("contenair")[0].style.width="300px"
                  this.close=true
                }else{
                    // console.log("you're hoving off")
                 document.getElementsByClassName("contenair")[0].style.width="80px"
                 this.close=false
                }
            }
        }
    }
</script>

<style scoped>
.categories{
    width: 300px;
    height: inherit;
    display: block;
    z-index: 5;
    /* position: absolute; */
}
.contenair{
    display: block;
    background-color:rgba(255, 255, 255, 0.4);
    width: 50px;
    transition: 1.5s;
    transition-delay: 0.1s
}
.el{
    height: 36.6px;
    width: inherit;
    vertical-align: middle;
    line-height: 36px;
    overflow: hidden;
    margin-top: 1px;
}
.el:hover{
    background-color: #E5E4E2;
}
.el > span{
    margin-left: 10px;
}
</style>