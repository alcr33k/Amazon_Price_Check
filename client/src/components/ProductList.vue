<template>
    <div>
        <AddProduct v-on:add-product="addProduct"/>
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Last Updated</th>
                <th>Remove</th>
            </tr>
            <tr v-bind:key="product.id" v-for="product in products">
                <!-- Behöver ingen product component, shows the values here -->
                <td>{{product.title}}</td>
                <td>{{product.price}}</td>
                <td>{{product.date}}</td>
                <td>
                    <i class="fa fa-minus-circle" v-on:click="removeProduct(product.id)"></i>
                </td>
                <!-- <Product v-bind:product="product" v-on:del-product="removeProduct"/> -->
            </tr>
        </table>
    </div>
</template>

<script>

import AddProduct from './AddProduct.vue';
/* import Product from './Product.vue'; */
// ok the default is done, now its time to start working with json 
export default {
    name: "ProductList",
    components: {
        AddProduct
    }, 
    data() {
        return {
           products: [
           ] 
        }
    }, 
    methods: {
        removeProduct(index) {
            this.products = this.products.filter(product => product.id !== index);
            localStorage.setItem("savedProducts", JSON.stringify(this.products));
        },
        addProduct(newProduct) {
            this.products = [...this.products, newProduct];
            localStorage.setItem("savedProducts", JSON.stringify(this.products));
        }
    }, 
    created() {
        if (localStorage.getItem("savedProducts") != null) {
            var savedProducts = JSON.parse(localStorage.getItem("savedProducts"));
            for (var i = 0; i < savedProducts.length; i++) {
                this.products.push(savedProducts[i]);
            }
        }
    }
}
</script>

<style scoped>
    @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 
</style>
