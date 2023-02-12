<template>
  	<div>
		<div class="app" id="app">
		<navbar @search-filter="searchList" />
		</div>
	</div>
</template>

<script>
import navbar from '../components/navbar.vue'
export default {
	components: {
		navbar
	},
}
</script>
<style>

</style>