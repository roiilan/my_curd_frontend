<template>
  <div class="home">
    <Product />
  </div>
</template>

<script>
// import ProductDetails from '@/components/ProductDetails.vue'
import Product from '@/components/Product.vue'

export default {
  name: 'Home',
  components: {
    Product,
  }
}
</script>
