<template>
    
  <div class="product-content">
    <div class="open-btn"> + </div>
       <h3>
         {{product.productName}} 
      </h3>
  </div> 


</template>

<script>


export default {
  props: ["product"],

  data() {
    return {

    }
  },

}

</script>