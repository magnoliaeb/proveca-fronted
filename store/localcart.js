const _ = require("lodash")

export const state = () => ({
    billing_data: null,
    products_cart: [],
    services: [],
    shipping: null,
    payment_method: null,
    // totalProducts_cart: 0,
    subtotalProducts: 0,
    totalCart: 0,
})

export const mutations = {
    SET_PRODUCTS_CART(state, items) {
        state.products_cart = items
        this.$cookies.set('localcart.products_cart', items)
    },
    ADD_SERVICE(state, service) {
        let i = state.services.findIndex(s => s.id == service.id)

        if(i == -1) {
            state.services.push(service)
        } else {
            state.services[i] = service
        }
    },
    SET_SERVICES(state, services) {
        state.services = services
        this.$cookies.set('localcart.services', services)
    },
    ADD_PRODUCT_TO_CART(state, item) {
        let i = {}

        i.id = Math.floor(Math.random() * 100000000)
        i.name = item.product.name
        i.product_product_id = item.variant.id
        i.price_unit = item.variant.price
        i.product = {
            id: item.product.id,
            name: item.product.name
        }
        i.variant = {
            id: item.variant.id,
            price: item.variant.price
        }
        i.price_tax = 0

        i.qty = item.qty
        i.product_uom_qty = item.qty
        i.price_subtotal = i.price_unit * i.product_uom_qty
        i.price_total = i.price_subtotal + i.price_tax

        state.products_cart.push(i)
        this.$cookies.set('localcart.products_cart', state.products_cart)
    },
    DECREMENT_PRODUCT_INVENTORY(state, product) {
        product.stock--
        this.$cookies.set('localcart.products_cart', state.products_cart)
    },
    INCREMENT_PRODUCT_QUANTITY(state, item) {
        item.qty++
        item.product_uom_qty = item.qty
        item.price_subtotal = item.price_unit * item.qty
        item.price_total = item.price_subtotal + item.price_tax

        this.$cookies.set('localcart.products_cart', state.products_cart)
    },
    DECREMENT_PRODUCT_QUANTITY(state, item) {
        item.qty--
        item.product_uom_qty = item.qty
        item.price_subtotal = item.price_unit * item.qty
        item.price_total = item.price_subtotal + item.price_tax

        this.$cookies.set('localcart.products_cart', state.products_cart)
    },
    SET_PRODUCT_QUANTITY(state, dataItem) {
        dataItem.item.qty += dataItem.qty
        dataItem.item.product_uom_qty = dataItem.item.qty
        dataItem.item.price_subtotal = dataItem.item.price_unit * dataItem.item.qty
        dataItem.item.price_total = dataItem.item.price_subtotal + dataItem.item.price_tax

        this.$cookies.set('localcart.products_cart', state.products_cart)
    },
    REMOVE_PRODUCT(state, index) {
        state.products_cart.splice(index, 1)
        this.$cookies.set('localcart.products_cart', state.products_cart)
    },
    SET_BILLING_DATA(state, data) {
        state.billing_data = data;
        this.$cookies.set('localcart.billing_data', state.billing_data)
    },
    // INCREMENT_PRODUCT_INVENTORY(state, item) {
        // const product = state.products.find((product) => product.id == item.id)
        // console.log(product)
        // product.stock += item.qty
        // product.qty = 0
    // },
}
export const actions = {
    emit(ctx, payload) {
        if(process.client && ! payload.dontEmit) {
            this._vm.$root.$nuxt.$emit(
                payload.type,
                payload.value
            )
        }
    },

    clean(ctx) {
        ctx.dispatch('clearCartProducts')
        ctx.dispatch('clearServices')
        ctx.dispatch('clearBillingData')
    },

    loadCartProducts(ctx) {
        try {
            const products_cart = this.$cookies.get('localcart.products_cart') ?? []
            const services = this.$cookies.get('localcart.services') ?? []

            ctx.commit('SET_PRODUCTS_CART', products_cart)
            ctx.commit('SET_SERVICES', services)
        } catch(e) {
            ctx.commit('SET_PRODUCTS_CART', [])
            ctx.commit('SET_SERVICES', [])
        }
    },

    clearCartProducts(ctx) {
        ctx.commit('SET_PRODUCTS_CART', [])
    },

    clearServices(ctx) {
        ctx.commit('SET_SERVICES', [])
    },

    clearBillingData(ctx) {
        ctx.commit('SET_BILLING_DATA', null)
    },

    addItems(ctx, config) {
        config.items.forEach(item => {
            ctx.dispatch(
                'addItem',
                {
                    ...config,
                    item
                }
            )
        })
    },

    addItem(ctx, config) {
        try {
            if (config.item.variant.stock <= 0) return

            let item = ctx.state.products_cart.find((item) => item.variant.id == config.item.variant.id)

            if (!item) {
                ctx.commit('ADD_PRODUCT_TO_CART', config.item)
            } else {
                ctx.commit('SET_PRODUCT_QUANTITY', {
                    item, 
                    qty: config.item.qty
                })
            }

            ctx.dispatch('emit', {
                type: 'success-notify',
                value: 'Carrito actualizado',
                dontEmit: config.dontEmit
            })
        } catch (error) {
            ctx.dispatch('emit', {
                type: 'error-notify',
                value: 'No se pudo actualizar el carrito',
                dontEmit: config.dontEmit
            })
        }
    },

    addService(ctx, config) {
        ctx.commit('ADD_SERVICE', config.service)
        ctx.commit('SET_SERVICES', ctx.state.services)

        ctx.dispatch('emit', {
            type: 'success-notify',
            value: 'Carrito actualizado',
            dontEmit: config.dontEmit
        })
    },

    deleteItem(ctx, config) {
        let index = ctx.state.products_cart.findIndex(p => p.id == config.id)
        const item = ctx.state.products_cart[index]

        ctx.commit('REMOVE_PRODUCT', index)

        ctx.dispatch('emit', {
            type: 'success-notify',
            value: 'Carrito actualizado',
            dontEmit: config.dontEmit
        })
    },

    decQuantity(ctx, config) {
        // const item = ctx.state.products_cart.find((item) => item.id == product.id)
        const index = ctx.state.products_cart.findIndex((i) => i.variant.id == config.item.variant.id)
        if (config.item.qty <= 1) {
            ctx.commit('REMOVE_PRODUCT', index)
        }

        ctx.commit('DECREMENT_PRODUCT_QUANTITY', config.item)

        ctx.dispatch('emit', {
            type: 'success-notify',
            value: 'Carrito actualizado',
            dontEmit: config.dontEmit
        })
    },

    incQuantity(ctx, config) {
        // const item = ctx.state.products_cart.find((i) => i.variant.id == item.variant.id)
        ctx.commit('INCREMENT_PRODUCT_QUANTITY', config.item)

        ctx.dispatch('emit', {
            type: 'success-notify',
            value: 'Carrito actualizado',
            dontEmit: config.dontEmit
        })
    },

    setBillingData(ctx, data) {
        ctx.commit('SET_BILLING_DATA', data)
    }
}


