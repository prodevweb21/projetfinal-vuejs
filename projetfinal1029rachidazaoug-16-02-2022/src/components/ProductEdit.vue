<template>

    <div>
        <div>
                <input type="text" id="title" placeholder="Titre de la tache.." v-model="myproduct.title">
                <input type="text" id="category" placeholder="Nom du projet.." v-model="myproduct.category">
                <input type="submit" value="Add product" v-on:@click="myproduct"/>
        </div>
        
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent ({ 

    data: function () { 
      return {
        myproduct: {
          title: "test",
          category: "test",

           errors: [],
          //  name: null,
           // email: null,
        },
      };
    },
    methods: {
      myway: function () {
        alert(
          `Titre de la produit: ${this.myproduct.title} Categorie : ${this.myproduct.category}`
        );
      },

      checkForm: function () {
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
          validEmail: function (email: string) {
            var re =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
          },
          validName: function (name: string) {
              var reg = 
              /^(([A-Za-z0-9 ]){3,50}\w+)$/;
              return reg.test(name);
          },

        
        },

    },
    
) 
</script>


<style scoped>

div{
max-width: 100px;
margin: 60px 0 0;

}

input{
    width: 300px;
    margin:15px;
    border: double

}

</style>