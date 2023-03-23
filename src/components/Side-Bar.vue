<template>
  <div class="sidebar">
	<h2>Filters</h2>
      <div class="form-container">
		<h3>Filter By Ram</h3>
        <div v-for="ranSize in ramList"  class="checkbox-container">
          <input @change="FilterRam(ranSize, $event)" type="checkbox"/>
          <label class="checkbox" >{{ ranSize }} GB</label>
        </div>
      </div>
      <div class="form-container">
		<h3>Filter By Brand</h3>
        <div v-for="brand in brandList" class="checkbox-container">
          <input @change="FilterBrand(brand, $event)" type="checkbox" />
          <label class="checkbox" for="apple">{{ brand }} </label>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';
export default {
computed: {
    ...mapState(["models",]),
  ramList(){
    const key = 'ram'
    return [...new Map(this.models.map(item => [item[key], item[key]])).values()]
  },
  brandList() {
    const key = 'brand'
    return [...new Map(this.models.map(item => [item[key], item[key]])).values()]
  }
},
methods: {
  ...mapGetters(["filteredProducts"]),
  ...mapMutations(["updateSelectedRam","updateSelectedBrand","removeSelectedRam","removeSelectedBrand"]),
  FilterRam(ramSize, e) {
    if(e.target.checked) {
      this.updateSelectedRam(ramSize)
      // this.$emit('checkedRam',{ message: filteredProducts })
      console.log(filteredProducts);
    }
    else {
      this.removeSelectedRam(ramSize)
    }
  },
  FilterBrand(brand, e){
    if(e.target.checked) {
    this.updateSelectedBrand(brand);
   }
   else {
    this.removeSelectedBrand(brand)
   }
 }
}
}
</script>

<style scoped>
.sidebar {
	float: left;
	width: 14%;
	border: 1px solid #f0f0f0;
}

</style>
