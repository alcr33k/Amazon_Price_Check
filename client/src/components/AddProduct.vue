<template>
    <form class="addForm" v-on:submit.prevent="addProduct">
        <input type="text" v-model="asin" name="asin" placeholder="ASIN">
        <input type="number" v-model="maxPrice" name="maxPrice" min="100" max="10000" step="100" placeholder="Max Price">
        <input type="submit" value="Add Product" class="btn">
    </form>
</template>

<script>
// import PriceService from '../priceService';
import axios from 'axios';

export default {
    name: "AddProduct",
    data() {
        return {
            asin: '',
            maxPrice: '',
            product: {}
        }
    }, 
    methods: {
        async addProduct() {
          var date = new Date();
            await axios.get('api/product/' + this.asin).then((response) => {
              var productDetails = response.data;
              const productToAdd = {
                id: this.asin,
                title: productDetails.title,
                price: productDetails.offerPrice,
                maxPrice: this.maxPrice,
                date: date.toISOString().substring(0, 10) + ' ' + (date.getHours()<10 ? '0':'') + date.getHours() + ':' + (date.getMinutes()<10 ? '0':'') + date.getMinutes()
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
  .addForm {
    margin-top: 1em;
  }
</style>
