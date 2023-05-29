export default app => ({
    methods: {
        loginWithCredentials(data) {
            return app.$auth.loginWith('local', {
                data: data,
            })
            .then(
                response => this.completeAuth(response)
            )
        },

        loginWithToken(token) {
            return app.$axios({
                method: 'post',
                url: `/auth/login-with-token/${token}`
            })
            .then(
                response => this.completeAuth(response)
            )
            .catch(error => {
                console.log('aaaaaaadskjhjkdshfdjkdfnjndf')

                return window.location.href = app.$util.generateUrl({
                    base_url: process.env.VUE_APP_WEBURL,
                    params: {
                        alert_title: 'Ups !',
                        alert_body: 'Algo salio mal en el proceso de autenticación',
                        alert_type: 'error'
                    }
                })
            })
        },

        completeAuth(authData) {
            app.router.app.$root.$emit(
                'success-notify',
                `¡Bienvenido a ${process.env.VUE_APP_NAME}!`
            )

            app.$auth.setUserToken(authData.token)
            app.$auth.setUser(authData.data)
            app.$auth.$storage.setUniversal('token', authData.token)

            return app.router.app.$store.dispatch(
                'cart/loadShoppingCart'
            )
            .then(cart => {
                let items = app.router.app.$store.getters['localcart/getItems']

                return app.router.app.$store.dispatch('cart/addItems', {
                    // $nuxt: this.$nuxt,
                    items: items,
                    // dontEmit: true
                });
            })
            .then(() => {
                let cart = app.router.app.$store.state.cart.cart

                app.$observer.showLogin = false

                if (cart != null && cart.items.length != 0) {
                    if (app.context.route.name != 'carrito') {
                        window.location.href = '/carrito'
                    } else {
                        window.location.href = '/'
                    }
                } else {
                    if (app.context.route.name != 'index') {
                        window.location.href = '/'
                    } else {
                        window.location.href = '/productos'
                    }
                }
            })
            .catch(
                error => console.log(error.message, error.msg)
            )
        },

        redirectToSocialLogin(provider) {
            window.location.href = app.$util.generateUrl({
                base_url: process.env.VUE_APP_ENDPOINT,
                subfolders: `auth/redirect/${provider}`
            })
        },

        logout() {
            return app.$auth.logout().then(() => {
        		app.$auth.$storage.setUniversal('token', null)

        		if (process.client) {
          			window.location.href = '/'
        		}
      		})
        }
    }
})