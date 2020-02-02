<template>
    <div>
        <div class="passwordRecovery_page2">
            <div class="head">
                <h2>Récupération du mot de passe</h2>
            </div>
        <h2 id="username">{{ username }}</h2>
        <span id="question">C'est bien vous?</span>
        <span>Un code de Réinitialisation a ete envoye a l'adresse</span><span id="mail"> {{ usermail }}</span>
        <hr/>
        <div class="validation_box">
            <h4>saissir le code</h4>
            <input type="code"/>

            <div class="button">
              <h3>Valider</h3>
            </div>
        <span>je n'ai pas recu le mail:</span> <span class="span_underline">Renvoyer le code par mail</span>
        </div>
        
        <div class="message_box">
           <Error class="error_icon"/>
           <h3>Important</h3>
           <span>Le code de réinitialisation a X chiffres qui vous a ete envoye par mail 
               vous permet d'acceder au choix d'un nouveau mot de passe
           </span>
        </div>
        </div>

    </div>
</template>

<script>
import Error from '../components/svgFile/error.svg'
    export default {
        components:{
           Error
        },
        data(){
            return{
                username:"UserName",
                usermail: "User@mail.com"
            }
        }
        
    }
</script>

<style scoped>
.passwordRecovery_page2{
    width: 1050px;
    height: 400px;
    display: block;
    text-align: center;
    z-index: 100;
    background-color:rgba(255, 255, 255, 0.8);
    position: absolute;
    right: 170px;
    top: 120px;
}
.head{
    width: inherit;
    height: 35px;
    display: block;
    background-color: #DB9D35;
    text-align: center;
}
.head h2{
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    vertical-align: middle;
    line-height: 35px;
}
#username{
    padding-top: 20px;
}
#question{
    color: gray;
    display: block;
    font-size: 16px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
#mail{
    font-size: 18px;
    font-family: 'arial';

}
.passwordRecovery_page2 hr{
    display: block;
    height: 1px;
    width: 600px;
    right: 230px;
    bottom: 240px;
    position: absolute;
    background-color: gainsboro;
    border: none;
}
.validation_box{
    width: 360px;
    height: 200px;
    display: block;
    position: absolute;
    left: 190px;
    bottom: 0px;
}
.validation_box input[type="code"]{
    outline: none;
    width: 180px;
    height: 40px;
    border: 1px solid gray;
    background-color: white;
}
.button{
    width: 200px;
    height: 40px;
    display: block;
    margin-top: 30px;
    margin-left: 80px;
    background-color: #DB9D35;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    text-align: center;
    cursor: pointer;
}
.button h3{
    color: white;
    vertical-align: middle;
    line-height: 40px;
}
.validation_box span{
    display: inline-block;
    margin-top: 15px;
}
.span_underline{
    text-decoration: underline;
    cursor: pointer;
    font-weight: bold;
}
.message_box{
    width: 280px;
    height: 170px;
    display: block;
    position: absolute;
    bottom: 50px;
    right: 200px;
    border-left: 1px solid black;
}
.error_icon{
    left: 10px;
    top: 30px;
    position: absolute;
    display: inline-block;
}
.message_box h3{
    top: 30px;
    left: 45px;
    position: absolute;
    display: inline-block;

}
.message_box span{
    display: block;
    position: absolute;
    bottom: 0px;
    text-align: left;
    margin-left: 20px;
}

</style>