<template>
    <div class="updatePrice">
        <div class="progressBar">
            <div class="progress" v-bind:style="{width: computedWidth}"></div>
        </div>
        <button class="updateBtn" v-on:click="updatePrices">Update Prices</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "UpdatePrice",
    components: {
    }, 
    data() {
        return {
            width: '0%'
        }
    }, 
    props: {
        products: Array
    },
    computed: {
        computedWidth: function() {
            return this.width;
        }
    },
    methods: {
        changePercentage(percentage) {
            this.width = percentage + '%';
        },
        async updatePrices() {
            var date = new Date();
            for (let i=0; i<this.products.length; i++) {
                let product = this.products[i];
                await axios.get('http://localhost:5000/api/product/' + product.id).then((response) => {
                    var productDetails = response.data;
                    const productToAdd = {
                        id: product.id,
                        title: productDetails.title,
                        price: productDetails.offerPrice,
                        maxPrice: this.maxPrice,
                        date: date.toISOString().substring(0, 10) + ' ' + (date.getHours()<10 ? '0':'') + date.getHours() + ':' + (date.getMinutes()<10 ? '0':'') + date.getMinutes()
                    }
                    this.$emit('update-product', productToAdd);
                    // update progressbar and wait 2 seconds
                    var step = this.calculateStep();
                    setTimeout( () => {
                        this.changePercentage(step*(i+1));
                    }, i*2000 );
                });
            }
        }, 
        calculateStep() {
            // räkna ut antal produkter
            let amountOfProducts = this.products.length;
            // dela på 100 ochh avrunda med en 2 värdesiffror
            let step = (100 / amountOfProducts).toFixed(2);
            // returnera
            return step;
        }
    }
}
</script>

<style scoped>
    .updatePrice {
        display: flex;
        margin-top: 1em;
    }
    .progressBar {
        width: 100%;
        background-color: grey;
        margin-right: 0.2em;
    }

    .progress {
        width: 0%;
        height: 100%;
        background-color: green;
    }
    .updateBtn {
        width: 30%;
        height: 3em;
    }
</style>
