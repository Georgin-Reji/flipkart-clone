<template>
  <div class="navbar">
    <div class="logo">
      <a href=""><img class="fliplogo"
          src="	https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt=""></a>
      <div class="plusdiv">
        <a href=""><img class="pluslogo"
            src=" https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt=""></a>
        <span>Explore Plus</span>
      </div>
    </div>
    <div class="searchbox">
      <input v-model="search" @keyup="searchList" placeholder="Search items here" type="text">
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div class="cart">
      <span >Cart</span>
      <button @click="showCart"><i class="fa-2xl fa-solid fa-cart-shopping"></i>
</button>
    </div>


  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      search: '',
    }
  },
  computed: {
  },
  methods: {
    ...mapMutations(['toggleAddToCart']),
    showCart() {
      this.toggleAddToCart();
    },
    searchList(){
      this.$store.state.searchWord = this.search;
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}

.navbar {
  width: 100%;
  height: 56px;
  display: flex;
  background-color: #2455f4;
}

.searchbox {
  display: flex;
  justify-content: center;
  margin-left: 10rem;
  margin-top: 1rem;
  width: 30%;
  height: 30px;
  background-color: white;
  border-radius: 2px 0 0 0;
}

.searchbox input {
  outline: none;
  border: none;
}

.searchbox i {
  margin-left: 56%;
  padding: 5px;
  color: #2455f4;
  display: flex;
}

.logo {
  padding: 1rem;
}

.fliplogo {
  width: 4rem;
  height: 1rem;
}

.plusdiv {
  margin-top: -9px;
}

.plusdiv span {
  position: relative;
  font-size: 12px;
  color: #ffe500;
  font-family: Arial, Helvetica, sans-serif;
}

.pluslogo {
  width: 0.8rem;
  height: 0.8rem;
}

.cart {
  margin-top: 1rem;
  margin-left: 42rem;
}

.cart i {
  color: white;
}

.cart span {
  color: white;
  font-size: 1rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.cart button {
  background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
    height: 30px;
}
</style>
