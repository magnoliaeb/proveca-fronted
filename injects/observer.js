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
            showDialogSuscribe: false,

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

        // confirmCart() {
        //     app.store.dispatch('cart/confirm', {
        //         invoice_required: app.store.state.cart.requireInvoice,
        //         cfdi_usage: 'P01',
        //         comments: ''
        //     })
        //     .then(order => {
        //         app.router.push({
        //             name: "pagar-pedido-id",
        //             params: { id: order.id }
        //         })
        //     })
        // }
    }
})