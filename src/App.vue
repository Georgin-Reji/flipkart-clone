<template>
	  <div id="app">
	<component :is="layout">
		<router-view :layout.sync="layout"/>
	</component>
  </div>
</template>

<script>
export default {
	name: 'App',
	data(){
		return {
			layout: `div`,
		};
	}
}
</script>

<style>
body {
	margin: 0px;
	padding: 0px;
	font-family: sans-serif;
}
</style>
