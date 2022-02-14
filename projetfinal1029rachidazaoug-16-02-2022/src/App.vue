

<template>
  <header>
    <div id="app">
      <nav>
        <RouterLink to="/"><h2>Home</h2></RouterLink>;
        <RouterLink to="/about"><h2>Guide</h2></RouterLink>;
        <RouterLink to="/product"><h2>Product</h2></RouterLink>;
        <RouterLink to="/productEdit"><h2>ProductEdit</h2></RouterLink>;
        <RouterLink to="/productList"><h2>ProductList</h2></RouterLink>;
        <RouterLink to="/contact"><h2>Contact</h2></RouterLink>;

      </nav>


    </div>
  </header>
    <main>
      <RouterView />
      <Footer />
    </main>

</template>



<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router';
import Footer from './components/Footer.vue';


  defineProps ({

    data: function (){

        return{
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
        ],    
      }
    },
    components: {
      
    },
  })

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


