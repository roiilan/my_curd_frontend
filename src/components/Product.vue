<template>
  <div class="product-container">
        <div v-if="loaded">	   
            <div class="card">
              <form v-on:submit.prevent="onSubmit">

                <!-- <div class="card_filed">
                   <h3> Product ID: </h3>
                    <input
                      v-if="isEdit"
                      v-model="currProduct.productId"
                      type="text"
                      required
                    />
                    <p v-else> {{currProduct.productId}} </p>

                </div> -->

                <div class="card_filed">
                   <h3> Product Name: </h3>
                    <input
                      v-if="isEdit"
                      v-model="currProduct.productName"
                      type="text"
                      required
                    />
                    <p v-else> {{currProduct.productName}} </p>

                </div>

                <div class="card_filed">
                   <h3> Product Price: </h3> 
                    <input
                      v-if="isEdit"
                      v-model="currProduct.productPrice"
                      type="text"
                      required
                    />
                    <p v-else> ${{currProduct.productPrice}} </p>
                </div>

              <div v-if="isEdit" type="submit" class="add-btn" @click="saveProduct">
                  Add
              </div>

              </form>
            </div>
        </div>

        <div v-else> 
            <h3>Loading...</h3>
        </div>
  </div>
</template>

<script>
import { productService } from "../services/product.service.js";


export default {
  name: 'Product',
  props: {
    isEdit: Boolean
  },
  data () {
    return {
    	productId:'26256226',
    	productName: 'car',
    	productPrice: '15',
      productDescription:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, tenetur temporibus explicabo fugit, ipsa neque non eius porro quasi vero nulla aperiam voluptate. Voluptates, maxime! Doloribus et incidunt autem amet.',
    	
      loaded: true,
      // isEdit: false,

      currProduct: null,

    };
  },
    async created() { 
        const productId = this.$route.params.id;
        if (productId) {
          // this.currProduct = await this.$store.dispatch({
          //   type: "loadProduct",
          //   productId
          // });

        } else {
            this.currProduct = productService.getEmptyProduct();

            // this.isEdit = true;
        }
    },
        methods: {
        async saveProduct() {
          var res = await this.$store.dispatch({ type: "saveProduct", product: this.currProduct });
           
      },
    }, 
}
</script>
