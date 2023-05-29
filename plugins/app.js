import Vue from 'vue'
import _ from 'lodash'
import Util from '../injects/util'
import Authentication from '../injects/authentication'
import Observer from '../injects/observer'
import Google from '../injects/google'

Vue.prototype._ = _

export default async ({ app }, inject) => {
    Vue.prototype._ = _

    inject('util', new Vue(Util(app)))
    inject('authentication', new Vue(Authentication(app)))
    inject('observer', new Vue(Observer(app)))
    inject('google', new Vue(Google(app)))
}