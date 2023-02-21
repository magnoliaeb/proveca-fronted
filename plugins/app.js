import Vue from 'vue'
import _ from 'lodash'
import ApiBanner from '../api/banner'
import ApiProduct from '../api/product'
import ApiCategory from '../api/category'
import ApiBrand from '../api/brand'
import ApiNewsletter from '../api/newsletter'
import ApiDistributor from '../api/distributor'
import ApiContact from '../api/contact'
import ApiCart from '../api/cart'
import ApiInvoice from '../api/invoice'
import ApiAuth from '../api/auth'
import ApiAddress from '../api/address'
import ApiOrder from '../api/order'
import ApiPost from '../api/post'

import AppNewsletter from '../app/newsletter'
import AppCart from '../app/cart'
import AppInvoice from '../app/invoice'
import AppAuth from '../app/auth'
import AppAddress from '../app/address'
import AppOrder from '../app/order'

Vue.prototype._ = _

export default async ({ app }, inject) => {
    inject('api', {
        $banner: new Vue(ApiBanner(app)),
        $product: new Vue(ApiProduct(app)),
        $post: new Vue(ApiPost(app)),
        $category: new Vue(ApiCategory(app)),
        $brand: new Vue(ApiBrand(app)),
        $newsletter: new Vue(ApiNewsletter(app)),
        $distributor: new Vue(ApiDistributor(app)),
        $contact: new Vue(ApiContact(app)),
        $cart: new Vue(ApiCart(app)),
        $invoice: new Vue(ApiInvoice(app)),
        $auth: new Vue(ApiAuth(app)),
        $address: new Vue(ApiAddress(app)),
        $order: new Vue(ApiOrder(app))
    })

    inject('app', {
        $newsletter: new Vue(AppNewsletter(app)),
        $cart: new Vue(AppCart(app)),
        $invoice: new Vue(AppInvoice(app)),
        $auth: new Vue(AppAuth(app)),
        $address: new Vue(AppAddress(app)),
        $order: new Vue(AppOrder(app))
    })
    
    app.$axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    app.$axios.setToken(
        app.store.$cookies.get('auth_token'),
        'Bearer'
    )

    inject('observer', Vue.observable({
        windowWidth: 0
    }))

    if(process.client) {
        app.$observer.windowWidth = window.innerWidth
        
        window.addEventListener('resize', () => {
            app.$observer.windowWidth = window.innerWidth
        })
    }
}