
<template>

   <div id="container">
    <div id="contacts">
      <div id="contacts--contact">
        <p>{{ email }}</p>
        <p>{{ phone }}</p>
      </div>
      
    </div>
    <div id="mentions">
      <p>{{ mention }}</p>
    </div>
   </div>

   </template>


<script>
export default {

data: function() {
    return {
      email : 'rachida.dev@gmail.com',
      phone : '514-517-8965',
      mention : '2022-02-16 |mentions légales'
    }
  }
};

 </script>




<style scoped>

  h3
    {
    margin-bottom:50px;
    text-align: center;
    font-size: 10px;
    }

    #container
    {
  padding-top:20px;
  margin-top:20px;
  width:100vw;
  color:gray;
  background-color:black;
  display:flex;
  flex-direction:column;
  align-items:center;
}

</style>

