app.component('product-display', {

    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },

    template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img v-bind:src="image"
                :class="{'out-of-stock-img': !inStock}">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <h4>{{ isOnSale }}</h4>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>

                <p>Shipping: {{ shipping }}</p>

                <!-- Details -->
                <product-details :details="details"></product-details>

                <div v-for="(variant, index) in variants"
                :key="variant.id"
                @mouseover="updateVariant(index)"
                class="color-circle"
                :style="{backgroundColor: variant.color}">
                </div>
                
                <button class="button"
                :class="{disabledButton: !inStock}"
                @click="addToCart"
                :disabled="!inStock">
                Add to Cart
                </button>
        
            </div>
        </div>
    </div>`,

    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg',
              quantity: 50, onSale: true },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg',
              quantity: 0, onSale: false },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product;
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        isOnSale(){
            if(this.variants[this.selectedVariant].onSale){
                return `${this.brand} ${this.product} is on sale`
            }
        },
        shipping(){
            if (this.premium){
                return 'Free'
            }
            return 2.99
        },
    }
})