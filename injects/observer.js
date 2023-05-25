export default app => ({
    data() {
        return {
            routeQuery: app.context.route.query,

            showLogin: false,
            showRegister: false,
            showFilters: false,
            showProfile: false,
            showCart: false,
            showMenu: false,
            showDialogInfo: false,
            productDialogInfo: null,
            showDialogSuscribe: false,

            keys: {
                GridProducts: 1
            },

            showPostcodesDialog: false,
            postcode: null,
            handlerPostcode: null,

            shippingType: null //   delivery | pickup
        }
    },

    methods: {
        updateKey(name) {
            this.keys[name] = new Date().getTime()
        },

        openDialogInfo(product) {
            this.showDialogInfo = true
            this.productDialogInfo = product
        },

        confirmCart() {
            app.store.dispatch('cart/confirm', {
                // invoice_required: app.store.state.cart.requireInvoice,
                invoice_required: false,
                cfdi_usage: 'P01',
                comments: ''
            })
            .then(order => {
                app.router.push({
                    name: "mis-pedidos-id-pagar",
                    params: { id: order.id }
                })
            })
        },

        openLogin() {
            this.showRegister = false

            setTimeout(
                () => this.showLogin = true,
                500
            )
        },

        openPostcodesDialog(handlerPostcode = null) {
            this.handlerPostcode = handlerPostcode
            this.showPostcodesDialog = true
        },

        hidePostcodesDialog() {
            this.showPostcodesDialog = false
        },

        setPostcode(postcode) {
            return app.$axios({
                method: 'post',
                url: '/helper/validate-coverage',
                data: {
                    postcode: postcode
                }
            })
            .then(() => {
                app.$cookies.set('postcode', postcode)
    
                this.postcode = postcode

                this.hidePostcodesDialog()

                if(typeof this.handlerPostcode == 'function') {
                    this.handlerPostcode()
                }
            })
            .catch(error => {
                app.$cookies.set('postcode', null)
        
                this.postcode = null

                app.router.app.$root.$emit('error-notify', error.response.data.msg)
            })
        }
    },

    created() {
        this.postcode = app.$cookies.get('postcode') ?? null
    }
})