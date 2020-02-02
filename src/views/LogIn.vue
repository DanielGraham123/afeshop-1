<template>
    <div class="login_form">
        <v-card width="300px" 
        height="400px"
        flat
        >
        <v-card-title class="title"><h4>Log In</h4></v-card-title>
         <v-icon @click="close" class="close" color="red">mdi-close-circle</v-icon>
        <v-card-text>
           <v-form  ref="loginForm" @submit.prevent="login">
            <v-text-field
              label="Account"
              name="account"
              type="number"
              required
              v-model="account"
              placeholder="phone Number"
              prepend-icon="mdi-account-circle"
              :rules="accountRules"/>

              <v-text-field
              name="password"
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              required
              :rules="passwordRules"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"/>
              
               <v-checkbox 
               label="Stay signed in" hide-details></v-checkbox>
               <v-card-actions>
                   <v-btn color="#DB9D35"
                   width="240px"
                   type="submit"
                   rounded
                   @click="validateForm"
                   >Log In</v-btn>
               </v-card-actions>
               <!-- <a @click="isOpen" v-show="!sucess"><h4>Reset password</h4></a> -->
                <v-divider></v-divider>
               <help class="help_elmt"/><h4 id="help_h4">can't log in</h4><a href="#" id="help_a">Get help here</a>
           </v-form>
        </v-card-text>
        </v-card>
    </div>
</template>

<script>
import help from '../components/svgFile/help.svg'
    export default {
        components:{
            help
        },
        data(){
            return{
                showPassword: false,
                account: "",
                accountRules:[
                    value => !!value || 'Account is required',
                    value => (value && value.length ==9) || 'Enter valid phone number',
                ],
                passwordRules:[
                    value => !! value || 'Password is required'
                ],
                name:'',
                password:''
                
            }
        },
        methods:{
            validateForm(){
                this.$refs.loginForm.validate()
            },
           login(){
               this.$store.dispatch('login',{
                 name: this.name,
                 password: this.password
               })
               .then(() => {
                   this.$router.push({name: 'Home'})
               })
           }
        }
        
    }
</script>

<style scoped>
.login_form{
display: absolute;
margin-right: 250px;
padding-top: 20px;
float:right;
z-index: 100;
}
.help_elmt{
    float:left;
    margin-top: 25px;
}
#help_h4{
    float:left;
      margin-left: 5px;
       margin-top: 25px;
}
#help_a{
    float:left;
    margin-left: 5px;
     margin-top: 25px;
}
.close{
    display: inline-block;
    margin-left: 150px;
    cursor: pointer;
}
.title{
    display: inline-block;
}

</style>