<template>
    <div>
        <AddProduct v-bind:products="products" v-on:add-product="addProduct" v-on:handle-error="handleError"/>
        <p v-if="error != ''" class="alert">{{error}}</p>
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Seller</th>
                <th>FBA</th>
                <th>Last Updated</th>
                <th>Remove</th>
            </tr>
            <tr v-bind:key="product.id" v-for="product in products">
                <td v-if="product.title.length >= 60"><a v-bind:href="'https://www.amazon.com/dp/' + product.id">{{product.title.substring(0,60)}}</a></td>
                <td v-else><a v-bind:href="'https://www.amazon.com/dp/' + product.id">{{product.title}}</a></td>
                <td v-bind:class="[(formatPrice(product.price) > product.maxPrice) || (product.price === 'N/A') ? 'over' : 'under']">{{product.price}}</td>
                <td>{{product.sellerName}}</td>
                <td>{{product.fulfilledByAmazon}}</td>
                <td>{{product.date}}</td>
                <td>
                    <i class="fa fa-minus-circle" v-on:click="removeProduct(product.id)"></i>
                </td>
            </tr>
        </table>
        <UpdatePrice v-bind:products="products" v-on:update-product="updateProduct" v-on:update-to-na="updateToNa" />
    </div>
</template>

<script>

import AddProduct from './AddProduct.vue';
import UpdatePrice from './UpdatePrice.vue';

export default {
    name: "ProductList",
    components: {
        AddProduct,
        UpdatePrice
    }, 
    data() {
        return {
           products: [
           ],
           error: ""
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
        },
        updateProduct(updatedProduct) {
            var productIndex = this.products.findIndex(x => x.id == updatedProduct.id);
            this.$set(this.products[productIndex], 'price', updatedProduct.price);
            this.$set(this.products[productIndex], 'date', updatedProduct.date);
            localStorage.setItem("savedProducts", JSON.stringify(this.products));
        }, 
        updateToNa(product) {
            var productIndex = this.products.findIndex(x => x.id == product.id);
            this.$set(this.products[productIndex], 'price', 'N/A');
            this.$set(this.products[productIndex], 'date', product.date);
            localStorage.setItem("savedProducts", JSON.stringify(this.products));
        },
        formatPrice(price) {
            return Number(price.replace(/[^0-9.]+/g, ""));
        }, 
        handleError(errorMsg) {
            this.error = errorMsg;
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
    .over {
        color: red;
        font-weight: 600;
    }
    .under {
        color: green;
        font-weight: 600;
    }
    table {
        border: 1px solid black;
        margin: 0 auto;
        border-collapse: collapse;
        margin-top: 1em;
        width: 100%;
    }
    th {
        background: blacK;
        color: white;
    }
    td {
        padding: 0.25em 0.5em;
        border-right: 1px solid grey;
        border-bottom: 1px solid lightgray;
    }
    .fa-minus-circle {
        color: lightcoral;
    }
    a {
        text-decoration: none;
        color: black;
    }
    a:hover {
        text-decoration: underline;
        color: #0000EE;
    }
    .alert {
        background: #fdf2ce;
        font-weight: bold;
        display: inline-block;
        padding: 5px;
    }
</style>
