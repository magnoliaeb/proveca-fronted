export default function (context) {
    let pages = [
        'registro',
        'login',
        'recuperar-contrasena',
    ]

    if(pages.includes(context.route.name)) {
        if(context.$auth.user) {
            context.redirect({ name: 'index' })
        }
    }
}