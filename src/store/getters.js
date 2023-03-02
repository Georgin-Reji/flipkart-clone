export default {
	searchFilter(state) {
		return state.models.filter(model => { return model.mname.toLowerCase().includes(state.searchWord.toLowerCase()) });
	},
	displayAll(state) {
		return state.models
	},
	getProduct(state) {
		return state.models.find(product => {return product.mid == state.productId})
	}
}