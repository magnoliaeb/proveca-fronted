export default {
    props: [
        'item'
    ],

    data() {
        return {
            product: null
        }
    },

    computed: {
        formattedSubtotal() {
            return this.$util.getMoneyFormat(this.item.price_subtotal)
        },

        formattedTotal() {
            return this.$util.getMoneyFormat(this.item.price_total)
        },

        brand() {
            return this._.get(this, 'product.brand')
        },

        category() {
            return this._.get(this, 'product.category')
        },

        variant() {
            return this.product
                ? this.product.variants.find(v => v.id == this.item.product_product_id)
                : null
        }
    },

    created() {
        this.$store.dispatch(
            'products/getProductById',
            this.item.product.id
        )
        .then(p => this.product = p)
    }
}