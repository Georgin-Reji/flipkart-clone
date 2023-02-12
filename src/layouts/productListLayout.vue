<template>
	<div>
		<div class="app" id="app">
		<navbar @search-filter="searchList" />
			<div class="wrapper">
				<sidebar></sidebar>
			</div>
		</div>
	</div>
</template>

<script>
import navbar from '../components/navbar.vue'
import sidebar from '../components/Side-Bar.vue'
export default {
	components: {
		navbar,
		sidebar
	},
}
</script>

<style>

</style>