const app = Vue.createApp({
    data(){
        return {
            cart: 0,
            product: 'Socks',
            description: 'Nike Air Jordan 980s',
            image: './assets/images/socks_green.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% Polyester'],
            variants: [
                { id: 2234, color: 'Green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'Blue', image: './assets/images/socks_blue.jpg' },
            ],
            
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    }
})
