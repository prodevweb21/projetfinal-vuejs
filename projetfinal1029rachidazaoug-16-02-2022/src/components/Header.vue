
<template>
  <div id="nav">
  <nav class="container navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto">
            <router-link to="/" class="nav-item nav-link">Home</router-link>
            <router-link to="/About" class="nav-item nav-link">Guide</router-link>
            <router-link to="/Product" class="nav-link">Product</router-link>
            <router-link to="/ProductEdit" class="nav-link">productEdit</router-link>
            <router-link to="/ProductList" class="nav-link">productList</router-link>

        </div>
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
</nav>
 </div>
<router-view/>
</template>
