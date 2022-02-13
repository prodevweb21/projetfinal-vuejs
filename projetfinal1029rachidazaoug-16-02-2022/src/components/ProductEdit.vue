<template>

    <div>
        <div>
                <input type="text" id="title" placeholder="Titre de la tache.." v-model="myproduct.title">
                <input type="text" id="category" placeholder="Nom du projet.." v-model="myproduct.category">
                <input type="submit" value="Add product" v-on:click="myway"/>
        </div>
        
    </div>
    
</template>

<script>
export default {

    data: function () { 
      return {
        myproduct: {
          title: "test",
          category: "test",
        },
      };
    },
    methods: {
      myway: function () {
        alert(
          `Titre de la produit: ${this.myproduct.title} Categorie : ${this.monproduct.category}`
        );
      },
    },
    
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
    border: double

}

</style>