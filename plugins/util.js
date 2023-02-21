import Vue from 'vue'

export default ({app}, inject) => {
    Vue.prototype.$util = {
        getSlug() {
            return app.context.route.path.split('/').pop()
        },

        clone(object) {
            return JSON.parse(JSON.stringify(object))
        },

        getMoneyFormat(number) {
            return '$' + (parseFloat(number)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        },
        
        isObject(item) {
            return (item && typeof item === 'object' && !Array.isArray(item));
        },

        mergeRecursive(target, ...sources) {
            if (!sources.length) return target
            
            const source = sources.shift()
    
            if (this.isObject(target) && this.isObject(source)) {
                for (const key in source) {
                    if (this.isObject(source[key])) {
                        if (!target[key]) Object.assign(target, { [key]: {} });
                        this.mergeRecursive(target[key], source[key]);
                    } else {
                        Object.assign(target, { [key]: source[key] });
                    }
                }
            }
    
            return this.mergeRecursive(target, ...sources);
        }
    }
}