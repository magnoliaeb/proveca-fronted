import { Loader } from '@googlemaps/js-api-loader'

export default app => ({
    data() {
        return {
            loader: null,
            geocoder: null,
            loaded: false,
            currentDevicePosition: null,
            deviceGeocode: null,
            lastGeocode: null
        }
    },

    methods: {
        setup() {
            this.loader = new Loader({
                apiKey: app.$config.GOOGLE_MAPS_API_KEY,
                version: "weekly"
            })

            return this.loader.load()
                .then(google => {
                    this.geocoder = new google.maps.Geocoder()
                    this.loaded = true

                    return google
                })
        },

        getCurrentDevicePosition() {
            return new Promise((success, error) => {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        position => {
                            this.currentDevicePosition = position
                            success(position)
                        },
                        e => error(e)
                    )
                } else {
                    return Promise.reject({
                        message: 'No se puede obtener la ubicación'
                    })
                }
            })
        },

        geocodeByCurrentDevicePosition() {
            return this.getCurrentDevicePosition()
                .then(position => this.geocodeByCoords(
                    position.coords.latitude,
                    position.coords.longitude,
                    {
                        first: true,
                        customObject: true
                    }
                ))
                .then(geocode => {
                    this.deviceGeocode = geocode
                    return geocode
                })
        },

        geocodeByAddress(address, options = {}) {
            return this.geocode(
                {address: String(address)},
                options
            )
        },

        geocodeByCoords(lat, lng, options = {}) {
            let latLng = new google.maps.LatLng(
                parseFloat(lat),
                parseFloat(lng)
            )

            return this.geocodeByLatLng(latLng, options)
        },

        geocodeByLatLng(latLng, options = {}) {
            return this.geocode(
                {latLng: latLng},
                options
            )
        },

        geocode(config, options = {}) {
            return this.geocoder.geocode(config)
                .then(response => {
                    let results = response.results
                    let usingKey = options.usingKey ?? 'long_name'   //  (default) long_name | short_name
                    let single = options.single                      //  un valor de keys
                    let customObject = options.customObject          //  pasar como objeto para que aplique
                    let first = options.first
                    let keys = [
                        'street_number',
                        'route',
                        'sublocality_level_1', //sublocality
                        'locality',
                        'administrative_area_level_1',
                        'country',
                        'postal_code',
                        'lat',
                        'lng',
                        'formatted_address',
                    ]

                    if(! Boolean(results.length)) {
                        return Promise.reject({
                            message: 'No se encontraron resultados'
                        })
                    }

                    results = first
                        ? [results[0]]
                        : results


                    if(single) {
                        results = results.map(r => this.getResultValue(r, single, usingKey))
                    } else if(customObject) {
                        customObject = (typeof customObject == 'object')
                            ? customObject
                            : {}
                        //  aquí declararía opciones de configuración para el objeto

                        results = results.map(r => {
                            let newResult = {}

                            keys.forEach(key => newResult[key] = this.getResultValue(r, key, usingKey))

                            return newResult
                        })
                    }

                    results = first
                        ? results[0]
                        : results

                    this.lastGeocode = results

                    return results
                })
        },

        getResultValue(result, key, usingKey) {
            switch (key) {
                case 'lat':
                case 'lng':
                    return result.geometry.location[key]()
                break

                case 'formatted_address':
                    return result.formatted_address
                break
            
                default:
                    let component = result.address_components.find(c => c.types.includes(key))

                    return component
                        ? component[usingKey]
                        : null
                break
            }
        }
    }
})