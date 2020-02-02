<template>
    <div class="register_form">
    <v-card width="300px" 
            height="530px"
            flat>
      <v-card-title><h4>Register</h4></v-card-title>
        <v-card-text>
            <v-form ref="signUpForm" @submit.prevent="register">
                <v-text-field
                name="name"
                v-model="username"
                label="username"
                prepend-icon="mdi-account"
                :rules="userNameRules"
                required
                />
                <v-text-field
                name="phoneNumber"
                label="phone number"
                type="number"
                v-model="phoneNumber"
                prepend-icon="mdi-phone"
                required
                :rules="phoneRules"/>
                
                <v-col width="200px">
                <v-select 
                name="country"
                label="countries"
                :items="items"
                menu-props="auto"
                prepend-icon="mdi-map"
                single-line
                required
                :rules="countryRules"
                />
                </v-col>
              <v-text-field
              name="password"
              :type=" showPassword ? 'text' : 'password'"
              label="Password"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              required
              :rules="passwordRules"
              @click:append="showPassword=!showPassword"/>
                <!-- <v-text-field
                name="confirmPassword"
              :type="showPassword ? 'text' : 'password'"
              label="Confirm Password"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ?'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword=!showPassword"/> -->
               <v-checkbox
               label="I Agree terms and conditions"
               v-model="agreeToTerms"
               :rules="agreeToTermsRules"
               required></v-checkbox>
              <v-card-actions>
                  <v-btn color="#DB9D35"
                   width="240px"
                   rounded
                   @click="validateForm"
                   >Register</v-btn>
              </v-card-actions>
            </v-form>
        </v-card-text>
    </v-card>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            agreeToTerms: false,
            showPassword: false,
            agreeToTermsRules:[
              value => !!value || 'You must agree to terms and conditions before you sign up for an account'
            ],
            userNameRules:[
              value => !!value || 'user name required',
              value => (value&&value.length)>4 || 'use at least 4 characters'
            ],
            phoneRules:[
              value => !!value || 'phone number required',
              value => (value && value.length ==9) || 'Enter valid phone number',
            ],
            passwordRules:[
              value => !!value || 'password required',
              value => (value&&value.length > 6) || 'too short',
              value => (value&&value.length < 18) || 'too long',
            ],
            countryRules:[
              value => !! value || 'Your country is required'
            ],
            items:[
              'congo','cameroon','ethiopia',"Tchad",'RCA',"Tanzania","RDC"
            ],
            name: '',
            password:'',
            phoneNumber:'',
            country:''

          }
        },
        methods:{
          validateForm(){
            this.$$refs.signUpForm.validate()
          },
          register(){
            this.$store.dispatch('register',{
              name: this.name,
              password: this.password,
              country: this.country
            }).then(() => {
              this.$router.push({ name: 'Home'})
            })
          }
        }
    }
</script>

<style scoped>
.register_form{
width: 300px;
height: 530px;
display: absolute;
z-index: 100;
float:right;
margin-right: 100px;
border-bottom-left-radius: 25px;
border-bottom-right-radius: 25px;
}
</style>