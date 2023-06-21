const _ = require("lodash")
//import { Loader } from '@googlemaps/js-api-loader'

export const state = ($app) => ({
    cart: null,
    shippingMethods: [],
    paymentMethods: [],
    paymentMethod: null,
    orderConfirmed: null,

    qtyFormItems: [],
    paymentUrl: null,
    cfdiUsageOptions: [],
    isBusy: false
})

export const mutations = {
    SET_CART(state, cart) {
        if(cart != null) {
            if(cart.expire_at) {
                let ea = cart.expire_at.replace(' ', 'T')
                ea = `${ea}.000Z`
                const date = new Date(ea)
                cart.expire_at = date.toLocaleString('en-US')
            }
    
            cart.items = cart.items.map((item) => {
                
                if(item.picture == null 
                    && item.product_pictures.length != 0) {
                    item.picture = item.product_pictures[0];
                }
    
                return item;
            });
    
            cart.services = cart.items.filter(item => _.get(item, 'product.type') == 'service')
            
    
            cart.items = cart.items.filter(item => _.get(item, 'product.type') == 'product')
    
    
            cart.services_subtotal = 0;
            for(let i = 0; i < cart.services.length; i++) {
                cart.services_subtotal += cart.services[i].price_subtotal;
            }
    
            cart.items_subtotal =  cart.amount_undiscounted - cart.services_subtotal;
    
            const keys = Object.keys(cart);
    
            if(cart.amount_discount != 0) {
                cart.hasDiscount = cart.amount_discount != 0;
            }
    
            cart.hasCoupon = keys.indexOf('promo_code') != !-1;
    
            cart.isEmpty = cart.amount_total == 0;
        }
        state.cart = cart;
    },
    SET_SHIPPING_METHODS(state, shippingMethods) {
        state.shippingMethods = shippingMethods ?? []
    },
    SET_PAYMENT_METHODS(state, paymentMethods) {
        state.paymentMethods = paymentMethods
    },
    SET_PAYMENT_METHOD(state, paymentMethod) {
        state.paymentMethod = paymentMethod
    },
    SET_ORDER_CONFIRMED(state, orderConfirmed) {
        state.orderConfirmed = orderConfirmed
    },
    // ADD_PRODUCT_TO_CART(state, config) {
    //     state.productsCart.push({ ...config.product, quantity: config.quantity })
    // },

    // Qty form
    SET_QTY_FORM_ITEMS(state, items) {
        state.qtyFormItems = items;
    },

    UPDATE_QTY_FORM_ITEM(state, item) {
        const ii = state.qtyFormItems.findIndex((qfi) => qfi.variant.id == item.variant.id);
        if(ii != -1) {
            state.qtyFormItems[ii].qty = item.qty;
            if(state.qtyFormItems[ii].qty == 0) {
                state.qtyFormItems.splice(ii, 1);
            }
        } else {
            state.qtyFormItems.push(item);
        }
    },

    SET_PAYMENT_URL(state, url) {
        state.paymentUrl = url
    },

    SET_CFDI_USAGE_OPTIONS(state, options) {
        state.cfdiUsageOptions = options ?? []
    },

    SET_IS_BUSY(state) {
        state.isBusy = true
    },

    SET_IS_AVAILABLE(state) {
        state.isBusy = false
    }
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

    async init(ctx) {
        if(ctx.rootState.auth.user) {
            try {
                await ctx.dispatch('loadShoppingCart')
                await ctx.dispatch('setItemsFromLocalCart')
                await ctx.dispatch('quoteShipping')
                await ctx.dispatch('getPaymentMethods')
            } catch (error) {
                console.log('nuxtServerInit ERROR: ', error)
            }
        } else {
            await ctx.dispatch('localcart/loadCartProducts', null, {root: true})
        }
    },

    loadShoppingCart(ctx) {
        return this.$axios.get('/store/shopping-cart')
            .then(cart => {
                ctx.commit('SET_CART', cart)

                return cart
            })
            .catch(error => {
                ctx.commit('SET_CART', null);
                ctx.commit('SET_SHIPPING_METHODS', []);
                ctx.commit('SET_PAYMENT_METHODS', []);
                return Promise.reject(error)
            })
    },

    async setItemsFromLocalCart(ctx) {
        let items = this.$cookies.get('localcart.products_cart')

        ctx.dispatch('localcart/clean', null, {root: true})

        if(items.length) {
            await ctx.dispatch('addItems', {
                items: items
            })
        }
    },

    loadCfdiUsageOptions(ctx) {
        return this.$axios.get('/store/cfdi-usage-options')
            .then(options => {
                ctx.commit('SET_CFDI_USAGE_OPTIONS', options)
                return options
            })
            .catch(error => {
                return Promise.reject(error)
            })
    },

    async quoteShipping(ctx) {
        try {
            if(ctx.getters.hasShoppingCart && ctx.state.cart.partner_shipping_id) {
                const methods = await this.$axios.post('/store/shopping-cart/quote-shipping', {
                    order_id: ctx.state.cart.id,
                    address_id: ctx.state.cart.partner_shipping_id[0],
                })
                ctx.commit('SET_SHIPPING_METHODS', methods)

            } else {
                ctx.commit('SET_SHIPPING_METHODS', [])
            }
        } catch (e) {
            ctx.commit('SET_SHIPPING_METHODS', [])
        }
    },
    async getPaymentMethods(ctx) {
        try {
            if(ctx.getters.hasShoppingCart) {
                const methods = await this.$axios.get('/store/shopping-cart/payment-methods')
                ctx.commit('SET_PAYMENT_METHODS', methods)

            } else {
                ctx.commit('SET_PAYMENT_METHODS', [])
            }
        } catch (e) {
            ctx.commit('SET_PAYMENT_METHODS', [])
        }
    },

    applyCoupon(ctx, config) {
        return this.$axios.put('/store/shopping-cart/add-coupon', {
            order_id: ctx.state.cart.id,
            code: config.applyCoupon
        })
        .then(response => {
            if(response.success == true) {
                ctx.commit('SET_CART', response.data.shoppingCart)
                ctx.commit('SET_SHIPPING_METHODS', response.data.quoteShipping)

                ctx.dispatch('emit', {
                    type: 'success-notify',
                    value: 'Cupón aplicado correctamente',
                    dontEmit: config.dontEmit
                })

                return response
            }
        })
        .catch(error => {
            ctx.dispatch('emit', {
                type: 'success-notify',
                value: 'Cupón no disponible',
                dontEmit: config.dontEmit
            })

            return Promise.reject(error)
        })
    },

    async clearCoupon(ctx, config) {
        try {
            if(ctx.getters.hasShoppingCart) {
                const response = await this.$axios.put('/store/shopping-cart/remove-coupon', {})
                if(response.success == true) {
                    ctx.commit('SET_CART', response.data.shoppingCart)
                    ctx.commit('SET_SHIPPING_METHODS', response.data.quoteShipping)

                    ctx.dispatch('emit', {
                        type: 'success-notify',
                        value: 'Carrito actualizado',
                        dontEmit: config.dontEmit
                    })
                }
                
            }
        } catch (e) {
            ctx.dispatch('emit', {
                type: 'error-notify',
                value: 'No se pudo actualizar el carrito',
                dontEmit: config.dontEmit
            })
        }
    },

    decItemQty(ctx, config) {
        if(config.item.product_uom_qty > 1) {
            ctx.commit('SET_IS_BUSY')
        
            if(ctx.rootState.auth.user) {
                return this.$axios.put('/store/shopping-cart', {
                    order_id: ctx.state.cart.id,
                    item_id: config.item.id,
                    qty: config.item.product_uom_qty - 1
                })
                .then(response => {
                    ctx.commit('SET_CART', response.data.shoppingCart)
                    ctx.commit('SET_SHIPPING_METHODS', response.data.quoteShipping)
                    
                    ctx.dispatch('emit', {
                        type: 'success-notify',
                        value: 'Carrito actualizado',
                        dontEmit: config.dontEmit
                    })
                    
                    return response
                })
                .catch(error => {
                    ctx.dispatch('emit', {
                        type: 'error-notify',
                        value: 'No se pudo actualizar el carrito',
                        dontEmit: config.dontEmit
                    })

                    return Promise.reject(error)
                })
                .finally(() => ctx.commit('SET_IS_AVAILABLE'))
            } else {
                ctx.dispatch('localcart/decQuantity', config, {root: true})
                    .finally(() => ctx.commit('SET_IS_AVAILABLE'))
            }
        } else {
            return ctx.dispatch('deleteItem', {
                id: config.item.id
            })
        }
    },

    incItemQty(ctx, config) {
        ctx.commit('SET_IS_BUSY')

        if(ctx.rootState.auth.user) {
            return this.$axios.put('/store/shopping-cart', {
                order_id: ctx.state.cart.id,
                item_id: config.item.id,
                qty: config.item.product_uom_qty + 1
            })
            .then(response => {
                if(response.success == true) {
                    ctx.commit('SET_CART', response.data.shoppingCart)
                    ctx.commit('SET_SHIPPING_METHODS', response.data.quoteShipping)

                    ctx.dispatch('emit', {
                        type: 'success-notify',
                        value: 'Carrito actualizado',
                        dontEmit: config.dontEmit
                    })
                    
                    return response
                }

                ctx.dispatch('emit', {
                    type: 'error-notify',
                    value: 'No se pudo actualizar el carrito',
                    dontEmit: config.dontEmit
                })

                return Promise.reject('No se pudo actualizar el carrito')
            })
            .catch(error => {
                ctx.dispatch('emit', {
                    type: 'error-notify',
                    value: 'No se pudo actualizar el carrito',
                    dontEmit: config.dontEmit
                })

                return Promise.reject(error)
            })
            .finally(() => ctx.commit('SET_IS_AVAILABLE'))
        } else {
            ctx.dispatch('localcart/incQuantity', config, {root: true})
                .finally(() => ctx.commit('SET_IS_AVAILABLE'))
        }
    },

    async updateItemQty(ctx, config) {
        ctx.commit('SET_IS_BUSY')

        if(ctx.rootState.auth.user) {
            return this.$axios.put('/store/shopping-cart', {
                order_id: ctx.state.cart.id,
                item_id: config.item.id,
                qty: config.qty,
            })
            .then(response => {
                if(response.success == true) {
                    ctx.commit('SET_CART', response.data.shoppingCart)
                    ctx.commit('SET_SHIPPING_METHODS', response.data.quoteShipping)

                    ctx.dispatch('emit', {
                        type: 'success-notify',
                        value: 'Carrito actualizado',
                        dontEmit: config.dontEmit
                    })
                    
                    return response
                }

                ctx.dispatch('emit', {
                    type: 'error-notify',
                    value: 'Algunas existencias ya no estaban disponibles. Verifica tu carrito',
                    dontEmit: config.dontEmit
                })

                return Promise.reject('Algunas existencias ya no estaban disponibles. Verifica tu carrito')
            })
            .catch(error => {
                ctx.dispatch('emit', {
                    type: 'error-notify',
                    value: 'Algunas existencias ya no estaban disponibles. Verifica tu carrito',
                    dontEmit: config.dontEmit
                })

                return Promise.reject(error)
            })
            .finally(() => ctx.commit('SET_IS_AVAILABLE'))
        } else {
            ctx.dispatch('localcart/updateItemQty', config, {root: true})
                .finally(() => ctx.commit('SET_IS_AVAILABLE'))
        }
    },
    
    async addItems(ctx, config) {
        if(ctx.rootState.auth.user) {
            try {
                if(ctx.getters.hasShoppingCart && config.items.length != 0) {
    
                    const all = config.items.map((item) => {
                        ctx.commit('SET_IS_BUSY')
                        
                        return this.$axios.post('/store/shopping-cart', {
                            order_id: ctx.state.cart.id,
                            name: item.product.name,
                            product_id: item.product.id,
                            variant_id: item.variant.id,
                            qty: item.qty,
                            price: item.variant.price
                        })
                    })
    
                    const results = await Promise.all(all)
                    await ctx.dispatch('loadShoppingCart')
                    await ctx.dispatch('quoteShipping')
    
                    const failed = results.filter((result) => result.data.result != 'complete')
                    if(failed.length != 0) {
                        ctx.dispatch('emit', {
                            type: 'error-notify',
                            value: 'Algunas existencias ya no estaban disponibles. Verifica tu carrito',
                            dontEmit: config.dontEmit
                        })
                    } else {
                        ctx.dispatch('emit', {
                            type: 'success-notify',
                            value: 'Carrito actualizado',
                            dontEmit: config.dontEmit
                        })
                    }
                } else {
                    ctx.dispatch('emit', {
                        type: 'error-notify',
                        value: 'No se pudo actualizar el carrito',
                        dontEmit: config.dontEmit
                    })
                }
            } catch (e) {
                console.log(e)

                ctx.dispatch('emit', {
                    type: 'error-notify',
                    value: 'No se pudo actualizar el carrito',
                    dontEmit: config.dontEmit
                })
                // --
            } finally {
                ctx.commit('SET_IS_AVAILABLE')
            }
        } else {
            ctx.dispatch('localcart/addItems', config, {root: true})
        }
    },

    addItem(ctx, config) {
        ctx.commit('SET_IS_BUSY')

        if(ctx.rootState.auth.user) {
            return this.$axios.post('/store/shopping-cart', {
                order_id: ctx.state.cart.id,
                name: config.item.product.name,
                product_id: config.item.product.id,
                variant_id: config.item.variant.id,
                qty: config.item.qty,
                price: config.item.variant.price
            })
            .then(response => {
                ctx.commit('SET_CART', response.data.shoppingCart)
                ctx.commit('SET_SHIPPING_METHODS', response.data.quoteShipping)

                ctx.dispatch('emit', {
                    type: 'success-notify',
                    value: 'Carrito actualizado',
                    dontEmit: config.dontEmit
                })

                return response.data
            })
            .catch(error => {
                ctx.dispatch('emit', {
                    type: 'error-notify',
                    value: 'No se pudo actualizar el carrito',
                    dontEmit: config.dontEmit
                })

                return Promise.reject(error)
            })
            .finally(() => ctx.commit('SET_IS_AVAILABLE'))
        } else {
            ctx.dispatch('localcart/addItem', config, {root: true})
                .finally(() => ctx.commit('SET_IS_AVAILABLE'))
        }
    },
    
    deleteItem(ctx, config) {
        ctx.commit('SET_IS_BUSY')

        if(ctx.rootState.auth.user) {
            return this.$axios.delete(`/store/shopping-cart/${ctx.state.cart.id}/${config.id}`)
                .then(response => {
                    ctx.commit('SET_CART', response.data.shoppingCart)
                    ctx.commit('SET_SHIPPING_METHODS', response.data.quoteShipping)

                    ctx.dispatch('emit', {
                        type: 'success-notify',
                        value: 'Carrito actualizado',
                        dontEmit: config.dontEmit
                    })

                    return response.data
                })
                .catch(error => {
                    ctx.dispatch('emit', {
                        type: 'error-notify',
                        value: 'No se pudo actualizar el carrito',
                        dontEmit: config.dontEmit
                    })

                    return Promise.reject(error)
                })
                .finally(() => ctx.commit('SET_IS_AVAILABLE'))
        } else {
            ctx.dispatch('localcart/deleteItem', config, {root: true})
                .finally(() => ctx.commit('SET_IS_AVAILABLE'))
        }
    },

    setBillingAddress(ctx, config) {
        ctx.commit('SET_IS_BUSY')

        return this.$axios.put('/store/shopping-cart/set-billing-address', {
            order_id: ctx.state.cart.id,
            address_id: config.address_id
        })
        .then(response => {
            ctx.commit('SET_CART', response.data.shoppingCart)
            ctx.commit('SET_SHIPPING_METHODS', response.data.quoteShipping)

            ctx.dispatch('emit', {
                type: 'success-notify',
                value: 'Carrito actualizado',
                dontEmit: config.dontEmit
            })

            return response
        })
        .catch(error => {
            ctx.dispatch('emit', {
                type: 'error-notify',
                value: 'No se pudo actualizar el carrito',
                dontEmit: config.dontEmit
            })

            return Promise.reject(error)
        })
        .finally(() => ctx.commit('SET_IS_AVAILABLE'))
    },

    setShippingAddress(ctx, config) {
        ctx.commit('SET_IS_BUSY')
        
        return this.$axios.put('/store/shopping-cart/set-shipping-address', {
            order_id: ctx.state.cart.id,
            address_id: config.address_id
        })
        .then(response => {
            ctx.commit('SET_CART', response.data.shoppingCart)
            ctx.commit('SET_SHIPPING_METHODS', response.data.quoteShipping)

            ctx.dispatch('emit', {
                type: 'success-notify',
                value: 'Carrito actualizado',
                dontEmit: config.dontEmit
            })

            return response
        })
        .finally(() => ctx.commit('SET_IS_AVAILABLE'))
    },

    setShippingMethod(ctx, config) {
        return this.$axios.put('/store/shopping-cart/set-shipping-method', {
            order_id: ctx.state.cart.id,
            carrier_id: config.carrier_id
        })
        .then(response => {
            ctx.commit('SET_CART', response.data.shoppingCart)
            ctx.commit('SET_SHIPPING_METHODS', response.data.quoteShipping)

            ctx.dispatch('emit', {
                type: 'success-notify',
                value: 'Carrito actualizado',
                dontEmit: config.dontEmit
            })
        })
    },

    confirm(ctx, config) {
        ctx.commit('SET_IS_BUSY')

        return this.$axios.put('/store/shopping-cart/confirm', {
            ...config,
            order_id: ctx.state.cart.id
        })
        .then(response => {
            ctx.commit('SET_CART', null)
            ctx.commit('SET_ORDER_CONFIRMED', response.data)

            ctx.dispatch('init')

            ctx.dispatch('emit', {
                type: 'success-notify',
                value: 'Pedido confirmado',
                dontEmit: config.dontEmit
            })

            return response.data
        })
        .catch(error => {
            ctx.commit('SET_ORDER_CONFIRMED', null)

            ctx.dispatch('emit', {
                type: 'error-notify',
                value: error.response.data.msg ?? 'No se pudo confirmar el pedido',
                dontEmit: config.dontEmit
            })
            
            return Promise.reject(error)
        })
        .finally(() => ctx.commit('SET_IS_AVAILABLE'))
    },

    async payWithPaypal(ctx, config) {
        try {
            const response = await this.$axios.post(`/paypal/generate/${config.order.id}`, {})
            ctx.commit('SET_PAYMENT_URL', response.data.url)
            // ctx.commit('SET_CART', null);
            // ctx.commit('SET_ORDER_CONFIRMED', response.data);
        } catch(e) {
            console.log(e)
            // ctx.commit('SET_ORDER_CONFIRMED', null);

            ctx.dispatch('emit', {
                type: 'error-notify',
                value: 'No se pudo iniciar el pago',
                dontEmit: config.dontEmit
            })
        }
    },
    async payWithWebPayPlus(ctx, config) {
        try {
            const response = await this.$axios.post(`/webpay-plus/generate/${config.order.id}`, {})
            ctx.commit('SET_PAYMENT_URL', response.data.url)
            // ctx.commit('SET_CART', null);
            // ctx.commit('SET_ORDER_CONFIRMED', response.data);
        } catch(e) {
            console.log(e)
            // ctx.commit('SET_ORDER_CONFIRMED', null);

            ctx.dispatch('emit', {
                type: 'error-notify',
                value: 'No se pudo iniciar el pago',
                dontEmit: config.dontEmit
            })
        }
    },
    setPaymentMethod(ctx, method) {
        ctx.commit('SET_PAYMENT_METHOD', method)
    }, 

    // Qty form
    setQtyFormItems(ctx, items) {
        ctx.commit('SET_QTY_FORM_ITEMS', items)
    },
    updateQtyFormItem(ctx, config) {
        ctx.commit('UPDATE_QTY_FORM_ITEM', config)
    }
}


