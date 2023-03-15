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
        },

        getLocation() {
            return `${app.$config.WEB_URL}${app.context.route.fullPath}`
        },







        getVariantFormat(variant) {
            return variant.config.map(c => c.values[0].name).join('/')
        },

        getBase64(file) {
            return new Promise((success, error) => {
                let reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = function () {
                    success(reader.result.split('data:image/png;base64,')[1])
                }
                reader.onerror = function (e) {
                    error(null)
                }  
            })
        },

        getFormattedDate(dateString, type = 1) {
            let date = new Date(dateString)
            let formatted = ''

            switch (type) {
                case 1:
                    formatted = date.toLocaleDateString('es-MX', {day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'})
                break

                case 2:
                    formatted = date.toLocaleDateString('es-MX', {day: 'numeric', month: 'long', timeZone: 'UTC'})
                break
            }

            return formatted
        }
    }
}