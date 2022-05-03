<template>
    <div class="product-list-container">
        <h1>
            products list:
        </h1>
        <marker-card
          v-for="(product, i) in products"
          :key="i"
          :product="product"
          :title="product.description? product.description.substring(0,80) +'... Click to read more!!': ''"
          class="product-preview-card"
          @click.native="openDetails(product.productId)"
        />
    </div>
</template>

<script>
import markerCard from '@/components/markerCard.vue'

export default {
  name: "productList",
  data() {
    return {
      isOpen: true,
      initialVal: null,
      limit: 0,
      skip: 0,
      unitScrollY: null,
      products: [
          {
            productId:'1',
            productName: 'car',
            productPrice: '15',
            productDescription:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, tenetur temporibus explicabo fugit, ipsa neque non eius porro quasi vero nulla aperiam voluptate. Voluptates, maxime! Doloribus et incidunt autem amet.',
            loaded: true,
          },
                {
            productId:'2',
            productName: 'book',
            productPrice: '17',
            productDescription:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, tenetur temporibus explicabo fugit, ipsa neque non eius porro quasi vero nulla aperiam voluptate. Voluptates, maxime! Doloribus et incidunt autem amet.',
            loaded: true,
          },
                {
            productId:'3',
            productName: 'laptop',
            productPrice: '20',
            productDescription:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, tenetur temporibus explicabo fugit, ipsa neque non eius porro quasi vero nulla aperiam voluptate. Voluptates, maxime! Doloribus et incidunt autem amet.',
            loaded: true,
          },
      ]
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

    // async loadProducts() {
    //   const products = await this.$store.dispatch({
    //     type: "loadProducts",
    //     limit: this.limit,
    //     skip: this.skip
    //   });
    //   if (products.length < this.limit) this.limit = 0;
    // },
    loadMoreProduct() {
      this.skip++;
      this.limit = 4;
      this.loadProducts();
    }
  },
  components: {
    markerCard,
  }
};
</script>
