<template>
	<div class="container">
		<div class="heading">
			<h1>Shopping Cart</h1>
		</div>
		<div class="table">
			<div class="table-header">
				 <div class="table-items"><h3>Product Details</h3></div>
				 <div class="table-items"><h3>Price</h3></div>
				 <div class="table-items"><h3>Quantity</h3></div>
				 <div class="table-items"><h3>Total</h3></div>
			</div>
			<div class="items">
				<div class="item details">
					<img src="https://rukminim1.flixcart.com/image/312/312/kg6vfrk0/mobile/h/v/j/mi-10t-pro-mzb07zein-original-imafwhb86qsrbgsj.jpeg?q=70" alt="">
				<h4>Redmi Note 10</h4>
				</div>
				<div class="item price">
					<h4>₹29,499</h4>
				</div>
				<div class="item quantity">
					<button><i class="fa-solid fa-plus"></i></button>
					<div class="quantity">
						<h4>1</h4>
					</div>
					<button><i class="fa-solid fa-minus"></i></button>
				</div>
				<div class="item total">
					<h4>₹29,499</h4>
				</div>
			</div>
		</div>

			<div class="cart-summery">
			<div class="cart cart-value">
				<p>Tax: ₹100 </p>
				<p>Delivery: ₹150 </p>
				<h4>Total Amount ₹29,749</h4>
			</div>
			<div class="cart cart-checkout">
				<button @click="closeModel" class="btn1">Cancel</button>
				<button class="btn2">Checkout</button>
			</div>
		</div>

	</div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
	methods: {
		...mapMutations(["toggleAddToCart"]),

		closeModel() {
			this.toggleAddToCart();
		}
	}
}
</script>

<style scoped>
body {

}
.container{
	 margin: 0;
	 padding: 0;
	 position: fixed;
	 right: 0%;
	 background: linear-gradient(to bottom right, #E3F0FF, #FAFCFF);
	 height: 100vh;
	 width: 73%;
	 height: 75%;
	 background-color: #ffffff;
	 border-radius: 20px;
	 box-shadow: 0px 25px 40px #1687d933;
	 overflow: auto;
}
.table-header{
	display: flex;
	flex-direction: row;
	border: 1px black solid;
}
.table-items{
	border: 1px rgb(235, 232, 232) solid;
	flex: 1;
}
.item img {
	height: 5rem;
	width: 2.5rem;
}
.items {
	display: flex;
	flex-direction: row;
}
.item {
	display: flex;
	border: 1px rgb(235, 232, 232) solid;
	flex: 1;
	justify-content: center;
	align-content: center;
	padding: 1rem 1rem 0 1rem;
}
.details {
	display: flex;
}
.details h4 {
	padding: 0.5rem;
}
.img {
	width: 1.5rem;
	height: 5rem;
}
.quantity {
	flex-direction: row;
}
.quantity button {
	margin: 1rem;
	height: 2rem;
}
.cart-value {
	float: right;
	padding: 2rem;
}
.cart-checkout {
	padding: 5rem 1rem 1rem 1rem;
	display: flex;
	gap: 3rem;

}
.cart-checkout button {
	width: 10rem;
	height: 3rem;
	border-radius: 3px;
	border-style: hidden;
	color: #ffffff;
}

.cart-checkout .btn1 {
	background-color: #2455f4;
}
.cart-checkout .btn2 {
	background-color: #FB641B;
}
</style>