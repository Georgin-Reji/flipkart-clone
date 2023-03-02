<template>
  <div>
    <h1>This is cart</h1>
  </div>
</template>

<script>
import productViewLayout from '../layouts/productViewLayout.vue'
export default {
  created() {
		this.$emit(`update:layout`, productViewLayout)
	}
}
</script>

<style>

</style>