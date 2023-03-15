export default {
    props: [
        'product'
    ],

    data() {
        return {
            selectedVariant: null
        }
    },

    computed: {
        price() {
            return this._.get(this, 'selectedVariant.price')
        },

        formattedPrice() {
            return this.$util.getMoneyFormat(this.price)
        }
    },

    methods: {
        addToCart(qty, variant = null) {
            let item = {
                product: this.product,
                variant: variant ?? this.selectedVariant,
                qty: qty
            }
        
            return this.$store.dispatch('cart/addItem', {
                item: item
            })
        },

        buyNow(variant = null) {
            this.addToCart(1, variant)
                .then(response => this.$router.push({
                    name: 'carrito'
                }))
        }
    }
}