const SORT_METHOD_STOCK_HL = 1;
const SORT_METHOD_STOCK_LH = 2;
const SORT_METHOD_PRICE_HL = 3;
const SORT_METHOD_PRICE_LH = 4;

export const state = () => ({
    drawerFilter: false,
    showCart: false,
    showLogin: false,
    showMenu: false,
    showSearch: false,
    catalogMode: false,
    
    brands: [],
    category: [],
    product: null,
    singleProduct: null,
    relatedProducts: [],
    foundProducts: [],

    categories: [],
    categoriesMenu: [],
    products: [],
    topProducts: [],
    featuredProducts: [],
    sortMethod: 1,
    
    // -- filters
    sortOptions: [
        {
            id: SORT_METHOD_STOCK_HL,
            name: 'Mayor existencias primero',
        },
        {
            id: SORT_METHOD_STOCK_LH,
            name: 'Menor existencias primero',
        },
        {
            id: SORT_METHOD_PRICE_HL,
            name: 'Mayor precio primero',
        },
        {
            id: SORT_METHOD_PRICE_LH,
            name: 'Menor precio primero',
        }
    ],
    tags: [],
    selectedTags: [],

    attributes: [],
    selectedAttributes: [],

    // -- pagination
    endOfList: false,

    pdfDocument: null

})

