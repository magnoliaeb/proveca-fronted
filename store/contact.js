export const actions = {
    contact(ctx, data) {
        //  data {
        //      name: '',
        //      phone: '',
        //      email: '',
        //      body: ''
        //  }

        return this.$axios.post('/crm/contact', data)
    }
}
