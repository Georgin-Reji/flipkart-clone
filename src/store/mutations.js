export default {
	addToCart(state , modelId) {
		const product = state.models.find(model => model.mid === modelId)
				state.cart.push({
					id:product.mid,
					mname:product.mname,
					image:product.image,
					price:product.price,
					quantity: 1,
					total:product.price
				})
	},

	toggleAddToCart(state) {
		state.cartModel = !state.cartModel;
	},
	quantityIncrement(state, modelId) {
		const product = state.cart.find(item => item.id === modelId)
		product.quantity += 1;
		product.total = product.price*product.quantity;
	},
	quantityDecrement(state, modelId) {
		const product = state.cart.find(item => item.id === modelId)
		if (product.quantity > 1) {
			product.quantity -= 1;
			product.total = product.total - product.price
		}
	},
	removeItem(state, modelId) {
		const product = state.cart.findIndex(item => item.id === modelId)
		state.cart.splice(product,1)
	},
	updateSelectedRam(state, payload) {
		state.selectedFilters.ram.push(payload)
	},
	removeSelectedRam(state, payload){
		state.selectedFilters.ram.splice(state.selectedFilters.ram.findIndex(ram => ram === payload) , 1)
	},
	updateSelectedBrand(state, payload) {
		state.selectedFilters.brand.push(payload)
	},
	removeSelectedBrand(state, payload){
		state.selectedFilters.brand.splice(state.selectedFilters.brand.findIndex(brand => brand === payload) , 1)
	},

}