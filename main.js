const app = Vue.createApp({
    data(){
        return {
            product: 'shoes',
            description: 'Nike Air Jordan 980s',
            image: './assets/images/socks_green.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% Polyester'],
            variants: [
                { id: 2234, color: 'Green' },
                { id: 2235, color: 'Blue' }
            ],
            sizes: ['32', '34', '34', '40', '45'],
        }
    }
})
