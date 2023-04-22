import Vue from 'vue'
import _ from 'lodash'
import Observer from '../injects/observer'
import Google from '../injects/google'

Vue.prototype._ = _

export default async ({ app }, inject) => {
    Vue.prototype._ = _

    inject('observer', new Vue(Observer(app)))

    inject('google', new Vue(Google(app)))

    if(process.client) {
        await app.$google.setup()

        // let lastGeocode = app.$google.lastGeocode

        // if(! lastGeocode) {
        //     await app.$google.geocodeByCurrentDevicePosition()
        // }
    }
}