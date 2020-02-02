<template>
<div>

    <div class="passwordRecovery_page1">
        <span>Mot de passe Oublié ?</span>
        <hr/>
        <div class="warning_block">
        <span>Mot de passe Incorrect , reinitialisez votre mot de passe ?</span>
        <span>Envoyez un code de Reinitialisation a votre adresse mail ? </span>
        </div>

        <p>Saisissez votre adresse mail</p>
        <div class="email_block">
            <h4>Email</h4>
            <input type="email"/>
        </div>
        <div class="button">
            <span>Récupérer votre mot de passe</span>
        </div>
    </div>




    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.passwordRecovery_page1{
    width: 650px;
    height: 350px;
    /* border: 1px solid gray; */
    z-index: 100;
    position: absolute;
    right: 250px;
    top: 150px;
    background-color:rgba(255, 255, 255, 0.8);
}
.passwordRecovery_page1 span{
    display: block;
    font-family: serif;
    font-size: 35px;
    margin-top: 40px;
    margin-left: 250px;
    color: #DB9D35;
}
.passwordRecovery_page1 hr{
    display: block;
    height: 1.5px;
    width: 315px;
    background-color: gainsboro;
    border: none;
    margin-left: 250px;
}
.passwordRecovery_page1 h4{
    color: red;
}
.passwordRecovery_page1 p{
   margin-left: 300px;
}
.warning_block{
    width: 450px;
    margin-top: 10px;
    display: block;
    margin-left: 150px;
    margin-bottom: 10px;
    right: 150px;
}
.warning_block span{
    color: red;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin-top: 5px;
    margin-left: 0px;
}
.email_block{
    width: 350px;
    height: 40px;
    display: block;
    position: absolute;
    right: 80px;
}
.email_block h4{
    vertical-align: middle;
    line-height: 40px;
    color: black;
    display: inline-block;
}
.email_block input[type=email]{
    width: 280px;
    height: 40px;
    background-color: white;
    border: 1px gray solid;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-left: 15px;
    outline: none;
    text-align: center;
}
.button{
    width: 280px;
    height: 40px;
    display: block;
    background-color: #DB9D35;
    position: absolute;
    right: 90px;
    bottom: 30px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    text-align: center;
    cursor: pointer;
}
.button span{
    color: white;
    font-size: 20px;
    margin-left: 0px;
    margin-top: 0px;
    vertical-align: middle;
    line-height: 40px;
    font-style: bold;
}

</style>