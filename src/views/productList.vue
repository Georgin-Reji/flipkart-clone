<template >
	<div class="productsList">
		<div v-for="model in modelArray" :key="model.mid" class="productContainer">
			<div class="productImage">
				<img :src="model.image">
			</div>
			<div class="productInfo">
				<h3>{{ model.mname }}</h3>
				<ul>
					<li>{{ model.ram }} GB RAM</li>
					<li>{{ model.display }} inch Display</li>
					<li>{{ model.camera }} MP Rear cam </li>
					<li>{{ model.battery }} mAh</li>
					<li>{{ model.warranty }} Month Warranty</li>
				</ul>
			</div>
			<div class="productView">
				<h2>{{ model.price }}</h2>
				<div class="btnDetails">
					<router-link :to="{ name: 'cart'}"><button>Add to Cart</button></router-link>
					<router-link :to="{ name: 'productDisplay', params: { id: model.mid }}"><button>View Product</button></router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import listLayout from '../layouts/productListLayout.vue'
export default {
	computed: {
		modelArray(){
			if (this.$store.state.searchWord == null) {
				return this.$store.getters.displayAll
			}
			else {
				return this.$store.getters.searchFilter
			}
		}
	},
	created() {
		this.$emit(`update:layout`, listLayout)
	}
};
</script>

<style>
.productContainer {
	padding: 1rem;
	display: flex;
	border: 1px solid #f0f0f0;
	;
}
.productsList{
	width: 85%;
	float: right;
}
.productImage {
	width: 15%;
}

.productImage img {
	padding: 2rem;
	float: left;
	height: 14rem;
	width: 7rem;
}

.productInfo {
	padding: 1rem;
	margin: 0 auto;
	width: 70%;
}

.productView {
	float: right;
	width: 15%;
}

.btnDetails {
	display: flex;
	flex-direction: column;
}

.btnDetails button {
	margin: 1rem;
	width: 7rem;
	height: 2rem;
	border: none;
	border-radius: 3rem;
		background-color: #2455f4;
	color: white;
	cursor: pointer;
}
</style>