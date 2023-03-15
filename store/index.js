export const actions = {
    async nuxtServerInit(
        { /*commit, state,*/ dispatch },
        {$auth}
    ) {
        await dispatch('products/loadCategories')

        await dispatch('products/loadBrands')

        await dispatch('identity/loadInitialData')

        await dispatch('cart/init')

        if($auth.user) {
            await dispatch('identity/loadAddresses')
        }
    }
}