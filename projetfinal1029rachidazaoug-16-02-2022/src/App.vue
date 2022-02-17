

<template>
    <div id="app">

      <template>

        <!-- Ceci est une transmission de données directement dans l'app.vue( Ceci n'est qu'un test) -->
        <!-- <li v-for="category in categories"
          :key="category">
          {{category}}
          </li> -->



      </template>
    <!-- J'ai désactivé la navigation de mon menu Contact et je lui ai fais passer un props -->
            <h3>formulaire de contact</h3>
            <contact :categories="categories"></contact>
    <!-- J'ai désactivé la navigation de mon menu ProductEdit et je lui ai fais passer un props -->
            <h3>Ceci est le formulaire de productEdit</h3>
            <productEdit :categories="categories"></productEdit>







  <Header  >

      <template>
      <nav>
        <RouterLink to="/"><h2>Home</h2></RouterLink>;
        <RouterLink to="/about"><h2>Guide</h2></RouterLink>;
        <RouterLink to="/product"><h2>Product</h2></RouterLink>;
               
        <!-- J'ai désactivé ce menu -Contact-pour permettre un props -->
        <!-- <RouterLink to="/productEdit"><h2>ProductEdit</h2></RouterLink>; -->

        <RouterLink to="/productList"><h2>ProductList</h2></RouterLink>;

        <!-- J'ai désactivé ce menu -Contact-pour permettre un props -->
        <!-- <RouterLink to="/contact"><h2>Contact</h2></RouterLink>; -->
      </nav>
      </template>
      <router-view/>
  </Header>

    </div>

      <Footer></Footer>
</template>




<script>

import { RouterLink, RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue'
import Product from './components/Contact.vue'
import ProductEdit from './components/ProductEdit.vue'
import ProductList from './components/ProductList.vue'
import Contact from './components/Contact.vue'
import AboutView from './views/AboutView.vue'
import HomeView from './views/HomeView.vue'

    export default {
    setup() {
      let categories = Array

      return {
        categories: [

            {
          title: "Category A",
            },
            {
            title: "Category B",
            },
            {
            title: "Category C",
            },


        ]
      }
    },
  

        name: 'App',
        components: {
          Header,
          Footer,
          Product,
          ProductEdit,
          ProductList,
          Contact,
          HomeView,
          AboutView,   
          
    },  
      }
    
    
</script>



<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}


nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}


</style>


