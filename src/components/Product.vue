<template>
  <div class="product-container">
        <div v-if="loaded">	   
            <div class="card-body">
                <p >ID: {{productId}}</p>
                <p >Product Name: {{productName}}</p>
                <p >Product Price: ${{productPrice}}</p>
                <!-- <router-link :to="'/'" class="btn btn-primary"> Back </router-link> -->
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
  data () {
    return {
    	productId:'26256226',
    	productName: 'car',
    	productPrice: '15',
        productDetails:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, tenetur temporibus explicabo fugit, ipsa neque non eius porro quasi vero nulla aperiam voluptate. Voluptates, maxime! Doloribus et incidunt autem amet.',
    	loaded: true,
    }    
  },
}
</script>
