import { productService } from '../services/product.service.js'

export default {
    state: {
        products: [],
        currProducts: [],
        productsCount: null
        // currProduct: null
    },
    getters: {
        products(state) {
            return state.products
        },
        currProducts(state) {
            return state.currProducts
        },
        currProduct(state){
            return state.product
        },
        productsCount(state){
            return state.productsCount
        }, 
  
    },
    mutations: {
        setProducts(state, { products }) {
            state.products = products
        },
        setCurrProducts(state, { products }) {
            state.currProducts = products
        },
        pushToCurrProducts(state, { products }){
            state.currProducts.push(...products)
        },
        setProductsCount(state, {productsCount}){
            state.productsCount = productsCount
        },
        setProduct(state, { product }) {
            state.currProduct = product
        },
        addProduct(state, { product }) {
            state.products.unshift(product)
        },
        updateProduct(state, { product }) {
            const idx = state.products.findIndex(currProduct => currProduct._id === product._id)
            state.products.splice(idx, 1, product)
        },
        removeProduct(state, { productId }) {
            const idx = state.products.findIndex(currProduct => currProduct._id === productId)
            state.products.splice(idx, 1)
        }
    },
   
    actions: {
        async loadProductsCount(context) {
            const productsCount = await productService.getProductsCount();
            context.commit({ type: 'setProductsCount' , productsCount })            
            return productsCount;
        },
        async loadProducts(context, { filterBy, limit, skip }) {
            const products = await productService.query(filterBy, limit, skip)
            if (skip > 0) {
                context.commit({ type: 'pushToCurrProducts', products })            
            }
            else if (limit || filterBy) {
                context.commit({ type: 'setCurrProducts', products })            
            }
            else context.commit({ type: 'setProducts', products })
            return products
        },

        async loadProduct(context, { productId }) {
            const product = await productService.getById(productId)
            // context.commit({type: 'setProduct', product})
            return product
        },
        async removeProduct(context, { productId }) {
            const msg = await productService.remove(productId)
            context.commit({ type: 'removeProduct', productId });
            await productService.changeProductsCount(-1)
            context.dispatch({ type: 'loadProductsCount'})
            return msg
        },
        async saveProduct(context, { product }) {
            const isEdit = !!product._id;
            const savedProduct = await productService.save(product)
            context.commit({
                type: (isEdit) ? 'updateProduct' : 'addProduct',
                product: savedProduct
            })
            if (!isEdit && savedProduct) {
                await productService.changeProductsCount(1)
                context.dispatch({ type: 'loadProductsCount'})
            }
            return savedProduct
        },
        async getFilteredProductHeader(context, { filter }) {
            const filteredProductsHeader = await productService.getHeaderObj(filter)
            return filteredProductsHeader;
        },
        async getProductById(context, { id }) {
            const product = await productService.getById(id)
            return product;
        }
    },
}