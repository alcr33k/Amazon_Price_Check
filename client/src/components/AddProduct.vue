<template>
    <form v-on:submit.prevent="addProduct">
        <input type="text" v-model="asin" name="asin" placeholder="ASIN">
        <input type="submit" value="Add Product" class="btn">
    </form>
</template>

<script>
// import PriceService from '../priceService';
import axios from 'axios';
const uuidv4 = require('uuid/v4');

export default {
    name: "AddProduct",
    data() {
        return {
            asin: '',
            product: {}
        }
    }, 
    methods: {
        async addProduct() {
          var date = new Date();
            // let scrapedProduct = await PriceService.getProduct(this.asin);
            // for now include localhost:5000, we'll remove it when we push to heroku
            await axios.get('http://localhost:5000/api/product/' + this.asin).then((response) => {
              var productDetails = response.data;
              const productToAdd = {
                id: uuidv4(),
                title: productDetails.title,
                price: productDetails.offerPrice,
                date: date.toISOString().substring(0, 10) + ' ' + date.getHours() + ':' + date.getMinutes()
              }
              this.$emit('add-product', productToAdd);
            });
        }
    }
}
</script>

<style scoped>
  form {
    display: flex;
  }
  input[type="text"] {
    flex: 10;
    padding: 5px;
  }
  input[type="submit"] {
    flex: 2;
  }
</style>
