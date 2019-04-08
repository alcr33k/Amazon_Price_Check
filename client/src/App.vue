<template>
  <div id="app">
    <Header />
    <ProductList />
    <h2>How to use</h2>
    <p>Enter an ASIN of a product you want to track the price of and the max price you want to pay for it. It will display the price in green if it's less than the max price and in red if it's over. It will save it to your localstorage. Whenver you want to see if the orice has been updated, just press update prices!</p>
    <h2>Resources:</h2>
    <p>Example ASIN: B00M4LWXI0, B07GDGZCCH, B0781Z7Y3S</p>
    <p><a href="https://www.nchannel.com/blog/amazon-asin-what-is-an-asin-number/">How to find an Amazon Asin</a></p>
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