export const getters = {
    getProductsCart(state) {
        return state.products_cart;
    },

    getItemCount(state) {
        let count = 0;
        for(let i = 0; i < state.products_cart.length; i++) {
            count += state.products_cart[i].qty;
        }

        return count;
    },

    getSubtotal(state) {
        let subtotal = 0;

        state.products_cart.forEach(p => {
            subtotal += _.get(p, 'variant.price', 0) * _.get(p, 'qty', 0)
        })

        return subtotal;
    },

    getTotal(state) {
        let total = 0;

        state.products_cart.forEach(p => {
            total += _.get(p, 'variant.price', 0) * _.get(p, 'qty', 0)
        })
        
        if(total > 0) {
            state.services.forEach(s => {
                total += _.get(s, 'price_total', 0)
            })
        }

        return total;
    },
    getBillingData(state) {
        if(state.billing_data == null) {
            //  confirmar
            //const data = Cookies.get('localcart.billing_data');
            const data = this.$cookies.get('localcart.billing_data');
            return JSON.parse(data);
        }

        return state.billing_data;
    },
    // getSubtotalProducts(state) {
    //     return state.subtotalProducts;
    // },
    // getTotalCart(state) {
    //     return state.totalCart;
    // },

    getItemCount(state) {
        let qty = 0;

        state.products_cart.forEach(p => {
            qty += _.get(p, 'qty', 0)
        })

        return qty;
    },

    getItems(state) {
        return state.products_cart
    },

    getServices(state) {
        return state.services
    }
}
