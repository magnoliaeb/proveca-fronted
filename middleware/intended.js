export default function (context) {
    if(! context.$auth.user) {
        context.$cookies.set(
            'intended',
            context.$util.getLocation()
        )

        context.redirect({ name: 'login' })
    }
}