export const getters = {
    hasShoppingCart(state) {
        return state.cart != null;
    },
    getShoppingCart(state) {
        return state.cart;
    },
    getItemCount(state, getters, globalState, globalGetters) {
        if(globalState.auth.user) {
            if(state.cart == null) { return 0; }
        
            const items = state.cart.items.filter(item => _.get(item, 'product.type') != 'service' && _.get(item, 'product.type') != 'consu')
            let count = 0
            for(let i = 0; i < items.length; i++) {
                count += items[i].product_uom_qty
            }
            
            return count
        }

        return globalGetters['localcart/getItemCount']
    },
    getShippingMethods(state) {
        return state.shippingMethods;
    },
    getPaymentMethods(state) {
        return state.paymentMethods;
    },
    getOrderConfirmed(state) {
        return state.orderConfirmed;
    },

    // Qty form
    getQtyFormItems(state) {
        return state.qtyFormItems;
    },
    getPaymentUrl(state) {
        return state.paymentUrl
    },

    getSelectedShippingAddress(state, getters, globalState) {
        let partner_shipping_id = _.get(state, 'cart.partner_shipping_id.0', null)
        let addresses = globalState.identity.addresses
        //let addresses = globalState.identity.addresses.filter(address => address.type == 'delivery')

        return addresses.find(address => address.id == partner_shipping_id)
    },

    getSelectedInvoiceAddress(state, getters, globalState) {
        let partner_invoice_id = _.get(state, 'cart.partner_invoice_id.0', null)
        let addresses = globalState.identity.addresses
        //let addresses = globalState.identity.addresses.filter(address => address.type == 'invoice')

        return addresses.find(address => address.id == partner_invoice_id)
    },

    getSelectedShippingMethod(state) {
        let carrier_id = _.get(state, 'cart.carrier_id.0', null)
        let shippingMethods = _.get(state, 'shippingMethods', [])

        return shippingMethods.find(sm => sm.carrier.id == carrier_id)
    },

    getShippingCosts(state, getters) {
        let selectedShippingMethod = getters.getSelectedShippingMethod

        return _.get(selectedShippingMethod, 'quote.price', 0)
    },

    getAmountDiscount(state) {
        return _.get(state, 'cart.amount_discount', 0)
    },

    getItemsSubtotal(state, getters, globalState, globalGetters) {
        if(globalState.auth.user) {
            return _.get(state, 'cart.items_subtotal', 0)
        }

        return globalGetters['localcart/getSubtotal']
    },

    getTax(state, getters, globalState, globalGetters) {
        if(globalState.auth.user) {
            return _.get(state, 'cart.amount_tax', 0)
        }

        return 0
    },

    getAmountTotal(state, getters, globalState, globalGetters) {
        if(globalState.auth.user) {
            return _.get(state, 'cart.amount_total', 0)
        }

        return globalGetters['localcart/getTotal']
    },

    getItems(state, getters, globalState, globalGetters) {
        if(globalState.auth.user) {
            return _.get(state, 'cart.items', [])
        }

        return globalGetters['localcart/getItems']
    },

    getServices(state, getters, globalState, globalGetters) {
        if(globalState.auth.user) {
            return _.get(state, 'cart.services', [])
        }

        return globalGetters['localcart/getServices']
    }
}
