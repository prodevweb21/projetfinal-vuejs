<



<template>

    <div>
        <h2>
        {{title}} 
        <br>
        {{category}}
        </h2>


    </div>


</template>

<script lang="ts">
export default {
    
    data: function () {
      return {
        title: "Product A",
        category: "Category A",
        done: false,
      };
    },
}
</script>


<style scoped>

h2{

text-align: center;
border: solid;
border-radius: 10px;
border-top-color:red;
grid-area: 50px;
padding: 50px;
margin: 50px;

}


</style>