<template>
  	<div>
		<div class="app" id="app">
		<navbar/>
		</div>
		<cartModel v-if="cartModel" />
		<slot/>
	</div>
</template>

<script>
import navbar from '../components/navbar.vue'
import cartModel from '../components/cartModel.vue'
import { mapState } from 'vuex'
export default {
	components: {
		navbar,
		cartModel
	},
	computed: {
		...mapState(["cartModel"])
	}
}
</script>
<style>

</style>