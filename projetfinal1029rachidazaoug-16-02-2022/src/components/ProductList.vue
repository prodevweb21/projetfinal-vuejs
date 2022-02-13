<template>

    <div>
        <ul v-for="product in products">
            <li>
                {{product.title}}
            </li>
        </ul>
    
    </div>
    
</template>

<script>
export default {

    data: function () {
      return {
        products: [
          {
            title: "Product A",
            category: "Category A",
            done: false,
          },
          {
            title: "Product B",
            category: "Category B",
            done: true,
          },
          {
            title: "Product C",
            category: "Category C",
            done: false,
          },
        ],
      };
    },
    
}
</script>


<style scoped>

    ul{
    text-align: center;
    border: solid;
    border-top-color: green;
    list-style-type: none;
    font-size: 30px;
    grid-area: 50px;
    padding: 50px;
    margin: 50px;

}
  

</style>