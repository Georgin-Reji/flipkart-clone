<template>
  <div class="container-main">
    <div class="container-sub">
      <div class="image-container">
        <img :src='productDisplay.image'
          alt="">
      </div>
      <div class="container-product-details">
        <div class="container-product-heading">
          <h1>{{ productDisplay.mname }}</h1>
        </div>
        <div class="container-product-specs">
          <ul>
            <li><h2>₹{{productDisplay.price}}</h2></li>
            <li>{{ productDisplay.ram }} GB RAM</li>
            <li>{{ productDisplay.display }} inch Display</li>
            <li>{{ productDisplay.camera }} MP Rear cam </li>
            <li>{{ productDisplay.battery }} mAh</li>
            <li>{{ productDisplay.warranty }} Month Warranty</li>
          </ul>
        </div>
        <div class="container-product-discription">
          <h3>Description</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis soluta sequi aut atque, laboriosam,
            non illo ducimus ea fugit alias nulla minus autem dolores error quisquam voluptas, porro labore
            necessitatibus.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis soluta sequi aut atque,
            laboriosam, non illo ducimus ea fugit alias nulla minus autem dolores error quisquam voluptas, porro labore.
          </p>
        </div>
      </div>
    </div>
     <div class="container-button">
        <ul>
          <li><button class="btn btn-cart">BUY NOW</button></li>
          <li><button class="btn btn-buy">ADD TO CART</button></li>
        </ul>
      </div>
  </div>
</template>

<script>
import productViewLayout from '../layouts/productViewLayout.vue'
export default {
  created() {
    this.$emit(`update:layout`, productViewLayout)
  },
  beforeMount() {
    this.$store.state.productId = parseInt(this.$route.params.id)
  },
  computed: {
    productDisplay() {
      return this.$store.getters.getProduct
    }
  },
}
</script>

<style>
.container-sub {
  display: flex;
  flex-direction: row;
}

.image-container {
  display: flex;
  justify-content: center;
  height: 50%;
  width: 35%;
  /* background-color: aqua; */
  border: 1px solid #f0f0f0
}
.image-container img {
  margin-top: 2rem;
}
.container-product-details {
  padding: 2rem;
  border: 1px solid #f0f0f0;
  width: 50%;
}
.container-product-details li:nth-child(1){
  list-style: none;
  padding: 0;
}

li {
  padding: 0.3rem;
}
.container-button ul{
  display: flex;
  column-gap: 1rem;
}
.container-button li:nth-child(1) {
  border-radius: 2px;
  display: inline-block;
  list-style: none;
  background-color: #FF9F00;
}
.container-button li:nth-child(2) {
  border-radius: 2px;
  display: inline-block;
  list-style: none;
  background-color: #FB641B;
}
.btn {
  width: 12rem;
  font-weight: 600;
  height: 2.5rem;
  padding: 0.5rem 2rem;
  color: #f0f0f0;
  border-style: none;
  border-radius: 2px;
}
.btn-cart {
  background-color: #FF9F00;
}
.btn-buy {
  background-color: #FB641B;
}
</style>