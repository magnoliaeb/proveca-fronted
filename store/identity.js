export const state = () => ({
    sstore: null,
    website: null,
    identity: null,
    shoppingCart: null,
    addresses: [],
    addedAddress: null,
    countries: [],
    banners: [],
    billingData: null,
    cfdiUsageOptions: [],
    vatTypeOptions: []
})

export const mutations = {
    SET_SSTORE(state, sstore) {
        state.sstore = sstore
    },
    SET_WEBSITE(state, website) {
        state.website = website;
    },
    SET_ADDRESSES(state, addresses) {
        addresses = addresses.map((address) => {
            return {
                ...address,
                full: `${address.street} ${address.street2}, ${address.city}. ${address.state_id[1]} ${address.zip}`
            }
        })
        state.addresses = addresses
    },
    SET_IDENTITY(state, identity) {
        state.identity = identity;
    },
    SET_ADDED_ADDRESS(state, addedAddress) {
        state.addedAddress = addedAddress
    },
    SET_COUNTRIES(state, countries) {
        state.countries = countries
    },
    SET_BANNERS(state, banners) {
        state.banners = banners
    },
    SET_BILLING_DATA(state, billingData) {
        state.billingData = billingData
    },
    SET_CFDI_USAGE_OPTIONS(state, options) {
        state.cfdiUsageOptions = options ?? []
    },
    SET_VAT_TYPE_OPTIONS(state, options) {
        state.vatTypeOptions = options ?? []
    }
}
export const actions = {
    emit(ctx, payload) {
        if(process.client && ! payload.dontEmit) {
            console.log(payload)
            this._vm.$root.$nuxt.$emit(
                payload.type,
                payload.value
            )
        }
    },
    
    loadInitialData(ctx) {
        return this.$axios.get('/auth/initial-data')
            .then(response => {
                ctx.commit('SET_COUNTRIES', response.countries)
                ctx.commit('SET_WEBSITE', response.website)
                ctx.commit('SET_BANNERS', response.banners)

                return response
            })
            .catch(error => {
                ctx.commit('SET_COUNTRIES', null)
                ctx.commit('SET_WEBSITE', null)
                ctx.commit('SET_BANNERS', [])
                return Promise.reject(error)
            })
    },

    signup(ctx, config) {
        return this.$axios.post('/auth/signup', config.data)
            .then(identity => {
                ctx.commit('SET_IDENTITY', identity)
                return identity
            })
            .catch(error => {
                ctx.commit('SET_IDENTITY', null)

                ctx.dispatch('emit', {
                    type: 'error-notify',
                    value: 'Error al crear la cuenta. ¿Email ya registrado? Intenta iniciar sesión.',
                    dontEmit: config.dontEmit
                })

                return Promise.reject(error)
            })
    },

    autoSignup(ctx, config) {
        return this.$axios.post('/auth/auto-signup', config.data)
            .then(identity => {
                ctx.commit('SET_IDENTITY', identity)
                return identity
            })
            .catch(error => {
                ctx.commit('SET_IDENTITY', null)

                ctx.dispatch('emit', {
                    type: 'error-notify',
                    value: 'Account could not be created. Do you already have an account? Try to login.',
                    dontEmit: config.dontEmit
                })

                return Promise.reject(error)
            })
    },

    loadAddresses(ctx, config) {
        return this.$axios.get(`/auth/profile/address`)
            .then(addresses => {
                ctx.commit('SET_ADDRESSES', addresses)
                return addresses
            })
            .catch(error => {
                ctx.commit('SET_ADDRESSES', [])

                ctx.dispatch('emit', {
                    type: 'error-notify',
                    value: 'No se pudieron cargar las direcciones',
                    dontEmit: config.dontEmit
                })

                return Promise.reject(error)
            })
    },
    
    loadCountries (ctx) {
        return this.$axios.get(`/catalog/country`)
            .then(response => {
                ctx.commit('SET_COUNTRIES', response)
                return response
            })
            .catch(error => {
                ctx.commit('SET_COUNTRIES', [])
                return Promise.reject(error)
            })
    },

    loadStates (ctx, countryId) {
        return this.$axios.get(`/catalog/country/${countryId}`)
            .catch(error => [])
    },

    addAddress(ctx, config) {
        return this.$axios.post('/auth/profile/address', config.data)
            .then(address => {
                ctx.commit('SET_ADDED_ADDRESS', address)
                ctx.dispatch('loadAddresses')

                ctx.dispatch('emit', {
                    type: 'success-notify',
                    value: 'Dirección agregada',
                    dontEmit: config.dontEmit
                })

                return address
            })
            .catch(error => {
                ctx.commit('SET_ADDED_ADDRESS', null)

                ctx.dispatch('emit', {
                    type: 'error-notify',
                    value: 'Error al agregar la dirección',
                    dontEmit: config.dontEmit
                })

                return Promise.reject(error)
            })
    },

    updateAddress(ctx, config) {
        return this.$axios.put(`/auth/profile/address/${config.id}`, config.data)
            .then(address => {
                ctx.commit('SET_ADDED_ADDRESS', address)
                ctx.dispatch('loadAddresses')

                ctx.dispatch('emit', {
                    type: 'success-notify',
                    value: 'La dirección se ha actualizado',
                    dontEmit: config.dontEmit
                })

                return address
            })
            .catch(error => {
                ctx.dispatch('emit', {
                    type: 'error-notify',
                    value: 'Error al guardar la dirección',
                    dontEmit: config.dontEmit
                })

                return Promise.reject(error)
            })
    },

    deleteAddress(ctx, config) {
        return this.$axios.delete(`/auth/profile/address/${config.id}`)
            .then(response => {
                ctx.dispatch('loadAddresses')
                return response
            })
            .catch(error => {
                ctx.dispatch('emit', {
                    type: 'error-notify',
                    value: 'Error al eliminar la dirección. La dirección ya no existe o está asociada a un documento',
                    dontEmit: config.dontEmit
                })

                return Promise.reject(error)
            })
    },

    async sendResetPasswordRequest(ctx, config) {
        try {
            const request = await this.$axios.post('/auth/reset-password-request', config.data)
            if(request.success == true) {
                ctx.dispatch('emit', {
                    type: 'success-notify',
                    value: 'Solicitud enviada. Revisa tu correo por instrucciones.',
                    dontEmit: config.dontEmit
                })
            } else {
                ctx.dispatch('emit', {
                    type: 'error-notify',
                    value: 'Error al enviar la solicitud.',
                    dontEmit: config.dontEmit
                })
            }
        } catch(e) {
            ctx.dispatch('emit', {
                type: 'error-notify',
                value: 'Error al enviar la solicitud.',
                dontEmit: config.dontEmit
            })

            return Promise.reject(e)
        }
    },
    async sendResetPasswordConfirm(ctx, config) {
        try {
            const request = await this.$axios.post('/auth/reset-password-confirm', config.data)
            if(request.success == true) {
                ctx.dispatch('emit', {
                    type: 'success-notify',
                    value: 'Contraseña acualizada. Puedes iniciar sesión ahora.',
                    dontEmit: config.dontEmit
                })
            } else {
                ctx.dispatch('emit', {
                    type: 'error-notify',
                    value: 'Error al enviar la solicitud.',
                    dontEmit: config.dontEmit
                })
            }
        } catch(e) {
            ctx.dispatch('emit', {
                type: 'error-notify',
                value: 'Error al enviar la solicitud.',
                dontEmit: config.dontEmit
            })

            return Promise.reject(e)
        }
    }, 
    async changePassword(ctx, config) {
        try {
            await this.$axios.post(`/auth/change-password`, config.data)

            ctx.dispatch('emit', {
                type: 'success-notify',
                value: 'Contraseña actualizada correctamente.',
                dontEmit: config.dontEmit
            })
        } catch(e) {
            ctx.dispatch('emit', {
                type: 'error-notify',
                value: 'Error al actualizar la contraseña.',
                dontEmit: config.dontEmit
            })

            return Promise.reject(e)
        }
    },

    updateProfile(ctx, config) {
        return this.$axios.put(`/auth/profile`, config.data)
            .then(response => {
                ctx.dispatch('emit', {
                    type: 'success-notify',
                    value: 'Datos actualizados correctamente.',
                    dontEmit: config.dontEmit
                })

                return response
            })
            .catch(error => {
                ctx.dispatch('emit', {
                    type: 'error-notify',
                    value: 'Error al actualizar los datos.',
                    dontEmit: config.dontEmit
                })

                return Promise.reject(error)
            })
    },

    setAddedAddress(ctx, value)  {
        commit('SET_ADDED_ADDRESS', value)
    },

    loadBillingData(ctx) {
        return this.$axios.get('/auth/profile/billing-data')
            .then(response => {
                ctx.commit('SET_BILLING_DATA', response)

                ctx.dispatch(
                    'cart/setBillingAddress',
                    {
                        address_id: response.id,
                        dontEmit: true
                    },
                    {root: true}
                )

                return response
            })
            .catch(error => {
                ctx.commit('SET_BILLING_DATA', null)
                return Promise.reject(error)
            })
    },

    updateBillingData(ctx, config) {
        return this.$axios.put('/auth/profile/billing-data', config.data)
            .then(response => {
                ctx.dispatch('emit', {
                    type: 'success-notify',
                    value: 'Datos actualizados correctamente.',
                    dontEmit: config.dontEmit
                })

                return ctx.dispatch('loadBillingData')
            })
            .catch(error => {
                ctx.dispatch('emit', {
                    type: 'error-notify',
                    value: 'Se ha presentado un error.',
                    dontEmit: config.dontEmit
                })

                return Promise.reject(error)
            })
    },

    loadCfdiUsageOptions(ctx) {
        return this.$axios.get('/store/cfdi-usage-options')
            .then(options => {
                ctx.commit('SET_CFDI_USAGE_OPTIONS', options)
                return options
            })
            .catch(error => {
                ctx.commit('SET_CFDI_USAGE_OPTIONS', [])
                return []
            })
    },

    loadVatTypeOptions(ctx) {
        return this.$axios.get('/store/vat-type-options')
            .then(options => {
                ctx.commit('SET_VAT_TYPE_OPTIONS', options)
                return options
            })
            .catch(error => {
                ctx.commit('SET_VAT_TYPE_OPTIONS', [])
                return []
            })
    }
}


export const getters = {
    getWebsite(state) {
        return state.website
    },
    getIdentity(state) {
        return state.identity
    },
    getAddresses(state) {
        return state.addresses
    },
    getShoppingCart(state) {
        return state.shoppingCart;
    },
    getCountries(state) {
        return state.countries;
    },
    getAddedAddress(state) {
        return state.addedAddress;
    },
    // Banners
    getMainBanners(state) {
        if(Array.isArray(state.banners)) {
            return state.banners.filter(function(banner) { return banner.location == 'MAIN'; });
        }

        return [];
    },
    getContentBanners(state) {
        if(Array.isArray(state.banners)) {
            return state.banners.filter(function(banner) { return banner.location == 'SECONDARY'; });
        }

        return [];
    },
    getAsideBanners(state) {
        if(Array.isArray(state.banners)) {
            return state.banners.filter(function(banner) { return banner.location == 'TERCIARY'; });
        }

        return [];
    },
    getFooterBanners(state) {
        if(Array.isArray(state.banners)) {
            return state.banners.filter(function(banner) { return banner.location == 'QUATERNARY'; });
        }

        return [];
    },
    getBanners(state) {
        return state.banners
    },
}
