export default {
	searchFilter(state) {
		return state.models.filter(model => { return model.mname.toLowerCase().includes(state.searchWord.toLowerCase()) });
	},
	displayAll(state) {
		return state.models
	},
	getProduct(state) {
		return state.models.find(product => {return product.mid == state.productId})
	},
	getCartItem(state) {
		return state.cart
	},
	getTotal(state) {
		return state.cart.reduce((cartValue, item) => item.total + cartValue, 0);
	},
	sortHighToLow(state) {
		return state.models.sort((model1, model2) => model2.price - model1.price);
	},
	sortLowToHigh(state) {
		return state.models.sort((model1, model2) => model1.price - model2.price)
	},
	filteredProducts(state) {
		let filteredProducts = state.selectedFilters.ram ?  state.models.filter(model => model.ram === state.selectedFilters.ram) : state.models
		if (state.selectedFilters.brand) {
			filteredProducts = filteredProducts.filter(model => brand === state.selectedFilters.brand)
		  }
		return filteredProducts
	}
}