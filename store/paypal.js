export const state = () => ({
    paymentResponse: null,
    charge: null
})

export const mutations = {
    SET_PAYMENT_RESPONSE(state, value) {
        state.paymentResponse = value
    },

    SET_CHARGE(state, value) {
        state.charge = value
    }
}
export const actions = {
    payWithPaypal(ctx, config) {
        return this.$axios.post(`/paypal/generate/${config.order.id}`, {
            redirect_url: config.redirect_url
        })
        .then(response => {
            ctx.commit('SET_PAYMENT_RESPONSE', response)
            return response.data
        })
        .catch(error => {
            config.$nuxt.$emit('error-notify', 'No se pudo iniciar el pago.')
            console.log(error)
            return Promise.reject(error)
        })
    },

    getCharge(ctx, config) {
        return this.$axios.get(`/paypal/payment/${config.id}`)
        .then(response => {
            ctx.commit('SET_CHARGE', response)
            return response
        })
        .catch(error => {
            ctx.commit('SET_CHARGE', null)
            config.$nuxt.$emit('error-notify', error.response.data.description)
            return Promise.reject(error.message, error.response.data.description)
        })
    }
}


export const getters = {
    //
}
