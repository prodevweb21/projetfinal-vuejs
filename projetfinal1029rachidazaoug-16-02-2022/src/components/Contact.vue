<template>
  <form  @submit.prevent="onSubmit">
    <!--Prénom -->
    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label for=""> Prénom:</label><input class="form-control" placeholder="Entrer votre prénom" type="text" v-model="v$.form.prenom.$model">
          <div class="pre-icon os-icon os-icon-user-male-circle"></div>
        </div>
        <!-- Error Message -->
          <div class="input-errors" v-for="(error, index) of v$.form.prenom.$errors" :key="index">
            <div class="error-msg">{{ error.$message }}</div>
          </div>
      </div>
  </div>



<!-- Nom de famille -->
  <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label for=""> Nom de Famille:</label><input class="form-control" placeholder="Entrer nom de famille" type="text" v-model="v$.form.nomFamille.$model">
        <!-- Error Message -->
          <div class="input-errors" v-for="(error, index) of v$.form.nomFamille.$errors" :key="index">
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </div>
      </div>
  </div>
     



    <!-- Email -->
    <div class="form-group">
      <label for=""> Adresse email</label><input class="form-control" placeholder="Entrer email" type="email" v-model="v$.form.email.$model">
      <div class="pre-icon os-icon os-icon-email-2-at2"></div>
      <!-- Error Message -->
        <div class="input-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
    </div>

<!-- Les champs de -Select- sont selectionnées grâce aux données props de app.vue -->
        <br>
        <select v-model="category">
        <option v-for="category in categories" v-bind:value="categories.title"
        :key="category.id">
            {{ category }}
          </option>
            </select>


      <br><br>
      <!-- Boutton doumettre-->
    <div class="buttons-w">
      <button class="btn btn-primary" style="margin-left:120px">Soumettre</button>
    </div>

       

         
    
</form>
</template>


<script>

import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

      export function validName(name) {
       let validNamePattern = new RegExp("^[a-zA-Z]+{0-9}(?:[-'\\s][a-zA-Z]+)*$");
       if (validNamePattern.test(name)){
        return true;
       }
       return false;
        }

    
    export default {

        // Props des données venant de App.vue
      props: ['categories'],

    setup() {

      return {
        
       v$: useVuelidate() }
          },

          data() {
            return {
              form: {
               prenom: '',
               nomFamille: '',
                email: '',
       
      },
    }
  },

 

      validations() {
    return {
      form: {
        prenom: { 
          required, name_validation: {
            $validator: validName,
            $message: 'champs invalide'
          } 
        },

          nomFamille: { 
          required, name_validation: {
            $validator: validName,
            $message: 'champs invalide'
          } 
        },

        email: { required, email },
      },
     }
    },
   }

  


</script>




<style scoped>

select{

    block-size: 50px;
}

form{

  max-width: 100%;
  padding: 50px;
}
</style>