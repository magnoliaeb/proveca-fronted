export default app => ({
    methods: {
        register(data) {
            return app.store.dispatch('identity/signup', {
                $nuxt: app.router.app.$root,
                data: data
            })
            .then(
                response => this.completeAuth(response)
            )
            .catch(error => {
                app.router.app.$root.$emit(
                    'error-notify',
                    error.data.msg ?? error.message
                )

                return Promise.reject(error)
            })
        },
        
        loginWithCredentials(data) {
            return app.$auth.loginWith('local', {
                data: data
            })
            .then(
                response => this.completeAuth(response)
            )
            .catch(error => {
                app.router.app.$root.$emit(
                    'error-notify',
                    'Usuario o contraseña incorrectos'
                )

                return Promise.reject(error)
            })
        },

        loginWithToken(token) {
            return app.$axios({
                method: 'post',
                url: `/auth/login-with-token/${token}`
            })
            .then(
                response => this.completeAuth(response)
            )
            .catch(error => window.location.href = app.$util.generateUrl({
                base_url: process.env.VUE_APP_WEBURL,
                params: {
                    alert_title: 'Ups !',
                    alert_body: 'Algo salio mal en el proceso de autenticación',
                    alert_type: 'error'
                }
            }))
        },

        updateProfile(data) {
            return app.store.dispatch('identity/updateProfile', {
                $nuxt: app.router.app.$root,
                data: data,
            })
            .then(
                authData => this.setAuthData(authData)
            )
        },

        changePassword(data) {
            return app.store.dispatch("identity/changePassword", {
                $nuxt: app.router.app.$root,
                data: data
            })
        },

        completeAuth(authData) {
            this.setAuthData(authData)

            app.router.app.$root.$emit(
                'success-notify',
                `¡Hola ${authData.data.name}, Bienvenido a ${process.env.VUE_APP_NAME}!`
            )

            let cart = app.router.app.$store.state.cart.cart

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
        },

        setAuthData(authData) {
            app.$auth.setUserToken(authData.token)
            app.$auth.setUser(authData.data)
            app.$auth.$storage.setUniversal('token', authData.token)
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