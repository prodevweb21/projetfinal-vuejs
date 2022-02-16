

<template>


    <div id="app">

      <templte>
        <li v-for="categorie in categories"
          :key="categorie">
          {{categories}}
          </li>

      </templte>

    <!-- {{categories}} -->

  <Header  >
      <template>
      <nav>
        <RouterLink to="/"><h2>Home</h2></RouterLink>;
        <RouterLink to="/about"><h2>Guide</h2></RouterLink>;
        <RouterLink to="/product"><h2>Product</h2></RouterLink>;
        <RouterLink to="/productEdit"><h2>ProductEdit</h2></RouterLink>;
        <RouterLink to="/productList"><h2>ProductList</h2></RouterLink>;
        <RouterLink to="/contact"><h2>Contact</h2></RouterLink>;
      </nav>
      </template>
      <router-view/>
  </Header>


    </div>
        
    <main>          
   </main>

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


