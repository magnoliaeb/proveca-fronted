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

            showShippingTypeDialog: false,
            shippingType: null, //   delivery | pickup
            handlerShippingType: null
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





        openPostcodesDialog() {
            this.hideShippingTypeDialog()

            this.showPostcodesDialog = true
        },

        hidePostcodesDialog() {
            this.showPostcodesDialog = false
        },

        setPostcodeValue(postcode) {
            app.$cookies.set('postcode', postcode)
        
            this.postcode = postcode
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
                this.setPostcodeValue(postcode)

                this.setShippingTypeDelivery()

                this.hidePostcodesDialog()
            })
            .catch(error => {
                this.setPostcodeValue(null)

                app.router.app.$root.$emit('error-notify', error.response.data.msg)
            })
        },




        openShippingTypeDialog(handlerShippingType = null) {
            this.handlerShippingType = handlerShippingType

            this.showShippingTypeDialog = true
        },

        hideShippingTypeDialog() {
            this.showShippingTypeDialog = false
        },

        setShippingTypeDelivery() {
            if(this.postcode) {
                this.setShippingTypeValue('delivery')
            } else {
                this.openPostcodesDialog(
                    this.setShippingTypeDelivery
                )
            }
        },

        setShippingTypePickup() {
            this.setPostcodeValue(null)

            this.setShippingTypeValue('pickup')
        },

        setShippingTypeValue(value) {
            this.hideShippingTypeDialog()

            app.$cookies.set('shipping_type', value)
        
            this.shippingType = value

            if(typeof this.handlerShippingType == 'function') {
                let handlerShippingType = this.handlerShippingType
                
                this.handlerShippingType = null

                handlerShippingType()
            }
        }
    },

    created() {
        this.postcode = app.$cookies.get('postcode') ?? null

        this.shippingType = app.$cookies.get('shipping_type') ?? null
    }
})