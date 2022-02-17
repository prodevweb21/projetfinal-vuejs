import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Product from '@/components/Product.vue'
import ProductEdit from '@/components/ProductEdit.vue'
import ProductList from '@/components/ProductList.vue'
// import Contact from '@/components/Contact.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },

    {
      path: '/about',
      name: 'About',
      // component: AboutView
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/product',
      name: 'Product',
      component: Product
    },

          // la navigation de ce menu ProductEdict est désactivée pour permettre de faire un props.

    // {
    //   path: '/productEdit',
    //   name: 'ProductEdit',
    //   component: ProductEdit
    // },

    {
      path: '/productList',
      name: 'ProductList',
      component: ProductList
    },
  
    // la navigation de ce menu Contact est désactivée pour permettre de faire un props.
    // {
    //   path: '/contact',
    //   name: 'Contact',
    //   component: Contact
    // },
  
  ]
})

export default router
