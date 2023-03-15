export const state = () => ({
    //
})

export const mutations = {
    //
}

export const actions = {
    subscribe(ctx, data) {
        //  data {
        //      name: '',
        //      email: ''
        //  }

        return this.$axios.post('/newsletter/subscribe-by-email', data)
    }
}
