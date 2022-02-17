<template>

       `<div>

              <form>
                <!-- Error Message -->
                <div class="input-errors" v-for="(error, index) of v$.form.tache.$errors" :key="index">
                 <div class="error-msg">{{ error.$message }}</div>
                </div>
              <select v-model="v$.form.tache.$model">
               <option v-for="category in categories" v-bind:value="categories.title"
                :key="category.id">
                 {{ category }}
                  </option>
                  </select>
                  <br><br>
                <button @click="submitForm">Submit</button>
                </form>

       </div>`,
    
</template>

<script>
  import useVuelidate from '@vuelidate/core';
  import { required } from "@vuelidate/validators";

export function validName(name) {
       let validNamePattern = new RegExp("^[a-zA-Z]+{3-50}(?:[-'\\s][a-zA-Z]+)*$");
       if (validNamePattern.test(name)){
        return true;
       }
       return false;
        }

    export default{

          props: ['categories'],

  
        setup() {
          
            return {
              v$: useVuelidate() }
          },

               data() {
                  return {
                      form: {
                        tache: '',
      },
    }
  },          
  validations() {
    return {
      form: {
        tache: { 
          required, name_validation: {
            $validator: validName,
            $message: 'champs invalide'
          } 
        },
        
      },
     }
    },
    // Pour valider que le submit fonctionne.
  //                methods: {
  //                     submitForm() {
  //                         alert("succès");
  //   },
  // },
}

</script>










<style scoped>

div{
max-width: 100px;
margin: 60px 0 0;

}

input{
    width: 300px;
    margin:15px;
    border: double;

}

select{

    block-size: 50px;
}

form{

  margin-left: 25px;
}

</style>