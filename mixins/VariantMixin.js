export default {
    props: [
        'product',
        'variant'
    ],

    data() {
        return {
            qty: 1
        }
    },

    computed: {
        price() {
            return this.variant.price
        },

        formattedPrice() {
            return this.$util.getMoneyFormat(this.price)
        }
    },

    methods: {
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
            .then(
                () => this.qty = 1
            )
        },

        buyNow() {
            this.add(1, this.variant)
                .then(response => this.$router.push({
                    name: 'carrito'
                }))
        }
    }
}