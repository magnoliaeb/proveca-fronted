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
            showDialogAddress: false,

            keys: {
                GridProducts: 1
            },

            // socials: [
            //     {
            //         network: 'pinterest',
            //         name: "NailsFactory",
            //         to: "https://www.pinterest.com.mx/Nailfactoryofficial/_created/",
            //         icon: "redes-pinterest",
            //     },
            //     {
            //         network: 'youtube',
            //         name: "NailsFactory",
            //         to: "https://www.youtube.com/user/nailfactoryoficial",
            //         icon: "redes-youtube",
            //     },
            //     {
            //         network: 'facebook',
            //         name: "NailsFactory",
            //         to: "https://www.facebook.com/NailFactoryOficial",
            //         icon: "redes-facebook",
            //     },
            //     {
            //         network: 'instagram',
            //         name: "NailsFactory",
            //         to: "https://www.instagram.com/NAILFACTORYOFICIAL/",
            //         icon: "redes-instagram",
            //     },
            //     {
            //         network: 'tiktok',
            //         name: "NailsFactory",
            //         to: "https://www.tiktok.com/es",
            //         icon: "redes-tiktok",
            //     }
            // ]
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
        }
    }
})