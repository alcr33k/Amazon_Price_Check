<template>
    <form class="addForm" v-on:submit.prevent="addProduct">
        <input type="text" v-model="asin" name="asin" required placeholder="ASIN">
        <input type="number" v-model="maxPrice" name="maxPrice" required placeholder="Max Price">
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
    props: {
        products: Array
    },
    methods: {
        async addProduct() {
          if (this.validateASIN(this.asin) == true) {
            var date = new Date();
            try {
              await axios.get('api/product/' + this.asin).then((response) => {
                if (response.status === 200) {
                  var productDetails = response.data;
                  const productToAdd = {
                    id: this.asin,
                    title: productDetails.title,
                    price: productDetails.offerPrice,
                    maxPrice: this.maxPrice,
                    sellerName: productDetails.sellerName,
                    fulfilledByAmazon: (productDetails.fulfilledByAmazon == 'true') ? 'True' : 'False',
                    date: date.toISOString().substring(0, 10) + ' ' + (date.getHours()<10 ? '0':'') + date.getHours() + ':' + (date.getMinutes()<10 ? '0':'') + date.getMinutes()
                  }
                  this.$emit('add-product', productToAdd);
                }
              });
            } catch(error) {
              this.$emit('handle-error', 'API could not find a product with ASIN: ' + this.asin);
            }
          }
        },
        validateASIN(asin) {
          // 10 letters and starts with b
          const asinRegex = new RegExp('^(B)[0-9A-Z]{9}$');
          if (!asinRegex.test(asin)) {
            this.$emit('handle-error', 'Not a valid ASIN');
            return false;
          }
          // check for duplicates
          var productIndex = this.products.findIndex(x => x.id == asin);
          if (productIndex != -1) {
            this.$emit('handle-error', 'This product already exist in the list');
            return false;
          }
          return true;
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
