export default app => ({
    methods: {
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
            return `${process.env.VUE_APP_WEBURL}${app.context.route.fullPath}`
        },







        getVariantFormat(variant) {
            if(variant && Boolean(variant.config)) {
                return variant.config
                    .map(c => c.values[0].name)
                    .join('<br>')
            }

            return null
        },

        getVariantFormat2(variant) {
            if(variant && Boolean(variant.config)) {
                return variant.config
					.map(c => `${c.name}<br>${c.values[0].name}<br>`)
					.join('<br>')
            }

            return null
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
        },

        urlAlert() {
            if(process.client && app.context.route.query.alert_body) {
                let title = app.context.route.query.alert_title
                    ? app.context.route.query.alert_title
                    : ''

                let type = app.context.route.query.alert_type
                    ? app.context.route.query.alert_type
                    : 'success'

                this.$swal(
                    title,
                    app.context.route.query.alert_body,
                    type
                )
            }
        },

        //  base_url
        //  subfolders
        //  params
        generateUrl(data) {
            let base_url = data.base_url.endsWith('/')
                ? data.base_url.slice(0, -1)
                : data.base_url

            let subfolders = data.subfolders
                ? (
                    data.subfolders.startsWith('/')
                        ? data.subfolders.slice(1)
                        : data.subfolders
                )
                : ''
            
            let params = data.params
                    ? data.params
                    : {}

            const url = new URL(`${base_url}/${subfolders}`)
            
            for (const key in params) {
                url.searchParams.append(key, params[key])
            }
        
            return url.toString()
        }
    },

    created() {
        this.urlAlert()
    }
})