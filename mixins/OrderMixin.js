export default {
    props: [
        'order'
    ],

    data() {
        return {
            fullOrder: null
        }
    },

    computed: {
        computedOrder() {
            return this.fullOrder ?? this.order
        },

        isFull() {
            return Boolean(this.computedOrder.items)
        },

        clientName() {
            return this._.get(this.computedOrder, 'partner_id.1')
        },

        addresses() {
            return this.$store.getters['identity/getAddresses']
        },

        shippingAddress() {
            return this.addresses.find(
                address => address.id == this._.get(this.computedOrder, 'partner_shipping_id.0')
            )
        },

        carrier() {
            return this._.get(this.computedOrder, 'carrier_id.1')
        },

        formattedSubtotal() {
            return this.$util.getMoneyFormat(this.computedOrder.items_subtotal)
        },

        formattedTax() {
            return this.$util.getMoneyFormat(this.computedOrder.amount_tax)
        },

        discount() {
            return this.computedOrder.amount_undiscounted - this.computedOrder.amount_total + this.computedOrder.amount_tax
        },

        formattedDiscount() {
            return this.$util.getMoneyFormat(this.discount)
        },

        formattedTotal() {
            return this.$util.getMoneyFormat(this.computedOrder.amount_total)
        }
    },

    methods: {
        loadFullOrder() {
            return this.$store.dispatch('orders/getOrder', {
                    order_id: this.computedOrder.id
                })
                .then(order => {
                    this.fullOrder = order
                    return this.fullOrder
                })
        },

        addToCart() {
            return this.isFull
                ? this._addToCart()
                : this.loadFullOrder()
                    .then(() => this._addToCart())
        },

        async _addToCart() {
            let items = this.computedOrder.items.map(item => {
                return {
                    product: {
                        id: item.product.id,
                        name: item.product.name
                    },
                    variant: {
                        id: item.product_product_id,
                        price: item.price_unit
                    },
                    qty: item.product_uom_qty
                }
            })

            await this.$store.dispatch('cart/addItems', {
                items: items
            })

            this.$router.push({name: 'carrito'})
        }
    }
}