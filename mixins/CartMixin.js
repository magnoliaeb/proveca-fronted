export default {
    computed: {
        subtotal() {
            return this.$store.getters['cart/getItemsSubtotal']
        },

        formattedSubtotal() {
            return this.$util.getMoneyFormat(this.subtotal)
        },

        tax() {
            return this.$store.getters['cart/getTax']
        },

        formattedTax() {
            return this.$util.getMoneyFormat(this.tax)
        },

        discount() {
            return this.$store.getters['cart/getAmountDiscount']
        },

        formattedDiscount() {
            return this.$util.getMoneyFormat(this.discount)
        },

        total() {
            return this.$store.getters['cart/getAmountTotal']
        },

        formattedTotal() {
            return this.$util.getMoneyFormat(this.total)
        },

        services() {
            return this.$store.getters['cart/getServices']
        },

        itemCount() {
            return this.$store.getters['cart/getItemCount']
        }
    }
}