export const mutations = {
    SET_DRAWERFILTER(state, value) {
        state.drawerFilter = value
    },
    SET_SHOWCART(state, value) {
        state.showCart = value
    },
    SET_SHOWLOGIN(state, value) {
        state.showLogin = value
    },
    SET_SHOWMENU(state, value) {
        state.showMenu = value
    },
    SET_SHOWSEARCH(state, value) {
        state.showSearch = value
    },
    SET_FOUND_PRODUCTS(state, value) {
        state.foundProducts = value
    },
    SET_TOP_PRODUCTS(state, value) {
        state.topProducts = value
    },
    SET_FEATURED_PRODUCTS(state, value) {
        state.featuredProducts = value
    },
    SET_CATEGORY(state, value) {
        state.category = value
    },
    SET_PRODUCTS(state, products) {        
        switch(state.sortMethod)
        {
            case SORT_METHOD_STOCK_HL:
                state.products.sort((a,b) => { return b.stock - a.stock; })
                break;
            case SORT_METHOD_STOCK_LH:
                state.products.sort((a,b) => { return a.stock - b.stock; })
                break;
            case SORT_METHOD_PRICE_HL:
                state.products.sort((a,b) => { return b.max_price - a.max_price; })
                break;
            case SORT_METHOD_PRICE_LH:
                state.products.sort((a,b) => { return a.min_price - b.min_price; })
                break;
        }

        let tags = [];
        let attributes = [];
        for(let i = 0; i < products.length; i++) {
            tags.push(...products[i].tags);
            
            for(let j = 0; j < products[i].variants_attributes.length; j++) {
                const ii = attributes.findIndex((attribute) => attribute.id == products[i].variants_attributes[j].id);
                if(ii == -1) {
                    attributes.push(products[i].variants_attributes[j])
                } else {
                    for( let k = 0; k < products[i].variants_attributes[j].values.length; k++ ) {
                        const ij = attributes[ii].values.findIndex((value) => value.id ==  products[i].variants_attributes[j].values[k].id )
                        if(ij == -1) {
                            attributes[ii].values.push(products[i].variants_attributes[j].values[k]);
                        }
                    }
                }
            }
        }

        // set products
        state.products = products

        // Set tags
        state.tags = [...new Set(tags)].sort();

        // Set attributes
        state.attributes = attributes;

        // set pagination
        state.endOfList = products.length == 0 ? true : false;

    },
    TOGGLE_TAG_FILTER(state, tag) {
        const ii = state.selectedTags.findIndex((selectedTag) => selectedTag == tag);
        if(ii != -1) {
            state.selectedTags.splice(ii, 1);
        } else {
            state.selectedTags.push(tag);
        }
    },
    TOGGLE_ATTRIBUTE_FILTER(state, attribute) {
        const ii = state.selectedAttributes.findIndex((selectedAttribute) => selectedAttribute == attribute);
        if(ii != -1) {
            state.selectedAttributes.splice(ii, 1);
        } else {
            state.selectedAttributes.push(attribute);
        }
    },
    SET_PRODUCT(state, value) {
        state.product = value;
    },
    SET_CATALOG_MODE(state, value) {
        state.catalogMode = value;
    },
    SET_RELATED_PRODUCTS(state, value) {
        state.relatedProducts = value;
    },
    SET_CATEGORIES(state, categories) {
        state.categories = categories;
    },
    SET_CATEGORIES_MENU(state, categories) {
        state.categoriesMenu = categories;
    },
    SET_CATEGORY(state, category) {
        state.category = category;
    },
    SET_PDF_DOCUMENT(state, value) {
        state.pdfDocument = value
    },
    SET_SORT_METHOD(state, value) {
        state.sortMethod = parseInt(value)
    },
    APPLY_SORT(state) {
        switch(state.sortMethod)
        {
            case SORT_METHOD_STOCK_HL:
                state.products.sort((a,b) => { return b.stock - a.stock; })
                state.foundProducts.sort((a,b) => { return b.stock - a.stock; })
                break;
            case SORT_METHOD_STOCK_LH:
                state.products.sort((a,b) => { return a.stock - b.stock; })
                state.foundProducts.sort((a,b) => { return a.stock - b.stock; })
                break;
            case SORT_METHOD_PRICE_HL:
                state.products.sort((a,b) => { return b.max_price - a.max_price; })
                state.foundProducts.sort((a,b) => { return b.max_price - a.max_price; })
                break;
            case SORT_METHOD_PRICE_LH:
                state.products.sort((a,b) => { return a.min_price - b.min_price; })
                state.foundProducts.sort((a,b) => { return a.min_price - b.min_price; })
                break;
        }
    },
    SET_END_OF_LIST(state, value) {
        state.endOfList = value
    },
    SET_BRANDS(state, value) {
        state.brands = value
    }
}
export const actions = {
    drawerFilter({ commit }, value) {
        commit('SET_DRAWERFILTER', value)
    },
    showCart({ commit }, value) {
        commit('SET_SHOWCART', value)
    },
    showLogin({ commit }, value) {
        commit('SET_SHOWLOGIN', value)
    },
    showMenu({ commit }, value) {
        commit('SET_SHOWMENU', value)
    },
    showSearch({ commit }, value) {
        commit('SET_SHOWSEARCH', value)
    },
    applySort({ commit }, value) {
        commit('SET_SORT_METHOD', value)
        commit('APPLY_SORT')
    },

    // --
    loadBrands({ commit }) {
        return this.$axios.get(`/catalog/brands`)
            .then(brands => {
                commit('SET_BRANDS', brands)
                return brands    
            })
            .catch(error => {
                commit('SET_BRANDS', [])
                return Promise.reject(error)
            })
    },

    loadCategories({ commit }) {
        return this.$axios.get(`/catalog/categories-menu`)
        .then(items => {
            commit('SET_CATEGORIES', items)        
            items = items
                .map(category => {  
                    return {
                        ...category, 
                        items: (category.children != undefined ? category.children : []), 
                        active: false,
                        discount: category.featured
                    }
                })
                .filter(category => ! category.parent_id);

            commit('SET_CATEGORIES_MENU', items)
            return items
        })
        .catch(error => {
            commit('SET_CATEGORIES_MENU', [])
            return Promise.reject(error)
        })
    },
    
    _searchProducts({ commit }, query) {
        query = {
            brand_id: null,
            category_id: null,
            search: null,
            page: 1,
            featured: null,
            top: null,
            tags: null,
            attributes: null,
            min_price: null,
            max_price: null,
            ...query
        }

        return this.$axios.post(`/catalog/products`, {
            brand_id: query.brand_id,
            category_id: query.category_id,
            search: query.search,
            page: query.page,
            featured: query.featured,
            top: query.top,
            filters: {
                tags: query.tags,
                attributes: query.attributes,
            }
        })
        .then(response => {
            let data = response.map(product => {
                const min = product.variants.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
                const max = product.variants.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
                const price = parseFloat(product.price);

                const sum = product.variants.reduce((a,b) => { return { stock: a.stock + b.stock } });

                return {
                    ...product,
                    stock: sum.stock,
                    picture: (product.pictures.length != 0 ? product.pictures[0] : null),
                    min_price: min.price != 0 ? min.price : price,
                    max_price: max.price != 0 ? max.price : price,
                    has_discount: min.price != 0 && min.price < price,
                    price: price,
                    //tags: product.tags != null ? [...new Set(product.tags.split(',').map((tag) => tag.toLowerCase().trim()))] : []
                };
            });

            data = data.filter((product) => {
                return product.stock > 0 
                           && ( ! parseFloat(query.min_price) || product.min_price >= query.min_price )
                           && ( ! parseFloat(query.max_price) || product.max_price <= query.max_price )
            });

            commit('SET_FOUND_PRODUCTS', data)

            if(response.length == 0) {
                commit('SET_END_OF_LIST', true)
            } else {
                commit('SET_END_OF_LIST', false)
            }

            return data
        })
        .catch(error => {
            commit('SET_FOUND_PRODUCTS', [])
            return Promise.reject(error)
        })
    },

    loadFeaturedProducts({ commit, dispatch, getters }) {
        return dispatch('_searchProducts', {
            brand_id: null,
            category_id: null,
            search: null,
            page: 1,
            featured: true,
            top: null,
            filters: {
                tags: null,
                attributes: null,
            }
        })
        .then(products => {
            commit('SET_FEATURED_PRODUCTS', products)
            return products
        })
        .catch(error => {
            commit('SET_FEATURED_PRODUCTS', [])
            return Promise.reject(error)
        })
    },

    loadTopProducts({ commit, dispatch, getters }) {
        return dispatch('_searchProducts', {
            brand_id: null,
            category_id: null,
            search: null,
            page: 1,
            featured: null,
            top: true,
            filters: {
                tags: null,
                attributes: null,
            }
        })
        .then(products => {
            commit('SET_TOP_PRODUCTS', products)
            return products
        })
        .catch(error => {
            commit('SET_TOP_PRODUCTS', [])
            return Promise.reject(error)
        })
    },

    async getSingleProductById({ commit }, id) {
        try {
            // Get main data
            let data = await this.$axios.post(`/catalog/products/${id}`);
            const min = data.variants.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
            const max = data.variants.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
            const price = parseFloat(data.price);
            data = {
                ...data,
                picture: (data.pictures.length != 0 ? data.pictures[0] : null),
                min_price: min.price != 0 ? min.price : price,
                max_price: max.price != 0 ? max.price : price,
                has_discount: min.price != 0 && min.price < price,
                price: price,
                //tags: data.tags != null ? [...new Set(data.tags.split(',').map((tag) => tag.toLowerCase().trim()))] : []
            }

            commit('SET_SINGLE_PRODUCT', data);
        } catch(e) {
            commit('SET_SINGLE_PRODUCT', null);
        }
    },

    async getProductById({ commit }, id) {
        try {
            // Get main data
            let data = await this.$axios.post(`/catalog/products/${id}`);
            const min = data.variants.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
            const max = data.variants.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
            const price = parseFloat(data.price);

            data = {
                ...data,
                picture: (data.pictures.length != 0 ? data.pictures[0] : null),
                min_price: min.price != 0 ? min.price : price,
                max_price: max.price != 0 ? max.price : price,
                has_discount: min.price != 0 && min.price < price,
                price: price,
                //tags: data.tags != null ? [...new Set(data.tags.split(',').map((tag) => tag.toLowerCase().trim()))] : []
            }

            commit('SET_PRODUCT', data);
            // Get related products
            try {
                if(data.category != null) {

                    commit('SET_CATEGORY', data.category);

                    let related = await this.$axios.post(`/catalog/products`, {
                        brand_id: null,
                        category_id: data.category.id,
                        search: null,
                        page: 1,
                        featured: null,
                        top: null,
                        filters: {
                            tags: null,
                            attributes: null,
                        }
                    });

                    related = related.filter((product) => product.id != data.id)

                    related = related.slice(0, 3).map((product) => {
                        const min = product.variants.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
                        const max = product.variants.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
                        const price = parseFloat(product.price);
                        return {
                            ...product,
                            picture: (product.pictures.length != 0 ? product.pictures[0] : null),
                            min_price: min.price != 0 ? min.price : price,
                            max_price: max.price != 0 ? max.price : price,
                            has_discount: min.price != 0 && min.price < price,
                            price: price,
                            //tags: product.tags != null ? [...new Set(product.tags.split(',').map((tag) => tag.toLowerCase().trim()))] : []
                        };
                    });   

                    commit('SET_RELATED_PRODUCTS', related);
                } else {
                    commit('SET_RELATED_PRODUCTS', []);
                    commit('SET_CATEGORY', null);
                }

            } catch(e) {
                commit('SET_RELATED_PRODUCTS', []);
            }

            return data

        } catch(e) {
            commit('SET_PRODUCT', null);
            commit('SET_RELATED_PRODUCTS', []);
        }
    },

    //  revisar
    searchProducts({ commit, dispatch, getters, state }, query) {
        return dispatch('_searchProducts', query)
        .then(products => {
            if(query.page == 1) {
                commit('SET_PRODUCTS', products)
            } else {
                if(products.length == 0) {
                    //commit('SET_END_OF_LIST', true)
                } else {
                    //commit('SET_END_OF_LIST', false)
                    commit('SET_PRODUCTS', [
                        ...state.products,
                        ...products
                    ])
                }
                
            }

            return products
        })
        .catch(error => {
            commit('SET_PRODUCTS', [])
            return Promise.reject(error)
        })
    },

    toggleCatalogMode({ commit, state }) {
        commit('SET_CATALOG_MODE', !state.catalogMode);
    },

    // -- filters
    toggleTagFilter({ commit, state }, tag) {
        commit('TOGGLE_TAG_FILTER', tag);
    },
    toggleAttributeFilter({ commit, state }, value_id) {
        commit('TOGGLE_ATTRIBUTE_FILTER', value_id);
    },
    async generatePdfCatalogDocument({ commit, state, }, config) {
        try {
            const data = state.products.map((product) => {
                const variants = product.variants
                                    .filter((variant) => variant.stock > 0)
                                    .map((variant) => {
                                        const labels = variant.config.map((attr) => attr.values.map((val) => val.name).join('/') );
                                        return {
                                            name: labels.join('. ')
                                        }
                                    })
                return {
                    name: product.name,
                    picture: product.picture.url,
                    variants
                }
            })

            const document = await this.$axios.post(`/catalog/download`, { data: { items: data } })
            
            if(document.status == 'success') {
                commit('SET_PDF_DOCUMENT', document)
            } else {
                commit('SET_PDF_DOCUMENT', null)
                config.$nuxt.$emit('error-notify', 'No se pudo generar el catálogo. Intente mas tarde.');
            }
            
        } catch(e) {
            commit('SET_PDF_DOCUMENT', null)
            config.$nuxt.$emit('error-notify', 'No se pudo generar el catálogo. Intente mas tarde.');
        }

    },
}

