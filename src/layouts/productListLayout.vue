<template>
	<div>
		<navbar />
		<sidebar @checkedRam="onCheckedRam" />
		<cartModel v-if="cartModel" />
		<slot :selectedRAM="selectedRAM" />
		<mainFooter />
	</div>
</template>

<script>
import { mapState } from 'vuex'
import navbar from '../components/navbar.vue'
import sidebar from '../components/Side-Bar.vue'
import mainFooter from '../components/footer.vue'
import cartModel from '../components/cartModel.vue'
export default {
	data(){
		return {
			selectedRAM:[]
		}
	},
	methods:{
		onCheckedRam(list){
			this.selectedRAM = list;
		}
	},
	components: {
		navbar,
		sidebar,
		mainFooter,
		cartModel
	},
	computed: {
		...mapState(["cartModel"])
	}
}
</script>

<style scoped>
</style>