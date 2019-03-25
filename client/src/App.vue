<template>
  <div id="app">
    <Header />
    <ProductList />
  </div>
</template>

<script>
import Header from './components/layout/Header';
import ProductList from './components/ProductList';

export default {
  name: 'app',
  components: {
    Header,
    ProductList
  }
}
</script>

<style>
/* Global style here */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  width: 60%;
  margin: 0 auto;
}
</style>
