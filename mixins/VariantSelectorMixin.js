export default {
    props: [
        'product'
    ],

    data() {
        return {
            variant: null,
            qty: 1
        }
    },

    computed: {
        variants() {
            return this.product.variants
        },

        unitPrice() {
            return this._.get(this, 'variant.price', 0)
        },

        formattedUnitPrice() {
            return this.$util.getMoneyFormat(this.unitPrice)
        },

        totalPrice() {
            return this.unitPrice * this.qty
        },

        formattedTotalPrice() {
            return this.$util.getMoneyFormat(this.totalPrice)
        }
    },

    methods: {
        setVariant(variant) {
            this.variant = variant
        },

        dec() {
			if (this.qty > 1) {
				this.qty = this.qty - 1
			}
		},

		inc() {
			this.qty = this.qty + 1
		},

        add() {
            let item = {
                product: this.product,
                variant: this.variant,
                qty: this.qty
            }
        
            return this.$store.dispatch('cart/addItem', {
                item: item
            })
            .then(() => {
                this.qty = 1
                this.$observer.showDialogInfo = false
            })
        }
    },

    created() {
        if(this.variants.length == 1) {
            this.setVariant(this.variants[0])
        }
    }
}