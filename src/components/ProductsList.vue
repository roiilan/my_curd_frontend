<template>
    <div class="product-list-container">
        <h1>
            Products List:
        </h1>

      <addProduct/>


        <marker-card
          v-for="(product, i) in currProducts"
          :key="i"
          :product="product"
          :title="product.description? product.description.substring(0,80) +'... Click to read more!!': ''"
          class="product-preview-card"
          @click="openDetails(product.productId)"
        />
    </div>
</template>

<script>
import markerCard from '@/components/markerCard.vue'
import addProduct from '@/components/addProduct.vue'

export default {
  name: "productList",
  data() {
    return {
      isOpen: true,
    };
  },
  computed: {
    currProducts() {
      return this.$store.getters.currProducts;
    }
  },
  created() {
    window.scrollTo(0, 0);
  },
//   mounted() {

//     // window.addEventListener("scroll", this.handleScroll);

//     this.initialVal !== this.currProducts.length
//       ? (this.isOpen = false)
//       : this.toggleHero();
//   },
//   beforeDestroy() {
//     window.removeEventListener("scroll", this.handleScroll);
//   },
  methods: {

    openDetails(id) {
      this.$router.push("/product/" + id);
    },
    toggleHero() {
      this.isOpen = true;
    },

    async loadProducts() {
      const products = await this.$store.dispatch({
        type: "loadProducts",
        // limit: this.limit,
        // skip: this.skip
      });
    //   if (products.length < this.limit) this.limit = 0;
    },
    // loadMoreProduct() {
    //   this.skip++;
    //   this.limit = 4;
    //   this.loadProducts();
    // }
  },
  components: {
    markerCard,
    addProduct,
  }
};
</script>
