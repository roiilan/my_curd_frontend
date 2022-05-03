<template>
  <div class="product-container">
        <div v-if="loaded">	   
            <div class="card">
              <form v-on:submit.prevent="onSubmit">

                <div class="card_filed">
                   <h3> Product ID: </h3>
                    <input
                      v-if="isEdit"
                      v-model="editProduct.productId"
                      type="text"
                      required
                    />
                    <p v-else> {{productId}} </p>

                </div>

                <div class="card_filed">
                   <h3> Product Name: </h3>
                    <input
                      v-if="isEdit"
                      v-model="editProduct.productName"
                      type="text"
                      required
                    />
                    <p v-else> {{productName}} </p>

                </div>

                <div class="card_filed">
                   <h3> Product Price: </h3> 
                    <input
                      v-if="isEdit"
                      v-model="editProduct.productPrice"
                      type="text"
                      required
                    />
                    <p v-else> ${{productPrice}} </p>
                </div>

              <div v-if="isEdit" type="submit" class="add-btn" @click="addProduct">
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

      editProduct: {
        productId:'',
        productName: '',
        productPrice: '',
        productDescription:'',
      },

    };
  },
        methods: {
        async addProduct() {
          console.log("editProduct: ", this.editProduct.productId);
          var res = await this.$store.dispatch({ type: "saveProduct", product: this.editProduct });
          // console.log("res: ",res)
      }
    }, 
}
</script>
