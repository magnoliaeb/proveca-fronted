export default function ({ app, $axios, redirect }) {
    $axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

    $axios.onRequest(config => {
        console.log('Making request to ' + config.url)
        // console.log(config.data)
    })

    $axios.onResponse(response => {
        // if(['/auth/profile'].indexOf(response.config.url) != -1) {
        //     return response;
        // }

        if(
            process.client
            && app.$auth.check().valid
        ) {
            app.$auth.refreshTokens()
        }

        return response.data;
    })

    $axios.onError(error => {
        console.log({
            status: error.response.status,
            statusText: error.response.statusText,
            data: error.response.data,
        });
        console.log('============')
    })
}