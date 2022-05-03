<template>
  <div class="add-product-container">

    <div class="card">

      <div class="card-header">
        <div class="add-product-btn">
          <span> + </span>
          <span> Add product </span>
        </div>
      </div>


      <product
        :isEdit="true"
      />


      <!-- <div class="card-body">
        <form  v-on:submit.prevent="onSubmit">

            <div class="form-group">
              <h2>ID</h2>
              <input
                v-model="productData.product_id"
                type="text"
                required
              />
            </div>

            <div class="form-group">
              <label>Name</label>
              <input
                v-model="productData.product_name"
                type="text"
                required
              />
            </div>

            <div class="form-group">
              <label>Price</label>
              <input
                v-model="productData.product_price"
                type="text"
                required
              />
            </div>

            <div class="add-btn">
              <button type="submit"> Add </button>
            </div>

        </form>

      </div> -->

    </div>

  </div>
</template>

<script>
import product from '@/components/Product.vue'

// import db from '@/db'
export default {
  name: "Products",
  data() {
    return {
      editId: "",
      productData: {
        id: "",
        product_id: "",
        product_name: "",
        product_price: "",
      },
      editProductData: {
        id: "",
        product_id: "",
        product_name: "",
        product_price: "",
      },
      products: [],
      projs: [],
    };
  },
  // async created() {
  //   await this.getProducts();
  // },
  computed: {
    sortedProducts() {
      return this.products.slice().sort((a, b) => {
        return a.product_id - b.product_id;
      });
    },
  },
  methods: {
    // getProducts() {
    //   db.collection('products').get().then(querySnapshot =>{
    //     const products = []
    //     // querySnapshot.forEach((doc)=>{
    //     //   products.push(doc.data())
    //     // })
    //     const productsArray = []
    //     let i = 0
    //     querySnapshot.forEach((doc)=>{
    //       productsArray.push(doc.data())
    //       productsArray[i].id = doc.id
    //       products.push(productsArray[i])
    //       i++
    //     })
    //     // for(let key in querySnapshot.docs){
    //     //   productsArray.push(querySnapshot.docs[key].data())
    //     //   productsArray[key].id = querySnapshot.docs[key].id
    //     //   products.push(productsArray[key])
    //     // }
    //     this.products = products
    //   })
    // },
    getProducts() {
      window.scrollTo(0, 0);
      // this.toggleLoading()
      this.projs = this.$store.dispatch({
        type: "loadProjs",
      });
    },
    onSubmit() {
      // db.collection('products').add(this.productData).then(this.getProducts)
      this.productData.product_id = "";
      this.productData.product_name = "";
      this.productData.product_price = "";
    },
    // onDelete(product_id){
    //   db.collection('products').where('product_id', '==', product_id).get().then(querySnapshot =>{
    //     querySnapshot.forEach(doc=>{
    //       doc.ref.delete().then(this.getProducts)
    //     })
    //   })
    // }
    onDelete(id) {
      db.collection("products")
        .doc(id)
        .delete()
        .then((data) => {
          this.getProducts();
        });
    },
    onEdit(product) {
      this.editId = product.id;
      this.editProductData.product_id = product.product_id;
      this.editProductData.product_name = product.product_name;
      this.editProductData.product_price = product.product_price;
    },
    onCancel() {
      this.editId = "";
      this.editProductData.product_id = "";
      this.editProductData.product_name = "";
      this.editProductData.product_price = "";
    },
    onEditSubmit(id) {
      db.collection("products")
        .doc(id)
        .set(this.editProductData)
        .then(this.getProducts);
      this.editId = "";
      this.editProductData.product_id = "";
      this.editProductData.product_name = "";
      this.editProductData.product_price = "";
    },
  },
  components: {    
    product,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
.icon {
  margin-right: 10px;
}
.icon i {
  cursor: pointer;
}
</style>