export const getters = {
    getDrawerFilter(state) {
        return state.drawerFilter;
    },
    getShowCart(state) {
        return state.showCart;
    },
    getShowLogin(state) {
        return state.showLogin;
    },
    getShowMenu(state) {
        return state.showMenu;
    },
    getShowSearch(state) {
        return state.showSearch;
    },
    getIsCatalogModeEnabled(state) {
        return state.catalogMode == true;
    },
    getTopProducts(state) {
        return state.topProducts;
    },
    getFeaturedProducts(state) {
        return state.featuredProducts;
    },
    getRelatedProducts(state) {
        return state.relatedProducts;
    },
    getProducts(state) {
        return state.products
    },
    getCategory(state) {
        return state.category;
    },
    getProduct(state) {
        return state.product
    },
    async getSingleProduct(state) {

        try {
            // Get main data
            let data = await this.$axios.get(`/catalog/products/${id}`);
            const min = data.variants.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
            const max = data.variants.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
            const price = parseFloat(data.price);
            data = {
                ...data,
                picture: (data.pictures.length != 0 ? data.pictures[0] : null),
                min_price: min.price != 0 ? min.price : price,
                max_price: max.price != 0 ? max.price : price,
                has_discount: min.price != 0 && min.price < price,
                price: price,
                //tags: data.tags != null ? [...new Set(data.tags.split(',').map((tag) => tag.toLowerCase().trim()))] : []
            }
            return data;
        } catch(e) {
            return null;
        }

        // return state.singleProduct
    },
    getFoundProducts(state) {
        return state.foundProducts;
    },

    // -- filters
    getTags(state) {
        return state.tags
    },
    getSelectedTags(state) {
        return state.selectedTags.filter((tag) => tag != 'no');
    },
    getAttributes(state) {
        return state.attributes
    },
    getSelectedAttributes(state) {
        return state.selectedAttributes
    },
    getCategories(state) {
        return state.categories
    },
    getBrands(state) {
        return state.brands
    },
    getCategoriesMenu(state) {
        return state.categoriesMenu
    },
    getSortOptions(state) {
        return state.sortOptions
    },

    // -- pagination
    getEndOfList(state) {
        return state.endOfList;
    },

    getPdfDocument(state) {
        return state.pdfDocument
    },

    getParentCategories(state) {
        return state.categories.filter(c => ! c.parent_id)
    },

    getFilteredBrands(state) {
        let filteredBrands = []

        state.products.forEach(product => {
            if(
                product.brand &&
                ! filteredBrands.find(brand => brand.id == product.brand.id)
            ) {
                filteredBrands.push(product.brand)
            }
        })

        return filteredBrands
    },

    getMinPrice(state) {
        return Math.min(...state.products.map(p => p.min_price))
    },

    getMaxPrice(state) {
        return Math.max(...state.products.map(p => p.max_price))
    }
}
