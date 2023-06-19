export default {
    props: [
        'product'
    ],

    data() {
        return {
            variants: []
        }
    },

    computed: {
        variantsWithQty() {
            return this.variants.filter(v => v.qty >= 1)
        },

        qty() {
            return _.sumBy(this.variantsWithQty, 'qty')
        },

        total() {
            let total = 0

            this.variantsWithQty.forEach(v => total += v.price * v.qty)

            return total
        },

        fornattedTotal() {
            return this.$util.getMoneyFormat(this.total)
        }
    },

    methods: {
        variant(i) {
            return this.variants[i]
        },

        dec(i) {
            let qty = this.variant(i).qty

			if (qty > 0) {
                this.$set(this.variants[i], 'qty', qty - 1)
			}
		},

		inc(i) {
            let qty = this.variant(i).qty

            this.$set(this.variants[i], 'qty', qty + 1)
		},

        restart() {
            this.variants.forEach(v => v.qty = 0)
        },

        add() {
            this.variantsWithQty.forEach((v, i) => {
                let item = {
                    product: this.product,
                    variant: v,
                    qty: v.qty
                }
            
                this.$store.dispatch('cart/addItem', {
                    item: item
                })
                .then(() => {
                    this.$set(this.variants[i], 'qty', 0)
                    this.$observer.showDialogInfo = false
                })
            })
        }
    },

    created() {
        let variants = this.$util.clone(this.product.variants).map(v => {
            v.qty = 0

            return v
        })

        this.$set(this, 'variants', variants)
    }
}