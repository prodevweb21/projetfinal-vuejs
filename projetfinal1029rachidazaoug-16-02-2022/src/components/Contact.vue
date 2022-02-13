<template>
    <div id="contact">
              <h1>Mon formulaire</h1>

              <form
                id="app"
                @submit="checkForm">

                <p v-if="errors.length">
                  <b>Veuillez corriger les erreurs suivantes:</b>
                  <ul>
                    <li v-for="error in errors"
                    :key="error">{{ error }}</li>
                  </ul>
                </p>

                <p>
                  <label for="name">Nom</label>
                  <input
                    id="name"
                    v-model="name"
                    type="text"
                    name="name"
                  >
                </p>

                <p>
                  <label for="name">Prénom</label>
                  <input
                    id="name"
                    v-model="name"
                    type="text"
                    name="name"
                  >
                </p>

                <p>
                  <label for="email">Email</label>
                  <input id="email"
                    v-model="email"
                    type="email"
                    name="email"
                  >
                </p>

                <div class='select'>
                
                 <label for="categories">Categories</label>
                  <select
                    id="categories"
                    v-model="categories"
                    name="categories"
                  >
                    <option>1******</option>
                    <option>2******</option>
                    <option>3******</option>
                  </select>
                  
                </div>

                <p>
                  <input
                    type="submit"
                    value="Soumettre"
                  >
                </p>

              </form>
              </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default  defineComponent({

    
    data() {
          return { 
          
            errors: [],
            name: null,
            email: null,
          };
        },

        methods: {
          checkForm: function (e) {
            if (this.name) {
              return false;
            }

            this.errors = [];

            if (!this.name) {
              this.errors.push("Le nom est obligatoire.");
             } else if (!this.validName(this.name)) {
              this.errors.push("Valid name required.");
            }


            if (!this.email) {
              this.errors.push("Email required.");
            } else if (!this.validEmail(this.email)) {
              this.errors.push("Valid email required.");
            }

            if (!this.errors.length) {
              return true;
            }

            e.preventDefault();
          },
          validEmail: function (email) {
            var re =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
          },
          validName: function (name) {
              var reg = 
              /^(([A-Za-z0-9 ]){5}\w+)$/;
              return reg.test(name);
          },

        
        },
  })

</script>

<style scoped>

#contact{
  grid-area: 50px;

}

p{
max-width: 100px;
margin: 20px 0 0;

}

input{
    width: 300px;
    margin:15px;
    border: double
}

h1{
    text-align: left
}

.select{
    font-size:20px
}


</style>