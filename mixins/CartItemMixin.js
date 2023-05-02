export default {
    props: [
        'item'
    ],

    data() {
        return {
            product: null,
            qty: 0
        }
    },

    computed: {
        formattedUnitPrice() {
            return this.$util.getMoneyFormat(this.item.price_unit)
        },

        formattedSubtotal() {
            return this.$util.getMoneyFormat(this.item.price_subtotal)
        },

        formattedTax() {
            return this.$util.getMoneyFormat(this.item.price_tax)
        },

        formattedTotal() {
            return this.$util.getMoneyFormat(this.item.price_total)
        },

        brand() {
            return this._.get(this, 'product.brand')
        },

        variant() {
            return this.product
                ? this.product.variants.find(v => v.id == this.item.product_product_id)
                : null
        },

        image() {
			return this.product && this.product.picture.url
                ? this.product.picture.url
                : '/loading.png'
		}
    },

    watch: {
        item: {
            deep: true,
            immediate: true,
            handler() {
                this.qty = this.item.product_uom_qty * 1
            }
        }
    },

    methods: {
        updateQty() {
            // if(this.qty > 0) {
            //     this.$store.dispatch("cart/updateItemQty", {
            //         $nuxt: this.$nuxt,
            //         id: this.item.id,
            //         item: this.item,
            //         qty: this.qty,
            //         $store: this.$store
            //     })
            // }
        },

        dec() {
            if(this.qty > 1) {
                this.$store.dispatch("cart/decItemQty", {
                    item: this.item
                })
            }
        },

        inc() {
            this.$store.dispatch("cart/incItemQty", {
                item: this.item,
            })
        },
    
        deleteItem() {
            this.$store.dispatch("cart/deleteItem", {
                id: this.item.id
            })
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