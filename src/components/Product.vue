<template>
  <div class="product-container">
        <div v-if="loaded">	   
            <div class="card">
                <div class="card_filed"> <h3>ID:</h3> <p>{{productId}}</p> </div>
                <div class="card_filed"> <h3>Product Name: </h3> <p> {{productName}} </p></div>
                <div class="card_filed"> <h3>Product Price:</h3> <p> ${{productPrice}} </p> </div>
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
      productDescription:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, tenetur temporibus explicabo fugit, ipsa neque non eius porro quasi vero nulla aperiam voluptate. Voluptates, maxime! Doloribus et incidunt autem amet.',
    	loaded: true,
    }    
  },
}
</script>
