export default {
	// addToCart(state , modelId) {
	// 	const product = state.models.find(model => {
	// 		model.mid == modelId
	// 	})
	// store.cart.push(product)
	// }

	toggleAddToCart(state) {
		state.cartModel = !state.cartModel;
	}

}