const _ = require("lodash")

export const state = () => ({
    order: null,
    orders: [],
    pdfDocument: null,
    paymentResponse: null,
    isBusy: false
})

function stateText(state) {
    switch(state) {
        case 'sale':
            return 'Pedido';
            break;
        case 'cancel':
            return 'Cancelado';
            break;
    }
}

function paymentStatusText(state) {
    switch(state) {
        case 'unpaid':
            return 'Sin pago';
            break;
        case 'paid':
            return 'Pagado';
            break;
        case 'cancelled':
            return 'Cancelado';
            break;
    }
}

function paymentMethodText(state) {
    switch(state) {
        case 'unpaid':
            return 'Sin pago';
            break;
        case 'cd_card':
            return 'Tarjeta Crédito/Débito';
            break;
        case 'electronic_transfer':
            return 'Transferencia bancaria';
            break;
        case 'account_deposit':
            return 'Depóstio bancario';
            break;
        case 'cash':
            return 'Efectivo';
            break;
        case 'paypal':
            return 'Paypal';
            break;
    }
}


function shippingStatusText(state) {
    switch(state) {
        case 'pending':
            return 'Pendiente';
            break;
        case 'sent':
            return 'Enviado';
            break;
        case 'delivered':
            return 'Entregado';
            break;
    }
}

export const mutations = {
    SET_ORDERS(state, orders) {
        state.orders = orders.map((order) => {
            return {
                ...order,
                state_label: stateText(order.state),
                payment_label: paymentStatusText(order.payment_status),
                payment_method_label: paymentMethodText(order.payment_method),
                shipping_label: shippingStatusText(order.shipping_status),
            }
        })
    },
    SET_ORDER(state, order) {
        order.items = order.items.map((item) => {
        
            if(item.picture == null 
                && item.product_pictures.length != 0) {
                item.picture = item.product_pictures[0];
            }

            return item;
        })

        /*
        order.services = order.items.filter((item) => {
            return _.get(item, 'product.type') == 'service'
        })

        order.items = order.items.filter((item) => {
            return _.get(item, 'product.type') != 'service'
        })
        */

        order.services = order.items.filter(item => _.get(item, 'product.type') == null)
            
    
        order.items = order.items.filter(item => _.get(item, 'product.type') == 'product')

        order.services_subtotal = 0;
        for(let i = 0; i < order.services.length; i++) {
            order.services_subtotal += order.services[i].price_subtotal;
        }

        order.items_subtotal =  order.amount_undiscounted - order.services_subtotal;

        state.order = {
            ...order,
            state_label: stateText(order.state),
            payment_label: paymentStatusText(order.payment_status),
            payment_method_label: paymentMethodText(order.payment_method),
            shipping_label: shippingStatusText(order.shipping_status),
            can_be_payed: order.state == 'sale' && order.payment_status == 'unpaid'
        }
    },
    SET_PDF_DOCUMENT(state, value) {
        state.pdfDocument = value
    },

    SET_PAYMENT_RESPONSE(state, value) {
        state.paymentResponse = value
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
        if(process.client) {
            this._vm.$root.$nuxt.$emit(
                payload.type,
                payload.value
            )
        }
    },

    loadOrders(ctx) {
        return this.$axios.get('/store/order')
            .then(orders => {
                ctx.commit('SET_ORDERS', orders)
                return orders
            })
            .catch(error => {
                ctx.commit('SET_ORDERS', [])
                return Promise.reject(error)
            })
    },

    getOrder(ctx, config) {
        return this.$axios.get(`/store/order/${config.order_id}`)
            .then(order => {
                ctx.commit('SET_ORDER', order)
                return order
            })
            .catch(error => {
                ctx.dispatch('emit', {
                    type: 'error-notify',
                    value: 'No se pudo obtener el pedido'
                })
                
                return Promise.reject(error)
            })
    },
    
    async generatePdfDocument({ commit, statetch}, config) {
        try {

            const document = await this.$axios.post(`/store/download-${config.method}-payment-document`, { data: config.data });
            console
            if(document.status == 'success') {
                commit('SET_PDF_DOCUMENT', document);
            } else {
                commit('SET_PDF_DOCUMENT', null);
                config.$nuxt.$emit('error-notify', 'No se pudo generar documento. Intente mas tarde.');
            }
            
        } catch(e) {
            commit('SET_PDF_DOCUMENT', null)
            config.$nuxt.$emit('error-notify', 'No se pudo generar documento. Intente mas tarde.');
        }
    },
    async generateStorePaymentDocument({ dispatch }, config) {
        try {
            await dispatch('generatePdfDocument', {
                $nuxt: config.$nuxt,
                method: 'store',
                data: config.data
            });
        } catch(e) {
            console.log(e);
        }
    },
    async generateBankPaymentDocument({ dispatch }, config) {
        try {
            await dispatch('generatePdfDocument', {
                $nuxt: config.$nuxt,
                method: 'bank',
                data: config.data
            });
        } catch(e) {
            console.log(e);
        }
    }
}

export const getters = {
    getOrders(state) {
        return state.orders
    },
    getOrder(state) {
        return state.order
    },
    getItemCount(state) {
        
        if(state.order == null) { return 0; }
        
        let count = 0;
        for(let i = 0; i < state.order.items.length; i++) {
            count += state.order.items[i].product_uom_qty;
        }
        
        return count;
    },
    getPdfDocument(state) {
        return state.pdfDocument
    }
}
