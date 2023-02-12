<template >
	<div class="productsList">
		<div v-for="model in models" :key="model.mid" class="productcontainer">
			<div class="productImage">
				<img :src="model.mimage">
			</div>
			<div class="productInfo">
				<h3>{{ model.mname }}</h3>
				<ul>
					<li>{{ model.ram }} GB RAM</li>
					<li>{{ model.display }} inch Display</li>
					<li>{{ model.camera }} MP Rear cam </li>
					<li>{{ model.battery }} mAh</li>
					<li>{{ model.warrenty }} Month Warranty</li>
				</ul>
			</div>
			<div class="productView">
				<h2>{{ model.price }}</h2>
				<div class="btnDetails">
					<router-link :to="{ name: 'cart'}"><button>Add to Cart</button></router-link>
					<router-link :to="{ name: 'productDisplay'}"><button>View Product</button></router-link>
				</div>
				<!-- <router-view></router-view> -->
			</div>
		</div>
	</div>

</template>

<script>
export default {
	props: {
		models: {
			type: Array
		}
	},
};
</script>

<style>
.productcontainer {
	padding: 1rem;
	display: flex;
	border: 1px solid #f0f0f0;
	;
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