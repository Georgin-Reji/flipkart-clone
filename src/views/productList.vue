<template >
	<div class="productsList">
		<div class="sortContainer">
			<span>Sort By</span>
			<div class="sortType"> <a @click="sortHighLow">Price High to Low</a></div>
			<div class="sortType"><a @click="sortLowHigh">Price Low to High</a></div>
		</div>
		<div v-for="model in productList" :key="model.mid" class="productContainer">
			<div class="productImage">
				<img :src="model.image">
			</div>
			<div class="productInfo">
				<h3>{{ model.mname }}</h3>
				<ul>
					<li><i class="fa-solid fa-microchip"></i>{{ model.ram }} GB RAM</li>
					<li><i class="fa-solid fa-mobile"></i>{{ model.display }} inch Display</li>
					<li><i class="fa-solid fa-camera-retro"></i>{{ model.camera }} MP Rear cam </li>
					<li><i class="fa-solid fa-battery-full"></i>{{ model.battery }} mAh</li>
					<li><i class="fa-sharp fa-solid fa-screwdriver-wrench"></i>{{ model.warranty }} Month Warranty</li>
				</ul>
			</div>
			<div class="productView">
				<h2>{{ model.price }}</h2>
				<div class="btnDetails">
					<button @click="addItem(model)">Add to Cart</button>
					<router-link :to="{ name: 'productDisplay', params: { id: model.mid }}"><button>View Product</button></router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from 'vuex';
import listLayout from '../layouts/productListLayout.vue'
export default {
	data() {
		return {
			productList: []
		}
	},
	created() {
		this.$emit(`update:layout`, listLayout)
		this.productList = this.displayAll
	},
	computed: {
		...mapGetters(["getCartItem","displayAll","searchFilter","sortHighToLow","sortLowToHigh","filteredProducts"]),
		...mapState(["searchWord"]),
		filterProduct() {
			this.productList = this.selectedRAM
		}
	},
	watch: {
		searchResult() {
			this.getSearchItems(this.searchFilter)
		}
	},
	methods: {
		...mapMutations(["addToCart","quantityIncrement"]),
		getSearchItems(products) {
			this.productList = products
		},

		addItem(model) {
			if(this.getCartItem.includes(model)) {
				this.quantityIncrement(model.mid)
			}
			else{
				this.addToCart(model.mid);
			}
		},
		sortHighLow() {
			this.productList =  this.sortHighToLow
		},
		sortLowHigh() {
			this.productList =  this.sortLowToHigh
		}
	},
	prop:{
		selectedRAM:{
			type: Array,
			required: true
		}
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

.productInfo li {
	padding: 3px;
	list-style-type: none;
}
.productInfo i {
	padding-right: 5px;
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
.sortContainer {
	display: flex;
	flex-direction: row;
}
.sortType{
	padding-left: 2rem;
	cursor: pointer;
}
</style>