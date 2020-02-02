<template>
    <div class="register_form">
<v-form>
<h4>name</h4>
<input type="text"/>
<h4>Phone Number</h4>
<input type="number"/>
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
    <h4>Password</h4>
      <input type="password"/>
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
    </div>
</template>

<script>
    export default {
        
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
border-top-left-radius: 25px;
border-top-right-radius: 25px;
}

</style>