export default function (context) {
    if(context.$auth.user) {
        context.redirect({ name: 'index' })
    }
}