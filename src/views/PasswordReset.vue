<template>
    <div>
        <div class="password_reset">
            <div class="head">
                <h2>Récupération du mot de passe</h2>
            </div>
             <h2 id="username">{{ username }}</h2>
            <span id="email">{{ email }}</span>
             <hr/>

             <div class="password_box">
                  <h4>Nouveau mot de passe</h4>
            <input type="password"/>
             </div>

             <div class="confirm_password_box">
                      <h4> Confirmez votre mot de passe</h4>
            <input type="password"/>
             </div>

              <div class="button">
              <h3>Valider</h3>
            </div>

            <div class="link">
                  <span>je n'ai pas recu le mail:</span> <span class="span_underline">Renvoyer le code par mail</span>
            </div>
        </div>
 
    </div>
</template>

<script>
    export default {
        
         data(){
            return{
                username:"UserName",
                email:"user@email.com"
            }
        }
    }
</script>

<style scoped>
.password_reset{
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
#email{
    color: #4995D1;
    display: block;
    font-size: 18px;
    font-weight: bold;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.password_reset hr{
    display: block;
    height: 1px;
    width: 900px;
    left: 75px;
    bottom: 240px;
    position: absolute;
    background-color: gainsboro;
    border: none;
}
.password_box{
    width: 500px;
    height: 50px;
    display: block;
    position: absolute;
    /* background-color: antiquewhite; */
    bottom: 170px;
    right:200px;
}
.password_box h4{
    left: 10px;
    top: 10px;
    position: absolute;
}
.password_box input[type="password"]{
    outline: none;
    width: 250px;
    height: 40px;
    background-color: white;
    border: 1px gray solid;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    position: absolute;
    left: 180px;
}
.confirm_password_box{
    width: 550px;
    height: 50px;
    display: block;
    position: absolute;
    /* background-color: antiquewhite; */
    bottom: 120px;
    right:200px;
}
.confirm_password_box h4{
    left: 10px;
    top: 10px;
    position: absolute;
}
.confirm_password_box input[type="password"]{
    outline: none;
    width: 250px;
    height: 40px;
    background-color: white;
    border: 1px gray solid;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    position: absolute;
    left: 230px;
}
.button{
    width: 200px;
    height: 40px;
    display: block;
    position: absolute;
    bottom: 60px;
    right: 300px;
    margin-top: 30px;
    margin-left: 50px;
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
.link{
    width: 360px;
    height: 30px;
    display: block;
    position: absolute;
    bottom: 10px;
    right: 230px;
}
.span_underline{
    text-decoration: underline;
    cursor: pointer;
    font-weight: bold;
}
</style>